import { useNavigate } from "react-router";
import CompanyLogo from "../assets/home/Logo.png";

function Logo() {
    const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/home') } className="flex cursor-pointer items-center font-popin text-white body2 lg:body1">
      <img
        className="w-[40px] height-[40px] md:w-[60px] h-auto"
        src={CompanyLogo}
        alt=""
      />
      <span >Investobull</span>
    </div>
  );
}

export default Logo;
