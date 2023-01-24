import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Heading from "@/components/Heading";
import Link from "next/link";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      <Heading text={t("title")} />
      <Link href={"/education"}>Education</Link>
    </div>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
