'use client'

import { Button } from '@nextui-org/button'
import React from 'react'
import toast from 'react-hot-toast'

export default function Test() {
  const notify = () => {
    toast.loading(`your address for aicte_id is`)
  }

  return (
    <>
        <Button onClick={notify}>
            This is a button
        </Button>

    </>
  )
}
