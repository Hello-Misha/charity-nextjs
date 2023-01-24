import Layout from "@/components/Global/Layout";

import { appWithTranslation } from "next-i18next";

import "../styles/index.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
