import React from "react";
import { View, Button } from "react-native";

export default function LinksList({ navigation }) {

  return (
    <View style={{ padding: 50 }}>
        <Button
            title="Spong Bob"
            onPress={() => navigation.navigate('Player', { "urlVideo": "YtjEKQhaUUs" })}
            style={{ margin: 50 }}
        />
        <View style={{ height: 10 }}></View>
        <Button
            title="Street Fighter"
            onPress={() => navigation.navigate('Player', { "urlVideo": "SwPzuBj01AM" })}
        />
        <View style={{ height: 10 }}></View>
        <Button
            title="The king of fighters"
            onPress={() => navigation.navigate('Player', { "urlVideo": "E62RDgqtE7E" })}
        />
        <View style={{ height: 10 }}></View>
        <Button
            title="God of war"
            onPress={() => navigation.navigate('Player', { "urlVideo": "EE-4GvjKcfs" })}
        />
    </View>
  );
}