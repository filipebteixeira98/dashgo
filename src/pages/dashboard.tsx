import { Flex } from '@chakra-ui/react'

import { Header } from '../components/Form/Header'
import { Sidebar } from '../components/Form/Sidebar'

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        maxWidth={1480}
        w="100%"
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar />
      </Flex>
    </Flex>
  )
}