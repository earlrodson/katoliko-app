import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import catholicCatechismTopics from "../data/katekismo";
import Sound from "react-native-sound";

const MotherMaryPage = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(true); // Set initial state to play audio

  useEffect(() => {
    let sound;

    // Function to play audio
    const playAudio = () => {
      sound = new Sound(
        require("../assets/17-antiphona---salve-regina.m4a"),
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.error("Error loading sound: ", error);
            return;
          }
          // Play the sound
          sound.play(() => {
            sound.release(); // Release when done playing
            setIsPlaying(false); // Set isPlaying to false when audio ends
          });
        }
      );
    };

    if (isPlaying) {
      playAudio(); // Play audio when isPlaying is true
    }

    return () => {
      // Clean up audio when component unmounts
      if (sound) {
        sound.release();
        setIsPlaying(false);
      }
    };
  }, [isPlaying]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/bg/mary-heel-serpent.webp")} // Replace with the actual image source
        style={{ flex: 1, width: "100%", height: "100%", resizeMode: "cover" }}
      />

      {/* Other content here */}
    </View>
  );
};

export default MotherMaryPage;
