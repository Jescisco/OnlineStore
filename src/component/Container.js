import React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import ProductDetails from "./ProductDetails";

export default function Container(props) {
  const { Title, Img, Price, Description, Amount, Rate } = props;
  return (
    <SafeAreaView style={styles.component}>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: Img,
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{Title}</Text>
          <Text style={styles.cardDescription}>{Description}</Text>
        </View>
      </View>
      <View style={styles.cardPrice}>
        <ProductDetails
          Title={Title}
          Img={Img}
          Price={Price}
          Description={Description}
          Amount={Amount}
          Rate={Rate}
        />
        <Text>${Price}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  component: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  cardPrice: {
    marginTop: 15,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
