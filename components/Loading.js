import React from 'react';

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          class="w-12 h-12 rounded-full animate-spin
            border-8 border-dashed border-primary "></div>
      </div>
    </>
  );
}
