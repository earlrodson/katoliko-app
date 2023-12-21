import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Import LottieView
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {

  // const [isSplash, setIsSplash] = useState(true);
  // useEffect(() => {
  //   // Simulate a delay for the splash screen (e.g., 2 seconds)
  //   setTimeout(() => {
  //     // Navigate to your main screen (e.g., BottomNavigator)
  //     navigation.navigate('KatolikoApp');
  //   }, 2500);
  // }, []);

  // useEffect(() => {
  //   if(!isSplash) {return;}
  //   setIsSplash(false)
  // },[isSplash])

  return (
    <LinearGradient
      colors={['#e6c7f1', '#1576bb']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        {/* Use LottieView to display the animation */}
        <LottieView
        source={require('../assets/splash-mama-mary-animation.json')}// Replace with your JSON animation file
          autoPlay // Start animation automatically
          loop // Loop the animation
          style={styles.logo}
        />
        <Text style={styles.text}>Behold your mother...</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    marginTop: 16,
    color: '#fff', // Text color on the gradient background
  },
});

export default SplashScreen;
