import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            SWIFTSHOP
          </Typography>
          <div>
          "SwiftShop Ecommerce Cloth App" is a comprehensive and user-centric mobile application designed to revolutionize your 
          shopping experience. With its intuitive design and cutting-edge features, SwiftShop provides an exceptional platform for purchasing clothing and fashion items with ease and convenience.
          Our app offers an extensive range of clothing options, from stylish apparel to 
          trendy accessories, ensuring that you stay in vogue with the latest fashion trends. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            64 Downtown, Baner, MH 411045
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: swiftshop@gmail.com
          </Typography>
          <Typography mb="30px">(981)4538675</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
