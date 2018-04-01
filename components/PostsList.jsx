import React, { Component } from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import profilePic from '../assets/img/profile.jpg'

class PostsList extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <div className="post-content">
                           <div className="post-item clearfix">
                                <div className="pic">
                                    <img src={profilePic} alt=""/>
                                </div>
                                <div className="content">
                                    <h6>Laís Lima</h6>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                     Praesent quis urna at ante accumsan vehicula ac 
                                     vel lorem. 
                                    </p>
                                    <div className="post-footer">
                                        <a href="">
                                        <i className="fa fa-hashtag"></i>
                                        </a>
                                        <a href="">
                                        <i className="fa fa-location-arrow"></i>
                                        </a>
                                        <a href="">
                                        <i className="fa fa-reply-all"></i>
                                        </a>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PostsList