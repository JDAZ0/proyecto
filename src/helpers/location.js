import * as Location from "expo-location";
import { Alert } from "react-native";
import * as Permissions from "expo-permissions";

export const getCurrentLocation = async () => {
  const response = { status: false, location: null };
  console.log("asdf");
  const resultPermissions = await Permissions.askAsync(Permissions.LOCATION);
  if (resultPermissions.status === "denied") {
    Alert.alert("debes dar permiso para la localizacion.");
    return response;
  }
  console.log("123");
  const position = await Location.getCurrentPositionAsync({});
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
  console.log("zxcv");
  response.status = true;
  response.location = location;
  console.log("response", response);
  return response;
};
