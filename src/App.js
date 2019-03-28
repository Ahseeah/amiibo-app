import React, { Component } from 'react'
// import Amiibo from './components/amiiboApp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amiiboLink: '',
      amiiboText: 'Enter Character',
      searchText: '',
      apiLink: '',
      character: {},
      image: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.characterRequest = this.characterRequest.bind(this)
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value })
  }

  characterRequest() {
    fetch(
      'https://www.amiiboapi.com/api/amiibo/?character' + this.state.searchText
    )
      .then(res => res.json())
      .then(result => {
        console.log(result.amiibo)
        this.setState({
          character: result.amiibo[0],
          image: result.amiibo[0].image
        })
      })
  }
  // make an ajax call
  // interpolate link state and search word
  // set state if successful

  render() {
    return (
      <>
        <section className="container">
          <h2>
            Pick a Nintendo character to see it's amiibo card! (Mario, Princess
            Peach, etc.)
          </h2>
          <input
            onChange={this.handleChange}
            id="lookUp"
            type="text"
            name=""
            value={this.state.searchText}
          />
          <button onClick={this.characterRequest} type="button" name="button">
            Look Up
          </button>
          <img src={this.state.image} alt="" />
        </section>
      </>
    )
  }
}

export default App
