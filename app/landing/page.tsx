
'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { title } from "@/components/primitives";

import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation'
// import { useAccount } from 'wagmi';

export default function head() {

  const isConnected = false;
  // const address = useAccount().address;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <Card>
        <CardBody className="p-5">
          <p>HIGH SECURITY LOCKER</p>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="p-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>
              Choose
              <span className={title({ color: "violet" })}> Customer </span>
              segment
            </h1>
          </div>
        </CardBody>
      </Card>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="grid grid-cols-4 gap-7 m-8">
          <Link href={isConnected ? "/dashboard" : "/registerform/EducationalInstitution"}>
            {/* <Link href = {isConnected ? "/dashboard":{pathname:"/registerform",query:{from:"EducationalInstitutions"},}}> */}
			  <Card className="hover:scale-110 transform transition-transform duration-500">
              <CardHeader className="pb-0 flex-col items-start ">
                <p className="text-large uppercase font-bold">
                  Educational Institution
                </p>
              </CardHeader>	

              <CardBody className="overflow-visibleflex justify-center items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mb-5"
                  src="/ei.jpg"
                  width={180}
                  height={180}
                />
              </CardBody>
            </Card>
          </Link>

          <Link href={isConnected ? "/dashboard" : "/registerform/GovernmentAgencies"}>
            <Card className="hover:scale-110 transform transition-transform duration-500">
              <CardHeader className="pb-0 flex-col items-center  ">
                <p className="text-large uppercase font-bold">
                Government Agencies
                </p>
              </CardHeader>	

              <CardBody className="overflow-visibleflex justify-center items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mb-5"
                  src="/ei.jpg"
                  width={180}
                  height={180}
                />
              </CardBody>
            </Card>
          </Link>

          <Link href={isConnected ? "/dashboard" : "/registerform/Industries"}>
          <Card className="hover:scale-110 transform transition-transform duration-500">
              <CardHeader className="pb-0 flex-col items-center  ">
                <p className="text-large uppercase font-bold">
                   Industries
                </p>
              </CardHeader>	

              <CardBody className="overflow-visibleflex justify-center items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mb-5"
                  src="/ei.jpg"
                  width={180}
                  height={180}
                />
              </CardBody>
            </Card>
          </Link>

          <Link href={isConnected ? "/dashboard" : "/registerform/Recipient"}>
          <Card className="hover:scale-110 transform transition-transform duration-500">
              <CardHeader className="pb-0 flex-col items-center  ">
                <p className="text-large uppercase font-bold">
                Recipient
                </p>
              </CardHeader>	

              <CardBody className="overflow-visibleflex justify-center items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mb-5"
                  src="/ei.jpg"
                  width={180}
                  height={180}
                />
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
