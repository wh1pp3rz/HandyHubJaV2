import { useFormikContext } from "formik";
import AppButton from "../button/Button";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} {...otherProps} />;
};

export default SubmitButton;
