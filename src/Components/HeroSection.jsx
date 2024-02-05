import React, { useState } from "react";
import { FaHospitalSymbol } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import profileImg from "/profile3.png";

const HeroSection = () => {
    return (
        <>
            <section
                id="hero"
                className="px-2 lg:px-14 pt-20 lg:pt-12 pb-10 lg:pb-0 md:pt-24 bg-[#d0dee1]"
            >
                <div className="flex flex-col-reverse md:flex-row items-center lg:min-h-[93vh]">
                    {/* LEFT SIDE OF HERO SECTION */}
                    <section className="md:flex-1">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl overflow-visible mx-auto font-semibold text-blue-700 pt-4">
                            Why Colorectal?
                        </h1>
                        <p className="mt-5">
                            Day by day studies are going for betterment of
                            decision making and good surgical management
                            worldwide to improve the outcome of surgery and
                            quality of life of people.
                        </p>
                        <div className={`mb-3`}>
                            <ul className="list-disc list-inside">
                                <li>
                                    To make decision, upgrading ourselves to
                                    recent advances going worldwide.
                                </li>
                                <li>Proper decision making.</li>
                                <li>Betterment of surgical approach.</li>
                                <li>Improve quality of life of people.</li>
                                <li>Avoiding unnecessary surgery.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <Link
                                to="https://calendly.com/drbinayyadav/30min"
                                target="_blank"
                            >
                                <button className="md:ml-3 mt-4 px-4 py-1 border-2 border-slate-600  shadow-[#ffffff] shadow-sm hover:shadow-md hover:shadow-[#ffffff] rounded-2xl text-[#232323]">
                                    BOOK AN APPOINTMENT
                                </button>
                            </Link>
                        </div>
                    </section>

                    {/* RIGHT SIDE OF HERO SECTION */}
                    <aside className="md:flex-1 flex justify-center relative">
                        <div className="rounded-full w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[30rem] bg-[#b5b5b5] flex  justify-center overflow-hidden">
                            <img src={profileImg} className=" object-cover" />
                            <div className="p-2 bg-[#fefdfd] shadow-xl shadow-[#696969] rounded-md absolute bottom-16 left-12 flex text-left hover:scale-110">
                                <div className="flex items-center justify-center text-4xl mr-2 text-red-500">
                                    <FaHospitalSymbol />
                                </div>
                                <div className="md:text-[15px]">
                                    <p>Dr.Binay Yadav</p>
                                    <p>MBBS,MS(Colorectal Surgeon)</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
