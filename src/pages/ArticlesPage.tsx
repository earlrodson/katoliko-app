import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { Button, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import catholicCatechismTopics from "../data/katekismo";
import Sound from "react-native-sound";
import SoundPlayer from 'react-native-sound-player';
import RNFS from 'react-native-fs';
import FABandDrawer from "../components/FABandDrawer";

const ArticlesPage = () => {
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

export default ArticlesPage;
