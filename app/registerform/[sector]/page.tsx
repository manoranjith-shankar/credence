'use client'

import RegisterForm from "@/components/registerForm";
import { useState } from "react";

export default function BlogPost( { params }: { params: { sector: string } } ) {
  
  const[currentParam , setCurrentParam] = useState(params.sector) 

  console.log(currentParam);

  return (
    <div>
        {/* <h1>{params.sector}</h1>
        <p>This is the blog post for {params.sector}.</p> */}
        
        {
          currentParam === 'EducationalInstitution' ? 
            ( <RegisterForm sector={'Educational Instituion'} /> ) : 
           currentParam === 'GovernmentAgencies' ?
           (<RegisterForm sector={'Government Agencies'} />) :
            currentParam === 'Industries' ? 
            (<RegisterForm sector={'Industries'} />) :
            currentParam === 'Recipient' ? 
            (<RegisterForm sector = {'Recipient'} /> ) : <h1>Provide Sector</h1>
         }

    </div>
  );
}