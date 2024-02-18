'use client'

import { Button } from '@nextui-org/button'
import React from 'react'
import toast from 'react-hot-toast'
import testContract from '@/backend/deployedContracts/testContract.json'

export default function Test() {
  const notify = () => {
    toast.success('working')
  }
  console.log(testContract.networks[80001].address)
  return (
    <>
        <Button onClick={notify}>
            This is a button
        </Button>
    </>
  )
}
