import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@/constants/theme";
import React from "react";
import SearchHeader from "@/components/SearchHeader";
import HeaderWithButton from "@/components/HeaderWithButton";

export default function Index() {
    const handleButtonPress = () => {
        console.log("Header button pressed");
    }

    return (
        <View style={styles.wrapper}>

            <View style={styles.header}>
                <SearchHeader />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <HeaderWithButton
                    title="Categorieën"
                    buttonText="Meer Bekijken"
                    onButtonPress={handleButtonPress}
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        flex: 1,
    },
    scrollContent: {
        paddingTop: 230,
    },
    text: {
        textAlign: "center",
        marginVertical: 5,
    },
});