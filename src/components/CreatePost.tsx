import { Box, Button, Card, Divider, Flex, Input } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import React from "react";
// import { useFormik } from "formik";
// import { useMutation } from "react-query";
// import { axiosInstance } from "../lib/axios";
// import { useFetchThread } from "../features/threads/useFetchThread";
import useFormikSetup from "../features/thread/formik/useFormikSetup";

const CreatePost: React.FC = () => {
  const formik = useFormikSetup();
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
    <Card p={4}>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Whats Is Happening!!"
          h={"50px"}
          border={"none"}
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
          isRequired={true}
        />
        <Divider my={2} />
        <Flex justify={"space-between"}>
          <Box>
            <Button bg="white">
              <LuImagePlus size={25} />
            </Button>
          </Box>
          <Box>
            <Button type="submit" bg="green" textColor="white" rounded={15}>
              Post
            </Button>
          </Box>
        </Flex>
      </form>
    </Card>
  );
};

export default CreatePost;
