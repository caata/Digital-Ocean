import React from "react";
import DigitalOceaniIcon from './images/DigitalOcean_icon.svg.png'
import newBars from './images/newBars-removebg-preview.png'
import line from './images/line.PNG'
import LogoBig from './images/LogoBig.PNG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import NavArrow from './images/Arrow.png'


export default function Nav() {
    return (
        <nav className="bg-red-300">
            <div className="bg-[#081b4b]  xl:flex justify-center ">
            <div className="text-center text-[14px] text-[#D6DCEA] leading-[22px] font-[Inter] px-[16px] py-[8px] bg-[#081b4b]  lg:flex lg:justify-between lg:text-left  xl:w-[1312px] ">
                    <h1>{'Get alerted when assets are down, slow, or vulnerable to SSL attacks—all free for a month. Learn more ->'}</h1>
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
                        <ul className="hidden lg:flex ml-[32px] gap-[8px] items-center ">
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
                        <a className="hidden md:flex justify-center items-center mx-[8px] leading-[24px] w-[86.33px] h-[40px] text-[#24335a] hover:bg-[#e3e8f4] rounded-[10px] " href="">Log in</a>
                        <a className="hidden md:flex justify-center items-center font-semibold leading-[22px] w-[98.03px] h-[40px] bg-[#0069ff] text-white rounded-[10px]  hover:bg-[#002C9B]" href="">Sign up</a>
                        <div>
                            <img className="hidden md:flex px-[24px] justify-center items-center h-[24px] lg:hidden" src={line}/>
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center lg:hidden">
                            <img className="text-[#6A6A6A] h-[12px]" src={newBars}/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}



      


