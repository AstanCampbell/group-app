import React, { Component, useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import './ViewAudit.css'
import Loader from 'react-loader-spinner';

class ViewAudit2 extends React.Component {
  render() {
      return (
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Since</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.audits && this.props.audits.map(audit => {
                      return <tr>
                          <td>{audits._id}</td>
                          <td>{audits.name}</td>
                          <td>{audits.since}</td>
                      </tr>
                  })}
              </tbody>
          </table>
      );
  }
}
// App component