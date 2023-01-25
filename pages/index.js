import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import Heading from "@/components/Heading";
// import Link from "next/link";

import Main from "@/components/Home/Main/Main";
import Education from "@/components/Home/Education/Education";
import Medecine from "@/components/Home/Medicine/Medicine";
import Founder from "@/components/Home/Founder/Founder";
import Support from "@/components/Home/Support/Support";
import Partners from "@/components/Home/Partners/Partners";

function Home() {
  return (
    <main>
      <Main />
      <Education />
      <Medecine />
      <Founder />
      <Support />
      <Partners />
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
