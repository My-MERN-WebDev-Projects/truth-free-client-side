import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Using CSS as a component: Styled Components 
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;