import * as SecureStore from "expo-secure-store";

const createTokenCache = () => {
  return {
    getToken: async (key) => {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    saveToken: async (key, token) => {
      try {
        return SecureStore.setItemAsync(key, token);
      } catch (err) {
        return;
      }
    },
  };
};

export default createTokenCache();
