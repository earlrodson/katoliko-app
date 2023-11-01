import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import TopBar from "../../components/TopBar";
import catholicPrayers from "../../data/prayers";
import PrayerDetailPage from "./PrayerDetailPage";
import PrayerSublistPage from "./PrayerSublistPage";
import PrayerPage from "./PrayersPage";


const PrayerMainPage = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState(""); // Initialize the searchQuery state
    const [item, setItem] = useState();
    const [isList, setIsList] = useState(true);
    const [pageType, setPageType] = useState('main');
    const [selectedLanguage, setSelectedLanguage] = useState('tag'); // Default language
    const [selectStateLanguages, setselectStateLanguages] = useState(['tag']); // Default language

    // Filter the prayers based on the searchQuery
    const filteredPrayers = catholicPrayers.filter((prayer) =>
        prayer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const backToPage = () => {
        setIsList(true);
        setPageType('main');
    }

    return (
        <View>
            {isList && pageType == 'main'  ? (
                <PrayerPage setItem={setItem} setIsList={setIsList} setPageType={setPageType} />
            ) : isList && pageType == 'sublist'  ? (
                <PrayerSublistPage item={item} setItem={setItem} setIsList={setIsList} setPageType={setPageType}   />
            ) : (
                <>
                    <TopBar setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage} backToPage={backToPage} selectStateLanguages={selectStateLanguages}/>
                    <PrayerDetailPage item={item} selectedLanguage={selectedLanguage} setselectStateLanguages={setselectStateLanguages} setSelectedLanguage={setSelectedLanguage} />
                </>
            )}

        </View>
    );
};

export default PrayerMainPage;
