import { Text, View } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "../textInput/TextInput";

const FormField = ({
  name,
  width,
  maxLength,
  counter = false,
  ...otherProps
}) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <View
      style={{
        alignSelf: "center",
        width: width,
      }}
    >
      <TextInput
        errorMessage={touched[name] && errors[name] ? errors[name] : undefined}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        maxLength={maxLength}
        {...otherProps}
      />

      {counter && (
        <Text
          style={{
            alignSelf: "flex-end",
            fontSize: 12,
            marginRight: 10,
          }}
        >
          {values[name].length}/{maxLength}
        </Text>
      )}
    </View>
  );
};

export default FormField;
