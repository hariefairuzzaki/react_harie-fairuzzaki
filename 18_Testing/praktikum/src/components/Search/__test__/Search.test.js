import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Search from "../Search";

jest.mock("axios");

test("fetches stories from an API and dislay them", async () => {
  const stories = [
    { objectID: "1", title: "Hello" },
    { objectID: "2", title: "React" },
  ];

  axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

  render(<Search />);

  userEvent.click(screen.getByRole("button"));

  const items = await screen.findAllByRole("listitem");

  await expect(items).toHaveLength(2);
});

test("fetches stories from an API and fails", async () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

  render(<Search />);

  userEvent.click(screen.getByRole("button"));

  const message = await screen.findByText(/Ada yang error .../i);

  await expect(message).toBeInTheDocument();
});

test("calls the onChange callback handler", () => {
  const onChange = jest.fn();

  render(<Search value="" onChange={onChange} />);

  fireEvent.change(screen.getByPlaceholderText("Tulis Cerita"), { target: { value: "Hello" } });

  expect(onChange).tohaveBeenCalledTimes(1);
});
