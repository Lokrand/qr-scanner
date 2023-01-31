const regex = /^(.)+:\/\/(.)+[\.\:](.)+$/i;

export const validateUrl = (text: string) => {
  return regex.test(text);
};
