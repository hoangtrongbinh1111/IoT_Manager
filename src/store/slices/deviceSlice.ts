import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit';
import { DeviceModel } from '@app/domain/DeviceModel';
import { uniqBy } from "lodash";

export interface DeviceState {
  deviceDetection: Array<DeviceModel>;
}

const initialState: DeviceState = {
  deviceDetection: []
};

export const appendDeviceDetection = createAction<PrepareAction<DeviceModel>>('device/appendDeviceDetection', (deviceItem: DeviceModel) => {
  return {
    payload: deviceItem,
  };
});

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(appendDeviceDetection, (state, action) => {
      const arrItem = [...state.deviceDetection];
      arrItem.unshift(action.payload);
      const merged = uniqBy(arrItem, "id");
      state.deviceDetection = merged.slice(0,20);
    });
  },
});

export default deviceSlice.reducer;
