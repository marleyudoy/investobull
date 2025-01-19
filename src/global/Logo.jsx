import CompanyLogo from "../assets/home/Logo.png"

function Logo() {
  return (
    <div className="flex items-center font-popin text-white body1" >
        <img className="w-[40px] height-[40px] md:w-auto h-auto" src={CompanyLogo} alt="" />
        <span>Investobull</span>
    </div>
  )
}

export default Logo