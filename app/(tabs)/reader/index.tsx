// app/(tabs)/reader/index.tsx
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as Speech from "expo-speech";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as FileSystem from 'expo-file-system';
import { useNavigation } from "expo-router";

// Removed the PDFJS import as it was causing module resolution and typing errors.
// This version focuses on reading .txt files for stability.

export default function ReaderScreen() {
  const [bookText, setBookText] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Function to handle file picking and text extraction
  const pickFile = async () => {
    try {
      setLoading(true);
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/plain", // Now only allows text files
        copyToCacheDirectory: true,
      });

      if (result.canceled === false && result.assets && result.assets[0].uri) {
        const fileUri = result.assets[0].uri;
        const fileType = result.assets[0].mimeType;
        let content = '';

        if (fileType === "text/plain") {
          content = await FileSystem.readAsStringAsync(fileUri);
          setBookText(content);
        } else {
          // This alert should not be reached since we are only allowing .txt files
          Alert.alert("Unsupported File Type", "Please select a TXT file.");
          setBookText(null);
        }
      }
    } catch (error) {
      console.error("Error picking file:", error);
      Alert.alert("Error", "Could not read the file. Please try again.");
      setBookText(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Text-to-Speech
  const handleSpeech = async () => {
    if (!bookText) {
      Alert.alert("No Book Loaded", "Please upload a book first.");
      return;
    }

    if (isSpeaking) {
      await Speech.stop();
      setIsSpeaking(false);
    } else {
      await Speech.speak(bookText, {
        onDone: () => setIsSpeaking(false),
        onStart: () => setIsSpeaking(true),
        onError: (e) => console.log(e),
      });
    }
  };

  const stopSpeech = async () => {
    await Speech.stop();
    setIsSpeaking(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <View className="flex-1 px-4 pt-4">
        {/* Header with back button */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Local Reader</Text>
          <Feather name="upload" size={24} color="white" onPress={pickFile} />
        </View>

        {/* Content Section */}
        {bookText ? (
          <ScrollView className="flex-1 my-4 px-2">
            <Text className="text-gray-300 text-base leading-relaxed">
              {bookText}
            </Text>
          </ScrollView>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white text-xl text-center">
              {loading ? "Loading..." : "Upload a book to start listening!"}
            </Text>
          </View>
        )}

        {/* Audio Player Controls */}
        <View className="bg-gray-900 rounded-3xl p-6 mb-4">
          <View className="flex-row justify-around items-center">
            <TouchableOpacity onPress={stopSpeech} className="p-3">
              <AntDesign name="pausecircleo" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-white rounded-full" onPress={handleSpeech}>
              <AntDesign
                name={isSpeaking ? "pausecircleo" : "playcircleo"}
                size={32}
                color="#1c1c1e"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
