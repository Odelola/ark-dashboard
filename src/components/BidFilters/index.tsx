import React, { FC } from 'react';
import "./BidFilters.css"

interface BidFiltersProps {

}

interface BidFilterButtonProps {
  name: string,
  value: string,
}


const BidFiltersLists = [
  {
    name: "Best Match",
    value: "best-match"
  },
  {
    name: "Most Recent",
    value: "most-recent"
  }
]



const BidFilterButton: FC<BidFilterButtonProps> = ({ name, value }) => {
  return (
    <button className="bidFilterButton" value={value}>{name}</button>
  )
}




const BidFilters: FC<BidFiltersProps> = ({ }) => {
  return (
    <section id="bidFilters">
      <div className="bidFiltersInner">
        <h4>Advanced Search</h4>
        <div className="bidFilter">
          <h3>Sort</h3>
          <div className="bidFilterButtons">
            {BidFiltersLists.map(({ name, value }) => {
              return (
                <BidFilterButton name={name} value={value} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
};

export default BidFilters;