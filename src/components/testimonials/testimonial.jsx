"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import metaData from "@/data/metaData";

const Testimonial = () => {
  return (
    <div className="overflow-hidden">
      <motion.div className="md:mx-12 flex flex-row overflow-x-scroll snap-x snap-mandatory space-x-12">
        {metaData.testimonials.map((testimonial, index) => {
          const { name, title, company, image, content } = testimonial;
          return (
            <motion.div className="border-slate-300 col-span-2 flex-shrink-0 snap-start w-[450px]">
              <Image src={image} width={50} height={50} className="rounded-full shadow" />
              <h3 className="text-lg font-bold mt-2">{name}</h3>
              <p className="font-bold text-base divide-x-2">
                <span className="pe-2">{title}</span>
                <span className="ps-2">{company}</span>
              </p>
              <p className="mt-2">{content}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Testimonial;
