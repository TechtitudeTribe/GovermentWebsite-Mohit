import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import syncIcon from "../assets/icons/sync-icon.svg";
import excelDateToJSDate from "../helpers/excelToJSDate";
import axios from "axios";
import jsPDF from "jspdf";
import QRCode from "qrcode";
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
import { DeleteIcon, DownloadIcon, EditIcon } from "@chakra-ui/icons";
// import { LanguageContext } from "../contexts/LanguageContext";
import blankQRCode from "../assets/Images/dashboard/blank-qr.webp";
import { krutiBase64 } from "../assets/Kruti-Base64";
import JSZip from "jszip";
// import { TableVirtuoso,} from "react-virtuoso";
export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user, setUser } = useContext(AuthContext);

  // const { language } = useContext(LanguageContext);
  //For now only hindi language will be used
  const language = "hindi";
  const navigate = useNavigate();
  const [state, setState] = useState({ message: "Loading...", status: false });
  const [tableData, setTableData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({});
  const toast = useToast();
  const [sync, setSync] = useState(false);
  const toggleSynce = () => setSync((prev) => !prev);
  const [isPDFDownloading, setPDFDownloading] = useState(null);
  const [isZipDownloading, setZipDownloading] = useState(false);
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
    "eksckby u0",
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
    "Mobile No.",
  ];
  const handleDeleteModal = (element) => {
    setFormData(element);
    onDeleteModalOpen();
  };
  const handleDelete = async () => {
    setIsDeleting(true);
    if (formData.name === formData.house_owner) {
      try {
        await axios.delete(
          `${API_URL}/data/delete-by-house/${formData.house_no}`,
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        toggleSynce();
        toast({
          title: `All members with house no ${formData.house_no} has been deleted`,
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      } catch (/* eslint-disable-line no-unused-vars */ error) {
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
        await axios.delete(`${API_URL}/data/delete/${formData.id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        toast({
          title: "Data deleted",
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        toggleSynce();
      } catch (error) {
        toast({
          title: error.response?.data.message || "Failed to delete data",
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
        `${API_URL}/data/${language}/update-one/${formData.id}`,
        formData,
        { headers: { Authorization: `Bearer ${user.token}` } }
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
      const response = await axios.get(`${API_URL}/data/${language}/get-all`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      if (response.status === 200) {
        let data = response.data;
        data.sort((a, b) => a.house_no - b.house_no);
        setTableData(data);
        setState({ message: "Loaded", description: "", status: false });
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
          description: error.message,
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        setState({
          message: "Unable get data from server",
          description: error.message,
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
          setUser({ token: null });
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
    //eslint-disable-next-line
  }, [sync, user, language]);

  const generatePDF = async (data) => {
    try {
      setPDFDownloading(data.id);
      // let doc_name =`${data.house_owner}`
      //   if (language === "english") {
      //     const response = await axios.get(
      //       `${API_URL}/data/hindi/get-one/${data.id}`,
      //       { headers: { Authorization: `Bearer ${user.token}` } }
      //     );
      //     data = { ...data, ...response.data.data };
      //   }
      //   if(language === 'hindi'){
      //     const response = await axios.get(
      //       `${API_URL}/data/english/get-one/${data.id}`,
      //       { headers: { Authorization: `Bearer ${user.token}` } }
      //     );
      //     doc_name = response.data.data.house_owner
      //   }
      const qrCodeDataUrl = await QRCode.toDataURL(data.id);
      const width = 270;
      const height = 180;
      const doc = new jsPDF("l", "mm", [width, height]);

      doc.addFileToVFS("Kruti-Dev-010.ttf", krutiBase64);
      doc.addFont("Kruti-Dev-010.ttf", "Kruti-Dev-010", "normal");

      doc.setLineWidth(0.5); //Line width for horizontal line and border
      doc.setDrawColor(0, 0, 0);
      doc.rect(5, 5, width - 10, height - 10); // Border

      let currentY = 2;
      const title = "xzke iapk;r /keZiqjk    fodkl [k.M gYnkSj    fctukSj";
      doc.setFont("Kruti-Dev-010");
      doc.setFontSize(38);
      doc.text(title, (width - doc.getTextWidth(title)) / 2, (currentY += 18));

      doc.line(5, (currentY += 10), width - 5, currentY);
      let currentX = 8;
      doc.setFontSize(32);

      const propertyOwner = `laifÙk ds ekfyd % ${data.house_owner}] vfHkHkkod % ${data.father_husband_name}`;
      doc.setFont("Kruti-Dev-010");
      const lines = doc.splitTextToSize(propertyOwner, width - 15);
      lines.forEach((line) => doc.text(line, currentX, (currentY += 14)));
      doc.text("lEiÙkh ds çdkj % vkoklh;", currentX, (currentY += 14));

      doc.setFontSize(32);
      doc.text(`vf}rh; la[;k % `, currentX, (currentY += 14));
      doc.setFont("helvetica", "normal");
      doc.setFontSize(28);
      doc.text(
        ` ${data.id}`,
        currentX + doc.getTextWidth(`vf}rh; la[;k % `),
        currentY
      );
      doc.setFont("Kruti-Dev-010");
      doc.setFontSize(32);
      doc.text(`?kj uacj  % ${data.house_no}`, currentX, (currentY += 14));

      doc.addImage(qrCodeDataUrl, "PNG", width - 77, height - 77, 70, 70);

      doc.save(`${data.id}.pdf`);
    } catch (error) {
      toast({
        title: error.response?.data.message || error.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setPDFDownloading(null);
    }
  };
  async function downloadZip() {
    if (tableData.length === 0) return;
    setZipDownloading(true);
    const zip = new JSZip();
    try {
      //for non blocking thread
      setTimeout(async () => {
        for (const data of tableData) {
          if (data.name === data.house_owner) {
            const qrCodeDataUrl = await QRCode.toDataURL(data.id);
            const width = 270;
            const height = 180;
            const doc = new jsPDF("l", "mm", [width, height]);

            doc.addFileToVFS("Kruti-Dev-010.ttf", krutiBase64);
            doc.addFont("Kruti-Dev-010.ttf", "Kruti-Dev-010", "normal");

            doc.setLineWidth(0.5); //Line width for horizontal line and border
            doc.setDrawColor(0, 0, 0);
            doc.rect(5, 5, width - 10, height - 10); // Border

            let currentY = 2;
            const title =
              "xzke iapk;r /keZiqjk    fodkl [k.M gYnkSj    fctukSj";
            doc.setFont("Kruti-Dev-010");
            doc.setFontSize(38);
            doc.text(
              title,
              (width - doc.getTextWidth(title)) / 2,
              (currentY += 18)
            );

            doc.line(5, (currentY += 10), width - 5, currentY);
            let currentX = 8;
            doc.setFontSize(32);

            const propertyOwner = `laifÙk ds ekfyd % ${data.house_owner}] vfHkHkkod % ${data.father_husband_name}`;
            doc.setFont("Kruti-Dev-010");
            const lines = doc.splitTextToSize(propertyOwner, width - 15);
            lines.forEach((line) => doc.text(line, currentX, (currentY += 14)));
            doc.text("lEiÙkh ds çdkj % vkoklh;", currentX, (currentY += 14));

            doc.setFontSize(32);
            doc.text(`vf}rh; la[;k % `, currentX, (currentY += 14));
            doc.setFont("helvetica", "normal");
            doc.setFontSize(28);
            doc.text(
              ` ${data.id}`,
              currentX + doc.getTextWidth(`vf}rh; la[;k % `),
              currentY
            );
            doc.setFont("Kruti-Dev-010");
            doc.setFontSize(32);
            doc.text(
              `?kj uacj  % ${data.house_no}`,
              currentX,
              (currentY += 14)
            );

            doc.addImage(qrCodeDataUrl, "PNG", width - 77, height - 77, 70, 70);
            zip.file(`${data.id}.pdf`, doc.output("arraybuffer"));
          }
        }
        zip
          .generateAsync({ type: "blob" })
          .then((content) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = "all-pdfs.zip";
            link.click();
            setZipDownloading(false);
          })
          .catch((error) => {
            toast({
              title: "Unable generate zip",
              description: error.message,
              status: "error",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
            setZipDownloading(false);
          });
      }, 0);
    } catch (error) {
      toast({
        title: "Unable generate zip",
        description: error.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  return (
    <main className="p-4 sm:p-10 bg-mid_gray">
      <h3 className="text-4xl sm:text-6xl text-center py-4">Dashboard</h3>

      <div className="bg-white rounded-t-3xl rounded mt-4 overflow-x-auto">
        <div className="flex justify-between items-center  p-4 border-b border-gray-500">
          <p className="text-2xl ">Pariwar details</p>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadZip}
              disabled={isZipDownloading}
              className="flex items-center gap-2 bg-secondary text-white p-3 px-5 rounded-xl cursor-pointer disabled:opacity-75 disabled:cursor-progress"
            >
              {isZipDownloading ? (
                <Fragment>
                  <p>Generating ZIP</p>
                  <Spinner thickness="3px" speed="0.65s" size="md" />
                </Fragment>
              ) : (
                <Fragment>
                  <p>Download ZIP</p>
                  <DownloadIcon />
                </Fragment>
              )}
            </button>
            <button
              onClick={toggleSynce}
              className="flex items-center gap-2 bg-primary text-white p-3 px-5 rounded-xl cursor-pointer disabled:opacity-75 disabled:cursor-progress"
              disabled={state.message === "Loading..."}
            >
              {state.message === "Loading..." ? (
                <Fragment>
                  <p>Syncing...</p>
                  <Spinner thickness="3px" speed="0.65s" size="md" />
                </Fragment>
              ) : (
                <Fragment>
                  <p>Sync Now</p>
                  <img src={syncIcon} alt="sync-icon" className="h-6" />
                </Fragment>
              )}
            </button>
          </div>
        </div>
        {tableData[0] ? (
          <div className="relative overflow-auto h-full max-h-[75vh]">
            <table className="table-auto text-center relative">
              <thead className="sticky top-0 z-10 bg-white whitespace-nowrap lg:whitespace-normal">
                <tr className="border-b-2 border-black">
                  {(language === "english"
                    ? englishTableHeaders
                    : hindiTableHeaders
                  ).map((ele, i) => (
                    <th key={i} className="px-2">
                      <p
                        className={`${
                          language === "hindi" && "font-kruti_dev text-xl "
                        }  `}
                      >
                        {ele}
                      </p>
                    </th>
                  ))}
                  <th>QR Code</th>
                  {user && <th className="px-2">Delete</th>}
                  {user && <th className="px-2">Edit</th>}
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
                    }  border-b-2 border-gray-300`}
                  >
                    <td className=" ">{index + 1}</td>
                    <td className=" ">{element.house_no}</td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.house_owner}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.name}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.father_husband_name}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.gender}
                    </td>
                    <td className=" ">{element.cast}</td>
                    <td className=" ">{excelDateToJSDate(element.dob)}</td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.occupation}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.shachhar}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.death_date}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.abhiyukti}
                    </td>
                    <td
                      className={`${
                        language === "hindi" && "font-kruti_dev text-2xl"
                      } `}
                    >
                      {element.mobile_no}
                    </td>
                    <td className="m-1 relative overflow-hidden">
                      {element.name === element.house_owner && (
                        <Fragment>
                          <img
                            src={blankQRCode}
                            alt=""
                            className="scale-115 object-cover object-center h-[80px]"
                          />
                          <button
                            onClick={() => generatePDF(element)}
                            className="absolute top-2/4 -translate-y-2/4 left-0 w-full bg-secondary text-white text-xs min-w-fit p-px disabled:cursor-not-allowed disabled:opacity-85"
                            disabled={Boolean(isPDFDownloading)}
                          >
                            {isPDFDownloading === element.id ? (
                              <Spinner size={"md"} />
                            ) : (
                              <p>Download</p>
                            )}
                          </button>
                        </Fragment>
                      )}
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
          </div>
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
                  className={`${
                    language === "hindi" && "font-kruti_dev"
                  } text-lg font-semibold`}
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
                        Deleting the house owner will delete all the members
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
        <ModalContent minW={"60vw"} maxW={"100vw"} w={"fit-content"}>
          <ModalHeader>Edit Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              className="sm:grid grid-cols-2 items-center gap-2"
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
                          language === "hindi" &&
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
    </main>
  );
}
