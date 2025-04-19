import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
  } catch (e) {
    console.log(e, "ERROR GETTING STORAGE DATA");
  }
};

export const setStorage = async (key: string, value: string | object) => {
  try {
    const valueToStore =
      typeof value === "object" ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, valueToStore);
  } catch (e) {
    console.log(e, "ERROR SETTING STORAGE DATA");
  }
};

export const removeStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e, "ERROR REMOVING STORAGE DATA");
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e, "ERROR CLEARING STORAGE DATA");
  }
};

export const getStorageKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.log(e, "ERROR GETTING STORAGE KEYS");
  }
};
