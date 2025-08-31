import SplitText from "../animation/SplitText.jsx";
import PriceV1Data from "../../assets/jsonData/price/PriceV1Data.json";
import SinglePriceV1 from "./SinglePriceV1.js";
import { useState } from "react";

interface DataType {
  sectionClass?: string;
}

const PriceV1 = ({ sectionClass }: DataType) => {
  const [activeServiceId, setActiveServiceId] = useState(
    PriceV1Data[0]?.id || null
  );

  const handleMouseEnter = (id: number) => {
    setActiveServiceId(id);
  };

  const handleMouseLeave = () => {
    // Do nothing on mouse leave to keep the active item
  };

  return <></>;
};

export default PriceV1;
