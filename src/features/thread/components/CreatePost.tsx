import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  FormLabel,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React from "react";
import useThreads from "../hooks/useThread";
import { IoCloseCircle } from "react-icons/io5";

const CreatePost: React.FC = () => {
  const { handleChange, handleSubmit, data, setData } = useThreads();
  console.log("data", data);
  return (
    <Card p={4} mt={2}>
      <Input
        placeholder="Whats Is Happening!!"
        h={"50px"}
        border={"none"}
        name="content"
        onChange={handleChange}
        value={data.content!}
        isRequired={true}
      />
      <Divider my={2} />
      <Flex justify={"space-between"}>
        <Box m={2} display={"flex"} gap={5} position="relative">
          {!data.image && (
            <>
              <FormLabel
                htmlFor="image"
                cursor={"pointer"}
                _hover={{ color: "green" }}
              >
                <LuImagePlus size={25} />
              </FormLabel>
              <Input
                id="image"
                display={"none"}
                type="file"
                name="image"
                onChange={handleChange}
                cursor={"pointer"}
              />
            </>
          )}
          {data.image && (
            <Box position="relative" display="inline-block">
              <IconButton
                icon={<IoCloseCircle />}
                bg="none"
                isRound={true}
                size="sm"
                ml={-3}
                mt={-3}
                variant="solid"
                color="red.600"
                fontSize="28px"
                _hover={{ bg: "none", color: "white" }}
                onClick={() =>
                  setData((prevData) => ({
                    ...prevData,
                    image: null,
                  }))
                }
                aria-label=""
                position="absolute"
                top="0"
                left="0"
                zIndex="1"
              />
              <Image src={URL.createObjectURL(data.image)} h="120px" />
            </Box>
          )}
        </Box>
        <Box>
          <Button
            type="submit"
            bg="green"
            textColor="white"
            onClick={handleSubmit}
            rounded={15}
            _hover={{ bg: "green.800" }}
            // h={"40px"}
          >
            Post
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePost;
