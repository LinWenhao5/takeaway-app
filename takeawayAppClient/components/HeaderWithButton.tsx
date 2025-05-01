import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";
import theme from "@/constants/theme";

interface HeaderWithButtonProps {
    title: string;
    onButtonPress: () => void;
    buttonText: string;
}

const HeaderWithButton: React.FC<HeaderWithButtonProps> = ({ title, onButtonPress, buttonText }) => {
    return (
        <View style={styles.headerRow}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onButtonPress} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
        padding: theme.spacing.medium,
    },
    headerText: {
        fontSize: theme.fontSizes.large,
        fontWeight: theme.fontWeights.medium as TextStyle["fontWeight"],
        color: theme.colors.bodyText,
        flex: 1,
    },
    headerButton: {
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.medium,
        borderRadius: 5,
    },
    headerButtonText: {
        color: theme.colors.link,
        fontSize: theme.fontSizes.small,
        fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
    },
});

export default HeaderWithButton;