import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-5 bg-white">
      <Text className="text-lg font-bold">Upload Prescription</Text>
      <Button title="Capture Prescription" onPress={pickImage} />
      {image && <Image source={{ uri: image }} className="w-40 h-40 mt-5" />}
    </View>
  );
}
