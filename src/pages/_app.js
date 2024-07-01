import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../firebase.js";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { useEffect } from "react";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const locale = router.locale || "lt";
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  }, [router.locale]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App);
