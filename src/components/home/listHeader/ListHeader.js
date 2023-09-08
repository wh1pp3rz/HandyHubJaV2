import { memo } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, useTheme } from "@rneui/themed";

import useStyles from "./ListHeader.styles";
import useFetch from "../../../hooks/useFetch";
import AppIcons from "../../AppIcon";
import TextInput from "../../textInput/TextInput";
import TabButton from "../../tabButton/TabButton";

const ListHeader = memo(
  ({
    headerText,
    searchTerm,
    setSearchTerm,
    activeCategoryId,
    setActiveCategoryId,
    resetPage,
  }) => {
    const styles = useStyles();
    const { theme } = useTheme();
    const {
      data: categoriesData,
      isLoading: isLoadingCategories,
      error,
    } = useFetch("/api/consumer/categories");

    const categories = [{ id: null, name: "All" }, ...categoriesData];

    if (isLoadingCategories) {
      return null;
    }

    if (error) {
      return <Text>Error loading categories</Text>;
    }

    return (
      <View style={styles.searchContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Search Services..."
          rightIcon={
            <AppIcons
              name="search"
              onPress={() => alert("YES")}
              color={
                theme.mode === "dark" ? "rgba(255, 255, 255, 0.6)" : "#828282"
              }
            />
          }
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={
            theme.mode === "dark" ? "rgba(255, 255, 255, 0.6)" : "#828282"
          }
        />
        <Text style={styles.headerText} containerStyle={{ paddingLeft: 15 }}>
          {headerText}
        </Text>

        <View style={styles.tabsContainer}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TabButton
                title={item.name}
                active={activeCategoryId === item.id}
                onPress={() => {
                  setActiveCategoryId(item.id);
                  resetPage();
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: 12 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
);

export default ListHeader;
