import { getStorage, setStorage } from "./storage";

export const checkFirstLaunch = async (): Promise<boolean> => {
  try {
    const hasLaunched = await getStorage("hasLaunched");

    if (hasLaunched == null) {
      return true; // First launch
    }
    return false;
  } catch (err) {
    console.error("Failed to check first launch", err);
    return false;
  }
};

export const setFirstLaunchComplete = async (): Promise<void> => {
  try {
    await setStorage("hasLaunched", "true");
  } catch (err) {
    console.error("Failed to set first launch complete", err);
  }
};
