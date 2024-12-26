import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },

    reducers:{
        addzToWishList(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert('Product Already Existing')
            }
            else{
                state.wishlist.push(action.payload)
                alert('Product Added')
            }

        },

        removeFromWishList(state, action) {
            state.wishlist=state.wishlist.filter(item=>item.id != action.payload);
            alert('Product removed from the wishlist');
        }
    }
})

export default wishlistSlice.reducer
export const {addzToWishList,removeFromWishList}=wishlistSlice.actions