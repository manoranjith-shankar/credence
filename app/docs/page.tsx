'use client'

import React from 'react';
import useContractRead  from "@/components/hooks/useContractRead";
import { useAccount } from "wagmi";

export default function Docs() {
  const { address }  = useAccount()

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