import { useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExpoJamLog, { Level } from "expo-jam-log";

ExpoJamLog.bootstrap();

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.Info);
  const [message, setMessage] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>JamLog Example</Text>

        <Group name="Message">
          <TextInput
            style={styles.textInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Message"
          />
        </Group>

        <Group name="Level">
          <View style={styles.radioGroup}>
            {Object.values(Level).map((level) => (
              <TouchableOpacity
                key={level}
                style={styles.radioOption}
                onPress={() => setSelectedLevel(level)}
              >
                <View
                  style={[
                    styles.radioCircle,
                    selectedLevel === level && styles.radioSelected,
                  ]}
                />
                <Text style={styles.radioText}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Group>

        <Button
          title="Log to Jam"
          onPress={() => ExpoJamLog.log(message, selectedLevel)}
          disabled={message.trim() === ""}
        />

        <Button
          title="Log to Console"
          onPress={() => console[selectedLevel](message)}
          disabled={message.trim() === ""}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
  levelButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  textInput: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  radioGroup: {
    gap: 10,
  },
  radioOption: {
    flexDirection:  "row",
    gap: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  radioSelected: {
    borderColor: "#007AFF",
    backgroundColor: "#007AFF",
  },
  radioText: {
    fontSize: 16,
  },
};
