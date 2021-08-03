import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavCards from './components/MyFavCards';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from './components/modal';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myData: [],
      showModal: false,
      
      itemIndex: 0
    }
  }

  componentDidMount = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    const userEmail = user.email


    const url = `${process.env.REACT_APP_SERVER_LINK}myFavItems?userEmail=${userEmail}`

    const data = await axios.get(url)

    this.setState({
      myData: data.data
    })
    console.log(this.state.myData)

  }

  updateFunc = async (event) => {
    event.preventDefault();
    const { user, isAuthenticated } = this.props.auth0;


    const index = this.state.itemIndex
    const itemImage = event.target.Image.value
    const itemName = event.target.Name.value
    const userEmail = user.email
    const url = `${process.env.REACT_APP_SERVER_LINK}updateMyFave?userEmail=${userEmail}&index=${index}&itemImage=${itemImage}&itemName=${itemName}`

    console.log(url)
    console.log(this.state.itemIndex)

    const data = await axios.get(url)

    this.setState({
      myData: data.data
    })
    console.log(this.state.myData)


    this.handleModal(0)
  }


  deleteFunc = async (id) => {
    const { user, isAuthenticated } = this.props.auth0;


    const index = id

    const userEmail = user.email
    const url = `${process.env.REACT_APP_SERVER_LINK}deleteMyItem?userEmail=${userEmail}&index=${index}`

    const data = await axios.get(url)

    this.setState({
      myData: data.data
    })
    console.log(this.state.myData)


  }


  handleModal = ( id) => {
    this.setState({
      
      itemIndex: id,
      showModal: !this.state.showModal

    })
    console.log("my ID = ",id);
  }
  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <MyModal show={this.state.showModal} handleModal={this.handleModal} submitUpdate={this.updateFunc} />

        {
          this.state.myData.map((item, index) => {
            return (
              
              <MyFavCards image={item.image} name={item.name} updateFunc={this.handleModal} deleteFunc={this.deleteFunc} index={index} />

              
              // <Card style={{ width: '18rem' }}>
              //       <Card.Img variant="top" src={item.image} />
              //       <Card.Body>
              //           <Card.Title> {item.name} </Card.Title>


              //           {/* <Button onClick={() => this.props.addFuncs(this.props.name, this.props.name)} variant="primary"> Add To My Favorite </Button> */}
              //       </Card.Body>
              //   </Card>
            )
          })
        }

      </>
    )
  }
}

export default withAuth0(MyFavorites);

