import { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "@rneui/base";

import Loader from "../../../components/common/Loader";
import ListHeader from "../../../components/home/listHeader/ListHeader";
import ListFooter from "../../../components/home/listFooter/ListFooter";
import ProfileCard from "../../../components/cards/profileCard/ProfileCard";
import useFetch from "../../../hooks/useFetch";
import NotificationsButton from "../../../components/notificationsButton/NotificationsButton";
import DrawerScreen from "../../../components/drawerScreen/DrawerScreen";

const renderNotificationButton = () => <NotificationsButton />;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const {
    data,
    isLoading,
    error,
    page,
    handlePagination,
    resetPage,
    totalPages,
  } = useFetch(
    "/api/consumer/providers",
    activeCategoryId ? { categoryId: activeCategoryId } : {},
    true
  );

  const renderItem = ({ item }) => <ProfileCard profile={item} />;

  return (
    <DrawerScreen title="" headerRight={renderNotificationButton}>
      {isLoading ? (
        <Loader size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ rowGap: 5 }}
          ListHeaderComponent={
            <ListHeader
              headerText="Recommended"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeCategoryId={activeCategoryId}
              setActiveCategoryId={setActiveCategoryId}
              resetPage={resetPage}
            />
          }
          ListFooterComponent={
            <ListFooter
              page={page}
              totalPages={totalPages}
              handlePagination={handlePagination}
            />
          }
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
        />
      )}
    </DrawerScreen>
  );
};

export default Home;
