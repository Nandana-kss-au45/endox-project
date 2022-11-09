import React, { Fragment, useEffect } from "react";
import "./Page2.css";
import logo from "../../Assets/Images/logo3.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAllOrders,getOrderDetails } from "../../Redux/Actions/OrderAction";

function Page2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, orders,loading} = useSelector((state)=> state.allOrders);


  const navigationHandler = (route)=>{
    navigate(`/admin/${route}`)
  }
  const orderDetailsHandler = (id)=>{
    dispatch(getOrderDetails(id));
    console.log(id,"=======");
    navigate(`/admin/orders/${id}`)
  }

 useEffect(() => {

    dispatch(getAllOrders())
  }, [dispatch,])
  return (
    <div>
      <div className="mainsection">
        <div className="section1">
          <div className="logo">
            <img className="logo" src={logo} />
            {/* <h2>Endoxous</h2>
            <h6 className="s2-logotitle">international private limited</h6> */}
          </div>
          <div>
            <ul className="navbar-nav justify-content-end flex-grow-1 ">
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 " onClick={()=> navigationHandler('home')}>Home</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 " onClick={()=> navigationHandler('orders')}>Orders</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 " onClick={()=> navigationHandler('nurseries')}>All Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn px-4 " onClick={()=> navigationHandler('Payments')}>Payments</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className=" s1-btn btn  px-4 ">Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="section2 ">
          <nav
            class="s2-navabar navbar navbar-expand-lg "
            style={{ backgroundColor: "white" }}
          >
            <div class="container-fluid px-5">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <a className="fw-bold navbar-brand" href="#">
                All Orders
              </a>
              <button
                class="btn btn-outline-success btnround"
                type="submit"
              ></button>
            </div>
            <hr />
          </nav>
          <div className="d-flex justify-content-between  align-items-center px-2 py-1">
            <div className="p-5">
              <input
                class="form-control px-5"
                type="text"
                value="Order ID, phone or name..."
                aria-label="readonly input example"
                readonly
              />
            </div>
            <div>
              <div className="d-flex px-4 ">
                <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Order status </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="p2-selection mx-2 ">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Special filters</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="p2-selection mx-2">
                  <select
                    class="form-select "
                    aria-label="Default select example"
                  >
                    <option selected>Lifetime</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="section2-btn d-flex  px-5 ">
            <button className="s2-btn">All</button>
            <button className="s2-btn">Pending</button>
            <button className="s2-btn">Shipped</button>
            <button className="s2-btn">Delivered</button>
            <button className="s2-btn">Cancelled</button>
          </div>
          <div className="s2-table px-5 m-3 ">
            <div className="s2-table py-4">
              <table class="table table-borderless table-sm ">
                <thead className="s2-table-nava">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date and Time</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Items</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Deliverd By</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider  my-5">
                  {orders&&orders.map((order,index)=>(
                    <Fragment>
                      <tr >
                    <th scope="row" onClick={()=>orderDetailsHandler(order._id)} style={{cursor:"pointer"}}>{order._id}</th>
                    <td>{String(order.createdAt).substr(0, 10)}</td>
                    <td>{order?.user?.name} </td>
                    <td> {order?.orderItems?.length} </td>
                    <td>OnlinePayment</td>
                    <td>
                      <div>
                        <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                          style={{backgroundColor : order?.orderStatus === "Delivered" ? "green" : "red"}}
                        />{" "}
                        {order?.orderStatus}
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>
                      <select
                        class="form-select-sm  px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                  </tr>
                    </Fragment>
                  ))}

                  
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
