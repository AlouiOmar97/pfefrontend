import React from "react";
import { MdNotifications, MdMail, MdMenu } from 'react-icons/md';
import { RiNotificationBadgeFill } from 'react-icons/ri';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoIosExpand } from 'react-icons/io';

const NavBarBack = () => {
    return (
        <>
            <header class="main-header">
                <div class="d-flex align-items-center logo-box justify-content-start d-md-none d-block">
                    {/* <!-- Logo --> */}
                    <a href="index-2.html" class="logo">
                        {/* <!-- logo--> */}
                        <div class="logo-mini w-30">
                            <span class="light-logo"><img src="assets/backoffice/images/logo-letter.png" alt="logo" /></span>
                            <span class="dark-logo"><img src="assets/backoffice/images/logo-letter-white.png" alt="logo" /></span>
                        </div>
                        <div class="logo-lg">
                            <span class="light-logo"><img src="assets/backoffice/images/logo-dark-text.png" alt="logo" /></span>
                            <span class="dark-logo"><img src="assets/backoffice/images/logo-light-text.png" alt="logo" /></span>
                        </div>
                    </a>
                </div>
                {/* <!-- Header Navbar --> */}
                <nav class="navbar navbar-static-top">
                    {/* <!-- Sidebar toggle button--> */}
                    <div class="app-menu">
                        <ul class="header-megamenu nav">
                            <li class="btn-group nav-item">
                                <a href="#" class="waves-effect waves-light nav-link push-btn btn-primary-light" data-toggle="push-menu" role="button">
                                    <i class="icon-Menu"><span class="path1"></span><span class="path2"></span></i>
                                    <MdMenu></MdMenu>
                                </a>
                            </li>
                            <li class="btn-group d-lg-inline-flex d-none">
                                <div class="app-menu">
                                    <div class="search-bx mx-5">
                                        <form>
                                            <div class="input-group">
                                                <input type="search" class="form-control" placeholder="Search" />
                                                <div class="input-group-append">
                                                    <button class="btn" type="submit" id="button-addon3"><i class="icon-Search"><span class="path1"></span><span class="path2"></span></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="navbar-custom-menu r-side">
                        <ul class="nav navbar-nav">
                            <li class="dropdown notifications-menu btn-group nav-item">
                                <a href="#" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" data-bs-toggle="dropdown" title="Notifications">
                                    <i class="icon-Notifications"><span class="path1"></span><span class="path2"></span></i>
                                    <MdNotifications />
                                    <div class="pulse-wave"></div>
                                </a>
                                <ul class="dropdown-menu animated bounceIn">
                                    <li class="header">
                                        <div class="p-20">
                                            <div class="flexbox">
                                                <div>
                                                    <h4 class="mb-0 mt-0">Notifications</h4>
                                                </div>
                                                <div>
                                                    <a href="#" class="text-danger">Clear All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* <!-- inner menu: contains the actual data --> */}
                                        <ul class="menu sm-scrol">
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-user text-primary"></i> Nunc fringilla lorem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="btn-group nav-item">
                                <a href="mailbox.html" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="">
                                    <i class="icon-Mailbox"><span class="path1"></span><span class="path2"></span></i>
                                    <MdMail></MdMail>
                                </a>
                            </li>
                            <li class="btn-group nav-item d-xl-inline-flex d-none">
                                <a href="#" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" data-bs-toggle="modal" data-bs-target="#quick_panel_toggle">
                                    <i class="icon-Notification"><span class="path1"></span><span class="path2"></span></i>
                                    <RiNotificationBadgeFill></RiNotificationBadgeFill>
                                </a>
                            </li>
                            <li class="btn-group nav-item d-xl-inline-flex d-none">
                                <a href="#" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" id="live-chat">
                                    <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                                    <BsChatDotsFill></BsChatDotsFill>
                                </a>
                            </li>

                            <li class="btn-group nav-item d-xl-inline-flex d-none">
                                <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                                    <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
                                    <IoIosExpand></IoIosExpand>
                                    {/*  <IoExpandSharp></IoExpandSharp> */}
                                </a>
                            </li>

                            <li class="btn-group nav-item">
                                <a href="reports.html" class="waves-effect waves-light nav-link bg-primary btn-primary w-auto fs-14" title="Full Screen">
                                    Generate Report
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default NavBarBack;