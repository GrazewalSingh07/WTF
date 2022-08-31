 import { Container, Stack ,Image, List,HStack,Button, Heading, UnorderedList, ListItem, ListIcon, Text} from '@chakra-ui/react'
import React from 'react'
import logo from "../public/logo.png"
import {FaInstagram} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {MdLocationPin} from "react-icons/md"
import {BsFillPatchCheckFill} from "react-icons/bs"
import {MdOutlineCall} from "react-icons/md"
import {AiFillMail} from "react-icons/ai"
import LOGOWHITE from "../public/LOGOWHITE.png"
 export const Footer = () => {
   return (
    <Container p="5rem" justifyContent="space-around" display="flex" maxW="container.2xl">
      <Stack justifyContent="center" textAlign="center" width="25%">
         <Image width="10rem" src={LOGOWHITE}/>
        <HStack spacing={7} >
          <Image width="2rem" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"/>
          <Image width="2rem"src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"/>
          <Image width="2rem"src="https://assets.stickpng.com/images/58e91afdeb97430e81906504.png"/>
        </HStack>
      </Stack>
      <Stack width="25%">
        <Heading fontSize="x-large" fontWeight={600} color="white">Quick Links</Heading>
        <List color="white" spacing={3}>
        
          <ListItem>
            <HStack> 
            <Text fontSize="LARGE">About</Text></HStack>
          </ListItem>
          <ListItem>
           <HStack>  
          <Text fontSize="LARGE">FAQs</Text></HStack>
          </ListItem>
          <ListItem>
            <HStack>
               
          <Text fontSize="LARGE">Privacy Policy</Text>
            </HStack>
          </ListItem>
           
          <ListItem>
           <HStack> 
           <Text fontSize="LARGE">WTF in News</Text></HStack>
          </ListItem>
          <ListItem>
          <HStack>
           
           <Text fontSize="LARGE">Terms & Conditions</Text>
          </HStack>
          </ListItem>
          <ListItem>
            <HStack>
            
           <Text fontSize="LARGE">Refund & Cancellation</Text>
            </HStack>
          </ListItem>
      </List>
      </Stack>
      
      <Stack width="25%">
        <Heading fontSize="x-large" fontWeight={600} color="white">Explore</Heading>
        <List color="white" spacing={3}>
        
          <ListItem>
            <HStack> 
            <Text fontSize="LARGE">Arenas</Text></HStack>
          </ListItem>
          <ListItem>
           <HStack> 
          <Text fontSize="LARGE">Studios</Text></HStack>
          </ListItem>
          <ListItem>
            <HStack>
              
          <Text fontSize="LARGE">Nutrition</Text>
            </HStack>
          </ListItem>
           
           
      </List>
      </Stack>
      <Stack width="25%">
        <Heading fontSize="x-large" fontWeight={600} color="white">Contact</Heading>
        <List color="white" spacing={3}>
        
          <ListItem>
            <HStack><ListIcon as={MdLocationPin} color='white' fontSize="2rem" />
            <Text fontSize="LARGE">Ro: S 1502, Amrapli Silicon city Sector 76, Noida Uttar Pradesh, India</Text></HStack>
          </ListItem>
          <ListItem>
           <HStack> <ListIcon as={MdLocationPin} color='white' fontSize="2rem" />
          <Text fontSize="LARGE">Ho.C-89, Ground Floor Sector 8, Noida, Uttar Pradesh, India</Text></HStack>
          </ListItem>
          <ListItem>
              <HStack>
                <ListIcon as={MdOutlineCall} color='white' fontSize="2rem" />
            <Text fontSize="LARGE">+919090639005</Text>
              </HStack>
          </ListItem>
           
          <ListItem>
            <HStack> <ListIcon as={AiFillMail} color='white' fontSize="2rem" />
            <Text fontSize="LARGE">Support@wtfup.me</Text>
            </HStack>
          </ListItem>
          
          
      </List>
      </Stack>
    </Container>
   )
 }
 