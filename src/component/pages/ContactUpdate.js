import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { fetchContactUpdate } from '../../redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2'


class ContactAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName:this.props.location.data ? this.props.location.data.firstName : '',
      lastName:this.props.location.data ? this.props.location.data.lastName : '',
      age:this.props.location.data ? this.props.location.data.age : 0,
      photo:this.props.location.data ? this.props.location.data.photo : '',
    }
  }
  

  updateContact = async () => {
    const { firstName, lastName, age, photo } = this.state
    let data = {
      firstName, lastName, age, photo
    };
    this.props.fetchContactUpdate(this.getLastURl(), data);
  }

  goToContact = async () =>{
    this.props.history.replace({
      pathname: '/'});
  }

  getLastURl =  () =>{
    const pageURL = window.location.href;
    const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    return lastURLSegment;
  }


  render() {
    const { contactUpdate } = this.props
    console.log(contactUpdate)
    if(contactUpdate.status === 400){
      Swal.fire({
        title: 'Update contact error!',
        text: contactUpdate.data.message,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Try'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    } else if (contactUpdate.status === 201){
      Swal.fire({
        title: 'Your contact has been updated',
        text: contactUpdate.data.message,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Go to Contact'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    }
    return (
      <Container style={{marginTop:100}}>
        <Button onClick={() => this.goToContact()} style={{marginBottom:'10px'}} variant="contained" color="primary">
          Back Contact List
        </Button>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoFocus
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.setState({firstName: e.target.value})}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="lastName"
            value={this.state.lastName}
            onChange={(e) => this.setState({lastName: e.target.value})}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            id="age"
            value={this.state.age}
            onChange={(e) => this.setState({age: e.target.value})}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="photo"
            label="Input your URL Photo"
            type="text"
            id="photo"
            value={this.state.photo}
            onChange={(e) => this.setState({photo: e.target.value})}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.updateContact()} 
          >
            Update Contact
          </Button>
          
        </form>
      </Container>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    contactUpdate: state.contactUpdate.contactUpdate,
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    fetchContactUpdate: (id, params) => dispatch(fetchContactUpdate(id,params)),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ContactAdd)
