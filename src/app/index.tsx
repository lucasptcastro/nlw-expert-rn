import { FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { Header } from "@/components/Header";
import { View } from "react-native";
import { CategoryButton } from "@/components/CategoryButton";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState<string>();

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={10} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => setCategory(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
