import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FooterBottom() {
  return (
    <>
      <div className="my-[40px] border-t-[1px] border-b-[1px] border-[#666] footer_bottom flex justify-between items-center">
        <div className="f_right flex items-center gap-5">
          <p className="text-[#666] text-[500]">
            Experience Star Tech App on your mobile:
          </p>
          <div>
            <Image
              src="/assets/play.png"
              alt="play"
              width="170"
              height="60"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              src="/assets/apple.png"
              alt="play"
              width="170"
              height="60"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="f_left_social">
          <div className="social_icon">
            <Link href="/" legacyBehavior>
              <a>
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </Link>
          </div>
          <div className="social_icon">
            <Link href="/" legacyBehavior>
              <a>
                <i class="fa-brands fa-youtube"></i>
              </a>
            </Link>
          </div>
          <div className="social_icon">
            <Link href="/" legacyBehavior>
              <a>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
