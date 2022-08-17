import React, { Component } from "react";
import { connect } from "react-redux";

class StatusRowChair extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon" style={{ marginLeft: -30 }}></button>
          <span className="text-success" style={{ fontSize: "20px" }}>
            GHẾ ĐÃ ĐẶT
          </span>

          <br />

          <button className="gheDangChon"></button>
          <span className="text-success" style={{ fontSize: "20px" }}>
            GHẾ ĐANG ĐẶT
          </span>

          <br />

          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-primary" style={{ fontSize: "20px" }}>
            GHẾ CHƯA ĐẶT
          </span>

          <br />
        </div>

        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr>
                <th>Số Ghế</th>
                <th>Gía</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.name}</td>
                    <td>{gheDangDat.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch({
                            type: "HUY_GHE",
                            soGhe: gheDangDat.name,
                          });
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, gheDangDat) => {
                      return (tongTien += gheDangDat.price);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProp)(StatusRowChair);
