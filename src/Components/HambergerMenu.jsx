import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineEditCalendar } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import header_data from "./data.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle, close } from "../features/hambergerSlice.js";

const HambergerMenu = () => {
    const data = null; //localStorage.getItem("token")

    const isOpened = useSelector((state) => {
        return state.hamburger.value;
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    return (
        <div className="flex md:hidden dark:text-[#dcdbdb] text-md">
            <button
                className="text-3xl text-slate-700 font-bold"
                onClick={() => dispatch(toggle())}
            >
                <RxHamburgerMenu />
            </button>

            {isOpened ? (
                <div className="fixed top-16 right-0 w-[100%] z-10 bg-gray-50 dark:bg-gray-800 border-[#d7d7d7] sm:top-16 h-screen sm:px-8">
                    <div className="flex flex-col justify-between h-[80%]">
                        <div className="md:hidden">
                            {header_data.map((item, id) => {
                                return (
                                    <div key={id} className="p-2">
                                        <Link to={`${item.path}`}>
                                            <button
                                                className={`w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2 text-left font-medium mr-4  rounded-[4px]`}
                                                onClick={() => {
                                                    dispatch(close());
                                                }}
                                            >
                                                <span className={`md:hidden`}>
                                                    {item.title}
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                );
                            })}
                            {data ? (
                                <>
                                    <div className="p-2">
                                        <Link to={`/profile`}>
                                            <button
                                                className={`w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2 text-left font-medium mr-4  rounded-[4px]`}
                                                onClick={() => {
                                                    dispatch(close());
                                                }}
                                            >
                                                <span className={`md:hidden`}>
                                                    My profile
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <Link to={`/appointment`}>
                                            <button
                                                className={`w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2 text-left font-medium mr-4  rounded-[4px]`}
                                                onClick={() => {
                                                    dispatch(close());
                                                }}
                                            >
                                                <span className={`md:hidden`}>
                                                    My Appointment
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-2 text-md">
                            {data ? (
                                <div className="p-2">
                                    {/* <Link to='/logout'> */}
                                    <button
                                        className="text-left border-2 border-slate-600 dark:bg-gray-600 py-1 px-3 rounded-3xl font-medium flex"
                                        onClick={() => {
                                            handleLogout();
                                        }}
                                    >
                                        Logout
                                        <span className="text-2xl ml-1">
                                            <RiLogoutCircleLine />
                                        </span>
                                    </button>
                                    {/* </Link> */}
                                </div>
                            ) : (
                                <>
                                    <div className="p-2">
                                        {/* <Link to="/login">
                                    <button className='text-left border-2 border-slate-600 dark:bg-gray-600 py-1 px-3 rounded-3xl font-medium flex' onClick={()=>{dispatch(close())}}>Login<span className='text-2xl ml-1'><IoMdLogIn/></span></button>
                                </Link> */}
                                    </div>
                                    <div className="p-2">
                                        <Link
                                            to="https://calendly.com/drbinayyadav/30min"
                                            target="_blank"
                                        >
                                            <button
                                                className="text-left border-2 border-slate-600 text-gray-100 bg-slate-600 dark:bg-gray-600 py-1 px-3 rounded-3xl font-medium flex"
                                                onClick={() => {
                                                    dispatch(close());
                                                }}
                                            >
                                                Book An Appointment
                                                <span className="text-2xl ml-1">
                                                    <MdOutlineEditCalendar />
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default HambergerMenu;
