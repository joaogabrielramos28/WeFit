import { extendTheme } from "native-base";

export default extendTheme({
  colors: {
    gray: {
      300: "#DADADA",
      400: "#E5E5E5",
      500: "#9A9A9A",
      700: "#070707",
      800: "#00000099",
      900: "#000000de",
    },
    yellow: {
      300: "#FAF3DC",
      500: "#FFD02C",
    },
    red: {
      500: "#F22828",
    },
    blue: {
      500: "#1976D2",
    },
  },
  fontConfig: {
    Inter: {
      400: {
        normal: "Inter_400Regular",
      },
      700: {
        normal: "Inter_700Bold",
      },
    },
    Roboto: {
      400: {
        normal: "Roboto_400Regular",
      },
      500: {
        normal: "Roboto_500Medium",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Roboto",
  },
});
