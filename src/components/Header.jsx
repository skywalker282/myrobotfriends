
import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <h1 className="header">{this.props.title}</h1>
        );
    }
}

export default Header;