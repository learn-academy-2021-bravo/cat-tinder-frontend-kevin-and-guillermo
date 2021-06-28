import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {Redirect} from 'react-router-dom'


export class HeroNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                picture: "",
                age: "",
                enjoys: "",
                superpower: ""
            },
            submitted: false
        }
    }

    handleChange = (e) =>{
        let{ form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = () =>{
        this.props.createHero(this.state.form)
        this.setState({submitted: true})
    }

    render() {
        return (
            <div>
                <main className="main">
                <Form>
                    <br/>
                    <FormGroup>
                        <Label for = "name">Whats your hero's name?</Label>
                        <Input type = "text" name = "name" 
                        onChange={this.handleChange}
                        value = { this.state.form.name }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "picture">Add your hero's picture</Label>
                        <Input type = "text" name = "picture" 
                        onChange={this.handleChange}
                        value = { this.state.form.picture }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "age">Whats your hero's age?</Label>
                        <Input type = "text" name = "age" 
                        onChange={this.handleChange}
                        value = { this.state.form.age }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "enjoys">What does your hero enjoy to do?</Label>
                        <Input type = "text" name = "enjoys" 
                        onChange={this.handleChange}
                        value = { this.state.form.enjoys }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "superpower">Whats your hero's superpower?</Label>
                        <Input type = "text" name = "superpower" 
                        onChange={this.handleChange}
                        value = { this.state.form.superpower }/>
                    </FormGroup>
                    <br/>
                    <Button name="submit" onClick={this.handleSubmit}>Create Hero</Button>
                </Form>
                {this.state.submitted && <Redirect to = "/heroindex" />}
                </main>
            </div>
        )
    }
}

export default HeroNew
