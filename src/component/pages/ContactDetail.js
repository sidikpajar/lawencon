import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { fetchContactDetail } from '../../redux'

class ContactDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  getBack = async (id) => {
    this.props.history.push({
      pathname: '/'});
  }

  async componentDidMount(){
    const pageURL = await window.location.href;
    const lastURLSegment = await pageURL.substr(pageURL.lastIndexOf('/') + 1);
    await this.props.fetchContactDetail(lastURLSegment)
  }


  render() {
    const { contactDetailData } = this.props;
    console.log(contactDetailData)
    return (
      <Container style={{marginTop:100}}>
        <div className="button-custom" >
          <Button onClick={() => this.getBack()}  variant="contained" color="primary">
            Back
          </Button>
        </div>
        <Grid container>
          <Paper>
            <Grid item className="paperStyle" sm={12} xs={12}>
              <div>
                <img className="detail-avatar" style={{ width:175, height:175 }}  alt={contactDetailData.firstName} src={contactDetailData.photo !== 'N/A' ? contactDetailData.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKJSt6ck2GifQGbuktdinQnUQnK919aaNoA&usqp=CAU'} />
              </div>
              <div className="detail-wrapping">
                <div className="name">{`${contactDetailData.firstName} ${contactDetailData.lastName}`}</div>
                <div className="description">Product Designer</div>
                <div className="age">{contactDetailData.age} years old</div>
              </div>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    contactDetailData: state.contactDetail.contactDetail.data ? state.contactDetail.contactDetail.data.data : ''
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    fetchContactDetail: (params) => dispatch(fetchContactDetail(params)),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ContactDetail)
