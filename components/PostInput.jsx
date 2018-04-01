import React, { Component } from 'react'
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class PostInput extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <div className="post-content">
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>What do you want tell your friends?</ControlLabel>
                                <FormControl componentClass="textarea" className="input-theme no-radius" placeholder="What are you feeling?" />
                            </FormGroup>
                            <div className="text-right">
                            <button className="btn btn-primary">Post it!</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PostInput