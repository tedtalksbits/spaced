import * as React from "react";
import { Grid } from "./MainGridStyles";

interface MainGridProps {}

const MainGrid: React.FC<MainGridProps> = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default MainGrid;
