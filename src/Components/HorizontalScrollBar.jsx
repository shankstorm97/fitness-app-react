import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RigthArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          title={item.id || item}
          itemID={item.id || item}
          m="0 40px"
        >
          {/* {item} */}
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
