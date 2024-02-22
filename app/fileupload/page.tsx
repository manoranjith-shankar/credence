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
            <style jsx>{`
                .container {
                    max-width: 100%;
                    padding: 1rem;
                }

                @media (min-width: 768px) {
                    .container {
                        max-width: 768px;
                    }
                }

                @media (min-width: 1024px) {
                    .container {
                        max-width: 1024px;
                    }
                }
            `}</style>
        </div>
    );
};

export default App;