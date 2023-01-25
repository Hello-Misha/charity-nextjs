import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import ExpandedPageComponent from "@/components/ExpandedPage/ExpandedPageComponent";
import MedicineAboutIMGs from "@/components/ExpandedPage/MedicineAboutIMGs";

function Home() {
  return (
    <main>
      <ExpandedPageComponent
        page={useTranslation("medicine")}
        img={MedicineAboutIMGs}
      />
    </main>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["medicine", "common"])),
    },
  };
}
