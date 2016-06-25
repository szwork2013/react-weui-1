import React from 'react'
import styles from './theme/css'

export default class extends React.Component {
  render() {
    return <div className={styles.right}>
      {this.props.children}
    </div>
  }
}
