import React, { useState, FC } from 'react';
import { BoothhrakLogo, AssetLogo, HeaderSearchLogo, AccountLogo, ChevronUpLogo, MessagesLogo, NineSquaresLogo, NotificationLogo, NotificationEllipseLogo, UserLogo } from "../../images/icons"
import { SideBar } from '../../components';
import "./Header.css"

interface HeaderProps {

}

interface HeaderLinksProps {
  icon: React.ReactNode,
  linkText: string,
  nestedMenu?: React.ReactNode,
}

const HeaderLinks: FC<HeaderLinksProps> = ({ icon, linkText, nestedMenu }) => {
  return (
    <a href="#0" className="headerLink">
      {icon}
      <p className="headerLink_text">{linkText}</p>
      {nestedMenu}
    </a>
  )
}

const Header: FC<HeaderProps> = ({ }) => {
  const [search, setSearch] = useState("")
  return (
    <header id="header">
      <div className="headerInner">
        <div className="headerLinks">
          <HeaderLinks icon={<BoothhrakLogo />} linkText="Ark" />
          <HeaderLinks icon={<AssetLogo />} linkText="Asset" nestedMenu={<ChevronUpLogo />} />
          <HeaderLinks icon={<AccountLogo />} linkText="Account" nestedMenu={false} />
        </div>
        <div className="headerIconLinks">
          <div className="headerSearch">
            <input type="text" name="Search" placeholder="Search" value={search} onChange={(e) => {
              setSearch(e.target.value)
            }} id="headerTextInput" />
            <HeaderSearchLogo />
          </div>
          <a href="#0" className="headerNotification">
            <NotificationLogo />
            <NotificationEllipseLogo />
          </a>
          <div className="headerMessages">
            <MessagesLogo />
            <NotificationEllipseLogo />
          </div>
          <div className="headerMenu">
            <NineSquaresLogo />
            <ChevronUpLogo />
          </div>
          <div className="headerUser">
            <UserLogo />
            <ChevronUpLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;