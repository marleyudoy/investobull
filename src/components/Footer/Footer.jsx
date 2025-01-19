import { Link } from "react-router"
import Logo from "../../global/Logo"

const footerList = [
    {
        id:1,
        name:"logo",
        items:["A marketplace that sells various types of work by professional designers and is paid with NFT tokens."]
    },
    {
        id:2,
        name:"About Us",
        items:["About Us","Our Services","How It Works","Become a Partner",]
    },
    {
        id:3,
        name:"About Us",
        items:["Token","Discussion","Voting","Blog","Help Center"]
    },
    {
        id:4,
        name:"Social Media",
        items:["Instagram","Facebook","Twitter"]
    },
]

function Footer() {
  return (
    <footer className='bg-primary-2 py-5' >
        <div className="container py-5 grid grid-cols-1 sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] gap-5 md:gap-10" >
            {
                footerList && footerList.map(({id,name,items})=>(
                    <div key={id} className="" >
                        <h1 className={`${name === "logo" ? "" :"body3 text-white font-semibold font-popin"}`}>{name === "logo" ? <Logo /> : name}</h1>
                        <div className="flex space-y-1 flex-col hover:text-white text-white/85 text-[14px] mt-3" >
                            {items?.map((it,inx)=>(
                                <Link className={`${name === 'logo' ? "max-w-[25rem]" : ""}`} key={inx}>{it}</Link>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="container pt-5 flex justify-between border-t border-gray-800">
            <p className="text-gray-600 body-3">Copyright @2023 Asra</p>
            <ul className="flex items-center gap-5 text-gray-600 body3">
            
                <li>Privecy</li>
                <li>Security</li>
                <li>Terms</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer