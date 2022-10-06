import design from "../public/design.png";
import Image from "next/image";

const CardComponent = ({ image }) => {
  return (
    <div className="shadow-lg text-center p-10 rounded-xl my-10 dark:bg-teal-500 dark:text-white">
      <div>
        <Image src={image} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
        <p className="py-2">
          Creating elegant designs suited for your need following core design
          theory
        </p>
        <h4 className="text-teal-600">Desing tools I use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
      </div>
    </div>
  );
};

export default CardComponent;
