import { validateUrl } from "./validateUrl";

test("Валидация ссылки", () => {
  expect(validateUrl("http://localhost:3000")).toBe(true);
});
