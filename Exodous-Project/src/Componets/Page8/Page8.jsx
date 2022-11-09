import React from "react";
import "./Page8.css";
import logo from "../../Assets/Images/logo3.png";

function Page8() {
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
                <button className="s1-btn btn  px-4 ">Home</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">Orders</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn  px-4 ">All Nurseries</button>
              </li>
              <li className="nav-item m-2">
                <button className="s1-btn btn px-4 ">Payments</button>
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

              <a className="fw-bold navbar-brand " href="#">
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
              '
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
                    <th scope="col">Date & Time</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Items</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Area/Locality</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider  my-5">
                  <tr>
                    <th scope="row">#12345</th>
                    <td>05.10.22, 06:01 PM</td>
                    <td>CustomerName </td>
                    <td> 1 </td>
                    <td>COD</td>
                    <td>
                      <div>
                        <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending
                      </div>
                    </td>
                    <td>Rs 320</td>
                    <td>
                      <select
                        class="form-select-sm px-3"
                        aria-label="Default select example"
                      >
                        <option selected>Select Nursery </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">#12345</th>
                    <td>Date</td>
                    <td>CustomerName </td>
                    <td> 2 </td>
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
                        />{" "}
                        Pending
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
                  <tr>
                    <th scope="row ">#12345</th>
                    <td>Date</td>
                    <td>CustomerName </td>
                    <td> 1 </td>
                    <td>COD</td>
                    <td>
                      <div>
                        <input
                          class="form-check-input s2-radio"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="Pending"
                          aria-label="..."
                        />{" "}
                        Pending
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;
