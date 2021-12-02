let initialState = {
    dataList: [],
    dataAdd: []
};

const ListData = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA": {
            return { ...state, dataList: action.payload }
        }
        case "ADD_CARD":{
            // console.log(action.payLoad);
            let cloneDataAdd = [...state.dataAdd];
            let index = cloneDataAdd.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index !== -1) {
                cloneDataAdd[index].quantity+=1
            } else {
                cloneDataAdd.push(action.payload);
            }
            state.dataAdd = cloneDataAdd;
            return { ...state }
        }
        case "DELETE_CARD": {
            let index = state.dataAdd.findIndex(
                (item) => item.id === action.payload.id
            );
            console.log(index);
            if (index !== -1) {
                state.dataAdd.splice(index,1);
            }
            return {...state}
        }
        default:
            return state;
    }
};
export default ListData;
