import React from "react";
import BlogCard from "../Components/BlogCard";
import { useEffect } from "react";

const Blog = () => {
    function checkPage() {
        const navs = document.querySelectorAll("#navs span");
        navs.forEach((nav) => {
            nav.classList.remove("pageNow");
        });

        const path = window.location.pathname;
        if (path == "/") {
            document.getElementById("linktoHome").classList.add("pageNow");
        } else if (path == "/service") {
            document.getElementById("linktoService").classList.add("pageNow");
        } else if (path == "/gallery") {
            document.getElementById("linktoGallery").classList.add("pageNow");
        } else if (path == "/about") {
            document.getElementById("linktoAbout").classList.add("pageNow");
        } else if (path == "/blog") {
            document.getElementById("linktoBlogs").classList.add("pageNow");
        }
    }
    useEffect(() => {
        checkPage();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div>
            <section className="pt-20 px-14">
                <div className="">
                    <div className={`flex items-center mb-8`}>
                        <div
                            className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}
                        ></div>
                        <span
                            className={`mx-2 font-semibold text-3xl text-blue-900 overflow-visible`}
                        >
                            Blog
                        </span>
                        <div
                            className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#F11a22] flex-grow`}
                        ></div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/Y23YC07/image-02.jpg"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
