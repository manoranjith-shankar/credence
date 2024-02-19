'use client'

import { Button } from '@nextui-org/button'
import React from 'react'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'

export default function Test() {
  const {address} = useAccount()
  const notify = () => {
    toast.loading(`${address}`)
  }

  return (
    <>
        <Button onClick={notify}>
            This is a button
        </Button>

    </>
  )
}
