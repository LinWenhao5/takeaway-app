import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import theme from "@/constants/theme";

export default function SearchHeader() {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.titleRow}>
                <Text style={[styles.text,
                    {
                        color: theme.colors.background,
                        fontSize: theme.fontSizes.xLarge,
                        flexShrink: 1,
                    }
                ]}>
                    Wat wil je vandaag eten?
                </Text>
                <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Geef aan wat je wilt eten..."
                placeholderTextColor={theme.colors.bodyText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        width: "100%",
        paddingTop: theme.padding.large,
        paddingBottom: theme.padding.large,
        paddingHorizontal: theme.padding.medium,
        backgroundColor: theme.colors.secondary,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: theme.margin.medium,
    },
    searchBar: {
        height: 40,
        borderColor: theme.colors.bodyText,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 15,
        backgroundColor: theme.colors.background,
        color: theme.colors.bodyText,
    },
    logo: {
        width: theme.image.medium,
        height: theme.image.small,
    },
    text: {
        textAlign: "left",
    },
});
