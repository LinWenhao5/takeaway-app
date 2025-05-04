import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import theme from "@/constants/theme";

const dummyResults = [
    { id: '1', title: 'Pizza' },
    { id: '2', title: 'Sushi' },
    { id: '3', title: 'Burger' },
    { id: '4', title: 'Pasta' },
    { id: '5', title: 'Salad' },
    { id: '6', title: 'Tacos' },
    { id: '7', title: 'Steak' },
    { id: '8', title: 'Ramen' },
    { id: '9', title: 'Curry' },
    { id: '10', title: 'Sandwich' },
];

export default function SearchHeader() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState<{ id: string; title: string }[]>([]);
    const [overlayTop, setOverlayTop] = useState(0);

    const searchContainerRef = useRef<View>(null);

    useEffect(() => {
        const results = dummyResults.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredResults(results);
    }, [searchQuery]);

    const handleLayout = () => {
        if (searchContainerRef.current) {
            searchContainerRef.current.measure((x, y, width, height, pageX, pageY) => {
                setOverlayTop(pageY + height);
            });
        }
    };

    const handleClearInput = () => {
        setSearchQuery("");
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <View
                style={styles.searchContainer}
                ref={searchContainerRef}
                onLayout={handleLayout}
            >
                <View style={styles.titleRow}>
                    <Text style={[styles.text, { color: theme.colors.onBackground, fontSize: theme.fontSizes.large }]}>
                        Hallo!{"\n"}Snel iets lekkers kiezen?
                    </Text>
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Geef aan wat je wilt eten..."
                        placeholderTextColor={theme.colors.link}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery.trim() !== "" && (
                        <TouchableOpacity onPress={handleClearInput} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>×</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {searchQuery.trim() !== "" && (
                <View style={[styles.resultsOverlay, { top: overlayTop }]}>
                    <FlatList
                        data={filteredResults}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.resultItem}>
                                <Text style={styles.resultText}>{item.title}</Text>
                                <TouchableOpacity
                                    style={styles.arrowButton}
                                    onPress={() => console.log(`Selected ${item.title}`)}
                                >
                                <Text style={styles.arrowText}>→</Text>
                            </TouchableOpacity>
                            </View>
                        )}
                        contentContainerStyle={styles.resultsContainer}
                    />
                </View>
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        paddingTop: theme.spacing.large,
        paddingBottom: theme.spacing.large,
        paddingHorizontal: theme.spacing.medium,
        backgroundColor: theme.colors.secondary,
    },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing.small,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: theme.colors.bodyText,
        borderWidth: 1,
        borderRadius: theme.borderRadius.large,
        backgroundColor: theme.colors.background,
        paddingLeft: theme.spacing.medium,
    },
    searchBar: {
        flex: 1,
        height: 40,
        color: theme.colors.bodyText,
        ...(Platform.OS === "web" && { outlineStyle: "none", }), 
    },
    clearButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
    },
    clearButtonText: {
        fontSize: 20,
        color: theme.colors.bodyText,
    },
    logo: {
        width: theme.image.small,
        height: theme.image.small,
        ...(Platform.OS === "web" && { width: theme.image.medium, height: theme.image.small }),
    },
    text: {
        textAlign: "left",
    },
    resultsOverlay: {
        position: "absolute",
        left: 0,
        right: 0,
        backgroundColor: theme.colors.secondary,
        borderTopWidth: 1,
        borderTopColor: theme.colors.bodyText,
        height: 300,
        overflow: "scroll",
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        ...(Platform.OS === "web" && { scrollbarWidth: "none", }), 
        ...(Platform.OS === "web" && { "&::-webkit-scrollbar": { display: "none" }, }),
    },
    resultsContainer: {
        zIndex: 10,
        paddingBottom: theme.spacing.large,
    },
    resultItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: theme.spacing.medium,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.bodyText,
    },
    resultText: {
        fontSize: theme.fontSizes.medium,
        color: theme.colors.bodyText,
    },
    arrowButton: {
        paddingHorizontal: theme.spacing.small,
    },
    arrowText: {
        fontSize: theme.fontSizes.large,
        color: theme.colors.primary,
    },
});