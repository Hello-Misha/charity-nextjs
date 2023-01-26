import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import Main from "@/components/Home/Main/Main";
import Medecine from "@/components/Home/Medicine/Medicine";
import Education from "@/components/Home/Education/Education";
import Founder from "@/components/Home/Founder/Founder";
import Support from "@/components/Home/Support/Support";
import Partners from "@/components/Home/Partners/Partners";

function Home() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("homePage.title")}</title>
        <meta property="og:description" content={t("homePage.description")} />
      </Head>
      <main>
        <Main />
        <Medecine />
        <Education />
        <Founder />
        <Support />
        <Partners />
      </main>
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common", "meta"])),
    },
  };
}
