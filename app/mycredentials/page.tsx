"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { title } from "@/components/primitives";

interface FruitItem {
  title: string;
  img: string;
  datetime: string;
}

const App: React.FC = () => {
  const list: FruitItem[] = [
    {
      title: "Certificate 001",
      img: "/images/fruit-1.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    {
      title: "Certificate 002",
      img: "/images/fruit-2.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    {
      title: "Certificate 003",
      img: "/images/fruit-3.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    {
      title: "Certificate 004",
      img: "/images/fruit-4.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    {
      title: "Certificate 005",
      img: "/images/fruit-5.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    {
      title: "Certificate 006",
      img: "/images/fruit-6.jpeg",
      datetime: "12-02-2024, 12:00PM",
    },
    // {
    //   title: "Certificate 007",
    //   img: "/images/fruit-7.jpeg",
    //   datetime: "12-02-2024, 12:00PM",
    // },
  ];

  return (
    <div>
    <h1 className={title()}>My Locker</h1>
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-6">

      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
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
    </div>
  );
};

export default App;
