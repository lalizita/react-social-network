import React, { Component } from 'react'
import Header from './Header.jsx'
import { Grid, Row, Col } from 'react-bootstrap'
import PostInput from '../components/PostInput.jsx'
import PostsList from '../components/PostsList.jsx'

class Base extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-posts">
                <PostInput/>
                <PostsList/>                
                </div>
            </div>
        )
    }
}

export default Base