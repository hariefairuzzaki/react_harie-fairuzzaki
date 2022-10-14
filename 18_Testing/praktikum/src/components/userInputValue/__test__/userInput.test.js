import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "../useInputValue";

describe("when rendered", () => {
  test("should use counter", () => {
    const { result } = renderHook(() => useInputValue(""));

    expect(result.current.value).toBe("");
    expect(typeof result.current.onChange).toBe("function");
  });

  test("should increment counter", () => {
    const { result } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange();
    });

    expect(result.current.value).toBe("helo");
  });
});
