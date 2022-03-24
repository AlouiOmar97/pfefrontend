import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  users: [],
  storage: [],
  frm: "",
  currentFolder: "",
  lastFolder: [],
  selectedUsers: {},
  errors: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    populateUser(state, action) {
      state.users = action.payload;
    },
    populateStorage(state, action) {
      state.storage = action.payload;
    },
    populateFrm(state, action) {
      state.frm = action.payload;
    },
    populateCurrentFolder(state, action) {
      state.currentFolder = action.payload;
    },
    populateLastFolder(state, action) {
      state.lastFolder = action.payload;
    },
    selectUser(state, action) {
      state.selectedUsers = action.payload;
    },
    unselectUser(state) {
      state.selectedUsers = null;
    },

    updateUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.users[index] = payload;
      }
    },
    addUser: (state, action) => {
      const payload = action.payload;
      state.users.push(payload);
    },
    addFolder: (state, action) => {
      const payload = action.payload;
      state.lastFolder.push(payload);
    },
    deleteFolder: (state, action) => {
      const payload = action.payload;
      const index = state.lastFolder.findIndex((item) => item === payload);
      if (index !== -1) {
        state.lastFolder.splice(index, 1);
      }
    },
    deleteUser: (state, action) => {
      const payload = action.payload;
      const index = state.users.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchUsers = () => async (dispatch) => {
  const [res, error] = await queryApi("list");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateUser(res));
  }
};

export const fetchStorage = () => async (dispatch) => {
  const [res, error] = await queryApi("storage");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateStorage(res));
  }
};

export const fetchhUserss = (res) => async (dispatch) => {
  const [res, error] = await queryApi("list/1yz1cZAcwJkILVQSt7WIEtDAkg-K_mwFC");

  if (error) {
    dispatch(setErrors(error));
  } else {
    console.log("fetchh");
    dispatch(populateUser(res));
    console.log(res);
  }
};
export const selectUsers = (state) => {
  return [state.userSlice.users, state.userSlice.errors];
};
export const gettUsers = (state) => {
  return state.userSlice.users;
};
export const getFrm = (state) => {
  return state.userSlice.frm;
};
export const getCurrentFolder = (state) => {
  return state.userSlice.currentFolder;
};
export const getStorage = (state) => {
  return state.userSlice.storage;
};
export const getLastFolder = (state) => {
  return state.userSlice.lastFolder;
};
export const selectSelectedUsers = (state) => {
  return state.userSlice.selectedUsers;
};
export const {
  populateUser,
  populateStorage,
  populateFrm,
  populateCurrentFolder,
  populateLastFolder,
  getUsers,
  addUser,
  addFolder,
  deleteUser,
  deleteFolder,
  selectUser,
  updateUser,
  unselectUser,
  setErrors,
} = userSlice.actions;

export default userSlice.reducer;
