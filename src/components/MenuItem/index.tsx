import React, { FC } from 'react';
import "./MenuItem.css"

interface MenuItemProps {

}

const MenuItem: FC<MenuItemProps> = ({ }) => {
    return (
        <div id="menuItem">
            <div className="menuItemInner">
                <div className="menuItemHeading">
                    <h3>Lesukaa Restaurant (Catering
                        Service & Food Delivery)</h3>
                </div>
                <div className="menuItemRating">
                    <p>4.0</p>
                    <div className="menuItemRatingStars">

                    </div>
                    <p id="menuItemRatingNumber">(39)</p>
                </div>
                <div className="menuItemAddress">
                    <p>Restaurant  Plot 337 Peter Odili Road
                        Abuloma Best
                    </p>
                </div>
                <div className="menuItemAddresOpenTime">
                    Open 24 hours
                    </div>
                <div className="menuItemDetails">
                    <p>Dine-in    Takeaway    Delivery</p>
                </div>
            </div>
        </div>
    )
};

export default MenuItem;