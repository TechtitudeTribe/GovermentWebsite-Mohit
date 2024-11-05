import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import syncIcon from "/sync-icon.svg";
import excelDateToJSDate from "../helpers/excelToJSDate";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
  Spinner,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState({ message: "Loading...", status: false });
  const [tableData, setTableData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const [sync, setSync] = useState(false);
  const toggleSynce = () => setSync((prev) => !prev);
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();
  const capitalizeFirstLetter = (str) =>
    `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  const tableHeaders = [
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
  ];
  const handleDeleteModal = (element) => {
    setFormData(element);
    onDeleteModalOpen();
  };
  const handleDelete = async () => {
    setIsDeleting(true);
    if (formData.name === formData.house_owner) {
      try {
        const allData = tableData.filter(
          (ele) => ele.house_owner === formData.house_owner
        );
        const promises = allData.map(async (ele) => {
          const response = await axios.delete(
            `${API_URL}/delete-one/hindi/${ele.id}`
          );
          return response;
        });
        await Promise.all(promises);
        toggleSynce();
        toast({
          title: `All members with house no ${formData.house_no} has been deleted`,
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: `Failed to delete all members with house no ${formData.house_no}, please try again.`,
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      try {
        const deleteResponse = await axios.delete(
          `${API_URL}/delete-one/hindi/${formData.id}`
        );
        if (deleteResponse.status === 200) {
          toast({
            title: "Data deleted",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
          toggleSynce();
        } else {
          toast({
            title: "Failed to delete data",
            description: "Please Try again.",
            status: "error",
            position: "top",
            duration: 9000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Failed to delete data",
          description: "Please Try again.",
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    onDeleteModalClose();
    setIsDeleting(false);
  };
  const handleEditModal = (element) => {
    setFormData(element);
    onEditModalOpen();
  };
  const handleEditSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.patch(
        `${API_URL}/update-one/hindi/${formData.id}`,
        formData
      );
      if (response.status === 200) {
        toast({
          title: response.data.message,
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: error.response.data.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsSubmitting(false);
    onEditModalClose();
    toggleSynce();
  };
  const getData = async () => {
    setTableData([]);
    setState({ message: "Loading...", description: "", status: false });
    try {
      const response = await axios.get(`${API_URL}/all-data/hindi`);
      if (response.status === 200) {
        let data = response.data;
        data.sort((a, b) => a.house_no - b.house_no);
        setTableData(data);
        setState({ message: "Loading...", description: "", status: false });
      } else {
        toast({
          title: "Unable get data from server",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        setState({
          message: "Unable get data from server",
          description: "",
          status: 400,
        });
      }
    } catch (error) {
      if (!error.response) {
        toast({
          title: "Unable get data from server",
          description: "Looks like the server is down, contact the developer",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        setState({
          message: "Unable get data from server",
          description: "Looks like the server is down, contact the developer",
          status: true,
        });
      } else {
        if (error.response.status === 404) {
          setState({ message: "Unable get data from server", status: 400 });
          toast({
            title: "Unable get data from server",
            description:
              "No data present in databse, upload an valid excel file or add data manually",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
          setState({
            message: "Unable get data from server",
            description:
              "No data present in databse, upload an valid excel file or add data manually",
            status: true,
          });
        } else if (error.response.status === 401) {
          setState({
            message: "Unable get data from server",
            description: "You are not authorized, please login first.",
            status: 401,
          });
          toast({
            title: "Unable get data from server",
            description: "You are not authorized, please login first.",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        } else {
          setState();
          toast({
            title: "Unable get data from server",
            description: "Unknow error, contact the developer",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
          setState({
            message: "Unable get data from server",
            description: "Unknow error, contact the developer",
            status: true,
          });
        }
      }
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    getData();
  }, [sync, user]);
  return (
    <div className="p-10 bg-mid_gray">
      <h3 className="text-6xl text-center py-4">Dashboard</h3>

      <div className="bg-white rounded-t-3xl rounded mt-4 overflow-x-auto">
        <div className="flex justify-between items-center  p-4 border-b border-gray-500">
          <p className="text-2xl ">Pariwar details</p>
          <button
            onClick={toggleSynce}
            className="flex items-center gap-1   bg-primary text-white p-3 px-5  rounded-xl"
          >
            <p>Sync Now</p>
            <img src={syncIcon} alt="sync-icon" className="h-6" />
          </button>
        </div>
        {tableData[0] ? (
          <table className="  table-auto text-center text">
            <thead className="  whitespace-nowrap lg:whitespace-normal">
              <tr className="border-b-2 border-black">
                {tableHeaders.map((ele, i) => (
                  <th key={i} className="p-1  font-kruti_dev  ">
                    <p className="font-kruti_de  text-xl ">{ele}</p>
                  </th>
                ))}
                {user && <th>Delete</th>}
                {user && <th>Edit</th>}
              </tr>
            </thead>
            <tbody className=" ">
              {tableData.map((element, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 3 === 0
                      ? "bg-red-100"
                      : index % 3 === 1
                      ? "bg-white"
                      : "bg-green-100"
                  } text-xl  border-b-2 border-gray-300`}
                >
                  <td className=" ">{index + 1}</td>
                  <td className=" ">{element.house_no}</td>
                  <td className="font-kruti_dev text-2xl">
                    {element.house_owner}
                  </td>
                  <td className="font-kruti_dev text-2xl">{element.name}</td>
                  <td className="font-kruti_dev text-2xl">
                    {element.father_husband_name}
                  </td>
                  <td className="font-kruti_dev text-2xl">{element.gender}</td>
                  <td className=" ">{element.cast}</td>
                  <td className=" ">{excelDateToJSDate(element.dob)}</td>
                  <td className="font-kruti_dev text-2xl">
                    {element.occupation}
                  </td>
                  <td className="font-kruti_dev text-2xl">
                    {element.shachhar}
                  </td>
                  <td className="font-kruti_dev text-2xl">
                    {element.death_date}
                  </td>
                  <td className="font-kruti_dev text-2xl">
                    {element.abhiyukti}
                  </td>
                  {user && (
                    <td className="p-1">
                      <Button
                        colorScheme="red"
                        onClick={() => handleDeleteModal(element)}
                      >
                        <Icon as={DeleteIcon} />
                      </Button>
                    </td>
                  )}
                  {user && (
                    <td className="p-1">
                      <Button
                        colorScheme="orange"
                        onClick={() => handleEditModal(element)}
                      >
                        <Icon as={EditIcon} />
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : !state.status ? (
          <div className="m-auto flex justify-center items-center gap-8 py-4">
            <h3 className="text-3xl font-semibold">{state.message}</h3>
            <Spinner
              thickness="4px"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        ) : (
          <Alert
            status="error"
            className=" text-center"
            padding={6}
            display={"block"}
          >
            <Box className="flex w-fit m-auto text-3xl mb-4">
              <AlertIcon />
              <AlertTitle>{state.message}</AlertTitle>
            </Box>
            <AlertDescription className="text-xl">
              {state.description}
            </AlertDescription>
          </Alert>
        )}
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete data</ModalHeader>
          <ModalCloseButton />
          {isDeleting ? (
            <ModalBody>
              <Box className="flex w-fit m-auto gap-4">
                <Text className="text-3xl font-semibold ">Deleting...</Text>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              </Box>
            </ModalBody>
          ) : (
            <>
              <ModalBody>
                Are you sure want to delete{" "}
                <Text
                  as={"span"}
                  className="font-kruti_dev text-lg font-semibold"
                >
                  {formData.name}
                </Text>{" "}
                from database ?
                {formData.name === formData.house_owner && (
                  <Alert status="error" display={"block"}>
                    <Box className="flex">
                      <AlertIcon />
                      <AlertTitle>Warning!!</AlertTitle>
                    </Box>
                    <AlertDescription>
                      <Text>You are trying to delete the house owner</Text>
                      <Text>
                        Deleting the house owner will delete all the details
                        associate with the house owner
                      </Text>
                    </AlertDescription>
                  </Alert>
                )}
              </ModalBody>
              <ModalFooter className="flex gap-2">
                <Button colorScheme="red" onClick={handleDelete}>
                  {formData.name === formData.house_owner
                    ? "Delete All "
                    : "Delete "}
                  &nbsp; <Icon as={DeleteIcon} />
                </Button>
                <Button colorScheme="blue" mr={3} onClick={onDeleteModalClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isEditModalOpen} onClose={onEditModalClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent minW={"50vw"}>
          <ModalHeader>Edit Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              className="grid grid-cols-2 items-center"
              onSubmit={handleEditSubmit}
            >
              {Object.entries(formData).map(
                ([field, value], index) =>
                  field !== "id" && (
                    <div key={index} className="text-2xl grid grid-cols-1">
                      <label className="">
                        {capitalizeFirstLetter(field.split("_").join(" "))}
                      </label>
                      <input
                        type="text"
                        placeholder={"Enter " + field}
                        value={value}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [field]: e.target.value,
                          }))
                        }
                        className={`${
                          (index === 1 ||
                            index === 5 ||
                            index === 6 ||
                            index === 8 ||
                            index === 9 ||
                            index === 10 ||
                            index === 11) &&
                          "font-kruti_dev placeholder:font-sans"
                        }  border border-black w-fit rounded-md pl-2 `}
                      />
                    </div>
                  )
              )}
              {isSubmitting ? (
                <Spinner
                  className="col-span-2 m-auto w-fit"
                  mt={5}
                  thickness="4px"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              ) : (
                <Button
                  colorScheme="teal"
                  fontSize={"1.5rem"}
                  type="submit"
                  className="w-2/4   mt-4 m-auto col-span-2"
                >
                  Submit
                </Button>
              )}
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
