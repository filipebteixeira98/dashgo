import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex
        maxWidth={1480}
        w="100%"
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Create user</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Password" />
              <Input name="password_confirmation" type="password" label="Confirm password" />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}