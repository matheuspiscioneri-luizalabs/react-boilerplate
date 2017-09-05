import React, { Component } from 'react'

export class Strips extends Component {
  render() {
    return (
      <div className="strips">
        <span className="strips__strip -yellow" />
        <span className="strips__strip -orange" />
        <span className="strips__strip -red" />
        <span className="strips__strip -pink" />
        <span className="strips__strip -purple" />
        <span className="strips__strip -purple-dark" />
        <span className="strips__strip -blue" />
        <span className="strips__strip -cyan" />
        <span className="strips__strip -green-light" />
        <span className="strips__strip -green" />
      </div>
    )
  }
}