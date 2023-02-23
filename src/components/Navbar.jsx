import React from "react";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container">
                    <a class="navbar-brand fs-2 fw-bold text-success" href="#logo">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#vegetable">Vegetable</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;