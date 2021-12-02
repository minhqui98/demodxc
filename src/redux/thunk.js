import axios from "axios";
export const fetchCourse = (search, page, limit) => {
    return (dispatch) => {
        axios.get(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement?search=${search}&page=${page}&limit=${limit}`)
            .then((res) => {
                if(res){
                    dispatch({type:"GET_DATA",payload:res.data})
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const deleteData = (id) => {
    return (dispatch) => {
        axios.delete(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement/${id}`)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};export const postData = (data) => {
    return (dispatch) => {
        axios.delete(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement`,data)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};