import React, { useState } from "react";
import According from "../../global/According";
import Heading from "../../global/Heading";

const faqList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consterqeur?",
    des: "Web hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business as well as all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consterqeur?",
    des: "Web hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business as well as all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consterqeur?",
    des: "IWeb hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business as well as all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consterqeur?",
    des: "IWeb hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business as well as all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website",
  },
];

function Faq() {
  const [activeAccording, setActiveAccording] = useState(0);
  return (
    <section className="py-10 bg-primary-2">
        <Heading title="Frequently Asked Question" image={true} center={true} />
      <div className="container mt-5">
        {faqList.map((item) => (
          <According
            handleAccording={() => setActiveAccording(item.id)}
            activeAccording={activeAccording}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
