import { Button } from "@rneui/base";

import useStyles from "./Button.styles";

const AppButton = ({
  title,
  buttonStyle = {},
  titleStyle = {},
  ...otherProps
}) => {
  const styles = useStyles();
  return (
    <Button
      title={title}
      buttonStyle={[styles.container, buttonStyle]}
      titleStyle={[styles.text, titleStyle]}
      {...otherProps}
    />
  );
};

export default AppButton;
