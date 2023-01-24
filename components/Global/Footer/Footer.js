import Link from "next/link";

import classes from "./Footer.module.scss";

import { useTranslation } from "next-i18next";

export default function Footer(props) {
  const { t } = useTranslation("common");

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__content__description}>
          <div className={classes.footer__content__description__support}>
            <p className={`Text White`}>{t("footer.support.title")}</p>
            <p className={`Text White`}>{t("footer.support.iban")}</p>
            <p className={`Text White`}>{t("footer.support.bank")}</p>
          </div>
          <div>
            <p className={`Text White`}>{t("footer.address.street")}</p>
            <p className={`Text White`}>{t("footer.address.city and zip")}</p>
            <p className={`Text White`}>{t("footer.address.county")}</p>
          </div>
        </div>
        <div className={classes.footer__content__nav}>
          <Link href={"/legal"} className={`Text White`}>
            {t("footer.nav.Legal")}
          </Link>
          <Link href={"/about"} className={`Text White`}>
            {t("footer.nav.About")}
          </Link>
          <Link href={"/privacy"} className={`Text White`}>
            {t("footer.nav.Privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
