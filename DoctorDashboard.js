import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://yourbackend.com/get-patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-lg font-bold">Patient Records</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="border p-3 mb-3 rounded-lg">
            <Text className="font-bold">{item.name}</Text>
            <Text>Medical History: {item.history}</Text>
            <Button title="View Details" onPress={() => alert("Coming soon!")} />
          </View>
        )}
      />
    </View>
  );
}
