import { useState } from "react";
import BorderImage from "../../assets/home/borderImage.png";
import According from "../../global/According";
import I1 from "../../assets/home/reason/i1.png"
import I2 from "../../assets/home/reason/i2.png"

const accrodingItem = [
  {
    id: 1,
    title: "Register and create your first support portal",
    des: "It only takes 5 minutes. Set-up is smooth & simple,with fully customisable page design to reflect your brand lorem dummy.",
  },
  {
    id: 2,
    title: "Manage your dashbaord easily",
    des: "It only takes 5 minutes. Set-up is smooth & simple,with fully customisable page design to reflect your brand lorem dummy.",
  },
  {
    id: 3,
    title: "Start Investing",
    des: "It only takes 5 minutes. Set-up is smooth & simple,with fully customisable page design to reflect your brand lorem dummy.",
  },
];

function Reason() {
  const [activeAccording, setActiveAccording] = useState(0);
  return (
    <section className="py-10 bg-primary-2">
      <div className="container flex flex-col lg:flex-row gap-4 relative overflow-hidden md:overflow-visible">
        {/* left div  */}
        <div className="flex-1" >
          <h5 className="text-[16px] sm:text-[18px] md:text-[20px] text-white/30 pb-1" >GET STARTED IN MINUTES</h5>
          <h3 className="h3 text-white py-2">3 Main Reaosn to Choose us.</h3>
          <img src={BorderImage} alt="" />
          <div className="mt-5" >
            {accrodingItem.map((item) => (
              <According
                handleAccording={() => setActiveAccording(item.id)}
                activeAccording={activeAccording}
                key={item.id}
                data={item}
              />
            ))}
          </div>
        </div>
        {/* right div  */}
        <div className="relative flex-1" >
            <div className="absolute w-full h-full -right-[200px] min-h-[25rem] max-h-[10rem] " >
                <img className="w-full h-[100%]" src={I1} alt="" />
            </div>
            <div className="relative mt-10 -right-[100px]" >
                <img src={I2} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Reason;
