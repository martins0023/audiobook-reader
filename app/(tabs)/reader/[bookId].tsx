// app/(tabs)/reader/[bookId].tsx
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function DynamicReaderScreen() {
  const { bookId } = useLocalSearchParams();
  const navigation = useNavigation();

  // Function to show a simple menu when the "more options" button is pressed
  const showMoreOptions = () => {
    Alert.alert(
      "More Options",
      "You can add more functionality here, like settings, bookmarks, or sharing.",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <View className="flex-1 px-4 pt-4">
        {/* Header with back button and menu */}
        <View className="flex-row justify-between items-center">
          {/* Back button is now functional */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          {/* "More options" button is now functional */}
          <TouchableOpacity onPress={showMoreOptions}>
            <Feather name="more-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Book Cover and Title */}
        <View className="items-center my-8">
          <Image
            source={{ uri: `https://picsum.photos/300/400?random=${bookId}` }}
            className="w-48 h-64 rounded-xl shadow-lg"
          />
          <Text className="text-white text-2xl font-bold mt-4">The Last White Man</Text>
          <Text className="text-gray-400 text-sm">Mohsin Hamid</Text>
        </View>

        {/* Placeholder for the main book text */}
        <View className="flex-1 my-4 px-2">
          <ScrollView>
            <Text className="text-gray-300 text-base leading-relaxed">
              of small plates and share them. at least deserve some privacy to fully enjoy my ritual...
            </Text>
            {/* Repeat text for scrolling effect */}
            <Text className="text-gray-300 text-base leading-relaxed mt-4">
              at least two days a week I was forced to join my boss for lunch with clients, lawyers and other industry people.
            </Text>
            <Text className="text-gray-300 text-base leading-relaxed mt-4">
              I didn't like eating with others. Lunch was the crown jewel of the day and I preferred to enjoy it alone, not to mention the fact that these lunches with the team were boring, the conversations were about work and work only, and I liked to eat with music in my headphones.
            </Text>
          </ScrollView>
        </View>

        {/* Audio Player Controls */}
        <View className="bg-gray-900 rounded-3xl p-6 mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-gray-400">8:12</Text>
            <Text className="text-gray-400">-1:51</Text>
          </View>
          <View className="w-full h-1 bg-gray-800 rounded-full mb-4">
            <View className="w-1/2 h-full bg-white rounded-full"></View>
          </View>
          <View className="flex-row justify-around items-center">
            <TouchableOpacity className="p-2">
              <AntDesign name="reload1" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-3">
              <AntDesign name="stepbackward" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-4 bg-white rounded-full">
              <AntDesign name="pausecircle" size={32} color="#1c1c1e" />
            </TouchableOpacity>
            <TouchableOpacity className="p-3">
              <AntDesign name="stepforward" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
              <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
