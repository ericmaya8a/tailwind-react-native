import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ModeSwitch } from "./components/ModeSwitch";
import { useDarkMode } from "./hooks";

export default function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <View className="flex-1 items-center justify-center space-y-3 dark:bg-slate-900">
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <ModeSwitch />
      <Text className="dark:text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        corporis, sint praesentium libero tempora eligendi odio inventore autem
        sed consectetur omnis ducimus sequi. Tempore?
      </Text>
    </View>
  );
}
