import { View, Text, StyleSheet, FlatList } from "react-native";
import theme from "@/constants/theme";
import React from "react";
import SearchHeader from "@/components/SearchHeader";

export default function Index() {
    // 使用 for 循环生成模拟数据
    const items = [];
    for (let i = 1; i <= 50; i++) {
        items.push(`This is item #${i}`);
    }

    return (
        <View style={styles.wrapper}>
            {/* 固定的搜索栏 */}
            <View style={styles.header}>
                <SearchHeader />
            </View>

            {/* 可滚动内容 */}
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.scrollContent}
                renderItem={({ item }) => (
                    <Text style={[styles.text, { color: theme.colors.primary, fontSize: theme.fontSizes.medium }]}>
                        {item}
                    </Text>
                )}
                ListHeaderComponent={
                    <Text style={[styles.text, { color: theme.colors.bodyText, fontSize: theme.fontSizes.medium }]}>
                        Welcome to Takeaway App!
                    </Text>
                }
                keyboardShouldPersistTaps="handled"
            />
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
        paddingTop: 300,
    },
    text: {
        textAlign: "center",
        marginVertical: 5, // 添加垂直间距
    },
});