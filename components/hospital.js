import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import "react-native-gesture-handler";
import deviceStorage from "../services/deviceStorage";
import { apiConnect } from "../services/apiService";
import { Card, Title, DefaultTheme } from "react-native-paper";

const Hospital = ({ navigation }) => {
  const [hospitals, setHospitals] = useState([]);
  const [severity, setSeverity] = useState("");
  const [illness, setIllness] = useState("");
  const [waitingList, setWaitingList] = useState([]);
  const [displayData, setDisplayData] = useState(new Map());

  const getHospitals = async () => {
    let hospital = new Array();
    let waitingListData = new Array();
    let response = await apiConnect("get", "/hospitals", null);

    if (response && response.data) {
      response.data._embedded.hospitals.map((postData) => {
        hospital.push(postData.name);
        waitingListData.push(postData.waitingList);
      });
    }

    setHospitals(hospital);
    setWaitingList(waitingListData);
  };

  const getStoredData = async () => {
    let illnessStored = await deviceStorage.retrieveData("illness");
    let severityStored = await deviceStorage.retrieveData("severity");
    setIllness(illnessStored);
    setSeverity(severityStored);
  };

  const calculateWaitingTimes = () => {
    let hospital = "";
    let i = 0;
    waitingList.map((list) => {
      list.map((data) => {
        if (data.levelOfPain == severity) {
          let time = data.patientCount * data.averageProcessTime;
          hospital = hospitals[i];
          displayData.set(hospital, time);
        }
      });
      i++;
    });
  };

  useEffect(() => {
    getHospitals();
    getStoredData();
  }, []);

  return (
    <SafeAreaView theme={theme} style={styles.viewStyle}>
      <Text style={styles.textStyle}>Our Suggested Hospitals:</Text>
      <ScrollView>
        {calculateWaitingTimes()}
        {[...displayData].sort().map((data) => {
          return (
            <Card style={styles.cardStyle}>
              <Card.Content>
                <Title style={styles.hospitalTextStyle}>{data[0]}</Title>
                <Text style={styles.waitingTimeTextStyle}>
                  Waiting Time: {data[1]}
                </Text>
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
  hospitalTextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  waitingTimeTextStyle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F44336",
  },
});

export default Hospital;
