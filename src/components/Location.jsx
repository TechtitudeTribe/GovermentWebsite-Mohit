import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  // PopoverAnchor,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Box,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
export default function Location({ active = "/Unknow" }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const hindiTableHeaders = [
    "Øe la-",
    "edku uEcj",
    "ifjokj ds eqf[k;k dk uke",
    "ifjokj ds lnL;ksa dk uke",
    "firk@ifr dk uke",
    'iq:"k ;k efgyk',
    " /keZ vuqlwfpr tkfr dh n'kk esa tkfr",
    "tUe frfFk ;fn Kkr gks vFkok lEHkkU; tUe frfFk",
    " /kU/kk",
    "lk{kj ;k fuj{kj ¼lk{kj gksus dh n'kk esa vgZrk vkSj C;kSjk½",
    "lfdZy NksM+ nsus ;k e`R;q dk fnukad",
    "vH;qfDr",
    "eksckby u0"
  ];
  const englishTableHeaders = [
    "SL NO.",
    "House No.",
    "House Owner's Name",
    "Name",
    "Father/Husband Name",
    "Male or Female",
    "Caste",
    "Date of Birth",
    "Occupation",
    "Education",
    "Date of death",
    "Complaints",
    "Mobile No."
  ]
  function cleanText(input) {
    let cleaned = input.replace(/^\/+/, "").replace(/-/g, " ");
    cleaned = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
    return cleaned;
  }
  const { user, setUser } = useContext(AuthContext);
  const {language} = useContext(LanguageContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const handleExcelSubmit = async (event) => {
    event.preventDefault();
    const file = event.target[0].files[0];
    if (!file) {
      alert("Please select a valid excel file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const uploadFile = () => {
      return new Promise((resolve, reject) => {
        axios
          .post(`${API_URL}/upload-excel/${language}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `bearer ${user.token}`,
            },
          })
          .then((response) => {
            //  console.log(response);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
              setUser(null);
              navigate("/login");
            }
            reject(error);
          });
      });
    };
    toast.promise(uploadFile(), {
      loading: {
        title: "Uploading...",
        description: "Please wait while we upload your file.",
        position: "top",
      },
      success: (response) => ({
        title: "Upload Successful",
        description: `${response.data.data.length} data added successfully.`,
        position: "top",
        duration: 5000,
      }),
      error: (error) => ({
        title: "Upload Failed",
        description:
          error.response.data.message ||
          "There was an error uploading the file.",
        position: "top",
        duration: 5000,
      }),
    });
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSingleDataSubmit = async (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    const house_no = +event.target[0].value;
    const house_owner = event.target[1].value;
    const name = event.target[2].value;
    const father_husband_name = event.target[3].value;
    const gender = event.target[4].value;
    const cast = event.target[5].value;
    const dob = +event.target[6].value;
    const occupation = event.target[7].value;
    const shachhar = event.target[8].value;
    const death_date = event.target[9].value;
    const abhiyukti = event.target[10].value;
    const data = {
      house_no,
      house_owner,
      name,
      father_husband_name,
      gender,
      cast,
      dob,
      occupation,
      shachhar,
      death_date,
      abhiyukti,
    };
    try {
      const response = await axios.post(`${API_URL}/add-one/${language}`, data, {
        headers: `bearer ${user.token}`,
      });
      if (response.status === 200) {
        toast({
          position: "top",
          duration: 5000,
          render: () => (
            <Alert status="success" display={"block"} borderRadius={"20px"}>
              <Box className="flex items-center justify-start">
                <AlertIcon />
                <AlertTitle>Data added to database</AlertTitle>
              </Box>
              <AlertDescription>
                <Text>
                  {" "}
                  <Text
                    as="span"
                    className="font-kruti_dev text-xl font-semibold"
                  >
                    {name}
                  </Text>{" "}
                  added to house no {house_no} with house owner{" "}
                  <Text
                    as="span"
                    className="font-kruti_dev text-xl font-semibold"
                  >
                    {house_owner}
                  </Text>
                </Text>
              </AlertDescription>
            </Alert>
          ),
        });
      } else {
        toast({
          title: "Unknow error, please try again.",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      if (!error.response) {
        toast({
          title: "No response from server, please try again.",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        if (error.response.status === 401) {
          toast({
            title: "You are not authorized to add data.",
            description: "Please login and try again",
            position: "top",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else if (error.response.status === 409) {
          if (error.response.data.existingHouseOwner) {
            toast({
              position: "top",
              duration: 5000,
              render: () => (
                <Alert status="error" display={"block"} borderRadius={"20px"}>
                  <Box className="flex items-center justify-start">
                    <AlertIcon />
                    <AlertTitle>Failed to add the data</AlertTitle>
                  </Box>
                  <AlertDescription>
                    <Text>
                      {error.response.data.message}{" "}
                      <Text
                        as="span"
                        className="font-kruti_dev text-xl font-semibold"
                      >
                        {error.response.data.existingHouseOwner}
                      </Text>
                    </Text>
                  </AlertDescription>
                </Alert>
              ),
            });
          } else {
            toast({
              position: "top",
              duration: 5000,
              render: () => (
                <Alert status="error" display={"block"} borderRadius={"20px"}>
                  <Box className="flex items-center justify-start">
                    <AlertIcon />
                    <AlertTitle>Failed to add the data</AlertTitle>
                  </Box>
                  <AlertDescription>
                    <Text>
                      {" "}
                      <Text
                        as="span"
                        className="font-kruti_dev text-xl font-semibold"
                      >
                        {name}
                      </Text>{" "}
                      already present in database in house no {house_no} with
                      house owner{" "}
                      <Text
                        as="span"
                        className="font-kruti_dev text-xl font-semibold"
                      >
                        {house_owner}
                      </Text>
                    </Text>
                  </AlertDescription>
                </Alert>
              ),
            });
          }
        } else {
          toast({
            title: "Failed to add data.",
            description: "Error in server, please try again",
            position: "top",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    }
    setIsSubmitting(false);
  };

  return (
    <section className=" flex justify-between  p-6 min-[800px]:px-20  bg-background_image_1  bg-no-repeat bg-center bg-cover">
      <h4 className="text-2xl text-white pt-4">
        Home &gt; {cleanText(active)}{" "}
      </h4>
      {active === "/dashboard" && user && (
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="green">Upload Excel File</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select excel file</PopoverHeader>
              <PopoverBody>
                <p className="text-red-600 opacity-75 mb-2">*Please cross check the language before uploading</p>
                <form onSubmit={handleExcelSubmit}>
                  <input type="file" accept=".xlx, .xlsx" required />
                  <br />
                  <br />
                  <Button type="submit" colorScheme="teal">
                    Upload
                  </Button>
                </form>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button colorScheme="teal" onClick={onOpen}>
            Add Single Data
          </Button>
        </div>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={"60vw"}>
          <ModalHeader>Add Single Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <p className="text-red-600 opacity-75 mb-2">*Please cross check the language before uploading</p>
            <form
              onSubmit={handleSingleDataSubmit}
              className="grid grid-cols-2"
            >
              {(language ==='english' ? englishTableHeaders :  hindiTableHeaders).map(
                (ele, index) =>
                  index !== 0 && (
                    <div key={index} className={`${language==='hindi' && "font-kruti_dev" } text-xl my-1`}>
                      <label>{ele}</label>
                      <br />
                      <input
                        type={`${
                          index === 1 || index === 7 ? "number" : "text"
                        }`}
                        placeholder={ele}
                        className="border border-black rounded-xl text-center px-3"
                        required={
                          index === 1 ||
                          index === 2 ||
                          index === 3 ||
                          index === 7
                        }
                      />
                    </div>
                  )
              )}
              {isSubmitting ? (
                <Box className="col-span-2 flex items-center justify-center gap-2 ">
                  <Text className="text-3xl">Submitting...</Text>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </Box>
              ) : (
                <Button
                  colorScheme="teal"
                  fontSize={"1.5rem"}
                  type="submit"
                  className="w-2/4 mt-4 m-auto col-span-2"
                >
                  Submit
                </Button>
              )}
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}
