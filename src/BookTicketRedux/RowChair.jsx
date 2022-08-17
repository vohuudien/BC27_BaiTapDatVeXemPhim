import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

class RowChair extends Component {
  renderChair = () => {
    return this.props.rowChair.seats.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.booked) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let InDexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.name === ghe.name
      );
      if (InDexGheDangDat !== -1) {
        cssGheDaDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.name}
        </button>
      );
    });
  };

  render() {
    return (
      <div
        className="text-danger text-start ml-5 mt-5"
        style={{ fontSize: "15px" }}
      >
        {this.props.rowChair.row} {this.renderChair()}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        ghe,
      });
    },
    huyGhe: (soGhe) => {
      dispatch({
        type: "HUY_GHE",
        soGhe,
      });
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(RowChair);
