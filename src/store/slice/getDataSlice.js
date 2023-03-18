import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

import getAllAds from "../../config/Firebase";
const initialState = {
    adsData:[]
}
export const fetchAdsData = createAsyncThunk(
    "getdata/fetchads",
    async ()=>{
        const resp = await getAllAds()
        console.log("api resp" , resp)
        return resp.data
    }
)

const getAllDataSlice = createSlice({
    name : "getdata",
    initialState,
    reducers:{

    },
    extraReducers : (builder) =>{
        builder.addCase(fetchAdsData.fulfilled,(state , action)=>{
            // console.log("reducer action.payload" , action.payload)
            state.adsData = action.payload
        })
    }
})

export default getAllDataSlice.reducer