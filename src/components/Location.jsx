import { Fragment, useContext } from "react";
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
} from "@chakra-ui/react";
export default function Location({ active = "/Unknow" }) {
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
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function cleanText(input) {
    let cleaned = input.replace(/^\/+/, "").replace(/-/g, " ");
    cleaned = cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
    return cleaned;
  }
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
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="file" accept=".xlx, .xlsx" />
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
        <ModalContent>
          <ModalHeader>Add Single Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => e.preventDefault()}>
              {tableHeaders.map(
                (ele, index) =>
                  index !== 0 && (
                    <div key={index} className="font-kruti_dev text-lg">
                      <label>{ele}</label>
                      <br />
                      <input
                        type="text"
                        placeholder={ele}
                        className="border border-black rounded-xl text-center px-3"
                      />
                    </div>
                  )
              )}
              <Button type="submit" colorScheme="teal" mr={3} mt={3}>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}
