const regex = /^([a-z]+:\/\/)?(.)+[\.\:](.)+$/i;

export const validateUrl = (text: string) => {
  return regex.test(text);
};
