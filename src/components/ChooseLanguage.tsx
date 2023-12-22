import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import useI18n from "../hooks/useI18n";

const SelectTag = styled.select`
  cursor: pointer;
  font-size: 12px;
  margin: 0;
  border: none;
  padding: 4px 2px;
  border-radius: 7px;
  font-family: inherit;
  font-weight: bold;

  background-color: var(--bg-card-dark);
  color: var(--text-dark);
`;

function ChooseLanguage() {
  const { i18n, t } = useTranslation();
  const { setLanguage, getLanguage } = useI18n();

  const languages = [
    {
      label: t("english", { ns: ["language"] }),
      value: "en",
    },
    {
      label: t("portuguese", { ns: ["language"] }),
      value: "pt",
    },
  ];

  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const language =
      getLanguage() !== i18n.language ? getLanguage() : i18n.language;

    i18n.changeLanguage(language ?? "en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SelectTag
      name="language"
      onChange={onChangeLanguage}
      value={i18n.language}
    >
      {languages.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectTag>
  );
}

export default ChooseLanguage;
