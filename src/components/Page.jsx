
import React, {Component} from 'react';

import Header from './Header';
import Search from './Search';
import Container from './Container';
import Footer from './Footer';

import Loader from '../Loader';
import UserModal from './UserModal';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            retrievedUsers: [],
            isLoading: true,
            modalUser: {},
            userModalVisible: false,
        };
    }

    // handleCardClick = (userID) => {
    //     let userData = this.state.users.filter(user => {
    //         return user.id === userID;
    //     });
    //     this.setState({modalUser: userData});
    // }

    handleSearchChange = e => {
        let finderIndex = new RegExp(e.target.value, "gi");
        let currentSearchedData = this.state.users.filter(user => {
            return finderIndex.test(user.name.toLowerCase())
        });

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
                // consumableData = consumableData.map(({id, name, email}) => {
                //     return {id, name, email};
                // })
                this.setState( {
                    users: consumableData,
                    retrievedUsers: consumableData,
                });
                return;
        });

    }

    removeModal = () => {
        this.setState({
            userModalVisible: false,
        });
    };

    showModal= (userID) => {
        console.log(userID);
        let userData = this.state.users.filter(user => {
            //console.log(user.id);
            return user.id === userID;
        });

        let updateModal = async () => {
            await this.setState({
                 modalUser : userData,
                 userModalVisible: true,
            });
        };
        updateModal().then(() => {
            console.log(this.state.modalUser);
        })
    };

    componentWillMount= () => {
        setTimeout(() => {
            this.setState({
                isLoading : false,
            })
        }, 2000);
    };
    
    render() {
        if (this.state.isLoading){
            return <Loader />
        } else {
            if(this.state.userModalVisible){
                return <UserModal userData={this.state.modalUser} removeModal = {this.removeModal}/>;
            } else {
                return (
                    <div className="page">
                        <Header />
                        <Search handleSearch = {this.handleSearchChange}/>
                        <Container dataToPlot= {this.state.retrievedUsers} showModal={this.showModal}/>
                        <Footer />
                        
                    </div>
                );
            };
        }
    };
}

export default Page;