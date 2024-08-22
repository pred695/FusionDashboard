import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import {
  FaHome,
  FaBars,
  FaUserCircle,
} from 'react-icons/fa';

const Dashboard = () => {
  // Sidebar state to manage collapse/expand
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <ChakraProvider>
      <Flex minH="100vh" bg="gray.50">
        {/* Side Navigation */}
        <Box
          bg="black"
          w={isSidebarOpen ? '250px' : '80px'}
          p={isSidebarOpen ? 6 : 2}
          color="white"
          transition="width 0.3s ease"
          position="relative"
        >
          <VStack align="start" spacing={8}>
            <HStack w="full" justify="space-between" mb={isSidebarOpen ? 4 : 0}>
              {isSidebarOpen && (
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  Fusion
                </Text>
              )}
              <IconButton
                aria-label="Menu"
                icon={<FaBars />}
                variant="ghost"
                color="white"
                onClick={toggleSidebar}
                fontSize="1.5rem"
              />
            </HStack>

            {isSidebarOpen && (
              <Box w="full" textAlign="center">
                <Avatar size="2xl" mb={4} />
                <Text fontWeight="bold" fontSize="lg">
                  Welcome Back,
                </Text>
                <Text fontWeight="bold">Fahad Sheik Abdullah</Text>
              </Box>
            )}

            <VStack align={isSidebarOpen ? 'start' : 'center'} w="full" spacing={4}>
              <Button
                leftIcon={<FaHome />}
                justifyContent={isSidebarOpen ? 'start' : 'center'}
                w="full"
                variant="ghost"
                color="white"
                fontWeight="bold"
              >
                {isSidebarOpen && 'Dashboard'}
              </Button>
              {[
                'Academics',
                'Program and Curriculum',
                'Mess Management',
                'Visitor\'s Hostel',
                'Healthcare Center',
                'Scholarship Portal',
                'Complaint System',
                'Placement Cell',
                'Department Portal',
              ].map((item, index) => (
                <Button
                  key={index}
                  justifyContent={isSidebarOpen ? 'start' : 'center'}
                  w="full"
                  variant="ghost"
                  color="white"
                  fontSize="md"
                >
                  {isSidebarOpen && item}
                </Button>
              ))}
            </VStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p={4}>
          <HStack justify="space-between" mb={6}>
            <Text fontSize="3xl" fontWeight="bold">
              Dashboard
            </Text>
            <HStack spacing={4}>
              <IconButton
                aria-label="Profile"
                icon={<FaUserCircle />}
                variant="ghost"
                fontSize="1.5rem"
              />
              <Button variant="ghost">Log Out</Button>
            </HStack>
          </HStack>

          {/* Dashboard content goes here */}
          <Box>
            <Text>Welcome to your dashboard! Here you can see the announcements and access modules.</Text>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Dashboard;
