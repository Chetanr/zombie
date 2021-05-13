import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Card, Title, DefaultTheme, Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";

const Illness = ({ navigation }) => {
  const [illnesses, setIllnesses] = useState([]);

  const getIllness = async () => {
    let illness = new Array();
    await axios
      .get("http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses")
      .then((res) => {
        res.data._embedded.illnesses.map((postData) => {
          illness.push(postData.illness.name);
        });
      })
      .then(() => {
        setIllnesses(illness);
      });
  };

  useEffect(() => {
    getIllness();
  }, []);

  const checkSeverity = (ilness) => {
    console.log("hi", ilness);
  };

  return (
    <SafeAreaView theme={theme} style={styles.viewStyle}>
      <Appbar.Header>
        <Appbar.Content title="Select an illness:" />
      </Appbar.Header>
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
                  {illness}{" "}
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#FF0000"
                    style={styles.iconStyle}
                  />
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
  cardStyle: {
    fontSize: 10,
    alignItems: "center",
    borderWidth: 1,
    marginLeft: 70,
    marginTop: 20,
    borderColor: "grey",
    borderRadius: 50,
    width: 300,
  },
  iconStyle: {
    alignItems: "flex-end",
    marginLeft: 20,
  },
});

export default Illness;
