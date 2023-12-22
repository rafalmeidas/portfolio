function useI18n() {
  const key: string = "portifolio-rafael-silva";

  const getLanguage = () => localStorage.getItem(key);

  const setLanguage = (value: string) => localStorage.setItem(key, value);

  return { getLanguage, setLanguage };
}

export default useI18n;
