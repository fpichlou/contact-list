import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    contactList: [],
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.contactList = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export default contactSlice.reducer;

export const contactActions = contactSlice.actions;
