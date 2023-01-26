import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

function Error() {
  const { t } = useTranslation("meta");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);
  return (
    <>
      <Head>
        <title>{t("error.title")}</title>
        <meta property="og:description" content={t("error.description")} />
      </Head>
      <main>
        <p className="Text DarkBlue">Someting is going wrong...</p>
      </main>
    </>
  );
}

export default Error;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["404", "common", "meta"])),
    },
  };
}
