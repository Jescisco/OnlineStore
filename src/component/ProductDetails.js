import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const ProductDetails = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { Title, Img, Price, Rate, Amount } = props;
  const [cartButton, setCartButton] = useState(false);
  const color = cartButton ? "#FF5733" : "#ABFA35";
  const text = cartButton ? "Remove" : "Add To "

  const cartBtn = () => {
    setCartButton((change) => !change);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/delete-sign.png",
                }}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
            <View style={styles.closeButton}>
              <Text style={styles.modalText}>{Title}</Text>

              <View style={{ width: "100%", alignItems: "center" }}>
                <Image
                  source={{
                    uri: Img,
                  }}
                  style={styles.cardImage}
                />
              </View>
              <View style={styles.rateAndAmount}>
                <Text>Available Quantity {Amount}</Text>
                <View style={styles.rate}>
                  <Text style={{ alignItems: "center" }}>
                    Valuation of people
                  </Text>
                  <View style={styles.rate}>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/color/48/filled-star--v1.png",
                      }}
                      style={{
                        width: 20,
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                    <Text>{Rate}</Text>
                  </View>
                </View>
              </View>
              <Text>${Price}</Text>
              <TouchableOpacity onPressIn={cartBtn}>
                <Test color={color} text={text} cartButton={cartButton}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>See More</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rateAndAmount: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
  },
  shoppingCartButtonContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    padding: 10,
    borderRadius: "20%",
  },
  shoppingCartButton: {
    width: 30,
    height: 30,
  },
  closeButton: {
    alignItems: "center",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "flex-end",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
    marginBottom: 15,
  },
});

export const Test = (props) => {
  const { color, text, cartButton } = props;
  return (
    <View
      style={[styles.shoppingCartButtonContainer, { backgroundColor: color }]}
    >
      <Text style={{ fontSize: 18 }}>{text}</Text>
      {!cartButton ? (
        <Image
        source={{
          uri: "https://img.icons8.com/pastel-glyph/64/shopping-cart--v1.png",
        }}
        style={styles.shoppingCartButton}
      />
      ) : ""}
    </View>
  );
};

export default ProductDetails;
