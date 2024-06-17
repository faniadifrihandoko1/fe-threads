import { Box, Button, Card, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const { handleChange, handleSubmit, form } = useUpdateUser();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Card pt={4} mt={2}>
        <Flex alignItems={"center"} gap={2} ml={4}>
          <IoMdArrowRoundBack cursor={"pointer"} onClick={() => navigate(-1)} />

          <Text my={1} fontSize={18} fontWeight="bold">
            Edit Profile
          </Text>
        </Flex>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Image
            src={
              typeof form.photo_cover === "string"
                ? form.photo_cover
                  ? form.photo_cover
                  : undefined
                : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            maxW="100%"
            w={"90%"}
            h={"200px"}
            borderRadius="20px"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              filter: isHovered ? "brightness(40%)" : "brightness(100%)",
            }}
          />
          <label htmlFor="photo_cover">
            <Box
              display={isHovered ? "block" : "none"}
              position="absolute"
              border={"1px solid white"}
              borderRadius={"50%"}
              p={2}
              bg={"white"}
              top="25%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={999}
            >
              <TiPencil size={40} />
            </Box>
          </label>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="photo_cover"
            name="photo_cover"
            type="file"
            onChange={handleChange}
          />
          <Box position={"relative"} bottom={"40px"}>
            <label htmlFor="profile-picture">
              <Image
                border="5px solid "
                borderColor={"white !important"}
                width="68px"
                height="68px"
                borderRadius="50%"
                src={
                  typeof form.photo_profile === "string"
                    ? form.photo_profile
                    : undefined
                }
                _hover={{
                  cursor: "pointer",
                  filter: "grayscale(100%)",
                }}
              />
              <Box
                top={"70%"}
                right={"5%"}
                _hover={{
                  cursor: "pointer",
                }}
                position={"absolute"}
                bg="white"
                border={"1px solid gray"}
                shadow={"lg"}
                rounded={"full"}
                p={1}
              >
                <TiPencil size={20} />
              </Box>
            </label>
          </Box>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="profile-picture"
            name="photo_profile"
            type="file"
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Username</Text>
          <Input
            w={"80%"}
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Full Name</Text>
          <Input
            w={"80%"}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderTop={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Email</Text>
          <Input
            w={"80%"}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={10}
          borderY={"1px solid darkgray"}
          px={5}
          py={2}
        >
          <Text w={"20%"}>Bio</Text>
          <Input
            w={"80%"}
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Write something about yourself"
          />
        </Box>
        <Box display={"flex"} justifyContent={"right"} px={5} py={2}>
          <Button
            bg={"green"}
            color={"white"}
            type="submit"
            onClick={handleSubmit}
          >
            Edit
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default EditProfile;
