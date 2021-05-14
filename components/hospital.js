import axios from "axios";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import "react-native-gesture-handler";
import deviceStorage from "../services/deviceStorage";
import { Card, Title, DefaultTheme } from "react-native-paper";

const Hospital = ({ navigation }) => {
  const [hospitals, setHospitals] = useState(new Map());
  const [severity, setSeverity] = useState("");
  const [illness, setIllness] = useState("");
  const [waitingList, setWaitingList] = useState("");

  const getHospitals = async () => {
    let hospital = new Map();
    let waitingListData = new Array();
    await axios
      .get("http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals")
      .then((res) => {
        res.data._embedded.hospitals.map((postData) => {
          hospital.set(postData.name, postData.waitingList);
        });
      })
      .then(() => {
        setHospitals(hospital);
        // setWaitingList(waitingListData);
      })
      .then(async () => {
        let illnessStored = await deviceStorage.retrieveData("illness");
        let severityStored = await deviceStorage.retrieveData("severity");
        // console.log(severityStored);
        setIllness(illnessStored);
        setSeverity(severityStored);
        // console.log("illness variable", illnessStored);
        // console.log("severity stored", severityStored);
      });
  };

  // const getStoredDetails = async () => {
  // };

  useEffect(() => {
    getHospitals();
  }, []);

  const renderHospitalData = () => {};

  return (
    <SafeAreaView theme={theme} style={styles.viewStyle}>
      <Text style={styles.textStyle}>Our Suggested Hospitals:</Text>
      <ScrollView>
        {[hospitals].map((hospital) => {
          return (
            <Card
              onPress={() => {
                // checkSeverity(illness);
                // navigation.navigate("Severity");
              }}
              style={styles.cardStyle}
            >
              <Card.Content>
                <Title>
                  {hospital.name}
                  {/* <Icon name="arrow-right" size={30} color="#FF0000" /> */}
                </Title>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
    // <Text>{severity}</Text>
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

export default Hospital;
