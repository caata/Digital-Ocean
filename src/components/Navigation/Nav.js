import React from "react";
import DigitalOceaniIcon from '../../images/DigitalOcean_icon.svg.png'
import line from '../../images/line.PNG'
import LogoBig from '../../images/LogoBig.PNG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavArrow from '../../images/Arrow.png'




export default function Nav() {

    const [burger_class, setBurgerClass] = React.useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = React.useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            document.body.style.overflow= "hidden"
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            document.body.style.overflow= "scroll"
        }
        setIsMenuClicked(!isMenuClicked)
    }
   
    return (
        <nav id="nava" className="flex flex-col sticky top-0 z-50 w-[100%]">
            <div className="bg-[#081b4b]  xl:flex justify-center ">
                <div className="text-start  text-[14px] text-[#D6DCEA] leading-[22px] font-[Inter] font-medium px-[16px] py-[8px] bg-[#081b4b] sm:text-center lg:flex lg:justify-between lg:text-left  xl:w-[1312px] ">
                    <h1 className="hover:text-white">{'deploy is back! Join DigitalOcean’s virtual conference for global builders. Register today ->'}</h1>
                    <ul className="hidden lg:flex w-[314.16]  gap-[16px]">
                        <li>We&apos;re hiring</li>
                        <li>Blog</li>
                        <li>Docs</li>
                        <li>Get Support</li>
                        <li>Sales</li>
                    </ul>
                </div>
            </div>
                
            <div className="bg-white h-[73px] font-[Inter] select-none  xl:flex justify-center">
                <div className="px-[16px]  flex justify-between items-center bg-white h-[72px] xl:w-[1312px]  ">
                    <div className="text-[#2596be] h-[32px] md:flex justify-center items-center ">
                        <img className="h-full md:hidden" src={DigitalOceaniIcon}/>
                        <img className="hidden md:block h-full " src={LogoBig}/>              
                        <ul className="hidden lg:flex ml-[32px] gap-[8px] items-center font-medium">
                            <li className="">
                                <div className="flex gap-[8px] no-padding items-center justify-between rounded-[10px] text-[#24335a]  hover:bg-[#e3e8f4]">
                                <h1 className="arrowpadding">Products</h1>
                                <img className="arrow text-[#8a96b5] w-[16px] h-[16px] rotate-[90deg]" src={NavArrow}/>
                                </div>
                            </li>
                            <li className="">
                                <div className="flex gap-[8px] no-padding items-center justify-between rounded-[10px] text-[#24335a]  hover:bg-[#e3e8f4]">
                                <h1 className="arrowpadding">Solutions</h1>
                                <img className="arrow text-[#8a96b5] w-[16px] h-[16px] rotate-[90deg]" src={NavArrow}/>
                                </div>
                            </li>
                            <li className="">
                                <div className="flex gap-[8px] no-padding items-center justify-between rounded-[10px] text-[#24335a]  hover:bg-[#e3e8f4]">
                                <h1 className="arrowpadding">Marketplace</h1>
                                </div>
                            </li>
                            <li className="">
                                <div className="flex gap-[8px] no-padding items-center justify-between rounded-[10px] text-[#24335a]  hover:bg-[#e3e8f4]">
                                <h1 className="arrowpadding">Community</h1>
                                <img className="arrow text-[#8a96b5] w-[16px] h-[16px] rotate-[90deg]" src={NavArrow}/>
                                </div>
                            </li>
                            <li className="">
                                <div className="flex gap-[8px] no-padding items-center justify-between rounded-[10px] text-[#24335a]  hover:bg-[#e3e8f4]">
                                <h1 className="arrowpadding">Pricing</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" md:flex items-center justify-between  ">
                        <a className="hidden md:flex justify-center items-center mx-[8px] leading-[24px] w-[86.33px] h-[40px] text-[#24335a] hover:bg-[#e3e8f4] rounded-[10px] duration-[250ms] font-medium" href="">Log in</a>
                        <a className="hidden md:flex justify-center items-center font-semibold leading-[22px] w-[98.03px] h-[40px] bg-[#0069ff] text-white rounded-[10px]  hover:bg-[#002C9B] duration-[250ms] " href="">Sign up</a>
                        <div>
                            <img className="hidden md:flex px-[24px] justify-center items-center h-[24px] lg:hidden" src={line}/>
                        </div>
                        <div className="hamburger w-[40px] h-[40px] flex items-center justify-center lg:hidden">
                            <div className="cace">
                                <div className="items-center bg-[transparent] border-[none] flex flex-col gap-[8px] h-[40px] justify-center w-[40px]" onClick={updateMenu}>
                                    <div className={burger_class} ></div>
                                    <div className={burger_class} ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className={menu_class}>
                    <div className="menu px-[16px]"> 
                        <ul >
                            <li className="noo-paddingX text-[#24335a] pt-[11px] pb-[12px] border-b border-[#d6dcea] text-[16px] font-medium	center color-[#24335a] flex items-center  gap-[8px] w-[100%] justify-between leading-[1.15]"><p>Products</p> <img className="arrow-burger h-[16px] mr-[10px]" src={NavArrow} /></li>
                            <li className="noo-paddingX text-[#24335a] pt-[12px] pb-[12px] border-b border-[#d6dcea] text-[16px] font-medium	center color-[#24335a] flex items-center  gap-[8px] w-[100%]  justify-between leading-[1.15]"><p>Solutions</p> <img className="arrow-burger h-[16px] mr-[10px]" src={NavArrow} /></li>
                            <li className="noo-paddingX text-[#24335a] pt-[12px] pb-[12px] border-b border-[#d6dcea] text-[16px] font-medium	center color-[#24335a] flex items-center  gap-[8px] w-[100%] leading-[1.4] ">Marketplace</li>
                            <li className="noo-paddingX text-[#24335a] pt-[12px] pb-[12px] border-b border-[#d6dcea] text-[16px] font-medium	center color-[#24335a] flex items-center  gap-[8px] w-[100%]  justify-between leading-[1.15]"><p>Community</p> <img className="arrow-burger h-[16px] mr-[10px]" src={NavArrow} /></li>
                            <li className="noo-paddingX text-[#24335a] pt-[12px] pb-[12px] border-b border-[#d6dcea] text-[16px] font-medium	center color-[#24335a] flex items-center  gap-[8px] w-[100%]  leading-[1.4]">Pricing</li>
                        </ul>
                        <ul className="mt-[40px] flex gap-[16px] w-full ml-auto md:hidden">
                            <li className="w-full transition duration-[250] ease-out border-solid border-[#AAB3CA] border rounded-[10px] text-[#24335A] flex font-medium h-[40px] justify-center leading-[24px] px-[20px]  items-center hover:bg-[#E3E8F4] ">Log in</li>
                            <li className="w-full font-semibold text-white  bg-[#0069FF] transition duration-[250] ease-out border-solid border-[#0069FF] border rounded-[10px] flex h-[40px] justify-center leading-[24px] px-[20px]  items-center  hover:bg-[#002C9B]">Sign up</li>
                        </ul>
                        <ul className="my-[40px] flex flex-col width-full gap-[16px]">
                            <li className="pt-[1px] items-center border-solid border-[#0069FF] border align-center rounded-[10px] text-[#0069FF] flex font-medium	h-[40px] justify-center">We&apos;re hiring</li>
                            <li className="pt-[1px] items-center border-solid border-[#8A96B5] border align-center rounded-[10px] text-[#24335A] flex font-medium	h-[40px] justify-center hover:border-[#0069FF] hover:text-[#0069FF]">Blog</li>
                            <li className="pt-[1px] items-center border-solid border-[#8A96B5] border align-center rounded-[10px] text-[#24335A] flex font-medium	h-[40px] justify-center hover:border-[#0069FF] hover:text-[#0069FF]">Docs</li>
                            <li className="pt-[1px] items-center border-solid border-[#8A96B5] border align-center rounded-[10px] text-[#24335A] flex font-medium	h-[40px] justify-center hover:border-[#0069FF] hover:text-[#0069FF]">Get Support</li>
                            <li className="pt-[1px] items-center border-solid border-[#8A96B5] border align-center rounded-[10px] text-[#24335A] flex font-medium	h-[40px] justify-center hover:border-[#0069FF] hover:text-[#0069FF]">Sales</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="pulanarecarte" className="font-normal shadow-[0_2px_4px_#031b4e99] duration-500 bg-[#081b4b]  xl:flex justify-center w-[100%]  
            flex items center py-[16px] px-[40px] bg-[#081b4b] rounded-b-md hover:bg-[#15cd72] hover:shadow-[0_10px_20px_#031b4e1a] 
            text-[14px] lg:text5px]">
                <div className="pt-[1px] bg-transparent flex items-center text-center  text-white leading-[22px] font-[Inter] lg:flex lg:justify-between lg:text-left  xl:w-[1312px] ">
                    <h1 className="leading-[1.5] bg-transparent">{'Free credit active: Get started on DigitalOcean with a $200, 60-day credit for new users.'}</h1>
                    <div onClick={toggleClass} className="pb-[2px] cintfrotata w-[40px] h-[40px] right-0 flex items-center justify-center absolute">
                        <div className="crossOne " ></div>
                        <div className="crossTwo " ></div>
                    </div>
                </div>
            </div>
        </nav>
    )

    function toggleClass(){
        document.getElementById("pulanarecarte").style.display = "none";
    }
}