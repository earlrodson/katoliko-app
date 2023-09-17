import { FlatList, View } from "react-native";
import { Divider, List } from "react-native-paper";
import catholicPrayers from "../data/prayers";
import { useNavigation } from "@react-navigation/native";

const PrayerPage = () => {
    const navigation = useNavigation();

    const handleItemClick = (item: any) => {
        navigation.navigate('DetailPage', { item });
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

    return (
    <View style={{ padding: 16 }}>
        <FlatList
            data={catholicPrayers}
            renderItem={renderPrayerItem}
            keyExtractor={(item) => item.name}
        />
    </View>
    );
}
export default PrayerPage;