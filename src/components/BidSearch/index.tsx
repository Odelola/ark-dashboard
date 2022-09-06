import React, { useState, FC } from 'react';
import { BidPanelSearchLogo } from '../../images/icons';
import "./BidSearch.css"

interface BidSearchProps {

}


const BidSearch: FC<BidSearchProps> = ({ }) => {
  const [search, setSearch] = useState("")
  return( 
    <section id="bidSearch">
      <div className="bidSearchInner">
        <input type="text" name="Bid Search" placeholder="Search Request" value={search} onChange={(e) => {
              setSearch(e.target.value)
            }}id="bidTextInput" />
        <div className="bidSearchButton">
            <BidPanelSearchLogo />
        </div>
      </div>
    </section>
  )
};

export default BidSearch;