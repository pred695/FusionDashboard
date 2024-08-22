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
  SimpleGrid,
  Grid,
  GridItem,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import {
  FaHome,
  FaBars,
  FaUserCircle,
  FaBell,
} from 'react-icons/fa';

const Dashboard = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <ChakraProvider>
      <Grid minH="100vh" templateRows="auto 1fr" bg="gray.50">
        {/* Navbar */}
        <GridItem as="header" bg="black" w="full" p={4} color="white">
          <HStack justify="space-between">
            <HStack>
              <IconButton
                aria-label="Menu"
                icon={<FaBars />}
                variant="ghost"
                color="white"
                onClick={onToggle}
                fontSize="1.5rem"
              />
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Fusion
              </Text>
            </HStack>
            <HStack spacing={4}>
              <IconButton
                aria-label="Notifications"
                icon={<FaBell />}
                variant="ghost"
                fontSize="1.5rem"
              />
              <IconButton
                aria-label="Profile"
                icon={<FaUserCircle />}
                variant="ghost"
                fontSize="1.5rem"
              />
              <Button variant="ghost" color="white">
                Log Out
              </Button>
            </HStack>
          </HStack>
        </GridItem>

        <GridItem as="main" overflow="hidden">
          <Grid templateColumns={{ base: '1fr', md: isOpen ? '250px 1fr' : '1fr' }} gap={4}>
            {/* Side Navigation */}
            <Collapse in={isOpen} animateOpacity style={{ width: isOpen ? '250px' : '0' }}>
              <Box
                bg="black"
                p={6}
                color="white"
                position="relative"
                transition="width 0.3s ease"
                minH="100vh"
              >
                <VStack align="start" spacing={8}>
                  <Box w="full" textAlign="center">
                    <Avatar size="2xl" mb={4} />
                    <Text fontWeight="bold" fontSize="lg">
                      Welcome Back,
                    </Text>
                    <Text fontWeight="bold">Fahad Sheik Abdullah</Text>
                  </Box>

                  <VStack align="start" w="full" spacing={4}>
                    <Button
                      leftIcon={<FaHome />}
                      justifyContent="start"
                      w="full"
                      variant="ghost"
                      color="white"
                      fontWeight="bold"
                    >
                      Dashboard
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
                        justifyContent="start"
                        w="full"
                        variant="ghost"
                        color="white"
                        fontSize="md"
                      >
                        {item}
                      </Button>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </Collapse>

            {/* Main Content */}
            <Grid
              templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
              gap={4}
              p={4}
              bg="gray.50"
              flex="1"
            >
              {/* Profile Section (visible when sidebar is closed) */}
              <GridItem
                as="section"
                bg="white"
                p={4}
                borderRadius="lg"
                shadow="md"
                display={isOpen ? 'none' : 'block'}
                transition="display 0.3s ease"
              >
                <VStack align="center" spacing={4}>
                  <Avatar size="2xl" icon={<FaUserCircle fontSize="3rem" />} />
                  <Text fontWeight="bold" fontSize="lg">
                    Fahad Sheik Abdullah
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    B.Tech 2022 | Sem V
                  </Text>
                </VStack>
              </GridItem>

              {/* Announcements Section */}
              <GridItem
                as="section"
                bg="white"
                p={4}
                borderRadius="lg"
                shadow="md"
                gridColumn={{ base: 'span 2', md: 'span 1' }}
              >
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Announcements
                </Text>
                <VStack align="start" spacing={4}>
                  {Array(5)
                    .fill('')
                    .map((_, index) => (
                      <Box
                        key={index}
                        w="full"
                        p={4}
                        bg="gray.100"
                        borderRadius="lg"
                        shadow="sm"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        transition="all 0.3s ease"
                        _hover={{ transform: 'scale(1.02)' }}
                      >
                        <Box>
                          <Text fontWeight="bold">Department</Text>
                          <Text color="gray.500" fontSize="sm">
                            1 week, 6 days ago
                          </Text>
                          <Text>Quiz - By Prof. Atul Gupta</Text>
                        </Box>
                        <HStack spacing={2}>
                          <Button size="sm" variant="outline" colorScheme="blue">
                            Mark as read
                          </Button>
                          <IconButton
                            aria-label="Delete notification"
                            icon={<FaBars />}
                            variant="ghost"
                          />
                        </HStack>
                      </Box>
                    ))}
                </VStack>
              </GridItem>

              {/* Modules Section */}
              <GridItem
                as="section"
                bg="white"
                p={4}
                borderRadius="lg"
                shadow="md"
                gridColumn={{ base: 'span 2', md: 'span 1' }}
              >
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Modules
                </Text>
                <SimpleGrid columns={{ base: 2, md: 1 }} spacing={4}>
                  {[
                    'Academics',
                    'Program and Curriculum',
                    'Mess Management',
                    'Visitor\'s Hostel',
                    'Healthcare Center',
                    'Scholarship Portal',
                    'Complaint System',
                    'Placement Cell',
                  ].map((module, index) => (
                    <Box
                      key={index}
                      p={6}
                      bg="gray.100"
                      borderRadius="lg"
                      shadow="sm"
                      textAlign="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: 'scale(1.02)', bg: 'gray.200' }}
                    >
                      <Text fontWeight="bold">{module}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </GridItem>
            </Grid>
          </Grid>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Dashboard;
