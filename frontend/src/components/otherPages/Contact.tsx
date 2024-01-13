import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box p={8}>
            <Heading mb={4}>Contact Us</Heading>
            <Text mb={6}>
                We're here to help! Feel free to reach out to us using any of the following methods:
            </Text>

            <Flex direction="column">
                <Box mb={4}>
                    <Text fontWeight="bold">Email:</Text>
                    <Link href="mailto:examplecontact@kanbanboard.com">example-contact@kanbanboard.com</Link>
                </Box>

                <Box mb={4}>
                    <Text fontWeight="bold">Phone:</Text>
                    <Text>+EX (123) 456-7890</Text>
                </Box>

                <Box mb={4}>
                    <Text fontWeight="bold">Address:</Text>
                    <Text>123 Example Kanban Street, Board City</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Contact;