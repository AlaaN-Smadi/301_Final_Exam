import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import APICards from './components/APICards';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class AllDataAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myAPIData: []
        }
    }

    componentDidMount = async () => {
        const url = `${process.env.REACT_APP_SERVER_LINK}getApiData`

        const data = await axios.get(url)

        this.setState({
            myAPIData: data.data
        })

        console.log(this.state.myAPIData)
    }

    addFuncs = async (name, image) => {
        const { user, isAuthenticated } = this.props.auth0;
        const userEmail = user.email
        const itemName = name
        const itemImage = image

        const url = `${process.env.REACT_APP_SERVER_LINK}addNewFav?userEmail=${userEmail}&itemName=${itemName}&itemImage=${itemImage}`

        console.log(url)
        const data = await axios.get(url)

        // this.setState({
        //     myAPIData: data.data
        // })

        console.log(data.data)
    }

    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                {
                    this.state.myAPIData.map((item, index) => {
                        return (

                           

                            <APICards image={item.imageUrl} name={item.title} addFuncs={this.addFuncs} />
                        )
                    })
                }
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
