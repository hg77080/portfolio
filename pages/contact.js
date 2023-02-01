import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import Tags from "../components/tags";
import Title from "../components/Title";
import { ContactSchema } from "../ContactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
import dynamic from 'next/dynamic';

const MarkerClusterGroup = dynamic(()=> import('react-leaflet-markercluster'), {
    ssr:false,
})


const Contact = () => {
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
    formState,
  } = useForm({ mode: "onChange", resolver: yupResolver(ContactSchema) });
  const ContactSubmit = async (data, e) => {
    const formdata = new FormData();
    Object.keys(data).forEach((key) => {
      formdata.append(key, data[key]);
    });
    await fetch("https://formbold.com/s/3O88Z", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      reset();
    });
  };
  return (
    <>
      <Loading />
      <div className="flex bg-background min-h-screen p-8 md:p-10 lg:p-12 text-[#fff] flex-col lg:flex-row lg:gap-8 overflow-x-hidden">
        <div className=" flex-1 ">
          <Tags tag="<body>" />
          <Tags tag="<h1>" />
          <Title text="Contact Me" style="cyan" />
          <Tags tag="</h1>" />
          <Tags tag="<p>" />
          <div className="flex flex-col gap-2 text-sm md:text-base lg:text-base">
            <p>
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
          </div>
          <Tags tag="</p>" />

          <Tags tag="<form>" />
          <form
            onSubmit={handleSubmit(ContactSubmit)}
            className="flex flex-col gap-2 mt-1 "
          >
            <input
              placeholder="Name"
              name="name"
              value={getValues().name}
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
              onChange={(e) => {
                setValue("name", e.target.value, { shouldValidate: true });
              }}
            />
            <div className="flex flex-row gap-2 items-center">
              <input
                placeholder="Email"
                name="email"
                value={getValues().email}
                className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
                onChange={(e) => {
                  setValue("email", e.target.value, { shouldValidate: true });
                }}
              />
              <input
                placeholder="Subject"
                name="subject"
                value={getValues().subject}
                className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] h-[50px] w-full"
                onChange={(e) => {
                  setValue("subject", e.target.value, { shouldValidate: true });
                }}
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              value={getValues().message}
              className="bg-[#2b2b2b] border-none rounded-sm text-[#8d8d8d] min-h-[120px] w-full"
              onChange={(e) => {
                setValue("message", e.target.value, { shouldValidate: true });
              }}
            />
            <button
              className={
                "cursor-pointer border-[1px] border-cyan text-cyan hover:text-background px-4 py-2 rounded-sm w-[200px] text-center font-normal hover:shadow-[inset_200px_0px_5px_0px_#08FDD8] duration-200 active:translate-y-1 mt-2"
              }
              disable={!formState.isValid}
              type="submit"
            >
              Send Message
            </button>
          </form>
          <Tags tag="</form>" />
          <Tags tag="</body>" />
        </div>
        <div className="text-[#fff] flex-1 flex flex-col gap-[8px] mt-20">
          <MapContainer
            className="markercluster-map"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MarkerClusterGroup>
              <Marker position={[27.553, 76.6346]} />
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
