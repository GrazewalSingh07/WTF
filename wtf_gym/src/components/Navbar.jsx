import { Box,Button,Container,HStack,Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../public/logo.png"


export const Navbar = () => {
  return (
   <Container   background= "linear-gradient(to right,maroon,black)" maxW="container.2xl" margin="auto" >
     <HStack background= "none" margin="auto" p="1rem"  justifyContent="space-between" width="95%">
      <Image src={logo}/>
        <HStack  background= "none">
          <Button _hover={{color:"white" }}  color="grey" fontFamily="sans-serif" fontWeight={300} fontSize="1.2rem"variant="ghost">Fitness</Button>
          <Button _hover={{color:"white"}} color="grey" fontFamily="sans-serif" fontWeight={300} fontSize="1.2rem" variant="ghost">Nutrition</Button>
          <Button _hover={{color:"white"}} color="grey" fontFamily="sans-serif" fontWeight={300} fontSize="1.2rem" variant="ghost">Gyms</Button>
          <Button _hover={{color:"white"}} color="grey" fontFamily="sans-serif" fontWeight={300} fontSize="1.2rem"variant="ghost">Become WTF Partner</Button>
          <Button _hover={{color:"white"}} color="grey"fontFamily="sans-serif" fontWeight={300} fontSize="1.2rem" variant="ghost">About Us</Button>
          <Button _hover={{color:"white"}} color="grey"fontFamily="sans-serif" fontWeight={300}  fontSize="1.2rem" colorScheme="red">Login</Button>
        </HStack>
     </HStack>
   </Container>
  )
}
