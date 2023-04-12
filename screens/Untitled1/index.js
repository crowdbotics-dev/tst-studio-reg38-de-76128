import { Pressable } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { FlatList } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <Pressable><ScrollView contentContainerStyle={{
        backgroundColor: '#f0f0f1',
        padding: 10,
        position: 'relative',
        flex: 1
      }}><FlatList style={styles.AsgGWECA} renderItem={({
          item
        }) => <View style={styles.TMBHnwmm}></View>} ItemSeparatorComponent={() => <View style={styles.IXWwlUgO} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><RadioGroup style={styles.bWEbSoHQ} radioButtons={[{
          id: "1",
          label: "Option 1",
          value: "option1"
        }, {
          id: "2",
          label: "Option 2",
          value: "option2"
        }]} layout="column"></RadioGroup></ScrollView></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  AsgGWECA: {
    position: "absolute",
    width: 100,
    height: 150
  },
  TMBHnwmm: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  IXWwlUgO: {
    backgroundColor: "#000000",
    height: 1
  },
  bWEbSoHQ: {
    width: 160,
    height: 90,
    position: "absolute",
    left: 170,
    top: 100
  }
});
export default Untitled1;