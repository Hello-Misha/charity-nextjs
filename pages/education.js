import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import ExpandedPageComponent from "@/components/ExpandedPage/ExpandedPageComponent";
import EducationAboutIMGs from "@/components/ExpandedPage/EducationAboutIMGs";

function Home() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("education.title")}</title>
        <meta property="og:description" content={t("education.description")} />
      </Head>
      <main>
        <ExpandedPageComponent
          page={useTranslation("education")}
          img={EducationAboutIMGs}
        />
      </main>
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "education",
        "common",
        "meta",
      ])),
    },
  };
}
