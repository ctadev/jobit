import React from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { Provider } from "react-redux";
import { Navbar } from "./components";
import store from "../redux/store";

export default function MyApp({ session, Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <div className="dark:bg-black-bg bg-natural-2 min-h-screen">
            <Navbar />
            <div className="pt-65">
              <Component {...pageProps} />
            </div>
          </div>
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  );
} 