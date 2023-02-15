import React from 'react';

export default function CheckoutWizard({activeStep = 0}) {
  const steps = [
    'User Login',
    'Shipping Address',
    'Payment Method',
    'Place Order',
  ];
  return (
    <div className="mb-5 flex flex-wrap">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`flex-1 border-b-[3px] text-center 
                ${
                  index <= activeStep
                    ? 'border-primary text-[20px] font-[700]'
                    : 'border-light text-light'
                }
                `}>
          {step}
        </div>
      ))}
    </div>
  );
}
