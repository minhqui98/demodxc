import React, { useState, useEffect } from 'react';
import "../Page/index.css";
import axios from "axios";
import { Button, Input, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse, deleteData } from "../redux/thunk"
const HomePage = (props) => {
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("1");
    const [isEdit, setIsedit] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);
    const [sort, setSort] = useState("");
    const dispatch = useDispatch();
    const { dataList } = useSelector(state => state.data)
    const totalPage = Math.ceil(count / limit);
    useEffect(() => {
        getUser();
    }, [page, limit, search])
    const getUser = async () => {
        dispatch(fetchCourse(search, page, limit))
    }
    const handleChange = (e, type) => {
        switch (type) {
            case "name":
                setUserName(e.target.value);
                break;
            case "age":
                setAge(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "gender":
                setGender(e.target.value);
                break;
            default:
                break;
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let dataItem = {
            name: userName,
            age: age,
            email: email,
            gender: gender
        }

        if (isEdit) {
            axios.put(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement/${id}`, dataItem)
                .then(function (response) {
                    getUser();
                    setUserName("");
                    setAge("");
                    setEmail("");
                    setGender("1")
                    setIsedit(false)
                    alert("Sửa thành công");
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios.post('https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement', dataItem)
                .then(function (response) {
                    getUser();
                    // let newData=data.unshift(dataItem)
                    // setData([...data,newData])
                    setUserName("");
                    setAge("");
                    setEmail("");
                    setGender("1")
                    alert("Thêm thành công");
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }
    const onDelete = (item) => {
        dispatch(deleteData(item.id));
        // axios.delete(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement/${item.id}`)
        //     .then((res) => {
        //         getUser();
        //         alert("Xóa thành công")
        //     }).catch((err) => {
        //         console.log(err);
        //     })
    }
    const onEdit = (item) => {
        setIsedit(true)
        setUserName(item.name);
        setAge(item.age);
        setEmail(item.email);
        setGender(item.gender);
        setId(item.id)
    }
    const onCancel = () => {
        setIsedit(false)
        setUserName("");
        setAge("");
        setEmail("");
        setGender("1");
    }
    const handleSort = (type) => {
        switch (type) {
            case "desc":
                let newData = data.sort((a, b) => {
                    return a.age - b.age
                });
                setData([...newData]);
                break;
            case "asc":
                let newData2 = data.sort((a, b) => {
                    return b.age - a.age
                });
                setData([...newData2]);
                break;
            default:
                break
        }
        // setSort(type);
        // asc giảm
        // try {
        //     const response = await axios.get(`https://6077eb4fe7f4f5001718351f.mockapi.io/staffmanagement?sortBy=${type}&order=${role}&search=${search}&page=${page}&limit=${limit}`)
        //     setData(response.data)
        // } catch (err) {
        //     console.log(err);
        // }

    }
    const handleSearch = (e) => {
        setPage(1)
        setSearch(e.target.value);
    }
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tr>
                    <td>
                        <form onSubmit={onSubmit} autocomplete="off">
                            <h3>Staff Management</h3>
                            
                            <div>
                                <label>Full Name</label>
                                <input onChange={(e) => handleChange(e, "name")} type="text" name="userName" value={userName} placeholder="Enter the user Name" required />
                            </div>

                            <div>
                                <label>Age</label>
                                <input onChange={(e) => handleChange(e, "age")} type="number" name="age" value={age} placeholder="Enter Age" required />
                            </div>

                            <div>
                                <label>Email</label>
                                <input onChange={(e) => handleChange(e, "email")} type="email" name="email" value={email} placeholder="Enter Email" required />
                            </div>

                            <div>
                                <label>Gender</label>
                                <select required style={{ width: "15%", height: "30px", marginLeft: "10px" }} onChange={(e) => handleChange(e, "gender")} placeholder="Chọn giới tính" value={gender}>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                                {/* <input onChange={(e) => handleChange(e, "gender")} type="number" name="gender" value={gender} placeholder="Enter Gender" /> */}
                            </div>

                            <div class="form-action-buttons">
                                <input type="submit" value={!isEdit ? "Add" : "Update"} />
                                {isEdit ? <Button color="secondary" outline onClick={onCancel} style={{ width: "30%", height: "41px", marginLeft: "10px" }}>Cancel</Button> : ""}
                            </div>

                        </form>
                    </td>

                    <td>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Input style={{ width: "50%" }} placeholder="Search" onChange={(e) => handleSearch(e)} value={search} />
                            {/* <input placeholder="Search" style={{ width: "30%", height: "30px", marginBottom: "10px" }} className="search"  /> */}
                            <p style={{ fontWeight: "bold", color: "red" }}>{count} kết quả</p>
                        </div>
                        <Table hover striped bordered>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Full Name
                                    </th>
                                    <th>
                                        Age
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Gender
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map((item, index) => {
                                    return <tr><th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender === "0" ? "female" : "male"}</td>
                                        <td><Button color="warning" onClick={() => onEdit(item)}>Edit</Button> | <Button color="danger" onClick={() => onDelete(item)}>Delete</Button></td></tr>
                                })}
                            </tbody>
                        </Table>
                        <div>
                            <Button color="primary" className="btn-pagi" disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</Button>{page}/{totalPage}
                            <Button color="primary" className="btn-pagi" disabled={page >= totalPage} onClick={() => setPage(page + 1)}>Next</Button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default HomePage;