import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { DefaultTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import "react-native-gesture-handler";
import deviceStorage from "../services/deviceStorage";

const Severity = ({ navigation }) => {
  const suggestHospitals = async (severity) => {
    await deviceStorage.saveItem("severity", severity);
  };

  return (
    <SafeAreaView theme={theme}>
      <Text style={styles.textStyle}>Select severity:</Text>
      <View style={styles.iconView}>
        <Icon
          name="sentiment-very-satisfied"
          size={60}
          color="#006300"
          style={styles.iconStyle}
          onPress={() => {
            suggestHospitals("0");
            navigation.navigate("Hospital");
          }}
        />
        <Icon
          name="sentiment-satisfied-alt"
          size={60}
          color="#ADFF2F"
          style={styles.iconStyle}
          onPress={() => {
            suggestHospitals("1");
            navigation.navigate("Hospital");
          }}
        />
        <Icon
          name="sentiment-satisfied"
          size={60}
          color="#CCCC00"
          style={styles.iconStyle}
          onPress={() => {
            suggestHospitals("2");
            navigation.navigate("Hospital");
          }}
        />
        <Icon
          name="sentiment-dissatisfied"
          size={60}
          color="#FF8C00"
          style={styles.iconStyle}
          onPress={() => {
            suggestHospitals("3");
            navigation.navigate("Hospital");
          }}
        />
        <Icon
          name="sentiment-very-dissatisfied"
          size={60}
          color="#FF0000"
          style={styles.iconStyle}
          onPress={() => {
            suggestHospitals("4");
            navigation.navigate("Hospital");
          }}
        />
      </View>
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
  iconStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  iconView: {
    paddingTop: 40,
    marginHorizontal: 50,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
});

export default Severity;
