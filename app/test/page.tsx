'use client'

import { Button } from '@nextui-org/button'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import toast from 'react-hot-toast'

export default function Test() {
  const notify = () => {
    toast.success('working')
  }
  return (
    <>
        <Button onClick={notify}>
            This is a button
        </Button>
    </>
  )
}
