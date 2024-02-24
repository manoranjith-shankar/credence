"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { title } from "@/components/primitives";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface FruitItem {
  title: string;
  img: string;
  datetime: string;
  Public: string;
  Private: string;
}

const App: React.FC = () => {
  const list: FruitItem[] = [
    {
      title: "Certificate 001",
      img: "/images/fruit-1.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
    {
      title: "Certificate 002",
      img: "/images/fruit-2.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
    {
      title: "Certificate 003",
      img: "/images/fruit-3.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
    {
      title: "Certificate 004",
      img: "/images/fruit-4.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
    {
      title: "Certificate 005",
      img: "/images/fruit-5.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
    {
      title: "Certificate 006",
      img: "/images/fruit-6.jpeg",
      datetime: "12-02-2024, 12:00PM",
      Public: "ocefsgdjj",
      Private: "mcefsdjj",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FruitItem | null>(null);
  const [address, setAddress] = useState("");
  const [matched, setMatched] = useState(false);

  const openModal = (item: FruitItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const checkAddress = () => {
    if (address === "Your desired address or string") {
      setMatched(true);
      alert(`Successfully shared to ${address}!`);
    } else {
      setMatched(false);
      alert("Address does not match.");
    }
  };

  return (
    <div>
      <h1 className={title()}>My Locker</h1>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-6">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => openModal(item)}
            className="border-2"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-xl justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.datetime}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedItem && (
        <Modal isOpen={isModalOpen} onOpenChange={closeModal}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              {selectedItem.title}
            </ModalHeader>
            <ModalBody>
              {/* <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={selectedItem.title}
                className="w-full object-cover h-[300px]"
                src={selectedItem.img}
              /> */}
              <b>Public : {selectedItem.Public}</b>
              <b>Private : {selectedItem.Private}</b>
              <p>Issued Date : {selectedItem.datetime}</p>
              {/* <div>
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button color="success" variant="bordered">
                      Generate Proof
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="faded" aria-label="Static Actions">
                    <DropdownItem key="new">Ne</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <div
                      className={`card ${
                        matched ? "bg-green-500" : "bg-white"
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Enter address:"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border border-gray-300 p-2"
                      />
                      <button
                        onClick={checkAddress}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Check Address
                      </button>
                      {matched && (
                        <img
                          src="path_to_thick_image.png"
                          alt="Thick Image"
                          className="w-32 h-32 mt-4"
                        />
                      )}
                    </div>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                    >
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default App;
