import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap mt-14 md:mt-8">
      {['ورود کاربر', 'آدرس تحویل کالا', 'روش پرداخت', 'تایید سفارش'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2  
          text-center 
       ${
         index <= activeStep
           ? 'border-indigo-500   text-indigo-500'
           : 'border-gray-400 text-gray-400'
       }
          
       `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
// User Login