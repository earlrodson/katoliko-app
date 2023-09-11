import { FlatList, View } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import catholicCatechismTopics from "../data/katekismo";

const KatekismoPage = () => {
  const navigation = useNavigation();

  const handleItemClick = (item: any) => {
      navigation.navigate('DetailPage', { item });
    };
    
  const renderItem = ({ item }: { item: { name: string } }) => (
      <List.Item
          title={item.name}
          onPress={() => handleItemClick(item)}
      />
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