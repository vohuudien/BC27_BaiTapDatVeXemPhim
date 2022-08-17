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
          width: "100%",
          height: "100%",
          backgroundImage: "url('//public/background.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 text-center ">
              <h1 className="text-danger my-3 fw-bolder">
                BOOKING MOVIE CYBER LEARN
              </h1>
              <div
                className="mt-1"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className="screen">SCREEN</div>
              </div>
              
              {this.renderRowChair()}
            </div>
            <div className="col-4 text-center my-3">
              <h1 className="text-secondary fw-bolder">LIST CHAIR</h1>

              <StatusRowChair />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
