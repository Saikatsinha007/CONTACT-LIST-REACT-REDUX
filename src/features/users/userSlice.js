import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'1', name:'Saikat', contactno:'98888455'
    },
  
    {
        id:'10', name:'kat', contactno:'000088455'
    }
];

const userSlice = createSlice({
    name: 'users',
    initialState,
     reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
    editUser: (state, action) => {
        const { id, name, contactno } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser) {
          existingUser.name = name;
          existingUser.contactno = contactno;
        }
      },

      deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser) {
          return state.filter(user => user.id !== id);
        }
      }


 },

     

})
    export const {addUser, editUser,deleteUser} =userSlice.actions;
    export default userSlice.reducer;