import { Box, Text, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {BsQuestionCircle } from "react-icons/bs";
import "../../componentStyles/BottomBarStyle.css";

const BottomBarComponent = () => {
    return (
        <footer className="bottom-bar">
            <Flex align="center" justify="space-between" p={4}>
                <Box>
                    <Text fontSize="sm" color="gray.500">
                        © 2024 Kanballin. All rights reserved.
                    </Text>
                </Box>
                <Flex>
                    <Link to="/contact">
                        <BsQuestionCircle size={24} />
                    </Link>
                </Flex>
            </Flex>
        </footer>
    );
};

export default BottomBarComponent;
