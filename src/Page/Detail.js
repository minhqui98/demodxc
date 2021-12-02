import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Popover, PopoverBody, PopoverHeader, Row } from 'reactstrap';
import { fetchCourse, deleteData } from "../redux/thunk"

function Detail(props) {
    const { dataList, dataAdd } = useSelector(state => state.data)
    const dispatch = useDispatch();
    const onClickAddToCard = (item) => {
        dispatch({
            type: "ADD_CARD",
            payload: { ...item, quantity: 1,price:100000 }
        })
    }
    const deleteITem = (item) => {
        dispatch({
            type: "DELETE_CARD",
            payload: item
        })
    }
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/id/123/1200/600" class="d-block w-100" height="600px" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/id/456/1200/600" class="d-block w-100" height="600px" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/id/678/1200/600" class="d-block w-100" height="600px" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h1 style={{ textAlign: "center" }}>Cart</h1>
            {dataAdd && dataAdd.map((item, index) => {
                return <div className="d-flex justify-content-center align-items-center">
                    <img src="https://cdn.didongviet.vn/pub/media/catalog/product//s/a/samsung-a12.jpg" width="100px" height="100px" alt="" />
                    <p style={{ margin: "0 160px", fontWeight: "bold" }}>{item.name}</p>
                    <p style={{ margin: "0" }}>Quantity <span style={{fontWeight:"bold"}}>{item.quantity}</span></p>
                    <p style={{ margin: "0 50px" }}>Price: <span style={{fontWeight:"bold"}}>{item.quantity*item.price}</span></p>
                    <Button color="danger" onClick={() => deleteITem(item)} style={{ marginLeft: "50px" }}>Delete</Button>
                </div>
            })}
{/* <h3 style={{textAlign:"center"}}>All Prices:{dataAdd.reduce((prices,item)=>{return prices+=item.price},0)}</h3> */}
            <div class="card-group">
                <Row md="4"
                    sm="2"
                    xs="1">
                    {dataList.map((item, index) => {
                        return <Col style={{ padding: "10px" }}> <div class="card">
                            <img src="https://cdn.didongviet.vn/pub/media/catalog/product//s/a/samsung-a12.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <Button onClick={() => onClickAddToCard(item)} color="primary">Add</Button>
                            </div>
                        </div>
                        </Col>
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Detail;