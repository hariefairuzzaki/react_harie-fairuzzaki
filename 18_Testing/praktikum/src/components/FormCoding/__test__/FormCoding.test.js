import { render, screen, fireEvent } from "@testing-library/react";
import FormCoding from "../FormCoding";

describe("FormCodePage", () => {
  test("Renders FormPage labels", () => {
    render(<FormCoding />);

    const nameLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");
    const noPhoneLabel = screen.getByLabelText("No Handphone:");

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(noPhoneLabel).toBeInTheDocument();
  });

  test("Correct input text test", () => {
    const handleChange = jest.fn();

    render(<FormCoding value="" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText("Nama Lengkap:"), { target: { value: "Hello" } });
    fireEvent.change(screen.getByLabelText("Email:"), { target: { value: "Hello@gmail.com" } });
    fireEvent.change(screen.getByLabelText("No Handphone:"), { target: { value: "085912345678" } });

    expect(handleChange).tohaveBeenCalledTimes(1);
  });

  test("Incorrect input text test", () => {
    const onChange = jest.fn();

    render(<FormCoding value="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText("Nama Lengkap:"), { target: { value: "Hello123" } });
    fireEvent.change(screen.getByLabelText("Email:"), { target: { value: "Hello.gmail.com" } });
    fireEvent.change(screen.getByLabelText("No Handphone:"), { target: { value: "0812345" } });
    fireEvent.change(screen.getByLabelText("No Handphone:"), { target: { value: "081234567891011121314" } });

    expect(onChange).tohaveBeenCalledTimes(1);
  });

  test("Submit handle test", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Harie Fairuzzaki" } });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "harie@gmail.com" },
    });

    fireEvent.click(screen.getByText("Submit"));

    const namaLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");

    expect(namaLabel).toHaveValue("");
    expect(emailLabel).toHaveValue("");
  });

  test("incorrect submit handle test", async () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Harie123" } });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "harie.gmail.com" },
    });

    fireEvent.click(screen.getByText("Submit"));

    const namaLabel = screen.getByLabelText("Nama Lengkap:");
    const emailLabel = screen.getByLabelText("Email:");

    expect(namaLabel).toHaveValue("");
    expect(emailLabel).toHaveValue("");
  });
});
