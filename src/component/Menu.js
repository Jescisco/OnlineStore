import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Container from "./Container";
import Header from "./Header";
export default function Menu() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log('Ready');
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {data.map((products) => (
            <Container
              Title={products.title}
              Img={products.image}
              Price={products.price}
              Description={products.description}
              Rate={products.rating.rate}
              Amount={products.rating.count}
              key={products.id}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
