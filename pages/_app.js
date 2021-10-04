import "@/sass/main.scss";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { SnackbarProvider } from "notistack";
import Notify from "src/utils/Notify";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import dynamic from "next/dynamic";

const SimpleReactLightbox = dynamic(() => import("simple-react-lightbox"), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  return (

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={4000}
        maxSnack={3}
      >
        <SimpleReactLightbox>
         <Notify />
        <NextNprogress color="#004ba8" />
        <Component {...pageProps} />
        </SimpleReactLightbox>
      </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
