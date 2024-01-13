import React from "react";
import { Box, Text, VStack, Link } from "@chakra-ui/react";
import { BsInfoCircle, BsCardChecklist, BsPeople, BsBox } from "react-icons/bs";

function Info() {
    return (
        <VStack spacing={8} align="center" mt={8}>

            <Text fontSize="2xl" fontWeight="bold">
                Welcome to Kanballin!
            </Text>
            <Box>
                <BsInfoCircle size={64} color="#4A5568" />
            </Box>
            <Text fontSize="md" color="gray.600" textAlign="center">
                Kanballin is a powerful Kanban board application designed to streamline your project management and collaboration.
            </Text>
            <VStack spacing={8} align="left" width="80%">
                <Box>
                    <BsCardChecklist size={32} color="#3498db" />
                    <Text fontSize="lg" fontWeight="bold" mt={3}>
                        Simplify Task Management
                    </Text>
                    <Text>
                        Organize your tasks using Kanban boards, making it easy to track progress and manage work efficiently.
                    </Text>
                </Box>
                <Box mt={2}>
                    <BsPeople size={32} color="#e74c3c" />
                    <Text fontSize="lg" fontWeight="bold" mt={3}>
                        Collaborate with Your Team
                    </Text>
                    <Text>
                        Invite team members, assign tasks, and collaborate seamlessly to achieve project goals together.
                    </Text>
                </Box>
                <Box mt={2}>
                    <BsBox size={32} color="#f39c12" />
                    <Text fontSize="lg" fontWeight="bold" mt={3}>
                        Customizable Workflows
                    </Text>
                    <Text>
                        Tailor your Kanban boards to fit your unique workflows. Customize columns and labels for ultimate flexibility.
                    </Text>
                </Box>
            </VStack>
            <Text fontSize="md" color="gray.600" textAlign="center">
                Get started today by creating your first Kanban board and experience a new level of project management.
            </Text>
            <Link href="/create-board" color="#3498db" fontSize="lg" fontWeight="bold">
                Create Your First Board
            </Link>
        </VStack>
    );
}

export default Info;
