import Button from "../../global/Button";
import Heading from "../../global/Heading";
import Video from "../../assets/home/video.png";
import L1 from "../../assets/home/hero/l1.png";
import L2 from "../../assets/home/hero/l2.png";
import L3 from "../../assets/home/hero/l3.png";
import R1 from "../../assets/home/hero/r1.png";
import R2 from "../../assets/home/hero/r2.png";
import HeroBg from "../../assets/home/hero/herobg.png";
import HeroBg2 from "../../assets/home/hero/herobg2.png";

function Hero() {
  return (
    <section className="bg-primary-2 overflow-hidden py-10">
        <div className="container relative">
          <div className="absolute hidden sm:block -top-[40px] left-[50px]">
            <img src={HeroBg} alt="" />
          </div>
          <Heading
            large={true}
            center={true}
            title="We make it easy for everyone to invest"
            des="Investment is a term with several meanings related to finance and economics. The term relates to the accumulation of an assets in the forms of an expectation of the future profits."
          />
          {/* button div  */}
          <div className="flex justify-center items-center mt-5 md:mt-8">
            <Button
              text="Get Started"
              px="px-4"
              py="py-3"
              className="bg-primary-1 text-white rounded-md"
            />
            <Button
              text="Watch Demo"
              px="px-4"
              py="py-3"
              className="rounded-md flex items-center gap-3 text-primary-1"
            >
              <img src={Video} alt="video" />
            </Button>
          </div>
        </div>
      {/* button div end  */}
      {/* main content  */}
      <div className="mt-8 relative md:mt-12 lg:mt-16">
        <div className="container flex flex-col items-center gap-5 md:flex-row md:gap-3 lg:gap-6 justify-center">
        <div className="absolute" >
            <img src={HeroBg2} alt="" />
        </div>
          {/* left side  */}
          <div className="flex items-center gap-1 md:gap-3">
            <div>
              <img src={L1} alt="image" />
            </div>
            <div className="flex flex-col gap-1 md:gap-3">
              <img src={L2} alt="image" />
              <img src={L3} alt="image" />
            </div>
          </div>
          {/* left side end  */}
          {/* right side  */}
          <div className="flex items-center gap-1 md:gap-3">
            <div>
              <img src={R1} alt="image" />
            </div>
            <div>
              <img src={R2} alt="image" />
            </div>
          </div>
          {/* right side end  */}
        </div>
      </div>
      {/* main content end  */}
    </section>
  );
}

export default Hero;
