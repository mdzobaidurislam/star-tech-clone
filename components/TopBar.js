import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="top flex">
      <div className="logo">
        <Image width="200" height="100" src="/assets/logo.png" alt="logo" />
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          autocomplete="off"
          className="focus:outline-none"
        />
        <button class="search_icons">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="hidden lg:block">
        <div className="right_top_menu">
          <Link href="/about">
            <div className="o_icon text-primary">
              <i class="fa-solid fa-gift"></i>
            </div>
            <div class="of_content ">
              <h5>Offers</h5>
              <p className="text-light">Latest Offers</p>
            </div>
          </Link>
          <Link href="/">
            <div className="o_icon text-primary">
              <i class="fa-brands fa-staylinked"></i>
            </div>
            <div class="of_content ">
              <h5>Printer Fest</h5>
              <p className="text-light">Special Deals</p>
            </div>
          </Link>
          <Link href="/">
            <div className="o_icon text-primary">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="of_content ">
              <h5>Account</h5>
              <p className="text-light">Register or Login</p>
            </div>
          </Link>
          <button type="button" class="ctm_btn ml-[10px] ">
            PC Builder
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
