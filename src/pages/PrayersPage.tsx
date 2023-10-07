import { FlatList, View } from "react-native";
import { Divider, List, Searchbar } from "react-native-paper"; // Import Searchbar
import catholicPrayers from "../data/prayers";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { isUndefined } from "lodash";


const PrayerPage = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState(""); // Initialize the searchQuery state

    const handleItemClick = (item: any) => {
        
        const isList = Array.isArray(item.content) && item.content.length > 0 && isUndefined(item?.isTranslations);
        navigation.navigate(isList ? 'PrayerSublistPage' : 'PrayerDetailPage', { item });
    };

    const renderPrayerItem = ({ item }: { item: { name: string } }) => (
        <>
            <List.Item
                title={item.name}
                onPress={() => handleItemClick(item)}
            />
            <Divider />
        </>
    );

    // Filter the prayers based on the searchQuery
    const filteredPrayers = catholicPrayers.filter((prayer) =>
        prayer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={{ padding: 16 }}>
            <Searchbar
                placeholder="Search prayers"
                onChangeText={(query) => setSearchQuery(query)} // Update searchQuery when text changes
                value={searchQuery}
            />
            <FlatList
                data={filteredPrayers} // Use the filtered prayers
                renderItem={renderPrayerItem}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};

export default PrayerPage;
