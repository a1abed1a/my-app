import React from "react";
import Beast from "./Beast";
import Data from "./Data.json";
import { Button, Modal } from 'react-bootstrap'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: {
                title: '',
                image_url: '',
                description: '',
                keyword: '',
                votes: 0
            }
        }
    }

    showModal = (title, image_url, description, keyword, votes) => {
        this.setState({
            modal: true,
            data: {
                title, image_url, description, keyword, votes
            }
        })
    }

    closeModal = () => {
        this.setState({
            modal: false
        })
    }

    render() {
        return (
            <div>
                {
                    Data.map(element => {
                        return (<Beast title={element.title} image_url={element.image_url} description={element.description} showModal={this.showModal} />)
                    })
                }
                <Modal show={this.state.modal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.data.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.state.data.image_url} alt={this.state.data.keyword} style={{ width: '100%' }} />
                        ❤{this.state.data.votes}
                        <hr />
                        {this.state.data.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Main