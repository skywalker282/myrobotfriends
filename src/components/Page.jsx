
import React, {Component} from 'react';

import Header from './Header';
import Search from './Search';
import Container from './Container';
import Footer from './Footer';

import Loader from '../Loader';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            retrievedUsers: [],
            isLoading: true,
        };
    }

    handleSearchChange = e => {
        let finderIndex = new RegExp(e.target.value, "gi");
        let currentSearchedData = this.state.users.filter(user => {
            return finderIndex.test(user.name.toLowerCase())
        });
        console.log(currentSearchedData);

        this.setState({
            retrievedUsers: currentSearchedData,
        });
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/users')
            .then((response) => {
                return response.json();
            })
            .then((consumableData) => {
                consumableData = consumableData.map(({id, name, email}) => {
                    return {id, name, email};
                })
                this.setState( {
                    users: consumableData,
                    retrievedUsers: consumableData,
                });
                return;
        });

    }
    componentWillMount= () => {
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        }, 2000)
    }
    
    render() {
        if (this.state.isLoading){
            return <Loader />
        } else {
            return (
                <div className="page">
                    <Header />
                    <Search handleSearch = {this.handleSearchChange}/>
                    <Container dataToPlot= {this.state.retrievedUsers}/>
                    <Footer />
                </div>
            )
        }
    }
}

export default Page;