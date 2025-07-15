import React from "react";
import { formatFirstName } from "../functions/formatFirstName";
import business_card_pic from "../assests/business_card.jpg";

const BusinessCard = ({ business }) => {
  return (
    <div className="w-full h-[250px] shadow-md rounded-md text-left">
      <div className="w-full h-[120px] rounded-t-md">
        <img
          src={business_card_pic}
          alt="business_card_pic"
          className="w-full h-full object-fill rounded-t-md"
        />
      </div>
      <div className="w-full p-1.5">
        <h4 className="w-full font-bold text-[var(--primary)] text-base">
          {formatFirstName(business?.name)}
        </h4>
        <div className="w-full flex items-center justify-start gap-1 text-sm font-semibold text-[var(--para)]">
          <p>{formatFirstName(business?.category)}</p>|<p>{formatFirstName(business?.location)}</p>
        </div>
        <p className="text-xs font-medium text-[var(--para-light)] text-justify mt-1">
          {business?.description}
        </p>
      </div>
    </div>
  );
};

export default BusinessCard;
