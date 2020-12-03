import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 1.5em;
  right: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: white;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

  class Burger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }
    
    render() {
      return (
        <div>
            {this.state.isToggleOn ? <StyledBurger onClick={this.handleClick} /> : 'PUPA'}
            
            
        </div>
      );
    }
  }

export default Burger;