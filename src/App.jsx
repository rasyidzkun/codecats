import { lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ScrollTop = lazy(() => import("./components/ScrollTop/ScrollTop"));

const App = () => (
  <Suspense fallback={null}>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
    <ScrollTop />
  </Suspense>
);

export default App;
