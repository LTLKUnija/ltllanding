import '@/styles/globals.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../firebase.js";
import { appWithTranslation } from 'next-i18next';
import { Provider } from "react-redux";
import { store } from "../store/store.js";



const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(App)
