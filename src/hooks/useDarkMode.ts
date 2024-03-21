import { useColorScheme } from "nativewind";

export function useDarkMode() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return { isDarkMode, toggleColorScheme };
}
