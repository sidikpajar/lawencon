import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { fetchContactAdd } from '../../redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2'


class ContactAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName:'',
      lastName:'',
      age:0,
      photo:'',
    }
  }
  

  addContact = async () => {
    const { firstName, lastName, age, photo } = this.state
    let data = {
      firstName, lastName, age, photo
    };
    this.props.fetchContactAdd(data);
  }

  goToContact = async () =>{
    this.props.history.push({
      pathname: '/'});
  }

  render() {
    const { contactAdd } = this.props
    if(contactAdd.status === 400){
      Swal.fire({
        title: 'Failed!',
        text: contactAdd.data.message,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Try'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    } else if (contactAdd.status === 201){
      Swal.fire({
        title: 'Your contact has been saved',
        text: contactAdd.data.message,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Go to Contact'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })
    }
    
    const { firstName, lastName, age, photo } = this.state
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
            value={firstName}
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
            value={lastName}
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
            value={age}
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
            value={photo}
            onChange={(e) => this.setState({photo: e.target.value})}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.addContact()} 
          >
            Add Contact
          </Button>
          
        </form>
      </Container>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    contactAdd: state.contactAdd.contactAdd,
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    fetchContactAdd: (params) => dispatch(fetchContactAdd(params)),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ContactAdd)
