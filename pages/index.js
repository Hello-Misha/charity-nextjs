import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import Heading from "@/components/Heading";
// import Link from "next/link";

import Main from "@/components/Home/Main/Main";

function Home() {
  return (
    <main>
      <Main />
      {/* <Heading text={t("title")} /> */}
      {/* <Link href={"/education"}>Education</Link> */}
    </main>
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
