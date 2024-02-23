'use client'

import { title } from "@/components/primitives";
import React from 'react';
import FileUpload from '@/components/FileUpload';

const App: React.FC = () => {
    return (
        <div>
            <h1 className={title()}>Upload to ensure safety</h1>
            <div className="container mx-auto p-4 ring-gray-200">
                <FileUpload />
            </div>
            
        </div>
    );
};

export default App;