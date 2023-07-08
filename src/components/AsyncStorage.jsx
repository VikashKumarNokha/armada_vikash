import AsyncStorage from '@react-native-async-storage/async-storage';

 export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('orderdata_key', jsonValue);
    } catch (e) {
      // saving error
      console.log("err", e);
    }
  };

 export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('orderdata_key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log("err", e)
    }
  };