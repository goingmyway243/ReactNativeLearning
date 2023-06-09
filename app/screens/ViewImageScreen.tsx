import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.closeButton}></View>
        <View style={styles.deleteButton}></View>
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: "https://cheriostore.com.br/wp-content/uploads/2021/02/9_O1CN01QSyscA25tynRQJAxr_77937585.jpg",
        }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "flex-end",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
    zIndex: 1,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 7,
  },
});

export default ViewImageScreen;
