import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import classes from "../Header.module.scss";

export default function LanguageToogler() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const changeLanguage = () => {
    if (router.locale === "ua") {
      return "en";
    } else {
      return "ua";
    }
  };

  return (
    <div>
      <h3
        className={`Text White ${classes.toogler}`}
        onClick={() => {
          router.push({ pathname, query }, asPath, {
            locale: changeLanguage(),
          });
        }}
      >
        {t("header.LanguageToogler")}
      </h3>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
