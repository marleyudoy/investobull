import Heading from "../../global/Heading";
import Arrow from "../../assets/home/Feature/Arrow.png";
import Image1 from "../../assets/home/Feature/img1.png";
import Image2 from "../../assets/home/Feature/img2.png";
import Image3 from "../../assets/home/Feature/img3.png";
import Image4 from "../../assets/home/Feature/img4.png";
import Image5 from "../../assets/home/Feature/img5.png";
import CompnayLogo from "../../assets/home/Logo.png"

import { MdOutlinePhoneIphone } from "react-icons/md";
import Icon1 from "../../assets/home/Feature/icon1.png";


const TextContent = ({ title, des }) => {
  return (
    <div className="text-center sm:text-start mt-3">
      <h2 className="text-white font-popin text-[28px] mt-1 sm:text-[30px] md:text-[24px] lg:text-[40px] max-w-[25rem]">
        {title}
      </h2>
      <p className="text-white/60 font-popin text-[16px] mt-3 sm:text-[18px] md:text-[20px] lg:text-[22px] max-w-[30rem]">
        {des}
      </p>
      <div className="mt-5">
        <img className=" mx-auto sm:mx-0" src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
};

const FirstCard = () => {
  return (
    <div className="bg-n-3 rounded-2xl shadow-2xl">
      <div className="flex overflow-hidden flex-col px-2 gap-10 pt-5 md:flex-row items-center justify-between sm:pl-16 sm:pr-5">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="text-teal-300 w-[40px] h-[40px] flex items-center justify-center bg-n-4/40 rounded-full">
            <MdOutlinePhoneIphone />
          </div>
          <TextContent
            title="One Click Blance view"
            des="Commonly used in the graphic, print& publishing industris for previewing visual layout and mockups."
          />
        </div>
        <div className="relative  flex items-center">
          <div className="relative overflow-hidden">
            <div className="absolute flex items-center sm:left-[3rem] lg:left-[4.5rem] text-white top-[48%] md:left-[1rem]">
                <img src={CompnayLogo} alt="" />
                <p className="text-[13px]" >Investobull</p>
            </div>
              <img src={Image5} alt="" />
          </div>
          <div className="space-y-5">
            <div className="space-y-10">
              <div className="-mt-10">
                <img src={Image1} className="mt-3" alt="" />
              </div>
              <div>
                <img src={Image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <div className="bg-n-2 mt-10 lg:mt-20 rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-10 pt-5 md:flex-row-reverse items-center justify-between sm:pl-16 sm:pr-5">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="text-teal-300 w-[60px] h-[60px] flex items-center justify-center bg-n-4/40 rounded-full">
            <img src={Icon1} alt="" />
          </div>
          <TextContent
            title="One Click Blance view"
            des="Commonly used in the graphic, print& publishing industris for previewing visual layout and mockups."
          />
        </div>
        <div className="relative">
          <img src={Image2} alt="" />
        </div>
      </div>
    </div>
  );
};
const ThirdCard = () => {
  return (
    <div className="bg-n-3 mt-10 overflow-hidden lg:mt-20 rounded-2xl shadow-2xl">
      <div className="flex flex-col gap-10 pt-10 md:flex-row items-center justify-between sm:pl-16 md:pr-5">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="text-teal-300 w-[60px] h-[60px] flex items-center justify-center bg-n-4/40 rounded-full">
            <img src={Icon1} alt="" />
          </div>
          <TextContent
            title="One Click Blance view"
            des="Commonly used in the graphic, print& publishing industris for previewing visual layout and mockups."
          />
        </div>
        <div className="relative">
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  );
};
function Feature() {
  return (
    <section className="bg-primary-2">
      <div className="bg-[url(/src/assets/home/Feature/Bh.png)] py-10 bg-no-repeat bg-cover lg:bg-contain">
        <div className="feature">
          <div className="mt-10">
            <Heading
              title="Some of Wonderful Features"
              des="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna."
              image={true}
              center={true}
            />
            {/* content start  */}
            <div className="container mt-10">
              {/* cards  */}
              <FirstCard />
              <SecondCard />
              <ThirdCard />
              {/* cards end  */}
            </div>
            {/* content end  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
