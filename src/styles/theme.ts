import { extendTheme } from "native-base";

export default extendTheme({
  colors: {
    gray: {
      300: "#DADADA",
      400: "#E5E5E5",
      500: "#9A9A9A",
      700: "#070707;",
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
  fonts: {
    primary: {
      400: "Inter_400Regular",
      700: "Inter_700Bold",
    },
    secondary: {
      400: "Roboto_400Regular",
      500: "Roboto_500Medium",
    },
  },
});
