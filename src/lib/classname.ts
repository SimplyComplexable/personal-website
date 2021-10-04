export const classname = (...arr: Array<string | null | undefined | false>) =>
  arr.filter(Boolean).join(' ');
