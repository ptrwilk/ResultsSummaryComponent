import styles from "./styles.module.css";
import ResultComponent from "../ResultComponent/ResultComponent";
import { Box } from "@mui/material";
import SummaryComponent from "../SummaryComponent/SummaryComponent";

const ResultsSummaryComponent = () => {
  return (
    <Box className={styles["box"]}>
      <ResultComponent />
      <SummaryComponent />
    </Box>
  );
};

export default ResultsSummaryComponent;
