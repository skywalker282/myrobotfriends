
import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <input placeholder="Nom de votre robot" className="input" type="text" onChange = {this.props.handleSearch}/>
        );
    }
}

export default Search;