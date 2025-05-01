import { View, Text, StyleSheet } from "react-native";
import theme from "@/constants/theme";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: theme.colors.bodyText, fontSize: theme.fontSizes.medium }]}>
                Welcome to Takeaway App!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    text: {
        textAlign: "center",
    },
});
