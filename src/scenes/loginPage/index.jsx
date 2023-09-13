import { 
    Box,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import Form from "./Form";


const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box 
                width="100%" 
                backgroundColor={theme.palette.background.alt} 
                padding="1rem 6%" 
                textAlign="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Truth-Free
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                padding="2rem"
                margin="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography 
                fontWeight="500" 
                variant="h5" 
                sx={{ marginBottom: "1.5rem" }}
                >
                    Welcome to Truth-Free, the world's "Vast Canopy" 
                    social media platform, where Truthers are always 
                    happy because they are free to tell the Truth without 
                    discrimination based on fact-checkers. Truth is free.
                </Typography>
                <Form />
            </Box>
        </Box>
    );
};

export default LoginPage;