import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterBottom from './FooterBottom';
import TopFooter from './TopFooter';

export default function Footer() {
  return (
    <div className="footer_section bg-[#081621]  pt-[80px] px-[40px]">
      <TopFooter />
      <FooterBottom />
      <div className="pb-[20px] flex justify-between items-center  shadow-inner py-[20px] copyright">
        <p className="text-[#666] text-[14px]">
          © 2023 Star Tech & Engineering Ltd | All rights reserved
        </p>
        <p className="text-[#666] text-[14px]">Powered By: Star Soft</p>
      </div>
    </div>
  );
}
