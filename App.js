import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  // ================= Task 1 ======================

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  // ================== Task 2 =======================

  const [text, setText] = useState("");

  // ================== Task 3 ======================

  const [bgColor, setBgColor] = useState("white");

  const changeBackGroundColor = () => {
    setBgColor((prevColor) => {
      switch (prevColor) {
        case "white":
          return "blue";
        case "blue":
          return "green";
        case "green":
          return "white";
        default:
          return "white";
      }
    });
  };

  // ===================== Task 4 ========================

  const [textList, setTextList] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (textList.trim() !== "") {
      setItems([...items, textList]);
      setTextList("");
    }
  };

  // ==================== Task 5 =========================

  const [imageUrl, setImageUrl] = useState('');
  const [displayImage, setDisplayImage] = useState(null);

  const handleDownload = () => {
    setDisplayImage(imageUrl);
  };

  return (
    // ==================== Task 1 =========================

    // <View style={styles.container}>
    //   <Text style={styles.text}>{count}</Text>
    //   <Button title={'Збільшити'} onPress={increment} />
    //   <Button title={'Зменьшити'} onPress={decrement} />
    //   <StatusBar style="auto" />
    // </View>

    // ===================== Task 2 =========================

    //    <View style={styles.container}>
    //     <TextInput style={styles.input}
    //     placeholder='Введіть текст'
    //     onChangeText={(value) => setText(value)} />
    //     <Text style={styles.text}>
    //       {text ? text : 'Введіть текст'}
    //     </Text>
    //    <StatusBar style="auto" />
    //  </View>

    // ===================== Task 3 =========================

    // <View style={[styles.container, {backgroundColor: bgColor}]}>
    //   <Button title="Змінити фон" onPress={changeBackGroundColor} />
    //   <StatusBar style="auto" />
    // </View>

    // =================== Task 4 ====================

    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Введіть текст"
    //     value={textList}
    //     onChangeText={setTextList}
    //   />
    //   <Button title="Додати" onPress={addItems} />
    //   <FlatList
    //     data={items}
    //     renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
    //     keyExtractor={(item, index) => index.toString()}
    //   />
    //   <StatusBar style="auto" />
    // </View>

    // =================== Task 5 ========================

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введіть посилання на зображення"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <Button title="Завантажити" onPress={handleDownload} />
      {displayImage && (
        <Image
        source={{ uri: displayImage }}
        style={styles.image}
        resizeMode="contain"
        />
      )}
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  text: {
    fontSize: 24,
    color: "#315114",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,

    marginBottom: 20,
    paddingHorizontal: 8,
  },
  item: {
    fontSize: 24,
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  placeholder: {
    fontSize: 24,
  },
});
