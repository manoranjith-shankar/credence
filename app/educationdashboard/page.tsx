"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";
import { title } from "@/components/primitives";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";



const edufn = () => {
  return (
    
    <><h1 className={title()}>Hello Prince</h1>

    <div className="flex ... h-full mt-8 gap-4 ">

  <div className="w-1/6 ... bg-gray-400" style={{height: '75vh'}}>
    

  </div>
  <div>
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-6 max-h-40 w-5/6">
    <Card className="py-4 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
    </div>
    </div>
 
</div>
</>
    
  );
};

export default edufn;

// export default function hello() 
//   return (
//       <div>
//           <h1>Hello </h1>
//           <div className="flex flex-col w-1/4 bg-gray-100 p-6">
//         {/* <h2 className="text-lg font-bold mb-4">User Options</h2>
//         <ul className="space-y-2">
//           <li>
//             <Link to="/file-upload" className="hover:text-blue-500">
//               File Upload
//             </Link>
//           </li>
//           <li>
//             <Link to="/settings" className="hover:text-blue-500">
//               Settings
//             </Link>
//           </li>
//           <li>
//             <Link to="/profile" className="hover:text-blue-500">
//               Profile
//             </Link>
//           </li>
//           <li>
//             <Link to="/account" className="hover:text-blue-500">
//               Account
//             </Link>
//           </li>
//         </ul> */}
//       </div>
//        <div className="flex flex-col w-3/4">
//         {/* <div className="flex bg-gray-200 p-6">
//           <Link to="/button-1" className="flex-1 text-center hover:text-blue-500">
//             Button 1
//           </Link>
//           <Link to="/button-2" className="flex-1 text-center hover:text-blue-500">
//             Button 2
//           </Link>
//           <Link to="/button-3" className="flex-1 text-center hover:text-blue-500">
//             Button 3
//           </Link> */}
//         </div> 
//         <div className="grid grid-cols-3 gap-6 p-6">
//           <div className="p-4 bg-white shadow-lg rounded-md">
//             <h3 className="text-lg font-semibold mb-2">Card 1</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="p-4 bg-white shadow-lg rounded-md">
//             <h3 className="text-lg font-semibold mb-2">Card 2</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="p-4 bg-white shadow-lg rounded-md">
//             <h3 className="text-lg font-semibold mb-2">Card 3</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         </div>
//       </div>
          
//       // </div>
//   );
// }