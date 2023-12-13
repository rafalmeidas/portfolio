import { ReactNode } from "react";

import JavaScriptIcon from "../components/icons/JavaScriptIcon";
import TypeScriptIcon from "../components/icons/TypeScriptIcon";
import CypressIcon from "../components/icons/CypressIcon";
import DateFnsIcon from "../components/icons/DateFnsIcon";
import AxiosIcon from "../components/icons/AxiosIcon";
import Html5Icon from "../components/icons/Html5Icon";
import ReactIcon from "../components/icons/ReactIcon";
import Css3Icon from "../components/icons/Css3Icon";
import SassIcon from "../components/icons/SassIcon";
import JestIcon from "../components/icons/JestIcon";

export class ToIcon {
  private static icons: Record<string, ReactNode> = {
    html: <Html5Icon />,
    css: <Css3Icon />,
    sass: <SassIcon />,
    react: <ReactIcon />,
    typescript: <TypeScriptIcon />,
    javascript: <JavaScriptIcon />,
    "date-fns": <DateFnsIcon />,
    axios: <AxiosIcon />,
    jest: <JestIcon />,
    cypress: <CypressIcon />,
  };

  private static renderIcon(iconName: string): ReactNode {
    const name = iconName.trim();
    const iconSvg = this.icons[name];

    if (iconSvg) return iconSvg;

    console.error("Not exist icon: ", name);
    return "";
  }

  static renderIcons(iconNames: string): ReactNode[] {
    const names = iconNames.split(",");
    const icons: ReactNode[] = [];

    for (const name of names) {
      const icon = this.renderIcon(name);
      if (icon !== "") icons.push(icon);
    }

    return icons;
  }
}
