import { View, StyleSheet, ScrollView } from "react-native";
import theme from "@/constants/theme";
import React from "react";
import SearchHeader from "@/components/home/SearchHeader";
import { FoodCategory } from "@/components/home/types/FoodCategory";
import HorizontalCategoriesList from "@/components/home/HorizontalCategoriesList";

const categories: FoodCategory[] = [
    { id: "1", name: "Combinatie", icon: require("@/assets/images/sushi-box.png") },
    { id: "2", name: "Nigiri", icon: require("@/assets/images/sushi-nigiri.png") },
    { id: "3", name: "Rol", icon: require("@/assets/images/sushi-rol.png")},
    { id: "4", name: "Warme Maaltijd", icon: require("@/assets/images/tempura.png") },
    { id: "5", name: "Salade", icon: require("@/assets/images/salad.png") },
    { id: "6", name: "Drank", icon: require("@/assets/images/drink.png") },
];

export default function Index() {
    const handleCategoryPress = (id: string) => {
        console.log(`Category pressed: ${id}`);
    };


    return (
        <View style={styles.wrapper}>

            <View style={styles.header}>
                <SearchHeader />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
            
                <HorizontalCategoriesList
                    title="Populaire Categorieën"
                    categories={categories}
                    onCategoryPress={handleCategoryPress}
                    buttonText="Bekijk Alles"
                    onButtonPress={() => console.log("Bekijk Alle Categorieën")}
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