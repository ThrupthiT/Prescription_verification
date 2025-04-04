import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-5">Login as:</Text>
      
      <TouchableOpacity 
        className="bg-blue-500 px-6 py-3 rounded-lg mb-3"
        onPress={() => navigation.navigate("UploadScreen")}
      >
        <Text className="text-white font-semibold">Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="bg-green-500 px-6 py-3 rounded-lg"
        onPress={() => navigation.navigate("DoctorDashboard")}
      >
        <Text className="text-white font-semibold">Doctor</Text>
      </TouchableOpacity>
    </View>
  );
}
