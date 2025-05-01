// app/layout.tsx
import { Tabs } from "expo-router";
import theme from "@/app/constants/theme";

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
                name="home"
                options={{
                    title: "首页",
                }}
            />
            {/* 其他需要显示为 Tab 的页面 */}
        </Tabs>
    );
}
