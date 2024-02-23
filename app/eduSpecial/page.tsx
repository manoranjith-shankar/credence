// import { title } from '@/components/primitives'
import React from 'react'
// import uploadFileModel from '@/components/uploadFileModel'

import UploadFileModel from '@/components/uploadFileModel';

function page() {
    return (
        <div>
            {/* <h1 className={title()}>Upload to ensure safety</h1> */}
            <div className="container mx-auto p-4 ring-gray-200">
                <UploadFileModel />
            </div>
        </div>
    )
}

export default page