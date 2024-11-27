import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Header.css";
import { getDatabase, ref, set } from "Firebase/database";
import { app } from "../../Firebase.js";
import { useState } from 'react';
function Header() {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 10000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone,
            message: message
        })
        alert("RECORD ADD")
        setName("")
        setPhone("")
        setMessage("")
        document.getElementById("closeModal").click();
    }


    return (
        <div className="headerjsx">

            <section className="Header">
                <div className="container">
                    <div className="row">
                        <div className="header1-main d-flex justify-contant-center align-items-center">
                            <div className="col-3">
                                <div className="header1-img jus">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" srcset="" width={"120px"} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header1-searchbar justify-contant-start">
                                    <div className="form d-flex">
                                        <input type="search" placeholder="Search For items..." aria-label="Search" />
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                All Categories
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">All Categories</a></li>
                                                <li><a class="dropdown-item" href="#">Mens</a></li>
                                                <li><a class="dropdown-item" href="#">Womens</a></li>
                                                <li><a class="dropdown-item" href="#">Electronics</a></li>
                                            </ul>
                                        </li>
                                        <div className="serch-bar">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-4">
                                <div className="header-icon d-flex align-items-center">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-regular fa-user"></i>&nbsp;Account
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Register</a></li>
                                            <li><a class="dropdown-item" href="#">Checkout</a></li>
                                            <li><a class="dropdown-item" href="#">Login</a></li>
                                        </ul>
                                    </li>&nbsp;
                                    <div className="header-icon-2">
                                        <ul className='d-flex'>
                                            <li>
                                                <a href="#"><i class="fa-regular fa-heart"></i>&nbsp;Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='menubar'>
                <div className="container">
                    <div className="row">
                        <div className="menubar-main d-flex">
                            <div className="col-2">
                                <div className="toggle-1">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>

                            <div className="col-7">
                                <div className="menubar-list d-flex justify-content-center">
                                    <nav class="navbar navbar-expand-lg bg-white">
                                        <div class="container-fluid">
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Category
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Shop Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Shop Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Shop Full Width</a></li>

                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Products
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Products Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Products Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Products Full Width</a></li>

                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Pages
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                                            <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                                            <li><a class="dropdown-item" href="#">Cart</a></li>
                                                            <li><a class="dropdown-item" href="#">Checkout</a></li>
                                                            <li><a class="dropdown-item" href="#">wislist</a></li>
                                                            <li><a class="dropdown-item" href="#">Faq</a></li>
                                                            <li><a class="dropdown-item" href="#">Login</a></li>
                                                            <li><a class="dropdown-item" href="#">Register</a></li>
                                                            <li><a class="dropdown-item" href="#">Policy</a></li>
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Blog
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Full Width</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Full Width</a></li>
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Elements
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Products</a></li>
                                                            <li><a class="dropdown-item" href="#">Typography</a></li>
                                                            <li><a class="dropdown-item" href="#">Button</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>


                            <div className="col-3 col-xl-3 d-xl-flex d-sm-none justify-content-end">
                                <div className="contact">
                                    <ul className='d-flex justify-content-end'>
                                        <li>
                                            <button type="button" className="btn" style={{ backgroundColor: "#64b496" }} data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="fa-solid fa-phone text-light p-0" />
                                            </button>
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Message</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                        </div>
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="modal-body">
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                                                    <input type="text" className="form-control" id="recipient-name" value={name} onChange={(e) => setName(e.target.value)} required />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-phone" className="col-form-label">Phone:</label>
                                                                    <input type="text" className="form-control" id="recipient-phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                                    <textarea className="form-control" id="message-text" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" id="closeModal" data-bs-dismiss="modal">Close</button>
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Header