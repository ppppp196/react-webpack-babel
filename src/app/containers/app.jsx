import React from 'react';
import styles from "./app.sass"  // Css-module styles

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h1>It Works!</h1>
          <p>This React project just works including <span className={styles.redButton}>css-module</span> local styles.</p>
          <p>Enjoy!</p>
        </div>
      </div>)
  }
}
