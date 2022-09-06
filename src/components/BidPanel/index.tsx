import React, { FC } from 'react';
import BidSearch from '../BidSearch';
import BidFilters from '../BidFilters';
import BidCard from '../BidCard';
import { BidCardLists } from '../../data/BidCard/BidCard';
import "./BidPanel.css"

interface BidPanelProps {

}


const BidPanel: FC<BidPanelProps> = ({ }) => {
  console.log(typeof BidCardLists)
  return (
    <section id="bidPanel">
      <BidSearch />
      <BidFilters />
      <div id="bidCards">
        {BidCardLists.map(({ heading, overTime, price, subHeader, description, tags, proposals, verified, rating, amountSpent, location }) => {
          return (
            <BidCard heading={heading} overTime={overTime} price={price} subHeader={subHeader} description={description} tags={tags} proposals={proposals} verified={verified} amountSpent={amountSpent} location={location} rating={rating} />
          )
        })}
      </div>
    </section>
  )
};

export default BidPanel;