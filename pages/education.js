import Heading from "@/components/Heading";

import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  const { t } = useTranslation("education");
  return (
    <>
      <Heading text={t("title")} />
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["education", "common"])),
    },
  };
}
