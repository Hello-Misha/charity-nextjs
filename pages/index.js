import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Main from "@/components/Home/Main/Main";
import Medecine from "@/components/Home/Medicine/Medicine";
import Education from "@/components/Home/Education/Education";
import Founder from "@/components/Home/Founder/Founder";
import Support from "@/components/Home/Support/Support";
import Partners from "@/components/Home/Partners/Partners";

function Home() {
  return (
    <main>
      <Main />
      <Medecine />
      <Education />
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
