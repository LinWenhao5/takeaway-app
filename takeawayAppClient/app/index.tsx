import {View, Text, StyleSheet} from "react-native";
import theme from "@/constants/theme";
import React from "react";
import SearchHeader from "@/components/SearchHeader";

export default function Index() {
    return (
        <View style={styles.wrapper}>
            <SearchHeader />
            <View style={styles.container}>
            <Text style={[styles.text, { color: theme.colors.bodyText, fontSize: theme.fontSizes.medium }]}>
                    Welcome to Takeaway App!
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
    },
});
