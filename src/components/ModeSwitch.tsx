import { ColorValue, Switch, View } from "react-native";
import Icon from "react-native-remix-icon";
import colors from "tailwindcss/colors";
import { useDarkMode } from "../hooks";

type ModeSwitchProps = {
  iconSize?: string | number;
  switchColor?: ColorValue | null;
};

export function ModeSwitch({
  iconSize = 200,
  switchColor = colors.blue[500],
}: ModeSwitchProps) {
  const { isDarkMode, toggleColorScheme } = useDarkMode();

  return (
    <View className="justify-center space-y-4">
      <Icon
        name={`${isDarkMode ? "moon" : "sun"}-fill`}
        color={isDarkMode ? "white" : "black"}
        size={iconSize}
      />
      <View className="items-center">
        <Switch
          value={isDarkMode}
          onChange={toggleColorScheme}
          trackColor={{ true: switchColor }}
        />
      </View>
    </View>
  );
}
