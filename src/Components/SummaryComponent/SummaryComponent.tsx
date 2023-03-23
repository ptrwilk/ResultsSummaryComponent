import styles from "./styles.module.css";
import items from "../../data.json";
import {
  Box,
  Button,
  List,
  ListItem,
  SvgIcon,
  Typography,
} from "@mui/material";

import Icon from "../Icon";

const SummaryComponent = () => {
  return (
    <Box className={styles["box"]}>
      <Typography variant="h5" className={styles["summary"]}>
        Summary
      </Typography>
      <List className={styles["items"]}>
        {items.map(({ category, score, icon }, key) => (
          <ListItem
            key={key}
            className={`${styles["item"]} ${styles["item-margin"]} ${
              styles[`item-${category}`]
            }`}
          >
            <Box className={styles["item-icon-name"]}>
              <Icon name={icon} />
              <Typography
                className={`${styles["item-name"]} ${
                  styles[`item-name-${category}`]
                }`}
                variant="body1"
              >
                {category}
              </Typography>
            </Box>
            <Box className={styles["item-score"]}>
              <Typography className={styles["item-score-score"]}>
                {score}
              </Typography>
              <Typography className={styles["item-score-separator"]}>
                /
              </Typography>
              <Typography className={styles["item-score-hundred"]}>
                100
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Button className={styles["btn"]}>Continue</Button>
    </Box>
  );
};

export default SummaryComponent;
