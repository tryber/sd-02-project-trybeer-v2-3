export const getItem = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  if (!value) return defaultValue;
  return JSON.parse(value);
};

export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
