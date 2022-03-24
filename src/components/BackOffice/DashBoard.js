import React from "react";
import * as Icon from "react-feather";
import { FaPlay, FaCaretUp, FaTrophy, FaCogs, FaFile, FaUsers, FaUser, FaClock, FaArrowUp } from 'react-icons/fa';
import { IoIosExpand, IoIosClose } from 'react-icons/io';
import { FiEdit, FiTrash } from 'react-icons/fi';

const DashBoard = () => {
  return (
    <>
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div class="content-wrapper">
        <div class="container-full">
          {/* <!-- Main content --> */}
          <section class="content">
            <div class="row">
              <div class="col-xxxl-8 col-xl-8 col-12">
                <div class="row">
                  <div class="col-xl-6 col-12">
                    <div class="box">
                      <div class="box-header">
                        <h3 class="box-title">
                          Sales Pipeline
                        </h3>
                      </div>
                      <div class="box-body pb-0">
                        <div id="chartdiv45" class="h-300 amcharts-main-div"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-12">
                    <div class="box">
                      <div class="box-header">
                        <h3 class="box-title">
                          Leads by Source
                        </h3>
                      </div>
                      <div class="box-body pb-0">
                        <div id="chartdiv46" class="h-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">
                      Sales Analytics
                    </h3>
                  </div>
                  <div class="box-body pb-0">
                    <div id="chart44"></div>
                  </div>
                  <div class="box-body pb-0">
                    <div class="row">
                      <div class="col-lg-4 col-12">
                        <div class="box no-shadow no-border bg-lightest">
                          <div class="box-body">
                            <h2 class="fw-600"><small>$</small>1.200</h2>
                            <p class="text-mute mb-0">This Day</p>
                            <p class="text-success mb-0"><FaArrowUp></FaArrowUp> 1.8%</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-12">
                        <div class="box no-shadow no-border bg-lightest">
                          <div class="box-body">
                            <h2 class="fw-600 text-primary"><small>$</small>12.745</h2>
                            <p class="text-mute mb-0">This Week</p>
                            <p class="text-success mb-0"><FaArrowUp></FaArrowUp> 1.8%</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-12">
                        <div class="box no-shadow no-border bg-lightest">
                          <div class="box-body">
                            <h2 class="fw-600 text-success"><small>$</small>7.745</h2>
                            <p class="text-mute mb-0">Previous Week</p>
                            <p class="text-success mb-0"><FaArrowUp></FaArrowUp> 1.8%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box bg-transparent no-shadow no-border mb-0">
                  <div class="box-header no-border px-0">
                    <h3 class="box-title">Project Data</h3>
                    <div class="box-controls pull-right d-md-flex d-none">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
                <div class="box" style={{ height: "353px" }}>
                  <div class="box-body py-10">
                    <div class="table-responsive">
                      <table class="table no-border mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <div class="bg-danger h-50 w-50 l-h-50 rounded text-center">
                                <p class="mb-0 fs-20 fw-600">A1</p>
                              </div>
                            </td>
                            <td class="fw-600">Vivamus consectetur</td>
                            <td class="text-fade">05-08-2021</td>
                            <td class="fw-500"><span class="badge badge-sm badge-dot badge-warning me-10"></span>Approved</td>
                            <td class="text-end">

                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle mx-5"><FiEdit></FiEdit></a>
                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle "><FiTrash></FiTrash></a></td>
                          </tr>
                          <tr>
                            <td>
                              <div class="bg-info h-50 w-50 l-h-50 rounded text-center">
                                <p class="mb-0 fs-20 fw-600">B1</p>
                              </div>
                            </td>
                            <td class="fw-600">Google Art</td>
                            <td class="text-fade">05-08-2021</td>
                            <td class="fw-500"><span class="badge badge-sm badge-dot badge-danger me-10"></span>Rejected</td>
                            <td class="text-end">
                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle mx-5"><FiEdit></FiEdit></a>
                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle "><FiTrash></FiTrash></a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="bg-primary h-50 w-50 l-h-50 rounded text-center">
                                <p class="mb-0 fs-20 fw-600">C1</p>
                              </div>
                            </td>
                            <td class="fw-600">Rolex Language</td>
                            <td class="text-fade">05-08-2021</td>
                            <td class="fw-500"><span class="badge badge-sm badge-dot badge-warning me-10"></span>Approved</td>
                            <td class="text-end">

                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle mx-5"><FiEdit></FiEdit></a>
                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle "><FiTrash></FiTrash></a> </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="bg-success h-50 w-50 l-h-50 rounded text-center">
                                <p class="mb-0 fs-20 fw-600">A2</p>
                              </div>
                            </td>
                            <td class="fw-600">Geometry INC</td>
                            <td class="text-fade">05-08-2021</td>
                            <td class="fw-500"><span class="badge badge-sm badge-dot badge-warning me-10"></span>Approved</td>
                            <td class="text-end">

                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle mx-5"><FiEdit></FiEdit></a>
                              <a href="#" class="waves-effect waves-light btn-sm btn btn-primary-light btn-circle "><FiTrash></FiTrash></a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxxl-4 col-xl-4 col-12">
                <div class="box bg-img box-inverse"/*  style="background-image: url(../../../images/promo.jpg); background-position: top center;" */
                  style={{ backgroundImage: "url(assets/backoffice/images/promo.jpg)", backgroundPosition: "top center" }}
                  data-overlay="5">
                  <div class="box-header with-border">
                    <h3 class="box-title">Company</h3>
                    <ul class="box-controls pull-right">
                      <li><a class="" href="#"><IoIosClose style={{ width: 10 }}></IoIosClose></a></li>
                      <li><a class="" href="#"><IoIosExpand></IoIosExpand></a></li>
                    </ul>
                  </div>
                  <div class="box-body mt-110">
                    <span class="badge me-15 mt-100" data-overlay="5">Watch New Promo</span>
                    <button type="button" class="btn-sm btn btn-primary btn-circle" data-bs-toggle="modal" data-bs-target="#exampleModal">

                      <FaPlay></FaPlay>
                    </button>
                    <ul class="flexbox flex-justified mt-10">
                      <li>
                        <p class="fs-20 text-warning mb-0 fw-300"> <FaCaretUp></FaCaretUp> +1.92%
                          <small class="fs-12">4,425.81</small></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">
                      Sales Analytics
                    </h3>
                  </div>
                  <div class="box-body">
                    <div /* style="min-height: 279.7px;" */ style={{ minHeight: "279.7px" }}>
                      <div id="sales-chart"></div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                          <FaFile></FaFile>
                        </div>
                        <h4 class="mb-5">Projects</h4>
                        <p class="text-mute mb-0" style={{ marginTop: "-35px" }}>124 Total</p>
                      </div>
                      <div id="chart41"></div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <div class="bg-info mb-20 w-50 h-50 rounded10 text-center l-h-50">
                          <FaCogs></FaCogs>
                        </div>
                        <h4 class="mb-5 text-nowrap">On Going</h4>
                        <p class="text-mute mb-0" style={{ marginTop: "-35px" }}>32 Total</p>
                      </div>
                      <div id="chart42"></div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-body">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <div class="bg-success mb-20 w-50 h-50 rounded10 text-center l-h-50">
                          <FaTrophy></FaTrophy>
                        </div>
                        <h4 class="mb-5">Complete</h4>
                        <p class="text-mute mb-0" style={{ marginTop: "-35px" }}>102 Total</p>
                      </div>
                      <div id="chart43"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-12">
                <div class="box">
                  <div class="box-body">
                    <div class="flex-grow-1 pb-10">
                      <div class="bg-primary w-70 h-70 rounded10 mb-30 text-center l-h-70">
                        <FaUsers></FaUsers>
                      </div>

                      <a href="#" class="text-dark fw-600 hover-primary fs-18" data-bs-toggle="modal" data-bs-target="#evemt-view">
                        Annual client Management <br />Program 2021
                      </a>
                      <p class="fs-16 mt-15">
                        Employees  Clients Meeting
                      </p>
                      <div class="d-flex align-items-center">
                        <a href="reports.html" class="btn btn-sm btn-primary-light me-15">Report</a>
                        <div class="fs-16">
                          <FaClock></FaClock>
                          15 min
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-10 align-items-center justify-content-between">
                      <h2 class="mb-0 text-primary">20</h2>
                      <div class="d-flex" style={{ width: "200px" }}>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-1.png" class="h-50 align-self-end" alt="" />
                        </a>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-3.png" class="h-50 align-self-end" alt="" />
                        </a>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-4.png" class="h-50 align-self-end" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-12">
                <div class="box">
                  <div class="box-body">
                    <div class="flex-grow-1 pb-10">
                      <div class="bg-warning w-70 h-70 rounded10 mb-30 text-center l-h-70">
                        <FaUser></FaUser>
                      </div>

                      <a href="#" class="text-dark fw-600 hover-primary fs-18" data-bs-toggle="modal" data-bs-target="#evemt-view">
                        How to manage your Clients<br />in Proper way
                      </a>
                      <p class="fs-16 mt-15">
                        Top priority project of August 2020
                      </p>
                      <div class="d-flex align-items-center">
                        <a href="reports.html" class="btn btn-sm btn-warning-light me-15">Report</a>
                        <div class="fs-16">
                          <FaClock></FaClock>
                          15 min
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mt-10 align-items-center justify-content-between">
                      <h2 class="mb-0 text-primary">15</h2>
                      <div class="d-flex" style={{ width: "200px" }}>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-1.png" class="h-50 align-self-end" alt="" />
                        </a>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-3.png" class="h-50 align-self-end" alt="" />
                        </a>
                        <a href="extra_profile.html" class="me-15 bg-lightest h-50 w-50 l-h-50 rounded text-center overflow-hidden">
                          <img src="assets/backoffice/images/avatar/avatar-4.png" class="h-50 align-self-end" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-12">
                <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">Daily Orders</h3>
                  </div>
                  <div class="box-body">
                    <div id="charts_widget_1_chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /.content --> */}
        </div>
      </div>
      {/* <!-- /.content-wrapper --> */}
    </>
  );
};
export default DashBoard;
