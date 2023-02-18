import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {text1: 0, text2: true}

  change = () => {
    this.setState(prevState => {
      // Use the curly braces
      const p = Math.ceil(Math.random() * 100)

      if (p % 2 === 0) {
        const k1 = true
        return {text1: p, text2: k1}
      }
      const k1 = false // No need to use the else statement explicitly
      return {text1: p, text2: k1}
    })
  }

  render() {
    const {text1, text2} = this.state

    return (
      <div class="bg-container">
        <div class="sub-container">
          <h1>Count {text1}</h1>
          {text2 ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <button onClick={this.change}>Increment</button>
          <p>* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
