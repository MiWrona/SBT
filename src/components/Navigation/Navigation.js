import { nominalTypeHack } from 'prop-types';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; 
import Burger from "../Burger/Burger"
import ResMenu from '../Menu/Menu';

const NavigationWrapper = styled.nav`
    top: 20px;
    left: 30px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Montserrat';

    a {
        text-decoration: none;
        color: inherit;
    }

`;

const Logo = styled.span`
    font-weight:700;
    font-size: 20px;
    margin-right: 10px;
`;


const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    display: none;

    @media (max-width: 768px) {
        display: none;
      }
`;

const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    margin-left: 32px;
`;

const NavigationHamburger = styled.div`
   display:none; 
`;

const Navigation = () => (
    <>
    {/* <NavigationWrapper>
        <Logo>
            <Link to="/">  
                SBT ŚLĄSK
            </Link>
        </Logo>

        
            <NavigationList>
                <NavigationListItem>
                    <Link to="/about">
                        O nas
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/blog"> 
                        Aktualności
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/wladze"> 
                        Władze
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/activity">
                        Działalność
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/contact"> 
                        Kontakt
                    </Link>
                </NavigationListItem>
                <NavigationListItem>
                    <a target="_blank" rel="noopener norefferer" href="http://devstage.coig.pl/forum-stowarzyszenie">
                        Forum
                    </a>
                </NavigationListItem>
            </NavigationList>
           
    </NavigationWrapper> */}
    <ResMenu />
    </>
);

export default Navigation;