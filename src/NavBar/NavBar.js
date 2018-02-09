import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';


function Icon({icon, color}) {
    return (
        <li>
            <img src='' alt='' />
            <div>{icon.text}</div>
            <div>{color}</div>
        </li>
    );
}

const StyledNavbar = styled.div`
    background-color: rgb(19, 19, 128);
    align-items: center;
    color: #fff;
    display: flex;
`;



class NavBar extends Component {
    state = {
        icons: [
            { id: 1, text: 'Home'},
            { id: 2, text: 'Jobs'}
        ]
    }

    
    render() {
        const icons = this.state.icons.map(icon => {
           return <Icon key={icon.id} icon={icon} />
        });

    const navbarIconStyle = {
        display: 'flex',
        listStyleType: 'none'
    }

        return (
            <StyledNavbar>
                <Button>In</Button>
                <form className='search-form'>
                    <input type={this.props.searchText} placeholder='Search' />
                </form>
                <ul style={navbarIconStyle}>{icons}
                </ul>
            </StyledNavbar>
        ); // return
    } // render

};

export default NavBar;