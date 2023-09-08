import { View, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import useStyles from "./ListFooter.styles";

const ListFooter = ({ page, totalPages, handlePagination }) => {
  const styles = useStyles();
  const firstPage = page === 1;
  const lastPage = page === totalPages;

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        disabled={firstPage}
        style={
          firstPage ? styles.paginationButtonDisabled : styles.paginationButton
        }
        onPress={() => handlePagination("left")}
      >
        <MaterialCommunityIcons name="chevron-left" />
      </TouchableOpacity>
      <View style={styles.paginationTextContainer}>
        <Text style={styles.paginationText}>{page}</Text>
      </View>
      <TouchableOpacity
        disabled={lastPage}
        style={
          lastPage ? styles.paginationButtonDisabled : styles.paginationButton
        }
        onPress={() => handlePagination("right")}
      >
        <MaterialCommunityIcons name="chevron-right" />
      </TouchableOpacity>
    </View>
  );
};

export default ListFooter;
