import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal } from 'react-bootstrap'

class Beast extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            votes: 0
        }
    }

    addVote = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    render() {

        return (
            <div style={{ width: '25%', float: 'left' }}>
                <Card style={{ width: '16rem', minHeight: '575px', margin: '10px auto', border: 'black solid' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} onClick={this.addVote} style={{ cursor: 'pointer' }} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤{this.state.votes}
                            <Button variant="primary" onClick={() => {
                                this.props.showModal(this.props.title, this.props.image_url, this.props.description, this.props.keyword, this.state.votes)
                            }} style={{ marginLeft: '10px' }}>
                                Show Modal
                            </Button>
                            <hr />{this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Beast