import React, { Component } from 'react'
import { FormContainer, FormTitle, FormText, FormInput } from '../styles/Form'

class Form extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { name, age, email } = this.state
    const { handleChange } = this

    return (
      <FormContainer>
        <FormTitle>add a new friend!</FormTitle>
        <input type="hidden" value="something" />
        <FormText for="name">name</FormText>
        <FormInput
          type="text"
          id="name"
          value={name}
          autoComplete="nope"
          name="name"
          onChange={handleChange}
        />

        <FormText for="name">age</FormText>
        <FormInput
          type="text"
          id="age"
          value={age}
          autoComplete="nope"
          name="age"
          onChange={handleChange}
        />

        <FormText for="name">email</FormText>
        <FormInput
          type="text"
          id="email"
          value={email}
          autoComplete="nope"
          name="email"
          onChange={handleChange}
        />
      </FormContainer>
    )
  }
}

export default Form