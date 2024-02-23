import { Input } from "@nextui-org/input";
import { Button, Card } from "@nextui-org/react";
import React from "react";

function eduForm() {
  return (
    <div className="grid w-full max-w-68 ml-28 items-center h-full max-h-18">
      <div className="grid grid-flow-col shadow-lg">
        <div className="bg-white max-w-6xl ">
          <img
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
            <form className="grid grid-cols-1 gap-4 m-20  ">
              <h1 className="items-center flex justify-center text-4xl mb-5 text-gray-500 font-bold">
                Register Form Educational Institution
              </h1>
              <Input name="aicteId" placeholder="AICTE ID" required />
              <Input
                name="institutionName"
                placeholder="Institution Name"
                required
              />
              <Input
                name="institutionRegisteredAddress"
                placeholder="Institution Registered Address"
                required
              />
              <Input
                name="institutionEmail"
                placeholder="Institution Email"
                required
              />
              <Input
                name="institutionPhone"
                type="number"
                placeholder="Institution Phone"
                required
              />

              <Button type="submit">Submit</Button>
            </form>
            {/* {!otpRendering ? (
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
            )} */}
          </Card>
        </div>
      </div>
    </div>
    //     <div className="flex px-60 shadow-lg">
    //   <Card
    //     isFooterBlurred
    //     radius="lg"
    //     className="border-none max-w-[500px] min-w-full"
    //   >
    //     <form className="grid grid-cols-1 gap-4 m-20  ">
    //       <h1 className="items-center flex justify-center text-4xl mb-5 text-gray-500 font-bold">
    //         Register Form Educational Institution
    //       </h1>
    //       <Input
    //         name="Mail"
    //         placeholder="Mail"
    //         required
    //       />
    //       <Input
    //         name="Name"
    //         placeholder="Name"
    //         required
    //       />
    //       <Input
    //         name="ACITE_ID"
    //         placeholder="ACITE ID"
    //         required
    //       />
    //       <Input
    //         name="GST_number"
    //         placeholder="GST Number"
    //         required
    //       />
    //       <Input
    //         name="sectorId"
    //         placeholder="Sector Id"
    //         required
    //       />
    //       <Input
    //         name="Phone Number"
    //         type="number"
    //         placeholder="Phone Number"
    //         required
    //       />
    //       <Button type="submit">
    //         Submit
    //       </Button>
    //     </form>
    //   </Card>
    // </div>
  );
}

export default eduForm;
