import { createSlice } from "@reduxjs/toolkit";


const popupSlice = createSlice({
    name:'popup',
    initialState:{
        showPopup:false,
        actionType:null,
    },
    reducers:{
        setShowPopup:(state,actions)=>{
            state.showPopup = actions.payload
        },
        setActionType:(state,actions)=>{
            state.actionType = actions.payload
        }

    }
})
export const {setShowPopup,setActionType} = popupSlice.actions;

export const selectPopupState = (state)=>state.popup;
export default popupSlice.reducer