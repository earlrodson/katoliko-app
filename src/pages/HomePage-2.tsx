import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Sound from "react-native-sound";
import FABandDrawer from "../components/FABandDrawer";

const HomePage = () => {
  const navigation = useNavigation();
  let playAudio;
  try {
    let sound: Sound;
    playAudio = () => {
      sound = new Sound(
        "https://loc.ignatius.com/adoremus-hymnal/downloads/audio/AdoremusHymnal_545_salve-regina.mp3",
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.error("Error loading sound: ", error);
            return;
          }
          // Play the sound
          sound.play(() => {
            sound.release(); // Release when done playing
          });
        }
      );
    };

    // playAudio();
  } catch (error) {
    console.log('error',error);
  }

  return (
    <View style={{ flex: 1 }}>
      <FABandDrawer />
    </View>
  );
};

export default HomePage;
