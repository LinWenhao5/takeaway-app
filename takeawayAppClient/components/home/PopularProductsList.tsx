import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextStyle, Dimensions } from "react-native";
import theme from "@/constants/theme";
import { Product } from "./types/Product";

interface PopularProductsListProps {
    title: string;
    products: Product[];
    onAddToCart: (id: string) => void;
    buttonText: string;
    onButtonPress: () => void;
}

const PopularProductsList: React.FC<PopularProductsListProps> = ({ title, onButtonPress, buttonText, products, onAddToCart }) => {
    const screenWidth = Dimensions.get("window").width;
    const numColumns = screenWidth > 768 ? 5 : 2;

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>{title}</Text>
                <TouchableOpacity onPress={onButtonPress} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                numColumns={numColumns}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <TouchableOpacity
                            style={styles.addToCartButton}
                            onPress={() => onAddToCart(item.id)}
                        >
                            <Text style={styles.addToCartText}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: theme.spacing.medium,
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
    productItem: {
        flex: 1,
        margin: theme.spacing.small,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.small,
        padding: theme.spacing.small,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: theme.borderRadius.small,
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: theme.borderRadius.small,
        marginBottom: theme.spacing.small,
    },
    productName: {
        fontSize: theme.fontSizes.medium,
        fontWeight: theme.fontWeights.light as TextStyle["fontWeight"],
        color: theme.colors.title,
        textAlign: "center",
        marginBottom: theme.spacing.xSmall,
    },
    productPrice: {
        fontSize: theme.fontSizes.medium,
        fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
        color: theme.colors.bodyText,
        marginBottom: theme.spacing.small,
    },
    addToCartButton: {
        position: "absolute",
        bottom: theme.spacing.small,
        right: theme.spacing.small,
        backgroundColor: theme.colors.onBackground,
        paddingVertical: theme.spacing.xSmall,
        paddingHorizontal: theme.spacing.medium,
        borderRadius: theme.borderRadius.large,
    },
    addToCartText: {
        fontSize: theme.fontSizes.small,
        fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
        color: theme.colors.background,
    },
});

export default PopularProductsList;