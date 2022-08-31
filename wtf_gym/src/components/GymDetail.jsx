import { Box, Button, Container, Heading, HStack, Image, Stack,  Text  } from '@chakra-ui/react'
import { Carousel } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import 'antd/dist/antd.css';
import { getdata } from '../Redux/GYMDetail/action'
import { getdata as getdata2 } from '../Redux/App/action'
import { Footer } from './Footer'
 
export const GymDetail = () => {
    const [coverImage,setCoverImage]=useState("https://www.wednesdaymorningcoffee.com/wp-content/uploads/2019/05/Banner-1-1.jpg")
    const {user_id}=useParams()
    const [curr,setcurr]=useState(null)
    const dispatch= useDispatch()
    const data= useSelector((state)=>state.detailReducer.data)
    const data2= useSelector((state)=>state.AppReducer.data)
    
    useEffect(()=>{
        dispatch(getdata(user_id))
        dispatch(getdata2())
        let temp=data2.find((el)=>{
           return el.user_id==user_id
        })
        setcurr(temp)
      },[])


  useEffect(()=>{
    let temp=data2.find((el)=>{
        if(el?.cover_image){
            setCoverImage(el.cover_image)
        }
       return el.user_id==user_id
    })
    setcurr(temp)
  },[user_id])
 
  return (
   <Container maxW="LARGE" margin="auto">
        <Container  height="50%" maxW="container.lg">
                <Carousel autoplay>
                <div style={{backgroundColor:"none", height:"50%"}}>
                <Image margin="auto"  height="50%"width="100%" src={coverImage}/>
                </div >
                <div style={{backgroundColor:"none", height:"50%"}}>
                <Image margin="auto"  height="50%" width="100%"src={coverImage}/>
                </div >
                <div style={{backgroundColor:"none",height:"50%"}}>
                <Image margin="auto"  height="50%" width="100%" src={coverImage}/>
                </div >
                <div style={{backgroundColor:"none",height:"50%"}}>
                <Image margin="auto"  height="50%" width="100%" src={coverImage}/>
                </div>
        </Carousel>
            
        </Container>
        <Container p="5rem" color="white" display="flex" justifyContent="space-between" maxW="container.2xl">
            <Stack spacing="auto" color="white" width="50%">
                <Heading p="1rem" color="white">{curr?.gym_name}</Heading>
                <HStack color="white" backgroundColor="none"  p="1rem" fontSize="larger" >
                    < Text textAlign="center" backgroundColor="none" >{curr?.address2},</ Text >
                    < Text textAlign="center"  backgroundColor="none" >{curr?.adddress1},</ Text >
                    < Text textAlign="center"  backgroundColor="none" >{curr?.city}</ Text>
                </HStack>
                <Stack p="2rem">
                    <Heading fontWeight={400} color="white">Description</Heading>
                    < Text fontSize="large" color="white">{curr?.description?curr?.description:"Best Gym"}</ Text >
                </Stack>
                <Stack p="2rem">
                    <Heading fontWeight={400} color="white">Facilities</Heading>
                    <HStack spacing={6}>
                        <Stack>
                        <Box width="5rem" height="5rem"  background="#920909"></Box>
                        < Text fontSize="large" textAlign="center">AC</ Text >
                        </Stack>
                        <Stack>
                        <Box width="5rem" height="5rem" background="#920909"></Box>
                        < Text fontSize="large" textAlign="center">Parking</ Text >
                        </Stack>
                    </HStack>
                </Stack>
                <Stack p="2rem">
                    <Heading fontWeight={400} color="white">Why to choose WTF?</Heading>
                    <HStack spacing={6}>
                         <Stack  justifyContent="center">
                            <Box borderRadius="1rem" width="10rem" height="10rem"  background="#920909">
                            <Text p="1rem" fontSize="large" textAlign="center" background="#920909">Earn WTF rewards coin</ Text >
                            </Box>
                       
                        </Stack>
                        <Stack  justifyContent="center">
                            <Box borderRadius="1rem"width="10rem" height="10rem"  background="#920909">
                            < Text  p="1rem" fontSize="large"textAlign="center" background="#920909">Fully vaccinated Staff</ Text >
                        </Box> 
                        </Stack>
                        <Stack justifyContent="center">
                            <Box  borderRadius="1rem" width="10rem" height="10rem"background="#920909">
                            < Text  p="1rem" fontSize="large" textAlign="center" background="#920909">Track Fitness Journey</ Text>
                        </Box> 
                        </Stack>
                        <Stack  justifyContent="center" >
                            <Box borderRadius="1rem" width="10rem" height="10rem" background="#920909">
                            < Text  p="1rem" fontSize="large" textAlign="center" background="#920909">Pocket Friendly Membership</ Text >
                        </Box> 
                        </Stack>

                    </HStack>
                </Stack>
                <Stack p="2rem" spacing={10}>
                    <Heading fontWeight={400} color="white">How it works</Heading>
                    <HStack>
                        <Image height="5rem" src="https://www.transparentpng.com/thumb/boy/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png"/>
                        < Text fontSize="large" >Pick membership start date and complete your ubscription process by clicking Buy Now below </ Text>

                    </HStack>
                    <HStack>
                        <Image height="5rem "src="https://www.transparentpng.com/thumb/boy/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png"/>
                        < Text fontSize="large" textAlign="center">A dedicated general trainer will be assigned after you have taken your subscription</ Text>
                        
                    </HStack>
                    <HStack>
                        <Image height="5rem" src="https://www.transparentpng.com/thumb/boy/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png"/>
                        < Text  fontSize="large"textAlign="center">Explore WTF and start your fitness journey </ Text >
                        
                    </HStack>
                </Stack>
            </Stack>
            <Box p="1rem" width="40%" color="white">
                <Button height="5rem" width="10rem" right={0} position="absolute" mr="2rem"  background="#920909">{curr?.rating} Rating</Button>
                <Container backgroundColor="darkgrey" mt="10rem" maxW="container.2xl">
                    <Heading fontWeight={400} p="2rem"  backgroundColor="darkgrey" color="white">Choose Membership</Heading>
                     
                        {data?.map((el,index)=>{
                        return <HStack key={el.user_id} borderRadius="1rem" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  spacing="auto" m="1rem" p="2rem"  backgroundColor={index==0?"pink":index==1?"teal":index==2?"maroon":index==3?"lightblue":index==4?"green":"purple"} >
                                <Stack   background="none">
                                    < Text  fontSize="large" textAlign="center"  background="none">PLAN {index+1} </ Text >   
                                     <Text  background="none" fontSize="large" fontWeight={700}>{el.plan_name}</Text>
                                </Stack>
                                <Heading fontSize="large" background="none"  color="white" >{el.original_price}</Heading>
                                 
                        </HStack>
                    })}
                     
                </Container>
            </Box>
        </Container>
        <Container p="8rem" backgroundColor="#181818" display="flex" justifyContent="space-around" margin="auto"  maxW="container.2xl">
                    <Button width="15rem" height="5rem" colorScheme="red">Book Now</Button>
                    <Button _hover={{variant:"outine"}} width="15rem"height="5rem" variant="outline" >Book 1 Day Free Session</Button>
        </Container>
        <Footer/>
   </Container>
  )
}
