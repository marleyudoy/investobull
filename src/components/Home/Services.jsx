import React from "react";
import Heading from "../../global/Heading";
import Tick from "../../assets/home/service/tick.png";
import Game from "../../assets/home/service/game.png";
import Sheild from "../../assets/home/service/sheild.png";

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
      <Heading
        title="Our Best ServicesFor Your Convinience"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna."
        large={false}
        image={true}
        center={true}
      />
      <div className="container mt-6 space-y-10 sm:space-y-0 sm:grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)]">
        {serviceList &&
          serviceList.map(({ id, title, icon, des }) => (
            <div key={id} className="sm:p-5 md:p-6 lg:p-10">
              <div className="flex items-center justify-center w-[50px] h-[50px] bg-primary-1 rounded-full">
                <img src={icon} alt="" />
              </div>
              <div>
                <h2 className="h5 font-dm text-white font-semibold pt-3 pb-2">
                  {title}
                </h2>

                <p className="body3 max-w-[40rem] text-gray-300 font-dm">
                  {des}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Services;
