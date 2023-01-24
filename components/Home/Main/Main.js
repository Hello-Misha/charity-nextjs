import { useTranslation } from "next-i18next";

import Image from "next/image";

import classes from "./Main.module.scss";

function Main() {
  const { t } = useTranslation("home");
  return (
    <section className={classes.main}>
      <Image
        src="/img/Ukrainian-Project.png"
        width={500}
        height={500}
        alt="Logo"
      />
      <h1 className="Title DarkBlue">{t("homePage.main.title")}</h1>
      <p className="Text DarkBlue">{t("homePage.main.text")}</p>
    </section>
  );
}

export default Main;
