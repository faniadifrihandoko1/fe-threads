import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import React from "react";
import ModalReply from "../../../components/ModalReply";

import { Link } from "react-router-dom";
import convertTimeToAgo from "../../../utils/convertTime";
import { useSelector } from "react-redux";
import { IThread } from "../../../types/thread";
import { RootState } from "../../../store/type/RootState";

const CardPost: React.FC = () => {
  // const { content, created_at, id, image, user } = props;
  // const [liked, setLiked] = useState<boolean>(false);
  // const [countLike, setCountLike] = useState<number>(like);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useSelector((state: RootState) => state.thread);
  console.log(data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // const handleLike = () => {
  //   if (!liked) {
  //     setLiked(true);
  //     setCountLike(countLike + 1);
  //   } else {
  //     setLiked(false);
  //     setCountLike(countLike - 1);
  //   }
  // };

  // const { data } = useFetchThread();
  // console.log(data);
  // console.log(reply?);
  return (
    <>
      {data?.map((item: IThread) => (
        <Card mt={2} p={4}>
          <Box>
            <Flex gap={4}>
              <Box>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
              </Box>
              <Box>
                {item.user?.fullName ? (
                  <Heading fontSize={"md"}>{item.user?.fullName}</Heading>
                ) : (
                  <Heading fontSize={"md"}>Hamba Allah</Heading>
                )}
                <Flex gap={1} alignItems="center">
                  {item.user?.fullName ? (
                    <Text color="gray">@{item.user?.username}</Text>
                  ) : (
                    <Text color="gray">@anonymous</Text>
                  )}
                  <Icon boxSize={1.5} color="gray" mt={1} viewBox="0 0 200 200">
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                  <Text color="gray" fontSize="14px">
                    {convertTimeToAgo(item.created_at)}
                  </Text>
                </Flex>
                <Link to={`detail-status/${item.id}`}>
                  <Text fontSize={15}>{item.content}</Text>
                </Link>
                {!!item.image && <Image src={item.image}></Image>}
                <Flex gap={2} mt={2} alignItems="center">
                  <Button
                    // onClick={handleLike}
                    bg="white"
                  >
                    <Flex gap={2}>
                      <FaRegHeart color="gray" size={18} />
                      <Text color="gray" fontSize={14}>
                        12
                      </Text>
                    </Flex>
                  </Button>
                  <Button bg="white" pt={"2px"} onClick={onOpen}>
                    <Flex gap={2}>
                      <BiMessageAltDetail color="gray" size={20} />
                      <Text color="gray" marginTop="0px" fontSize={14}>
                        12 Replies
                      </Text>
                    </Flex>
                  </Button>
                  {/* Modal */}
                  <Modal
                    blockScrollOnMount={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent
                      p={3}
                      maxW={{ base: "400px", md: "550px", lg: "550px" }}
                    >
                      <ModalHeader ml={460} mt={-5}>
                        <Button onClick={onClose}>x</Button>
                      </ModalHeader>
                      <ModalReply />
                    </ModalContent>
                  </Modal>
                  {/* End Modal */}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default CardPost;