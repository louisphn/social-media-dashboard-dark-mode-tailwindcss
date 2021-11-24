import { ThemeProvider } from "next-themes";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme={"system"}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
