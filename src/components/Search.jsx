
import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <input className="input" type="text" onChange = {this.props.handleSearch}/>
        );
    }
}

export default Search;