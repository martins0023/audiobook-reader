// app/(tabs)/library/index.tsx
import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

// Placeholder data for genres and books
const genres = [
  {
    name: "Fantasy",
    color: "#B886F9",
    width: "w-1/2",
    height: "h-24",
    margin: "mb-2",
  },
  { name: "Sci-Fi", color: "#6A91FB", width: "w-[48%]", height: "h-24" },
  {
    name: "History",
    color: "#C6F2A5",
    width: "w-[48%]",
    height: "h-24",
    margin: "mb-2",
  },
  { name: "Psychology", color: "#F0C769", width: "w-[48%]", height: "h-24" },
  { name: "Romance", color: "#FF9B9B", width: "w-full", height: "h-24" },
  { name: "Business", color: "#FFA1A1", width: "w-full", height: "h-24" },
];

const newArrivals = [
  { id: "1", title: "Inotrix", author: "Lauren Groff", rating: 4.7 },
  { id: "2", title: "Great Circle", author: "Katherine Heiny", rating: 4.9 },
  { id: "3", title: "The Last White Man", author: "Mohsin Hamid", rating: 4.6 },
];

export default function LibraryScreen() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const trendingShortcuts = ["Messages", "Attachments", "People"];
  const recentSearches = ["exports", "reservation", "app ill"];

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      {isSearching ? (
        // Search Mode UI
        <View className="flex-1 px-4 pt-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity onPress={() => setIsSearching(false)}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <View className="flex-1 flex-row items-center  rounded-xl px-4 py-2">
              <Feather name="search" size={20} color="gray" />
              <TextInput
                className="flex-1 text-white ml-2"
                placeholder="Search for everything"
                placeholderTextColor="gray"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
              />
            </View>
          </View>
          
          <ScrollView className="mt-4">
            {/* Trending Shortcuts Section */}
            <Text className="text-gray-400 text-sm font-semibold mb-2">TRENDING SHORTCUTS</Text>
            <View className="flex-row flex-wrap space-x-2">
              {trendingShortcuts.map((item, index) => (
                <TouchableOpacity key={index} className="bg-purple-600/20 px-4 py-2 rounded-full mb-2">
                  <Text className="text-purple-300">{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Recent Searches Section */}
            <Text className="text-gray-400 text-sm font-semibold mt-6 mb-2">RECENT SEARCHES</Text>
            {recentSearches.map((item, index) => (
              <View key={index} className="flex-row items-center justify-between p-3 rounded-xl bg-gray-800/50 mb-2">
                <View className="flex-row items-center">
                  <Feather name="clock" size={16} color="gray" />
                  <Text className="text-white ml-3">{item}</Text>
                </View>
                <TouchableOpacity>
                  <Feather name="x" size={16} color="gray" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        // Main Library UI
        <ScrollView className="flex-1 px-4">
          {/* Header and Search */}
          <View className="flex-row items-center justify-between pt-4">
            <View>
              <Text className="text-gray-400 text-sm">Hey Anna!</Text>
              <Text className="text-white text-3xl font-bold">Books for you</Text>
            </View>
            <TouchableOpacity className="p-2" onPress={() => setIsSearching(true)}>
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Genre Categories */}
          <View className="my-6">
            <Text className="text-white text-lg font-semibold mb-2">Genres</Text>
            <View className="flex-row flex-wrap gap-2 justify-between items-start">
              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#B886F9] rounded-2xl p-4 justify-between"
              >
                <Text className="text-white text-lg font-semibold">Fantasy</Text>
                <Feather name="box" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#6A91FB] rounded-2xl p-4 justify-between"
              >
                <Text className="text-white text-lg font-semibold">Sci-Fi</Text>
                <Feather name="zap" size={20} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#C6F2A5] rounded-2xl p-4 justify-between"
              >
                <Text className="text-gray-950 text-lg font-semibold">
                  History
                </Text>
                <Feather name="bookmark" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#F0C769] rounded-2xl p-4 justify-between"
              >
                <Text className="text-gray-950 text-lg font-semibold">
                  Psychology
                </Text>
                <Feather name="users" size={20} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#FF9B9B] rounded-2xl p-4 justify-between"
              >
                <Text className="text-white text-lg font-semibold">Romance</Text>
                <Feather name="heart" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                className="w-[48%] h-24 bg-[#B886F9] rounded-2xl p-4 justify-between"
              >
                <Text className="text-white text-lg font-semibold">Business</Text>
                <Feather name="briefcase" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* New Arrivals Section */}
          <View className="my-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-lg font-semibold">
                New arrivals
              </Text>
              <Text className="text-blue-400 text-sm">
                See all
              </Text>
            </View>
            {newArrivals.map((book) => (
              <Link 
                key={book.id} 
                href={{
                  pathname: "/(tabs)/reader/[bookId]",
                  params: { bookId: book.id }
                }}
                asChild
              >
                <TouchableOpacity className="flex-row items-center mt-4 p-4 rounded-xl bg-gray-800">
                  {/* This is a placeholder for the book cover image */}
                  <Image
                    source={{
                      uri: `https://picsum.photos/100/120?random=${book.id}`,
                    }}
                    className="w-16 h-20 rounded-lg"
                  />
                  <View className="ml-4 flex-1">
                    <Text className="text-white font-semibold text-base">
                      {book.title}
                    </Text>
                    <Text className="text-gray-400 text-sm">{book.author}</Text>
                    <View className="flex-row items-center mt-1">
                      <AntDesign name="star" size={14} color="gold" />
                      <Text className="text-gray-400 ml-1 text-xs">
                        {book.rating}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="hearto" size={20} color="white" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
