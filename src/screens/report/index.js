import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Paragraph, Title } from "react-native-paper";
import Layout from "../../components/layout";

export default function Home({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View>
          <Title style={{ textAlign: "center" }}>We are here for you</Title>
          <Paragraph style={{ textAlign: "center" }}>
            Talk to us if you or someone you know has been sexually assualted
          </Paragraph>
        </View>
        <Image
          source={require("../../../assets/help-pal-illustration.png")}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
            marginVertical: 30,
          }}
        />
        <Button
          mode="contained"
          labelStyle={{ color: "#fff" }}
          onPress={() => props.navigation.goBack()}
          style={{ width: "100%", paddingVertical: 10, borderRadius: 100 }}
        >
          Go Back
        </Button>
      </View>
    </Layout>
  );
}
