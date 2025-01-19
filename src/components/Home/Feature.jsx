import Heading from "../../global/Heading";
import Arrow from "../../assets/home/Feature/Arrow.png";
import Image1 from "../../assets/home/Feature/img1.png";
import Image2 from "../../assets/home/Feature/img2.png";
import Image3 from "../../assets/home/Feature/img3.png";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Icon1 from "../../assets/home/Feature/Icon1.png";
import Logo from "../../global/Logo";

const Card = () => {};

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

function Feature() {
  return (
    <section className="bg-gradient-to-tr from-primary-2 to-n-1 py-10">
      <div className="feature" >
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
            {/* card start 1 */}
            <div className="bg-n-3 rounded-2xl shadow-2xl">
              <div className="flex flex-col px-2 gap-10 pt-5 md:flex-row items-center justify-between sm:pl-16 sm:pr-5">
                <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                  <div className="text-teal-300 w-[40px] h-[40px] flex items-center justify-center bg-n-4/40 rounded-full">
                    <MdOutlinePhoneIphone />
                  </div>
                  <TextContent
                    title="One Click Blance view"
                    des="Commonly used in the graphic, print& publishing industris for previewing visual layout and mockups."
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-[48%] left-[2rem]">
                    <Logo />
                  </div>
                  <img src={Image1} alt="" />
                </div>
              </div>
            </div>
            {/* card 1 end  */}
            {/* card 2 start  */}
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
            {/* card 2 end  */}
            {/* card 3 start  */}
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
            {/* card 3 end  */}
            {/* cards end  */}
          </div>
          {/* content end  */}
        </div>
      </div>
    </section>
  );
}

export default Feature;
