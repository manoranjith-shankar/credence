'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

import { useDisclosure } from "@nextui-org/react";
import { title } from "@/components/primitives";
import FileUpload from "@/components/FileUpload";
export default function UploadFileModel() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="secondary">Upload File</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody>
              <div>
            <h1 className={title()}>Upload to ensure safety</h1>
            <div className="container mx-auto p-4 ring-gray-200">
                <FileUpload />
            </div>
            
        </div>
              </ModalBody>
            {/* <Button color="default" variant="light" onPress={onClose}>
                Close
            </Button>
            <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                Action
            </Button> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}