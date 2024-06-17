import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
// import data from "../utils/data";
import { useNavigate, useParams } from "react-router-dom";

import convertISOToReadableTime from "../../../utils/convertTimeHours";
import convertDateFormat from "../../../utils/convertDate";

import CreateReplyStatus from "./CreateReplyStatus";
import ReplyThread from "./ReplyThread";
import useReply from "../hooks/useReply";
import { useAppSelector } from "../../../store/type/RootState";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatusDetail = () => {
  const { id } = useParams();
  const { dataThreadById, handleLike } = useReply();
  const isLoad = useAppSelector((state) => state.threadById.isLoading);
  const navigate = useNavigate();
  return (
    <>
      {/* <Skeleton isLoaded={isLoad}> */}
      <Card p={4} my={2}>
        <Flex alignItems={"center"} gap={2}>
          <IoMdArrowRoundBack cursor={"pointer"} onClick={() => navigate(-1)} />

          <Text my={1} fontSize={18} fontWeight="bold">
            Status
          </Text>
        </Flex>
        <Skeleton isLoaded={isLoad}>
          <Box mt={3}>
            <Flex gap={4}>
              <Box>
                <Avatar
                  name="Dan Abrahmov"
                  src={dataThreadById?.user?.photo_profile}
                />
              </Box>
              <Box>
                {dataThreadById?.user?.fullName ? (
                  <Heading fontSize={"md"}>
                    {dataThreadById?.user?.fullName}
                  </Heading>
                ) : (
                  <Heading fontSize={"md"}>Hamba Allah</Heading>
                )}
                <Flex gap={1} alignItems="center">
                  {dataThreadById?.user?.fullName ? (
                    <Text color="gray">@{dataThreadById?.user?.username}</Text>
                  ) : (
                    <Text color="gray">@anonymous</Text>
                  )}
                </Flex>

                <Text fontSize={15}>{dataThreadById?.content}</Text>

                {!!dataThreadById?.image && (
                  <Image
                    mt={"5px"}
                    borderRadius={"10px"}
                    src={dataThreadById?.image}
                  ></Image>
                )}
                <Flex
                  alignItems="center"
                  gap={1}
                  textColor={"gray"}
                  fontSize={14}
                  mt={2}
                >
                  <Text>
                    {dataThreadById?.created_at
                      ? convertISOToReadableTime(dataThreadById.created_at)
                      : ""}
                  </Text>
                  <Icon boxSize={2} color="gray" mt="2px" viewBox="0 0 200 200">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  <Text>
                    {" "}
                    {dataThreadById?.created_at
                      ? convertDateFormat(dataThreadById.created_at)
                      : ""}
                  </Text>
                </Flex>
                <Flex gap={5} mt={2} alignItems="center">
                  <Text
                    // onClick={handleLike}
                    bg="white"
                  >
                    <Flex gap={1} alignItems="center">
                      <FaRegHeart
                        onClick={() => {
                          handleLike(dataThreadById?.id);
                        }}
                        cursor="pointer"
                        color={dataThreadById?.isLiked ? "red" : "gray"}
                        size={18}
                      />
                      <Text color="gray" fontSize={15} mb={"2px"}>
                        {dataThreadById?.like_count}
                      </Text>
                    </Flex>
                  </Text>

                  <Text bg="white" pt={"2px"}>
                    <Flex gap={1} alignItems="center">
                      <BiMessageAltDetail color="gray" size={20} />
                      <Text color="gray" fontSize={15} mb={1}>
                        {dataThreadById?.reply_count} Replies
                      </Text>
                    </Flex>
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Skeleton>
        {/* <Box mt={3} bg={"red"}>
          <Box>
            <Flex gap={2} alignItems="center">
              <Avatar name="Dan Abrahmov" src={dataThreadById?.user?.photo_profile} />
              <Box>
                <Text>{dataThreadById?.user?.fullName}</Text>
                <Text color="gray" mt={-1}>
                  @{dataThreadById?.user?.username}
                </Text>
              </Box>
            </Flex>
            <Text mt={2} lineHeight="19px">
              {dataThreadById?.content}
            </Text>
            <Image src={dataThreadById?.image}></Image>
            <Flex
              alignItems="center"
              gap={1}
              textColor={"gray"}
              fontSize={14}
              mt={2}
            >
              <Text>{convertISOToReadableTime(dataThreadById?.created_at)}</Text>
              <Icon boxSize={2} color="gray" mt="2px" viewBox="0 0 200 200">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text>{convertDateFormat(dataThreadById?.created_at)}</Text>
            </Flex>
            <Flex mt={2} gap={2}>
              <Flex alignItems={"center"}>
                <IconButton
                  aria-label="Like"
                  icon={<FaRegHeart />}
                  bg={"transparent"}
                />
                <Text color="gray" fontSize={15} mb="1px">
                  {dataThreadById?.like_count}
                </Text>
              </Flex>
              <Flex alignItems={"center"}>
                <IconButton
                  aria-label="Like"
                  size="lg"
                  icon={<BiMessageAltDetail />}
                  bg={"transparent"}
                />
                <Text color="gray" fontSize={15} mb="1px" ms={-1}>
                  {dataThreadById?.reply_count} Replies
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box> */}
        {/* <Box>status orang</Box> */}
      </Card>
      <CreateReplyStatus id={Number(id)} />
      {dataThreadById?.reply?.map((data, index) => (
        <ReplyThread
          key={index}
          id={data.id}
          content={data.content}
          image={data.image}
          created_at={data.created_at}
          updated_at={data.updated_at}
          user={data.user}
          like={data.like}
        />
      ))}
      {/* </Skeleton> */}
    </>
  );
};

export default StatusDetail;
