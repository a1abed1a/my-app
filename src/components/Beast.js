import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

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
            <div style={{ width: '50%', float: 'left'}}>
                <Card style={{ width: '18rem', minHeight: '600px', margin: '10px auto'}}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} onClick={this.addVote}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤{this.state.votes}
                            <hr></hr>{this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}
export default Beast