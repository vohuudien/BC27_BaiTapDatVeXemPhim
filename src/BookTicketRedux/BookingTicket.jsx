import React, { Component } from "react";
import "../BookTicketRedux/Layout.css";
import StatusRowChair from "./StatusRowChair";
import data from "./data.json";
import RowChair from "./RowChair";

export default class BookingTicket extends Component {
  // render rowchai la render hang ghe
  renderRowChair = () => {
    return data.map((eachRowChair, index) => {
      return (
        <div key={{ index }}>
          <RowChair rowChair={eachRowChair} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/img/img/.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="text-danger display-4">
                BOOKING MOVIE CYBER LEARN
              </h1>
              <div className="mt-5" style={{ fontSize: "30px" }}>
                SCREEN
              </div>
              <div
                className="mt-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
              </div>
              {this.renderRowChair()}
            </div>
            <div className="col-4 text-center">
              <div
                style={{ fontSize: "40px" }}
                className="display-4 text-success"
              >
                LIST CHAIR
              </div>
              <StatusRowChair />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
