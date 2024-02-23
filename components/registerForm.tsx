"use client";
import React, { useState } from "react";
import { Card, CardFooter, Image, Button, Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// import { UserProvider } from './usercontext';
import axios from "axios";
// import { Link } from "react-router-dom";
import { useRouter } from "next/navigation";
import { color } from "framer-motion";

export default function RegisterForm({ sector }: any) {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Sector"])
  );
  const [formatedSelectedkeys, setFormatedSelectedKeys] = React.useState<any>();

  const [formRendering, setFromRendering] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [institutionId, setId] = useState("");
  const [otpRendering, setOtpRendering] = useState(false);

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = (e: any) => {
    e.forEach((v: any) => {
      setFormatedSelectedKeys(v);
    });
  };

  let verificationStatus;
  const otpHandleSubmit = () => {
    axios
      .post("http://localhost:3001/otpVerification", {
        otp: otpValue,
      })
      .then(function (response) {
        console.log(response.data);
        verificationStatus = response.data;
        if (
          verificationStatus === "approved" &&
          sector === "Educational Instituion"
        ) {
          router.push("/educationdashboard");
        } else if (
          verificationStatus === "approved" &&
          sector === "Government Agencies"
        ) {
          router.push("/governmentdashboard");
        } else if (
          verificationStatus === "approved" &&
          sector === "Industries"
        ) {
          router.push("/industrydashboard");
        } else if (
          verificationStatus === "approved" &&
          sector === "Recipient"
        ) {
          router.push("/recipientdashboard");
        } else {
          router.push("/error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    setOtpRendering(true);
    axios
      .post("http://localhost:3001/verification", {
        institutionId: institutionId,
      })
      .then(function (response) {
        console.log("hello", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(formatedSelectedkeys);
  console.log(sector);

  return (
    <div className="grid w-full max-w-68 ml-28 items-center">
      <div className="grid grid-flow-col shadow-lg" >
        <div className="bg-white max-w-6xl ">
          <Image
            alt="Card background"
            className="object-cover rounded-xl mb-5"
            src="/ei.jpg"
            width={180}
            height={270}
          />
        </div>
        <div className=" ">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none max-w-[500px] w-full max-w-80 "
          >
            {!otpRendering ? (
              <form className="grid grid-cols-1 gap-4 m-20 ">
                <h1 className="items-center flex justify-center text-4xl mb-5 text-gray-500 font-bold">
                  Register Form {sector}
                </h1>
                <Input
                  name="Mail"
                  placeholder="Mail"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  required
                />
                <Input
                  name="Name"
                  placeholder="Name"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  required
                />
                {sector === "Educational Instituion" ? (
                  <Input
                    name="ACITE_ID"
                    placeholder="ACITE ID"
                    value={institutionId}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                ) : sector === "Industries" ? (
                  <Input
                    name="GST_number"
                    placeholder="GST Number"
                    value={institutionId}
                    onChange={(e) => setId(e.target.value)}
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                ) : sector === "Government Agencies" ? (
                  <Input
                    name="sectorId"
                    placeholder="Sector Id"
                    value={institutionId}
                    onChange={(e) => setId(e.target.value)}
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                ) : null}
                <Input
                  name="Phone Number"
                  type="number"
                  placeholder="Phone Number"
                  // value={phoneNumber}
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />

                <Button onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </form>
            ) : (
              <div className="flex justify-center items-center">
                <Input
                  className="m-5"
                  name="OTP"
                  type="number"
                  placeholder="OTP"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  required
                />
                <Button
                  className="m-8 "
                  onClick={otpHandleSubmit}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            )}
            {/* </div>
        </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
