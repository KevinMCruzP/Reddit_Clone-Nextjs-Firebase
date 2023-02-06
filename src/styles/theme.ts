import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { Button } from "./button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    },
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "gray.700",
      },
    },
  },
  components: {
    Button,
  },
});
