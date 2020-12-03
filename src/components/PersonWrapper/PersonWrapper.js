
import React from 'react';
import './PersonWrapperStyles.css';


  class PersonWrapper extends React.Component {

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
        <div className="container">
            <h2 onClick={this.handleClick} className="personWrapper">{this.props.title}</h2>
        
        
            
            {this.state.isToggleOn ? <p className="detailsParagraph-more" onClick={this.handleClick}>Czytaj więcej</p> : <p className="detailsParagraph">{this.props.details}</p>}
            
            

    
        </div>
      );
    }
  }

export default PersonWrapper;