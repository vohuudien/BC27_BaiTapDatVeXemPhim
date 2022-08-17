const initialState = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangUpdate.findIndex(
        (gheDangDat) => gheDangDat.name === action.ghe.name
      );
      if (index !== -1) {
        danhSachGheDangUpdate.splice(index, 1);
      } else {
        danhSachGheDangUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangUpdate;
      return { ...state };
    }

    case "HUY_GHE": {
      let danhSachGheDangUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangUpdate.findIndex(
        (gheDangDat) => gheDangDat.name === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDangUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
