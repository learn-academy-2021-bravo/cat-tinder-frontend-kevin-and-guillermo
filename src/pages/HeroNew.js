import React, { Component } from 'react'
import {Form, FormGroup, Label, Input } from 'reactstrap'

export class HeroNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                enjoys: "",
                superpower: ""
            }
        }
    }

    handleChange = (e) =>{
        let{ form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    render() {
        return (
            <div>
                <h1>this is my heronew page</h1>
                <Form>
                    <FormGroup>
                        <Label for = "name">Hero's Name</Label>
                        <Input type = "text" name = "name" onChange={this.handleChange}/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "age">Hero's Age</Label>
                        <Input type = "text" name = "age" onChange={this.handleChange}/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "enjoys">Hero's Hobbies</Label>
                        <Input type = "text" name = "enjoys" onChange={this.handleChange}/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "superpower">Hero's Superpower</Label>
                        <Input type = "text" name = "superpower" onChange={this.handleChange}/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default HeroNew
