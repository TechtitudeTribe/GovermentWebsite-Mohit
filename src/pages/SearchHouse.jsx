import { useState } from "react";
import AnimatedButton from "../components/AnimatedButton";
import syncIcon from "/sync-icon.svg";
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
  Text,
  Box,
} from "@chakra-ui/react";
import excelDateToJSDate from "../helpers/excelToJSDate";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { krutiBase64 } from "../assets/Kruti-Base64";
export default function SearchHouse() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [owner, setOwner] = useState(null);
  const [tabledata, setTabledata] = useState([]);
  const [searchType, setSearchType] = useState("house_no");
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    function isValidString(input) {
      const regex = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~ ]*$/;
      return regex.test(input);
    }
    if (searchType === "house_no" && searchValue < 1) {
      alert("Please provide valid house no.");
      return;
    }
    if (searchType === "house_owner" && !isValidString(searchValue)) {
      alert("Please provide valid house owner name");
      return;
    }
    if (owner) setOwner(null);
    setState({ msg: "Searching...", value: null });
    const response = await axios.get(
      `${API_URL}/search/hindi/${searchType}?value=${searchValue}`
    );
    const data = response.data.filter((docs) => docs.name === docs.house_owner);
    if (response.status === 200 && data[0]) {
      setOwner(data[0]);
      setTabledata(response.data);
      setState(null);
    } else if (response.status === 200 && data.length < 1) {
      setOwner(null);
      setState({
        msg: `No data found associated with ${searchType.split("_").join(" ")}`,
        value: searchValue,
      });
    } else {
      setOwner(null);
      setTabledata(null);
      setState({ msg: "Unknow error, please try again!!", value: null });
    }
  };
  const downloaddPDF = () => {
    const doc = new jsPDF();
    doc.addFileToVFS("Kruti-Dev-010.ttf", krutiBase64);
    doc.addFont("Kruti-Dev-010.ttf", "Kruti-Dev-010", "normal");
    doc.setFont("Kruti-Dev-010");
    doc.text("f'koe pkS/kjh", 10, 10);
    const tableData1 = tabledata.map((row, index) => [
      index + 1,
      row.house_no,
      row.house_owner,
      row.name,
      row.father_husband_name,
      row.gender,
      row.cast,
      excelDateToJSDate(row.dob),
      row.occupation,
      row.abhiyukti,
      row.shachhar,
    ]);
    autoTable(doc, {
      head: [[...tableHeaders]],
      body: [...tableData1],
      styles: {
        font: "Kruti-Dev-010",
      },
    });
    console.log(doc);
    doc.save("pariwar-table.pdf");
  };
  return (
    <div className="bg-mid_gray p-6 min-[800px]:px-20">
      <div className="p-2 flex gap-10 justify-center ">
        <form onSubmit={handleSubmit} className="w-full text-center">
          <input
            id="search-house"
            type={`${searchType === "house_no" ? "number" : "text"}`}
            placeholder={`${
              searchType === "house_no"
                ? "Enter House No."
                : "Enter House Owner Name."
            }  `}
            className={`${
              searchType === "house_owner" && searchValue && "font-kruti_dev"
            }  rounded-full bg-white p-2 px-4 w-2/6 placeholder:text-black border border-black`}
            // value={searchValue}
            onChange={(e) =>
              setSearchValue(
                searchType === "house_no"
                  ? Number(e.target.value)
                  : e.target.value
              )
            }
            required
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="ml-2  rounded-full bg-white p-2 px-4 placeholder:text-black border border-black"
          >
            <option value="house_no">House No.</option>
            <option value="house_owner">House Owner</option>
          </select>
          <br />
          <button type="submit">
            <AnimatedButton text="SEARCH" />
          </button>
        </form>
      </div>

      <div className="bg-white rounded-t-3xl rounded mt-4">
        <div className="flex justify-between items-center  p-4 border-b border-gray-500">
          <p>Previous Search</p>
          <button className="flex items-center gap-1   bg-primary text-white p-3 px-5  rounded-xl">
            <p>Sync Now</p>
            <img src={syncIcon} alt="sync-icon" className="h-6" />
          </button>
        </div>
        <div className="table-container">
          {owner ? (
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th className="p-4 text-xl">House No</th>
                  <th className="p-4 text-xl">House Owner</th>
                  <th className="p-4 text-xl">DOB</th>
                  <th className="p-4 text-xl">Occupation</th>
                </tr>
              </thead>
              <tbody className="text-center ">
                <tr
                  onClick={onOpen}
                  className="cursor-pointer  bg-red-200 text-2xl"
                >
                  <td className="p-4 ">{owner.house_no}</td>
                  <td className="p-4 font-kruti_dev">{owner.house_owner}</td>
                  <td className="p-4 ">{owner.dob}</td>
                  <td className="p-4 font-kruti_dev">{owner.occupation}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            state?.msg && (
              <h3 className="w-fit m-auto text-xl p-4 font-medium">
                {state?.msg}{" "}
                {state?.value && (
                  <span
                    className={`${
                      searchType === "house_owner" && "font-kruti_dev"
                    }`}
                  >
                    {state.value}
                  </span>
                )}
              </h3>
            )
          )}
        </div>
      </div>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent minW={"90vw"}>
          <ModalHeader className=" w-full font-kruti_dev">
            <Box className="flex">
              <Box className="">
                <Text>izk:Ik ¼d0½ </Text>
                <Text>¼fu;e 2 nssf[k;s½ </Text>
              </Box>
              <Text className="m-auto text-6xl">ifjokj jftLVj</Text>
            </Box>
            <Box className="flex justify-between">
              <Text>xzke lHkk dk uke /keZiqjk</Text>
              <Text>U;k; iapk;r dk uke uoknk</Text>
            </Box>
            <Box className="flex justify-between">
              <Text>xkWo dk uke & /keZiqjk </Text>
              <Text>fodkl [k.M & gYnkSj</Text>
              <Text>rglhy & fctukSj </Text>
              <Text>ftyk & fctukSj</Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow={"auto"}>
            {tabledata[0] ? (
              <>
                <table
                  id="pariwar-table"
                  className="border border-black table-auto text-center text-black"
                >
                  <thead className="border-2 border-black whitespace-nowrap lg:whitespace-normal">
                    <tr className="font-kruti_dev border-2 border-black">
                      {tableHeaders.map((ele, i) => (
                        <th
                          key={i}
                          className="p-1  font-kruti_dev border-2 border-black"
                        >
                          <p className="font-kruti_de  text-xl ">{ele}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border-2 border-black">
                    {tabledata.map((element, index) => (
                      <tr key={index} className="border-2 border-black">
                        <td className="border-2 border-black">{index + 1}</td>
                        <td className="border-2 border-black">
                          {element.house_no}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.house_owner}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.name}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.father_husband_name}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.gender}
                        </td>
                        <td className="border-2 border-black">
                          {element.cast}
                        </td>
                        <td className="border-2 border-black">
                          {excelDateToJSDate(element.dob)}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.occupation}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.abhiyukti}
                        </td>
                        <td className="font-kruti_dev border-2 border-black  text-xl">
                          {element.shachhar}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <h3>No data</h3>
            )}
          </ModalBody>
          <ModalFooter display={"block"} textAlign={"center"}>
            <Text className="font-kruti_dev m-auto text-xl">
              fVIi.kh%& vH;qfDr LrEHk esa vkns'k dh dh la[;k rFkk fnukad] ;fn
              dksbZ gks] ftlds {"}"}kjk dksbZ uke c{"<"}+k;k ;k gVk;k x;k gks]
              ds lkFk izfof"V djus okys ds gLrk{"{"}kj Hkh fd;s tkus pkfg;sA
            </Text>
            <Button onClick={downloaddPDF}>Download as PDF</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
