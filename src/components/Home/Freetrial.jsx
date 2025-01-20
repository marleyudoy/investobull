import I1 from "../../assets/home/Freetrial/i1.svg";
import Quto from "../../assets/home/Freetrial/quto.png";
import Button from "../../global/Button";
import Bg from "../../assets/home/Freetrial/Bg.svg";
import BH from "../../assets/home/Freetrial/Bh.png";
import BG2 from "../../assets/home/Freetrial/bg2.png";
import ball from "../../assets/home/Freetrial/ball.png";
import ball2 from "../../assets/home/Freetrial/ball2.png";
import { Link } from "react-router";
import I3 from "../../assets/home/reason/i1.png";
import I4 from "../../assets/home/reason/i2.png";
import PlayStore from "../../assets/home/Freetrial/playstore.png";
import Apple from "../../assets/home/Freetrial/apple.png";

const FirstCard = () => {
  return (
    <div className="bg-[url(/src/assets/home/Freetrial/Bh.png)] bg-no-repeat object-center bg-cover ">
      <div className="container relative py-10">
        <div className="absolute z-10">
          <img src={Bg} alt="" />
        </div>
        <div className="flex flex-col gap-10 relative z-20 md:flex-row justify-center items-center md:justify-start md:items-start">
          <div className="flex-1">
            <img src={I1} alt="" />
          </div>
          <div className="flex-1 lg:p-10 text-center md:text-start">
            <img className="mx-auto py-3 md:mx-0" src={Quto} alt="" />
            <div>
              <h3 className="h3 text-white py-2">
                Deski combines excellent live chat, ticketing and automation
                that allow us to provide quality.
              </h3>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] text-white py-3 font-popin text-center md:text-start">
                <h2>Mike Lucas.</h2>
                <h3 className="font-bold">CEO & Founder deksi</h3>
              </div>
            </div>
            <Button
              text="Learn More"
              className="bg-primary-1 mt-3 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const SecondCard = () => {
  return (
    <div className="container overflow-hidden py-10 md:py-16 relative mt-20 bg-n-4 rounded-[30px] ">
      <div className="flex flex-col md:flex-row relative z-20 items-center p-4 gap-10">
        <div className="flex-1">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-white/90">
            Start your free trial.
          </h3>
          <h2 className="h2 text-white font-popin font-bold">
            New user? Start your free trial now.
          </h2>
        </div>
        <div className="w-full flex-1">
          <div className="bg-white px-2 py-2 rounded-full flex justify-between">
            <input type="text" placeholder="Enter email" />
            <Button
              className="text-xs bg-green-950 text-white font-bold rounded-full font-popin"
              text="Start Trial"
              py="py-3"
              px="px-6"
            />
          </div>
          <p className="text-white mt-5">
            Already a member? <Link className="text-teal-400">Sign in</Link>
          </p>
        </div>
      </div>
      {/* background  */}
      <div className="absolute top-0 left-0 z-10">
        <img className="" src={BG2} alt="" />
      </div>
      <div className="absolute right-0 top-0">
        <img src={ball} alt="" />
      </div>
    </div>
  );
};
const ThirdCard = () => {
  return (
    <div className="py-12 relative overflow-hidden bg-gradient-to-r from-n-2 to-n-4 mt-10 lg:mt-16">
      <div className="container py-2 relative z-20 flex flex-col gap-10 items-center md:flex-row">
        {/* frist div  */}
        <div className="flex-1 relative overflow-hidden md:overflow-visible">
          <div>
            <img className="rounded-e-[20px]" src={I3} alt="" />
          </div>
          <div className="absolute top-0 left-[100px] md:left-0">
            <img src={I4} alt="" />
          </div>
        </div>
        {/* second div  */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="h2 text-white max-w-[30rem] font-popin py-2">
            The New Way of Cashless Payment
          </h1>
          <p className="body3 text-white/90 max-w-[30rem] font-popin py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="mt-5 flex gap-4 justify-center md:justify-start">
            <img src={PlayStore} alt="" />
            <img src={Apple} alt="" />
          </div>
        </div>
      </div>
      {/* absolute backgorun  */}
      <div className="absolute z-10 right-0 top-[100px]">
        <img className="w-[100%] h-[100%]" src={ball2} alt="" />
      </div>
      <img
        className="w-[100%] hidden md:block left-0 top-0 absolute h-[100%]"
        src={BG2}
        alt=""
      />
    </div>
  );
};
function Freetrial() {
  return (
    <section className="py-10 bg-primary-2">
      {/* item 1  */}
      <FirstCard />
      {/* item 2  */}
      <div className="px-3">
      <SecondCard />
      </div>
      {/* item 3  */}
      <ThirdCard />
    </section>
  );
}

export default Freetrial;
