import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

import ContactPage from "./pages/ContactPage";

import PagePrint from "./pages/PagePrint";
import PageWeb from "./pages/PageWeb";
import PageVideo from "./pages/PageVideo";
import PageMarketing from "./pages/PageMarketing";
import LiveDemo from "./pages/LiveDemo";

import Navbar from "./components/navbar.js";

import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:slug" component={PostPage} />
        <Route path="/print/" component={PagePrint} />
        <Route path="/web/" component={PageWeb} />
        <Route path="/video/" component={PageVideo} />
        <Route path="/marketing/" component={PageMarketing} />
        <Route path="/live-demo/" component={LiveDemo} />
        <Route path="/contact/" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </ApolloProvider>
  );
}
