import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { DefaultTheme, Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

function Severity({ navigation, route }) {
  const suggestHospitals = (severity) => {
    // sessionStorage.setItem("severity", severity);
    // ReactDOM.render(<Hospital />, document.getElementById("root"));
  };

  return (
    <SafeAreaView theme={theme}>
      <Appbar.Header>
        <Appbar.Content title="Emergency Booking" subtitle="Select severity:" />
      </Appbar.Header>
      <View style={styles.iconView}>
        <Icon
          name="sentiment-very-satisfied"
          size={60}
          color="#006300"
          style={styles.iconStyle}
        />
        <Icon
          name="sentiment-satisfied-alt"
          size={60}
          color="#ADFF2F"
          style={styles.iconStyle}
        />
        <Icon
          name="sentiment-satisfied"
          size={60}
          color="#CCCC00"
          style={styles.iconStyle}
        />
        <Icon
          name="sentiment-dissatisfied"
          size={60}
          color="#FF8C00"
          style={styles.iconStyle}
        />
        <Icon
          name="sentiment-very-dissatisfied"
          size={60}
          color="#FF0000"
          style={styles.iconStyle}
        />
      </View>
    </SafeAreaView>
  );
}

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
    paddingTop: 70,
    marginHorizontal: 50,
    alignItems: "center",
  },
});

export default Severity;
