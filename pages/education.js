import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import ExpandedPageComponent from "@/components/ExpandedPage/ExpandedPageComponent";
import EducationAboutIMGs from "@/components/ExpandedPage/EducationAboutIMGs";

function Home() {
  return (
    <main>
      <ExpandedPageComponent
        page={useTranslation("education")}
        img={EducationAboutIMGs}
      />
    </main>
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
