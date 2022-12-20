import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ModalState } from "../types";

const initialState: ModalState = {
    isCreateThreadModal: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showCreateThreadModal: (state: ModalState) => {
            state.isCreateThreadModal = true;
        },
        toggleCreateThreadModal: (state: ModalState) => {
            state.isCreateThreadModal = !state.isCreateThreadModal;
        },
    },
});

export const { showCreateThreadModal, toggleCreateThreadModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;