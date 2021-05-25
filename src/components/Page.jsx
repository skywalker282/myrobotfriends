
import React, {Component} from 'react';

import Header from './Header';
import Search from './Search';
import Container from './Container';
import Footer from './Footer';
import AddRobotBtn from './AddRobot';
import Loader from '../Loader';
import UserModal from './UserModal';
import ModifyModal from '../components/ModifyModal';
import AddRobotForm from './AddRobotForm';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            retrievedUsers: [],
            isLoading: true,
            modalUser: {
                visible: false,
                id: 0
            },
            addRobotModalVisible: false,
            modifyModal: {
                visible: false,
                robotIndex: 0
            }
        };
    }

    // handleCardClick = (userID) => {
    //     let userData = this.state.users.filter(user => {
    //         return user.id === userID;
    //     });
    //     this.setState({modalUser: userData});
    // }

    updateRobot = (robotObject, robotIndex)=> {
        let robots = this.state.users;
        robots[robotIndex] = robotObject;
        console.log(robotIndex);

        fetch(`http://localhost:8800/api/robot-users/${robotIndex}`, { 
                method: 'PUT', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(robotObject),
            })
            .then((response) => {
                return response.json();
            })
            .then((robotList) => {
                console.log(robotList);
                this.setState( {
                    users: robotList,
                    retrievedUsers: robotList,
                    isLoading : false,
                });
            this.dismissModifyModal();
        });

        // this.setState({
        //     users: robots,
        // })
        // this.dismissModifyModal();
    }

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
        fetch('http://localhost:8800/api/robot-users/')
            .then((response) => {
                return response.json();
            })
            .then((robotList) => {
                // robotList = robotList.map(({id, name, email}) => {
                //     return {id, name, email};
                // })
                this.setState( {
                    users: robotList,
                    retrievedUsers: robotList,
                    isLoading : false,
                });
        });

    }

    removeModal = () => {
        this.setState({
            modalUser: {
                visible: false
            },
        });
    };

    addRobot = () => {
        this.setState({
            addRobotModalVisible: true,
        })
    }

    dismissAddModal = () => {
        this.setState({
            addRobotModalVisible: false,
        })
    }

    handleAddRobotSubmit = (newRobot) => {

        fetch(`http://localhost:8800/api/robot-users/`, { 
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(newRobot),
            })
            .then((response) => {
                return response.json();
            })
            .then((usersList) => {
                this.setState( {
                    users: usersList,
                    retrievedUsers: usersList,
                    isLoading : false,
                });
                console.log(this.state.users);
            })


            this.dismissAddModal();

        // console.log(this.state.retrievedUsers.length);

        // newRobot["id"] = this.state.retrievedUsers.length;
        // let newRobots = this.state.users;
        // newRobots.push(newRobot);
        // console.log(newRobots.length);
        // this.setState({
        //     retrievedUsers: newRobots,
        //     addRobotModalVisible: false,
        // })
        // console.log(this.state.retrievedUsers.length);
    }

    showModal= (userID) => {
        // console.log(userID);
        // let userData = this.state.users.filter(user => {
        //     //console.log(user.id);
        //     return user.id === userID;
        // });

        // let updateModal = async () => {
        //     await this.setState({
        //          modalUser : userData,
        //          userModalVisible: true,
        //     });
        // };
        // updateModal().then(() => {
        //     console.log(this.state.modalUser);
        // });
        this.setState({
            modalUser: {
                id: userID,
                visible: true
            }
        })
    };

    dismissModifyModal = () => {
        this.setState({
            modifyModal: {
                visible: false,
            }
        })
    }

    removeUser = id => {
        fetch(`http://localhost:8800/api/robot-users/${id}`, { 
                method: 'DELETE', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((usersList) => {
                this.setState( {
                    users: usersList,
                    retrievedUsers: usersList,
                    isLoading : false,
                });
            })
    }

    manageRobot = (option, ID) => {
        console.log(ID);
        if (option == 'detail') {
            this.showModal(ID);

        } else if (option == 'delete') {
            this.removeUser(ID);

        } else if (option == "modify") {
            this.setState({
                modifyModal: {
                    visible: true,
                    robotIndex: ID - 1
                }
            });
        }
    }

    returnModal = (bool) => {
        if (bool) {
            return <UserModal ID={this.state.modalUser.id} removeModal = {this.removeModal}/>;
        }
    }
    
    render() {
        if (this.state.isLoading){
            return <Loader />
        } else {
            return (
                <div className="page">
                    <div className="appbar">
                        <Header title="MES AMIS ROBOTS"/>
                        <div className="head-form">
                            <Search handleSearch = {this.handleSearchChange}/>
                            <AddRobotBtn handleAddRobotClick = {this.addRobot}/>
                        </div>
                    </div>
                    <Container dataToPlot= {this.state.retrievedUsers} handleCardMenu={this.manageRobot}/>
                    <Footer/>
                    {
                       this.returnModal(this.state.modalUser.visible)
                    }

                    {
                        ((context) => {
                            if (context) {
                                return <AddRobotForm handleSubmit={this.handleAddRobotSubmit} dismissAddModal={this.dismissAddModal}/>
                            }
                        })(this.state.addRobotModalVisible)
                    }
                    {
                        ((context) => {
                            if (context) {
                                return <ModifyModal handleSubmit={this.updateRobot} ID={this.state.modifyModal.robotIndex} robotName={this.state.users[this.state.modifyModal.robotIndex].name} dismissModifyModal = { this.dismissModifyModal}/>
                            }
                        })(this.state.modifyModal.visible)
                    }
                    
                </div>
            );
        }
    };
}

export default Page;