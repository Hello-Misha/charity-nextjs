import { useTranslation } from "next-i18next";

import Image from "next/image";

import classes from "./Main.module.scss";

import Logo from "../../../public/img/Ukrainian-Project.png";

function Main() {
  const { t } = useTranslation("home");
  return (
    <section className={classes.main}>
      <Image
        src={Logo}
        width={500}
        height={500}
        alt="Logo"
        placeholder="blur"
      />
      <h1 className="Title DarkBlue">{t("main.title")}</h1>
      <p className="Text DarkBlue">{t("main.text")}</p>
    </section>
  );
}

export default Main;
