import {
  Box,
  VStack,
  Image,
  //Input,
  //Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";
//import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  //const navigate = useNavigate();

  // const handleAuth = () => {
  //   if (!inputs.email || !inputs.password) {
  //     alert("Please fill all the fields");
  //     return;
  //   }
  //   navigate("/");
  //   console.log("inputs", inputs);
  // };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src="/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram"
            //style={{ color: "white" }}
          />

          {!isLogin ? <Login /> : <Signup />}

          {/* ---------------- OR -------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="./google.png" w={5} alt="google logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex> */}

          <GoogleAuth prefix={!isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Already have an account?" : "Don't have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;

//3:06:36
