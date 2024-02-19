'use client'

import React from 'react';
import useContractRead  from "@/components/hooks/useContractRead";
import { useAccount } from "wagmi";

export default function Docs() {
  const address  = "0x67F5e3A51e1Dc06dDB408561D773c4C56D7E6771"; // Destructure directly for conciseness

  const { data, isLoading, error } = useContractRead(
    "isRegisteredUser", // Function name
    address,
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <p>User registered: {data ? "Yes" : "No"}</p> // Conveying the boolean value clearly
  );
}