import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import ExpandedPageComponent from "@/components/ExpandedPage/ExpandedPageComponent";
import MedicineAboutIMGs from "@/components/ExpandedPage/MedicineAboutIMGs";

function Home() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("medicine.title")}</title>
        <meta property="og:description" content={t("medicine.description")} />
      </Head>
      <main>
        <ExpandedPageComponent
          page={useTranslation("medicine")}
          img={MedicineAboutIMGs}
        />
      </main>
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["medicine", "common", "meta"])),
    },
  };
}
