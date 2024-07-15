import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addResourceData: [],
  perUserData: [
    { empNo: "" },
    { name: "" },
    { platform: "" },
    { track: "" },
    { application: "" },
    { role: "" },
    { location: "" },
    { unit: "" },
    { bundle: "" },
    { projectCode: "" },
    { empDu: "" },
    { run: "" },
    { runCnx: "" },
    { runEnt: "" },
    { oth: "" },
    { cnxIt: "" },
    { entIt: "" },
    { mntCnx: "" },
    { mntEnt: "" },
    { mnt: "" },
    { cnx: "" },
    { ent: "" },
    { oh: "" },
    { offshareRate: "" },
    { onsiteRate: "" },
    { totalRate: "" },
    { bufferUser: "" },
    { newUser: "" },
    { currentCountry: "" },
    { workingMode: "" },
    { projectUnit: "" },
    { currentCountry: "" },
    { workingMode: "" },
    { projectUnit: "" },
    { projectType: "" },
    { projectName: "" },
    { reportingTo: "" },
    { currentNetwork: "" },
    { allocationStart: "" },
    { allocationEnd: "" },
  ],
};

const addResourceSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.addResourceData = [...state.addResourceData, action.payload];
    },
    perUser: (state, action) => {
		state.perUserData = [...state.perUserData, ]
	},
  },
});

export default addResourceSlice.reducer;
export const { addData } = addResourceSlice.actions;
