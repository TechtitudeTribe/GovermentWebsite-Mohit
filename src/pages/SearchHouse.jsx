import { useContext, useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import excelDateToJSDate from "../helpers/excelToJSDate";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { krutiBase64 } from "../assets/Kruti-Base64";
import { LanguageContext } from "../contexts/LanguageContext";
export default function SearchHouse() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [owner, setOwner] = useState(null);
  const [tabledata, setTabledata] = useState([]);
  const [searchType, setSearchType] = useState("house_no");
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { language } = useContext(LanguageContext);

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
  ];
  const handleSubmit = async (event = null) => {
    if (event) {
      event.preventDefault(); 
    }
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
    try {
      const response = await axios.get(
        `${API_URL}/data/${language}/search?field=${searchType}&value=${searchValue}`
      );
      const data = response.data.data.filter((docs) => docs.name === docs.house_owner);
      if (data[0]) {
        setOwner(data[0]);
        setTabledata(response.data.data);
        setState(null);
      } else if ( data.length < 1) {
        setOwner(null);
        setState({
          msg: `No data found associated with ${searchType.split("_").join(" ")}`,
          value: searchValue,
        });
      } 
    } catch (error) {
      setOwner(null);
      setTabledata(null);
      setState({ msg:error.response?.data.message|| "Unknow error, please try again!!", value: null });
    }

    
  };

  const downloaddPDF = () => {
    const pdf = new jsPDF();
    if (language === "hindi") {
      pdf.addFileToVFS("Kruti-Dev-010.ttf", krutiBase64);
      pdf.addFont("Kruti-Dev-010.ttf", "Kruti-Dev-010", "normal");
      pdf.setFont("Kruti-Dev-010");
    }
    pdf.setFontSize(14);
    let currentX = 10;
    let currentY = 10;
    pdf.text(
      language === "hindi" ? `izk:Ik ¼d0½` : "Format",
      currentX,
      currentY
    ); //Left1
    currentY += 7.5; //17.5
    pdf.text(
      language === "hindi" ? `¼fu;e 2 nssf[k;s½` : "(A) (See rule 2)",
      currentX,
      currentY
    ); //Left2
    pdf.setFontSize(40);
    const heading = language === "hindi" ? `ifjokj jftLVj` : "Family Register";
    const pageWidth = pdf.internal.pageSize.getWidth();
    const textWidth = pdf.getTextWidth(heading);
    const x = (pageWidth - textWidth) / 2; // Centering the text
    currentY -= 2.5; //15
    pdf.text(heading, x, currentY); //Heading
    pdf.setFontSize(14);
    currentY += 10; //25
    pdf.text(
      language === "hindi"
        ? `xzke lHkk dk uke /keZiqjk`
        : "Name of the village council is Dharampura",
      currentX,
      currentY
    );
    const rightText =
      language === "hindi"
        ? `U;k; iapk;r dk uke uoknk`
        : "Name of Nyaya Panchayat Nawada";
    // const rightTextWidth = pdf.getTextWidth(rightText);
    const rightTextPositionX = pageWidth - textWidth + 17.5;
    pdf.text(rightText, rightTextPositionX, currentY);
    currentY += 10;
    const hindiTexts = [
      "xkWo dk uke & /keZiqjk",
      "fodkl [k.M & gYnkSj",
      "rglhy & fctukSj",
      "ftyk & fctukSj",
    ];
    const englishTexts = [
      "Village: Dharmapura",
      "Block Haldaur",
      "Tehsil Bijnor",
      "District - Bijnor",
    ];
    if (language === "hindi") {
      let eachTextWidth = 40;
      const totalSpacing =
        (pageWidth - hindiTexts.length * eachTextWidth) /
        (hindiTexts.length + 1);
      currentX = totalSpacing;
      hindiTexts.forEach((text) => {
        pdf.text(text, currentX, currentY);
        currentX += eachTextWidth + totalSpacing + 5;
      });
    } else {
      let eachTextWidth = 45;
      const totalSpacing =
        (pageWidth - englishTexts.length * eachTextWidth) /
        (englishTexts.length + 1);
      currentX = totalSpacing;
      englishTexts.forEach((text) => {
        pdf.text(text, currentX, currentY);
        currentX += eachTextWidth + totalSpacing + 5;
      });
    }
    currentX = 10;
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
    autoTable(pdf, {
      head:language === "hindi"
      ? [[...hindiTableHeaders]] : [[...englishTableHeaders]],
      body: [...tableData1],
      startY: currentY + 5,

      theme: "plain",
      tableLineWidth: 0.5,
      tableLineColor: "black",
      styles: {
        font: "Kruti-Dev-010",
        lineWidth: 0.5,
        lineColor: "black",
        halign: "center",
      },
      columnStyles: {
        0: { font: "Arial" },
        1: { font: "Arial" },
        6: { font: "Arial" },
        7: { font: "Arial" },
      },
    });
    const tableHeight = pdf.autoTable.previous.finalY;
    pdf.text(
      language === "hindi"
        ? `fVIi.kh%& vH;qfDr LrEHk esa vkns'k dh dh la[;k rFkk fnukad] ;fn dksbZ gks] ftlds }kjk dksbZ uke c<+k;k ;k gVk;k x;k gks] ds lkFk izfof"V djus okys ds gLrk{kj Hkh fd;s tkus pkfg;sA`
        : "In the Remarks column, the number and date of the order, if any, by which a name has been added or deleted, should also be mentioned along with the signature of the person making the entry.",
      currentX,
      tableHeight + 10,
      { maxWidth: pageWidth - 20 }
    );
    pdf.save("pariwar-table.pdf");
  };
  useEffect(()=>{
    setTabledata([])
    if(searchType && searchValue){
      handleSubmit()
    }
  },[language])
  return (
    <div className="bg-mid_gray p-6 min-[800px]:px-20">
      <div className="p-2 flex gap-10 justify-center ">
        <form onSubmit={handleSubmit} className="w-full text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            id="search-house"
            type={`${searchType === "house_no" ? "number" : "text"}`}
            placeholder={`${
              searchType === "house_no"
                ? "Enter House No."
                : "Enter House Owner Name."
            }  `}
            className={`${
              searchType === "house_owner" &&
              searchValue &&
              language === "hindi" &&
              "font-kruti_dev"
            }  rounded-full bg-white p-2 px-4  placeholder:text-black border border-black`}
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
            className=" rounded-full bg-white p-2 px-4 placeholder:text-black border border-black"
          >
            <option value="house_no">House No.</option>
            <option value="house_owner">House Owner</option>
          </select>
           </div>
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
            <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="p-4 text-sm sm:text-xl">House No</th>
                  <th className="p-4 text-sm sm:text-xl">House Owner</th>
                  <th className="p-4 text-sm sm:text-xl">DOB</th>
                  <th className="p-4 text-sm sm:text-xl">Occupation</th>
                </tr>
              </thead>
              <tbody className="text-center ">
                <tr
                  onClick={onOpen}
                  className="cursor-pointer  bg-red-200 text-sm sm:text-2xl"
                >
                  <td className="p-4 ">{owner.house_no}</td>
                  <td
                    className={`p-4 ${
                      language === "hindi" && "font-kruti_dev"
                    }`}
                  >
                    {owner.house_owner}
                  </td>
                  <td className="p-4 ">{excelDateToJSDate(owner.dob)}</td>
                  <td
                    className={`p-4 ${
                      language === "hindi" && "font-kruti_dev"
                    }`}
                  >
                    {owner.occupation}
                  </td>
                </tr>
              </tbody>
            </table></div>
          ) : (
            state?.msg && (
              <div className="flex justify-center items-center w-fit m-auto">
              <h3 className=" text-xl p-4 font-medium">
                {state?.msg}{" "}
                {state?.value && (
                  <span
                    className={`${
                      searchType === "house_owner" &&
                      language === "hindi" &&
                      "font-kruti_dev"
                    }`}
                  >
                    {state.value}
                  </span>
                )}
              </h3>
              {state?.msg === "Searching..." && <Spinner thickness="4px"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"/>}
               </div>
            )
          )}
        </div>
      </div>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent minW={"95vw"}>
          <ModalHeader
            className={`w-full ${language === "hindi" && "font-kruti_dev"}  `}
          >
            <Box className="flex">
              <Box>
                <Text>{language === "hindi" ? `izk:Ik ¼d0½` : "Format"} </Text>
                <Text>
                  {language === "hindi"
                    ? `¼fu;e 2 nssf[k;s½`
                    : "(A) (See rule 2)"}{" "}
                </Text>
              </Box>
              <Text className="m-auto text-6xl">
                {language === "hindi" ? `ifjokj jftLVj` : "Family Register"}
              </Text>
            </Box>
            <Box className="flex justify-between">
              <Text>
                {language === "hindi"
                  ? `xzke lHkk dk uke /keZiqjk`
                  : "Name of the village council is Dharampura"}
              </Text>
              <Text>
                {language === "hindi"
                  ? `U;k; iapk;r dk uke uoknk`
                  : "Name of Nyaya Panchayat Nawada"}
              </Text>
            </Box>
            <Box className="flex justify-between">
              <Text>
                {language === "hindi"
                  ? `xkWo dk uke & /keZiqjk`
                  : "Village: Dharmapura"}{" "}
              </Text>
              <Text>
                {language === "hindi"
                  ? `fodkl [k.M & gYnkSj`
                  : "Block Haldaur"}
              </Text>
              <Text>
                {language === "hindi" ? `rglhy & fctukSj` : "Tehsil Bijnor"}{" "}
              </Text>
              <Text>
                {language === "hindi" ? `ftyk & fctukSj` : "District - Bijnor"}
              </Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow={"auto"}>
            {tabledata ? (
              <>
                <table
                  id="pariwar-table"
                  className="m-auto  border border-black table-auto text-center text-black"
                >
                  <thead className="border-2 border-black whitespace-nowrap lg:whitespace-normal">
                    <tr className=" border-2 border-black">
                      {language === "hindi"
                        ? hindiTableHeaders.map((ele, i) => (
                            <th
                              key={i}
                              className="p-1  font-kruti_dev border-2 border-black"
                            >
                              <p className=" text-xl ">{ele}</p>
                            </th>
                          ))
                        : englishTableHeaders.map((ele, i) => (
                            <th key={i} className="p-1 border-2 border-black">
                              <p>{ele}</p>
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
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.house_owner}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.name}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.father_husband_name}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.gender}
                        </td>
                        <td className="border-2 border-black">
                          {element.cast}
                        </td>
                        <td className="border-2 border-black">
                          {excelDateToJSDate(element.dob)}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.occupation}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.shachhar}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.death_date}
                        </td>
                        <td
                          className={`${
                            language === "hindi" && "font-kruti_dev"
                          } border-2 border-black  text-xl`}
                        >
                          {element.abhiyukti}
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
            <Text
              className={`${
                language === "hindi" && "font-kruti_dev"
              } m-auto text-xl`}
            >
              {language === "hindi"
                ? `fVIi.kh%& vH;qfDr LrEHk esa vkns'k dh dh la[;k rFkk fnukad] ;fn dksbZ gks] ftlds }kjk dksbZ uke c<+k;k ;k gVk;k x;k gks] ds lkFk izfof"V djus okys ds gLrk{kj Hkh fd;s tkus pkfg;sA`
                : "In the Remarks column, the number and date of the order, if any, by which a name has been added or deleted, should also be mentioned along with the signature of the person making the entry."}
            </Text>
            <Button onClick={downloaddPDF}>Download as PDF</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
