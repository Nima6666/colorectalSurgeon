import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import aboutImg from "/img2.jpg";

const About = () => {
    const location = useLocation();
    const isHome = location.pathname == "/";

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
        <div className={`${isHome ? "py-12" : "pt-20 pb-12"}`}>
            {/* TITLE */}
            <div className="flex items-center mb-8">
                <div
                    className={`h-[2px] bg-gradient-to-r from-transparent via-red-50 to-[#F11a22] flex-grow shadow-md shadow-white`}
                ></div>
                <span
                    className={`mx-2 font-semibold text-3xl text-blue-900 overflow-visible`}
                >
                    About Us
                </span>
                <div
                    className={`h-[2px] bg-gradient-to-l from-transparent via-red-50 to-[#F11a22] flex-grow`}
                ></div>
            </div>
            <section id="about" className="px-2 lg:px-14">
                <div
                    className={`flex items-start flex-col ${
                        isHome ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-2 lg:gap-10`}
                >
                    {/* LEFT SIDE OF HERO SECTION */}
                    <section className={`overflow-visible flex-1 py-5`}>
                        <h1 className="text-4xl overflow-hidden mx-auto">
                            Colorectal{" "}
                            <span className="block overflow-visible">
                                Surgeon Nepal
                            </span>
                        </h1>

                        {isHome && (
                            <>
                                <p className="py-5">
                                    We are specialized medical professionals who
                                    focus on the diagnosis, medical, and
                                    surgical treatment of disorders affecting
                                    the colon (large intestine), rectum, anal
                                    canal, and pelvic floor disease. Our
                                    expertise encompasses both benign and
                                    malignant conditions.
                                </p>
                                <p className="pb-5">
                                    Specific diagnosis of various conditions
                                    affecting the colon, rectum, anal canal, and
                                    pelvic floor. We work as a multidisciplinary
                                    team with other healthcare professionals to
                                    formulate appropriate treatment plans.
                                </p>
                            </>
                        )}

                        {!isHome && (
                            <>
                                <p className="py-5">
                                    We are a specialized medical professional
                                    who focuses on the diagnosis , medical and
                                    surgical treatment of disorders affecting
                                    the colon (large intestine) ,rectum, anal
                                    canal and pelvic floor disease. Our
                                    expertise encompasses both benign and
                                    malignant conditions. What we do:
                                </p>
                                <p className="pb-5">
                                    Specefic diagnosis of variety conditions
                                    affecting the colon , rectum , anal canal
                                    and pelvic floor. We work as a multi
                                    decipilinary team with other healthcare
                                    professionals, to conclude appropriate
                                    treatment plans.
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Treatment Planning:
                                    </span>{" "}
                                    Once a diagnosis is established we
                                    collaborate with patients and other
                                    specialists to develop comprehensive
                                    treatment plans. This may involve surgery,
                                    medical management, or a combination of
                                    both, depending on the nature and severity
                                    of the condition.
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Surgical Procedures:
                                    </span>{" "}
                                    We perform a wide range of surgical
                                    procedures to address colorectal conditions
                                    , which will be minimum invasive and improve
                                    quality of life of patient
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Minimally Invasive Techniques:
                                    </span>{" "}
                                    We are trained in minimally invasive
                                    surgical techniques, such as laparoscopy or
                                    robotic surgery. These approaches often
                                    result in smaller incisions, less
                                    postoperative pain, and quicker recovery
                                    times for patients.
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Cancer Treatment:
                                    </span>{" "}
                                    We play a crucial role in the decision
                                    making of treatment of colorectal cancer.
                                    Surgical interventions may involve removing
                                    cancerous tumors, nearby lymph nodes, and
                                    sometimes portions of the colon or rectum.
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Postoperative Care:
                                    </span>{" "}
                                    We are involved in the postoperative care of
                                    patients, monitoring their recovery and
                                    addressing any complications that may arise.
                                    We work closely with other healthcare
                                    professionals to ensure a comprehensive and
                                    coordinated approach to patient care.
                                </p>
                                <p className="pb-5">
                                    <span className="font-semibold">
                                        Continued Education:
                                    </span>{" "}
                                    Given the rapidly evolving field of
                                    medicine, we engaged in continuous education
                                    to stay informed about the latest
                                    advancements in surgical techniques,
                                    technologies, and treatments.
                                </p>
                                <p className="pb-5">
                                    We work in collaboration with other
                                    specialists, including gastroenterologists,
                                    medical oncologists, and radiation
                                    oncologists, to provide comprehensive care
                                    for patients with colorectal conditions. Our
                                    goal is to improve the quality of life for
                                    individuals affected by disorders of the
                                    colon , rectum and pelvic floor through
                                    accurate diagnosis, effective treatment, and
                                    compassionate care.
                                </p>
                            </>
                        )}

                        <Link
                            to="https://calendly.com/drbinayyadav/30min"
                            target="_blank"
                        >
                            <button className="px-4 py-1 border-2 border-blue-900 bg-blue-900 hover:scale-95 rounded-2xl text-[#f4f3f3]">
                                BOOK AN APPOINTMENT
                            </button>
                        </Link>
                    </section>

                    {/* RIGHT SIDE OF HERO SECTION */}
                    <aside className="flex-1 flex justify-center">
                        <div className="max-w-screen-sm mx-auto">
                            <img
                                src={aboutImg}
                                alt="Colorectal Surgeon"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default About;
