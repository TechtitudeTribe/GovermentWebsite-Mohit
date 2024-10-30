import { Fragment, useContext, useEffect, useState } from "react";
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
  // Text,
  // Box,
  useToast,
  Spinner,
} from "@chakra-ui/react";
export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const [sync, setSync] = useState(false);
  const toggleSynce = () => setSync((prev) => !prev);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  if (!user) {
    navigate("/login");
    return;
  }
  const handleDelete = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `${API_URL}/delete-one/hindi/${id}`
      );
      if (deleteResponse.status === 200) {
        toast({
          title: "Data deleted",
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        setTableData(tableData.filter((element) => element.id !== id));
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
  };
  const handleModal = (id) => {
    const data = tableData.filter((ele) => ele.id === id)[0];
    setFormData(data);
    onOpen();
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    
    try {
      const response = await axios.patch(`${API_URL}/update-one/hindi/${formData.id}`,formData)
      if(response.status === 200){
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
    setIsSubmitting(false)
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_URL}/all-data/hindi`);
        if (response.status === 200) {
          let data = response.data
          data.sort((a,b)=>a.house_no - b.house_no)
          setTableData(data);
        } else {
          toast({
            title: "Unable get data from server",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Unable get data from server",
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    getData();
  }, [sync, API_URL]);
  return (
    <div className="p-10 bg-mid_gray">
      <h3 className="text-6xl text-center py-4">Dashboard</h3>

      <div className="bg-white rounded-t-3xl rounded mt-4">
        <div className="flex justify-between items-center  p-4 border-b border-gray-500">
          <p>Previous Search</p>
          <button className="flex items-center gap-1   bg-primary text-white p-3 px-5  rounded-xl">
            <p>Sync Now</p>
            <img src={syncIcon} alt="sync-icon" className="h-6" />
          </button>
        </div>
        {tableData[0] ? (
          <>
            <table className="  table-auto text-center text">
              <thead className="  whitespace-nowrap lg:whitespace-normal">
                <tr>
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
                  <tr key={index} className={`${index % 3 === 0 ? 'bg-red-100' : index % 3 === 1 ? 'bg-white' : 'bg-green-100'} text-xl  border-b`}>
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
                          onClick={() => handleDelete(element.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    )}
                    {user && (
                      <td className="p-1">
                        <Button
                          colorScheme="orange"
                          onClick={() => handleModal(element.id)}
                        >
                          Edit
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="m-auto flex justify-center items-center gap-8">
            <h3 className="text-3xl">Loading...</h3>
            <Spinner
              thickness="4px"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Edit Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              {Object.entries(formData).map(
                ([field, value], index) =>
                  field !== "id" && (
                    <Fragment key={index}>
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
                    </Fragment>
                  )
              )}
             {isSubmitting ? <Spinner   mt={5} thickness="4px"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"/>  :  <Button colorScheme="teal" type="submit" className="w-fit mt-4">
                Submit
              </Button>}
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
