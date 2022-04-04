import React from "react";
import { MainWrapper } from "./WrapperStyles";

const Wrapper: React.FC = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
