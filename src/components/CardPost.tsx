import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
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
import ModalReply from "./ModalReply";
import { threadPorps } from "../types/cardType";
import { Link } from "react-router-dom";

const CardPost: React.FC<threadPorps> = (props) => {
  const { content, created_at, id, image } = props;
  // const [liked, setLiked] = useState<boolean>(false);
  // const [countLike, setCountLike] = useState<number>(like);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function convertTimeToAgo(timestamp: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentDate: any = new Date();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const previousDate: any = new Date(timestamp);

    const timeDifference = currentDate - previousDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days + " hari yang lalu";
    } else if (hours > 0) {
      return hours + " jam yang lalu";
    } else {
      return minutes + " menit yang lalu";
    }
  }

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
  return (
    <Card mt={2} p={4}>
      <Box>
        <Flex gap={4}>
          <Box>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/sage-adebayo" />
          </Box>
          <Box>
            <Heading fontSize={"md"}>Ini Dummy</Heading>
            <Flex gap={1} alignItems="center">
              <Text color="gray">@dummydong</Text>
              <Icon boxSize={1.5} color="gray" mt={1} viewBox="0 0 200 200">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Text color="gray" fontSize="14px">
                {convertTimeToAgo(created_at)} | {image}
              </Text>
            </Flex>
            <Link to={`detail-status/${id}`}>
              <Text fontSize={15}>{content}</Text>
            </Link>
            {/* <Image src={image}></Image> */}
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
  );
};

export default CardPost;
