import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://ih1.redbubble.net/image.1740516183.6586/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcG3UGArXWVYl_IRbn9GcXsVKjl3eFX_ksg&usqp=CAU",
          }}
        ></Image>
        <Text>Genshin Impact - Lumine Cutiest</Text>
      </View>
      <View style={[styles.button, styles.redButton]} />
      <View style={[styles.button, styles.blueButton]} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
  },
  redButton: {
    backgroundColor: "tomato",
  },
  blueButton: {
    backgroundColor: "dodgerblue",
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
