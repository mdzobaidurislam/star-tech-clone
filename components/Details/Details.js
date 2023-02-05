import React from 'react';
import {detailsData} from './data';

const Details = () => {
  return (
    <div className="px-[40px]">
      <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-4 mt-[50px] pb-[80px]">
        {detailsData.map(item => (
          <>
            <div class="bg-[#ffffff] rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div
                class="rounded-lg p-4 bg-purple-600 flex flex-col"
                key={item._id}>
                <div>
                  <h5 class="text-secondary text-2xl font-bold  pb-[20px] leading-[30px]">
                    {item.name}
                  </h5>
                  <span class="text-[14px] leading-[22px] text-gray-400">
                    {item.description}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Details;
