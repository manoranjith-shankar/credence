"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const FileUpload: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 p-6">
        <Card className="py-8 w-64 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="uppercase text-xl font-size: 8rem font-bold ">
              Issue New Credential
            </p>
            <small className="text-default-500 text-lg 8rem">
              Issue new credentials by uploading image and a corresponding
              recipient address
            </small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <input
              type="file"
              className="border border-gray-300 rounded-md p-2 h-40 mb-2"
            />
            <h4 className="font-bold text-large mb-2">
              Issue credentials by only metadata.
            </h4>
            <div className="flex gap-4 items-center">
              <Button color="success" className="ml=5">
                Upload
              </Button>
              {/* <Button color="danger" variant="bordered">
        Delete user
      </Button> */}
            </div>
            {/* <Image
      alt="Card background"
      className="object-cover rounded-xl"
      src="/images/hero-card-complete.jpeg"
      width={270}
    /> */}
          </CardBody>
        </Card>
      </div>
      {/* <div className="w-1/2 p-6"> */}

      {/* <div className="bg-gray-200 h-96 w-full"></div> */}
      {/* </div> */}
    </div>
  );
};

export default FileUpload;
