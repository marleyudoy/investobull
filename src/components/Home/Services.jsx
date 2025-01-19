import React from "react";
import Heading from "../../global/Heading";
import Tick from "../../assets/home/service/tick.png";
import Game from "../../assets/home/service/game.png";
import Sheild from "../../assets/home/service/sheild.png";
import TextCard from "../../global/TextCard";

const serviceList = [
  {
    id: 1,
    icon: Sheild,
    title: "Guarantee Safety",
    des: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: 2,
    icon: Tick,
    title: "All in One App",
    des: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: 3,
    icon: Game,
    title: "Easy to Use",
    des: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
];
function Services() {
  return (
    <section className="bg-primary-2 py-10">
      {/* heading  */}
      <Heading
        title="Our Best ServicesFor Your Convinience"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna."
        large={false}
        image={true}
        center={true}
      />
      {/* heading end  */}
      {/* service list  */}
      <div className="container mt-6 space-y-10 sm:space-y-0 sm:grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)]">
        {serviceList &&
          serviceList.map((item) => (
            <TextCard isBg={true} key={item.id} data={item} />
          ))}
      </div>
      {/* service list end  */}
    </section>
  );
}

export default Services;
