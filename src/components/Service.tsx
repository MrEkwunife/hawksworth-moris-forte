import React from "react";

// Define the props interface
interface ServiceProps {
  index?: string | number;
  title?: string;
  image: string;
  leftFeatures?: string[];
  rightFeatures?: string[];
}

export default function Service({
  index = "01",
  title = "Service Title",
  image,
  leftFeatures = [],
  rightFeatures = [],
}: ServiceProps) {
  // Format the index with bracket notation and leading zero
  const formattedIndex = `[${index.toString().padStart(2, "0")}]`;

  return (
    <div className="px-4 pt-4 md:grid md:grid-cols-3 lg:mb-4">
      <span className="text-[0px] md:text-6xl md:row-span-2 lg:text-7xl">
        {formattedIndex}
      </span>
      <header className="border-b pb-8 mb-8 md:col-span-2 md:flex md:flex-row-reverse">
        <div className="flex-1/3">
          <img
            src={image}
            alt={`${title} illustration`}
            className="rounded-lg mb-8"
          />
        </div>
        <h3 className="text-5xl font-medium flex-2/3 lg:text-7xl">
          {title.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              {word} <br />
            </React.Fragment>
          ))}
        </h3>
      </header>

      <div className="col-span-2 sm:flex sm:gap-2 lg:gap-8 text-lg lg:text-xl">
        <ul className="flex flex-col gap-4 mb-4">
          {leftFeatures.map((feature, index) => (
            <li key={`left-${index}`} className="list-disc ml-4 lg:ml-10">
              {feature}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-4 text-lgs">
          {rightFeatures.map((feature, index) => (
            <li key={`right-${index}`} className="list-disc ml-4 lg:ml-10">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
