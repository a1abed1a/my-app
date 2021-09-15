import React from "react";
import Beast from "./Beast";
import Data from "./Data.json";
import { Button, Modal, Form } from 'react-bootstrap'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            selectValue: 0,
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

    select = (event) => {
        event.preventDefault();
        this.setState({
            selectValue: Number(event.target.value),
        })
    }



    render() {
        return (
            <div>
                <div>
                    <p style={{ width: '30%', fontSize: '20px', margin: 'auto' }}>
                        Select number of horns
                    </p>
                    <Form.Select onChange={this.select} style={{ width: '30%', margin: 'auto' }}>
                        <option value="0">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </div>
                <div >
                    {
                        this.state.selectValue === 0 ?
                        Data.map(element => {
                            return (<Beast title={element.title}  horns={element.horns} image_url={element.image_url} description={element.description} showModal={this.showModal}/>)
                        })
                    :
                        Data.filter(element => element.horns === this.state.selectValue).map(element => {
                            return (<Beast title={element.title}  horns={element.horns} image_url={element.image_url} description={element.description} showModal={this.showModal}/>)
                        })
                    }
                </div>
                <div>
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
            </div>
        )
    }
}
export default Main