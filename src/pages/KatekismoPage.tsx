import { FlatList, View } from "react-native";
import { Divider, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import catholicCatechismTopics from "../data/katekismoTableOfContents";

const KatekismoPage = ({ route, setPageTitle }) => {
    const navigation = useNavigation();

    const handleItemClick = (item: any) => {
        navigation.navigate('KatekismoSublistPage', { item });
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

    return (
    <View style={{ padding: 16 }}>
        <FlatList
            data={catholicCatechismTopics}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    </View>
    );
}
export default KatekismoPage;