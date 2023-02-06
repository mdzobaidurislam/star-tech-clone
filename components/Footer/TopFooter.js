import Link from 'next/link';
import React from 'react';

export default function TopFooter() {
  return (
    <>
      <div class="footer_area">
        <div className="support f_title">
          <h4>Support</h4>
          <div className="s_inner">
            <div className="s_box group/item hover:border-primary">
              <div className="s_icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="s_des">
                <div className="s_header">
                  <span>9AM - 8PM</span>
                </div>
                <p>430934--4-4444</p>
              </div>
            </div>
          </div>
          <div className="s_inner">
            <div className="s_box group/item hover:border-primary">
              <div className="s_icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="s_des">
                <div className="s_header">
                  <span>Store Locator</span>
                </div>
                <p>Find Our Stores</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_us f_title">
          <h4>About US</h4>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2  gap-4 mb-[30px]">
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
            <div className="link">
              <Link href="/" legacyBehavior>
                <a>EMI Terms</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="connected f_title">
          <h4>STAY CONNECTED</h4>
          <div className="con_des flex flex-col gap-3">
            <h5 className="text-[#fff]">Star Tech & Engineering Ltd</h5>
            <p className="text-[#666]">
              Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
              1000
            </p>
            <p className="text-primary font-[500] text-[14px]">
              info.webteam@startechbd.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
