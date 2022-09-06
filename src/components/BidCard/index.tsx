import React, { FC } from 'react';
import { ThumbDownLogo, HeartLogo, CheckCircleLogo, LocationPointLogo } from "../../images/icons"
import "./BidCard.css"

interface BidCardProps {
  heading: string;
  overTime: string;
  price: string;
  subHeader: string;
  description: string;
  tags: string[];
  proposals: string;
  verified: boolean;
  rating: number;
  amountSpent: string;
  location: string;
}


const BidCard: FC<BidCardProps> = ({ heading, overTime, price, subHeader, description, tags, proposals, verified, rating, amountSpent, location }) => {
  return (
    <section className="bidCard">
      <div className="bidCardInner">
        <div className="bidCardHeader">
          <h3 className="bidCardHeading">{heading}</h3>
          <div className="bidCardIcons">
            <div><ThumbDownLogo /></div>
            <div><HeartLogo /></div>
          </div>
        </div>
        <div className="bidCardSubHeader">
          <h3><span id="overTime">{overTime}</span><span id="price">{price}</span><span>{subHeader}</span></h3>
        </div>
        <div className="bidCardDescription">
          <h4>{description}</h4>
        </div>
        <div className="bidCardTags">
          {tags.map((tagItem) => {
            return (
              <div>{tagItem}</div>
            )
          })}
        </div>
        <div className="bidCardProposals">
          <h4>{proposals}</h4>
        </div>
        <div className="bidCardProfile">

          <div className="bidCard_verified">
            <CheckCircleLogo />
            {verified ? (<h4>Payment Verified</h4>) : (<h4>Payment Unverified</h4>)}
          </div>
          <div className="bidCard_stars">

          </div>

          <div className="bidCard_amountSpent">
            <h4>{amountSpent}</h4>
          </div>
          <div className="bidCard_location">
            <LocationPointLogo />
            <h4>{location}</h4>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BidCard;