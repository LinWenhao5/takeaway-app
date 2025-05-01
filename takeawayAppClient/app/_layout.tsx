import { Tabs } from "expo-router";
import theme from "@/constants/theme";


export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.link,
                tabBarStyle: {
                    backgroundColor: theme.colors.onBackground,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
        </Tabs>
    );
}
