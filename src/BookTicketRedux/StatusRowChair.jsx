import React, { Component } from "react";
import { connect } from "react-redux";

class StatusRowChair extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <div className="d-flex  align-items-center mb-2">
            <button className="gheDuocChon rounded-circle me-2"></button>
            <div className="text-secondary" style={{ fontSize: "20px" }}>
              GHẾ ĐÃ ĐẶT
            </div>
          </div>

          <div className="d-flex  align-items-center mb-2">
            <button className="gheDangChon rounded-circle me-2"></button>
            <div className="text-secondary" style={{ fontSize: "20px" }}>
              GHẾ ĐANG ĐẶT
            </div>
          </div>

          <div className="d-flex  align-items-center mb-2">
            <button className="ghe rounded-circle me-2"></button>
            <div className="text-secondary" style={{ fontSize: "20px" }}>
            GHẾ CHƯA ĐẶT
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <table class="table bg-secondary text-center text-light" border="2">
            <thead>
              <tr>
                <th>Số Ghế</th>
                <th>Giá</th>
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
                        className="btn btn-danger"
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
