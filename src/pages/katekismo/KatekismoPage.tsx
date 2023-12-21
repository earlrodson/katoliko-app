import { FlatList, StyleSheet, View } from "react-native";
import { Divider, List, Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import catholicCatechismTopics from "../../data/katekismoTableOfContents";
import { useState } from "react";
import ccc from "../../data/ccc";
import { isUndefined } from "lodash";

const KatekismoPage = (props: any) => {
    const {setItem, setIsList, setPageType} = props;
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState(""); // Initialize the searchQuery state

    const handleItemClick = (item: any) => {
        const isList = Array.isArray(item.content) && item.content.length > 0 && isUndefined(item?.isTranslations);
        setIsList(isList);
        setPageType('sublist')
        setItem(item)
    };
        
    const renderItem = ({ item }: { item: { name: string } }) => (
        <>
            <List.Item
                title={item.name}
                onPress={() => handleItemClick(item)}
            />
            <Divider />
        </>
    );

    // Filter the prayers based on the searchQuery
    const filteredData = catholicCatechismTopics.filter((cathecism) =>
        cathecism.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View >
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search prayers"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </View>

            <FlatList data={filteredData} renderItem={renderItem} keyExtractor={(item) => item.name} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuIcon: {
        marginRight: 8, // Adjust the margin as needed
    },
    searchBar: {
        flex: 1,
        borderLeftWidth: 0,
    },
});

export default KatekismoPage;