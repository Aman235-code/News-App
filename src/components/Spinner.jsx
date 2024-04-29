import React, { Component } from "react";
import Loading from "../assets/loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3 mb-2" src={Loading} alt="Loading" />
      </div>
    );
  }
}
