import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { Card, Title, DefaultTheme } from "react-native-paper";
import deviceStorage from "../services/deviceStorage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";
import { apiConnect } from "../services/apiService";

const Illness = ({ navigation }) => {
  const [illnesses, setIllnesses] = useState([]);

  const getIllness = async () => {
    let illness = new Array();
    let response = await apiConnect("get", "/illnesses", null);

    if (response && response.data) {
      response.data._embedded.illnesses.map((postData) => {
        illness.push(postData.illness.name);
      });
    }
    setIllnesses(illness);
  };

  useEffect(() => {
    getIllness();
  }, []);

  const checkSeverity = async (ilness) => {
    await deviceStorage.saveItem("illness", ilness);
  };

  return (
    <SafeAreaView theme={theme} style={styles.viewStyle}>
      <Text style={styles.textStyle}>Select an illness:</Text>
      <ScrollView>
        {illnesses.map((illness) => {
          return (
            <Card
              onPress={() => {
                checkSeverity(illness);
                navigation.navigate("Severity");
              }}
              style={styles.cardStyle}
            >
              <Card.Content>
                <Title>
                  {illness}
                  <Icon name="arrow-right" size={30} color="#FF0000" />
                </Title>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const theme = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    backgroundColor: "#CBC3E3",
  },
  cardStyle: {
    fontSize: 10,
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    borderColor: "grey",
    borderRadius: 20,
    width: 300,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Illness;
