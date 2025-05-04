import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextStyle, Image } from "react-native";
import theme from "@/constants/theme";
import { FoodCategory } from "./types/FoodCategory";

interface HorizontalCategoriesListProps {
    title: string;
    categories: FoodCategory[];
    onCategoryPress: (id: string) => void;
    buttonText: string;
    onButtonPress: () => void;
}

const HorizontalCategoriesList: React.FC<HorizontalCategoriesListProps> = ({
    title,
    categories,
    onCategoryPress,
    buttonText,
    onButtonPress,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>{title}</Text>
                <TouchableOpacity onPress={onButtonPress} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryItem}
                        onPress={() => onCategoryPress(item.id)}
                    >
                        <Image source={item.icon} style={styles.categoryIcon} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.spacing.large,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: theme.spacing.medium,
        marginBottom: theme.spacing.small,
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
    listContainer: {
        paddingHorizontal: theme.spacing.medium,
    },
    categoryItem: {
        width: theme.container.xSmall,
        height: theme.container.xSmall,
        borderRadius: theme.container.xSmall/2,
        backgroundColor: theme.colors.secondary,
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: theme.spacing.small
    },
    categoryIcon: {
        marginTop: theme.spacing.xSmall,
        width: theme.image.xSmall,
        height: theme.image.xSmall,
    },
    categoryText: {
        fontSize: theme.fontSizes.small,
        fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
        color: theme.colors.title,
        textAlign: "center",
        flexWrap: "wrap",
        width: "80%",
    },
});

export default HorizontalCategoriesList;