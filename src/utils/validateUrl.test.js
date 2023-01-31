import { validateUrl } from "./validateUrl";

test("Валидация ссылки", () => {
  expect(validateUrl("http://localhost:3000")).toBe(true);
  expect(validateUrl("ya.ru")).toBe(true);
  expect(validateUrl("google.com")).toBe(true);
  expect(validateUrl("some strings")).toBe(false);
  expect(validateUrl("412123123")).toBe(false);
  expect(validateUrl("https://www.npmjs.com/package/react-qr-code")).toBe(true);
  expect(validateUrl("мвд.рф")).toBe(true);
  expect(validateUrl("https://web.telegram.org/z/#113947037")).toBe(true);
});
