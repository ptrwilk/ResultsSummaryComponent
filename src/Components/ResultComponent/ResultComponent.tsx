import styles from "./styles.module.css";
import { Box, Typography } from "@mui/material";

const ResultComponent = () => {
  return (
    <Box className={styles["box"]}>
      <Typography variant="h5" className={styles["your-result"]}>
        Your Result
      </Typography>
      <Box className={styles["circle"]}>
        <Typography variant="h1" className={styles["circle-number"]}>
          76
        </Typography>
        <Typography variant="body1" className={styles["circle-second-number"]}>
          of 100
        </Typography>
      </Box>
      <Typography variant="h4" className={styles["great"]}>
        Great
      </Typography>
      <Typography variant="body1" className={styles["text"]}>
        You scored higher than 65% of the people who have taken these tests.
      </Typography>
    </Box>
  );
};

export default ResultComponent;
