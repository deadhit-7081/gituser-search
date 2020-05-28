import React from 'react';
import {Navbar,NavbarBrand,NavItem,Nav, NavLink} from 'reactstrap';

function Header()
{
        return(
            <>
            <Navbar color="primary" fixed="top">
                <NavbarBrand>Impulsive</NavbarBrand>
                <div className="n1">
                <Nav>
                    <NavItem>
                        <NavLink href="#" className="n2">
                            GitHub User Search
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
            </Navbar><br/>
            </>
        )
}
export default Header;