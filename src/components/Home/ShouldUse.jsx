import React from "react";
import Heading from "../../global/Heading";
import Chart from "../../assets/home/service/chart.png";
import Wallet from "../../assets/home/service/wallet.png";
import Menu from "../../assets/home/service/menu.png";
import Judge from "../../assets/home/service/judge.png";
import TextCard from "../../global/TextCard";

const shouldUseList = [
  {
    id: 1,
    icon: Menu,
    title: "Lots Choices",
    des: "There are various types of investments available and you can choose investments",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Minimal Risk",
    des: "Interest rate risk in the risk that arises because the relative value",
  },
  {
    id: 3,
    icon: Chart,
    title: "High Profit",
    des: "The money or assets will gradually grow or increase in value within a certain period",
  },
  {
    id: 4,
    icon: Judge,
    title: "Legal",
    des: "Our platform has been verified and supervised by related institutions",
  },
];

function ShouldUse() {
  const a = shouldUseList[0];
  const b = shouldUseList[1];
  const c = shouldUseList[2];
  const d = shouldUseList[3];
  return (
    <section className="bg-primary-2 py-10">
      <Heading
        title="These are why you should use Investobull"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna."
        center={true}
        image={true}
      />
      <div className="relative container flex flex-col justify-center items-center" >
        <div className=" relative flex flex-col space-y-10 justify-center items-center md:space-y-0 md:flex-row">
          <div className="md:border-r space-y-5 md:space-y-0 border-white/50">
            <div className="md:border-b md:border-white/50">
              <TextCard data={a} image={true} largeText={true} />
            </div>
            <TextCard data={b} image={true} largeText={true} />
          </div>
          <div className="space-y-10 md:space-y-0 md:pt-[200px]">
            <div className="md:border-b md:border-white/50">
              <TextCard data={c} image={true} largeText={true} />
            </div>
            <TextCard data={d} image={true} largeText={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShouldUse;
