import { Switch, View } from "react-native";
import Icon from "react-native-remix-icon";
import colors from "tailwindcss/colors";
import { useDarkMode } from "../hooks";

export function ModeSwitch() {
  const { isDarkMode, toggleColorScheme } = useDarkMode();

  return (
    <View className="flex-row items-center space-x-2">
      <Icon
        name={`${isDarkMode ? "moon" : "sun"}-fill`}
        color={isDarkMode ? "white" : "black"}
        size={36}
      />
      <Switch
        value={isDarkMode}
        onChange={toggleColorScheme}
        trackColor={{ true: colors.blue[500] }}
      />
    </View>
  );
}
