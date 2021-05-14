import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceStorage = {
  async saveItem(key, value) {
    let jsonValue = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(key, jsonValue);
      return JSON.parse(jsonValue);
    } catch (error) {
      console.log(
        "Saving to Storage Error == " +
          error +
          jsonValue +
          "==========================="
      );
    }
  },
  async retrieveData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.log(
        "Retrieving from  Storage Error ==" +
          error +
          value +
          "==========================="
      );
    }
  },
  async removeValue(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log("remove value error == ", error);
    }
  },
};
export default deviceStorage;
