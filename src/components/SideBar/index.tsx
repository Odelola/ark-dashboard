import React, { FC } from 'react';
import Link from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { AccessTimeLogo, CreateDashboardLogo, EditLogo, GlobeLogo, SuitcaseLogo } from '../../images/icons';
import { Menu } from "../index"
import "./SideBar.css"

interface SideBarProps {

}

const SideBar: FC<SideBarProps> = ({ }) => {
    const location = useLocation()
    const { pathname } = location;
    console.log(pathname)
    return (
        <nav id="sideBar">
            <div className="sideBarInner">
                <div className={pathname === "/" ? `sideBarTabs` :`sideBarTabs active` }>
                    <div className="sideBarTabs_slideIndicator">

                    </div>
                    <div className={pathname === "/patronise" ? `sideBarTab active` :`sideBarTab` }>
                        <a href="/patronise">Patronise</a>
                    </div>
                    <div className={pathname === "/" ? `sideBarTab active` :`sideBarTab` }>
                        <a href="/">Bid</a>
                    </div>
                </div>
                {pathname === "/" && (<div className="sideBarProfileInfo">
                    <div className="sideBarProfileInfoCategories">
                        <h3 className="sideBarProfileInfo_heading">My Categories</h3>
                        <ul className="sideBarProfileInfo_list">
                            <li>Other-Admin Support</li>
                            <li>Personal/Virtual Assistant</li>
                            <li>Web Research</li>
                            <li>Pro</li>
                        </ul>
                        <div className="sideBarProfileInfo_editContent">
                            <EditLogo />
                        </div>
                    </div>
                    <div className="sideBarProfileInfoVisibility">
                        <h3 className="sideBarProfileInfo_heading">Visibility
                            <div className="sideBarProfileInfo_editContent">
                                <EditLogo />
                            </div>
                        </h3>
                        <ul className="sideBarProfileInfo_list">
                            <li><GlobeLogo /> Public</li>
                        </ul>
                    </div>
                    <div className="sideBarProfileInfoAvailability">
                        <h3 className="sideBarProfileInfo_heading">Availability
                            <div className="sideBarProfileInfo_editContent">
                                <EditLogo />
                            </div>
                        </h3>
                        <ul className="sideBarProfileInfo_list">
                            <li><AccessTimeLogo /> Public</li>
                        </ul>
                    </div>
                    <div className="sideBarProfileInfoBoothCompletion">
                        <h3 className="sideBarProfileInfo_heading">Booth Completion</h3>
                        <div className="sideBarProfileInfo_progressList">
                            <div className="sideBarProfileInfo_progressBar"></div>
                            <div className="sideBarProfileInfo_progressBar"></div>
                            <div className="sideBarProfileInfo_progressBar"></div>
                        </div>
                        <ul className="sideBarProfileInfo_list">
                            <li><AccessTimeLogo /> Add Work History</li>
                        </ul>
                    </div>
                    <div className="sideBarProfileInfoInventory">
                        <h3 className="sideBarProfileInfo_heading">Inventory</h3>
                        <ul className="sideBarProfileInfo_list">
                            <li><SuitcaseLogo /> My Inventory</li>
                        </ul>
                    </div>
                    <div className="sideBarProfileInfoBids">
                        <h3 className="sideBarProfileInfo_heading">Bids</h3>
                        <ul className="sideBarProfileInfo_list">
                            <li><CreateDashboardLogo /> 50 available connects</li>
                        </ul>
                    </div>
                </div>)}
                {pathname === "/patronise" && <Menu />}
            </div>
        </nav>
    )
};

export default SideBar;