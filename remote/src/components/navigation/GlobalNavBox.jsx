import styled from '@emotion/styled'
import React from 'react'
import { useCallback } from 'react';
import componentTheme from "../../theme/theme.js";
import MenuText from "../text/MenuText.jsx";
import Button from "../button/Button.jsx";

const RowNavBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px; 
  background: ${componentTheme.bg.bg11};
  color: white;
`;

const ColNavBox = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  width: 48px;
  box-sizing: border-box;
  height: 100%;
  padding: 0 9px; 
  font-size: 14px;
  border-left: 1px solid ${componentTheme.bg.bg4}
`;

const LogoBox = styled.div`
  display: flex;
  color: ${props => props.top ? componentTheme.bg.bg1 : componentTheme.palette.blue2};
  font-weight: ${props => props.top ? "" : "700"};
`

const MenuBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const MenuItem = styled.ul`
    height: 100%;
    margin: 0 10px;
    /* background: var(--primary-dark); */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default function GlobalRowNavBox({ topMenus, sideMenus }) {
  // 이후 redux state로 대체되어야 함
  
  
  const showSubMenu = useCallback((idx) => (e) => {
    
  }, []);

  return (
    <>
      <RowNavBox>
        <LogoBox
          top={true}
        >
          MediCLO
        </LogoBox>
        <MenuBox>
          {
            topMenus.map((menu, idx) => (
              <MenuItem
                key={idx}
                onMouseEnter={showSubMenu(idx)}
              >
                <MenuText>
                  { menu.title }
                </MenuText>
                <SubMenu>
                  {
                    menu.subMenuList.map((subMenu, idx) => {
                      <li
                        key={"sub-menu"+idx}
                      >
                        { subMenu.title }
                      </li>
                    })
                  }
                </SubMenu>
              </MenuItem>
            ))
          }
        </MenuBox>
        {/* <SearchInputBox>

        </SearchInputBox>
        <InfoBox>

        </InfoBox>  */}
      </RowNavBox>
      <ColNavBox>
        <LogoBox>
          TNH
        </LogoBox>
        {
          sideMenus.map((menu, idx) => {
            return (
              <li
                key={"side-menu"+idx}
              >
                <Button>

                </Button>
              </li>
            )
          })
        }
      </ColNavBox> 
    </>
  )
}
