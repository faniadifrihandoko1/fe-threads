import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React from "react";
import useThreads from "../hooks/useThread";
// import { useFormik } from "formik";
// import { useMutation } from "react-query";
// import { axiosInstance } from "../lib/axios";
// import { useFetchThread } from "../features/threads/useFetchThread";

const CreatePost: React.FC = () => {
  const { handleChange, handleSubmit } = useThreads();
  //   const formik = useFormik({
  //     initialValues: {
  //       content: "",
  //       image: "",
  //     },
  //     onSubmit: () => {
  //       const { content, image } = formik.values;
  //       mutate({ content, image });
  //       formik.resetForm();
  //       console.log(mutate);
  //     },
  //   });
  //   const { refetch } = useFetchThread();
  //   const token = localStorage.getItem("token");
  //   const { mutate } = useMutation({
  //     mutationFn: async (body: { content: string; image: string }) => {
  //       try {
  //         const response = await axiosInstance.post("/thread", body, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         console.log(response);
  //         return response;
  //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       } catch (error: any) {
  //         console.log(error.response.data.message);
  //       }
  //     },
  //     onSuccess: () => {
  //       refetch();
  //     },
  //   });
  return (
    <Card p={4} mt={2}>
      <Input
        placeholder="Whats Is Happening!!"
        h={"50px"}
        border={"none"}
        name="content"
        onChange={handleChange}
        isRequired={true}
      />
      <Divider my={2} />
      <Flex justify={"space-between"}>
        <Box>
          <FormLabel htmlFor="image">
            <LuImagePlus size={25} />
          </FormLabel>
          <Input
            id="image"
            display={"none"}
            type="file"
            name="image"
            onChange={handleChange}
          ></Input>
        </Box>
        <Box>
          <Button
            type="submit"
            bg="green"
            textColor="white"
            onClick={handleSubmit}
            rounded={15}
          >
            Post
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default CreatePost;
