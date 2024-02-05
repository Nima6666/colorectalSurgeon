import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import cardData from "../Components/cardData.js";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();
  const service = cardData.find((item) => item.id === parseInt(id)); // Find service by ID

  if (!service) {
    return <div>Service not found</div>;
  }
  const { title, description, image, content } = service;
  console.log(content);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                DISEASE NAME :
              </h2>
              <h1 className="text-blue-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>

              <p className="leading-relaxed">{description}</p>
            </div>
            <article>
              {content.map((item, idx) => {
                return (
                  <div key={idx} className="my-3">
                    <p className="font-semibold">{item.title}</p>
                    <div>
                      {item.items.map((point, idx) => {
                        return (
                          <div key={idx}>
                            {typeof point == "object" ? (
                              <div className="ml-10">
                                <p className="font-medium">{point.sub_title}</p>
                                <div>
                                  {point.sub_items.map((sub_point, idx) => {
                                    return (
                                      <ul
                                        key={idx}
                                        className="list-disc list-inside"
                                      >
                                        <li>{sub_point}</li>
                                      </ul>
                                    );
                                  })}
                                </div>
                              </div>
                            ) : (
                              <ul key={idx} className="list-disc list-inside">
                                <li>{point}</li>
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
