/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { queryApi } from "../utils/queryApi";
import mimeType from "mime-types";
import {
  fetchUsers,
  selectUsers,
  setErrors,
  selectSelectedUsers,
  getUsers,
  deleteUser,
  fetchhUserss,
  addFolder,
  populateUser,
  populateFrm,
  populateCurrentFolder,
  populateLastFolder,
  getFrm,
  getCurrentFolder,
  getLastFolder,
  deleteFolder,
} from "../redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import axios from "axios";


const Files = () => {
  const [show, setShow] = useState(false);
  const myRefname = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const selectedUser = useSelector(selectUsers);
  const selectedFrm = useSelector(getFrm);
  const selectedCurrentFolder = useSelector(getCurrentFolder);
  const selectedLastFolder = useSelector(getLastFolder);
  const file = [
    { id: "1dZ4mKzTLK6CO5r-xNZxneyJREtOUe8KC", name: "test" },
    { id: "1yz1cZAcwJkILVQSt7WIEtDAkg-K_mwFC", name: "bye" },
    { id: "1lsgFHxUnFo0P22Id5KKfQegW9a7tWGqc", name: "hi" },
    { id: "10jMBXXTZTsVftR-PjHnnrUqdKYkFwLtT", name: "C:\\a.jpg" },
    { id: "12CIAEwHBL14gkHKqDi6PWJXkH8XqF_Yz", name: "proba.rar" },
  ];
  const dispatch = useDispatch();
  const handleClickEvent = () => {
    console.log("ref");
    myRefname.current.click();
  }
  async function handleChange(event) {
    console.log(event.target.files);
    toast.info(' Uploading...', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
    const formData = new FormData();
    const files = event.target.files;
    /* formData.append('files', event.target.files[0]) */
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }
    axios.post("http://localhost:8080/api/uploads/" + selectedCurrentFolder, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      console.log(response.data)
      refreshListEvent();
      toast.success('Files uploaded successfully !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    });

  }
  const notify = () => {
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  };

  async function handleSubmit(e) {
    e.preventDefault()
    //let res = await this.uploadFile(this.state.file);
  }

  const listFolderEvent = async (id) => {
    console.log(id);
    const [res, err] = await queryApi("list/" + id);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      console.log(res);
      //dispatch(deleteUser(id));
      dispatch(addFolder(selectedCurrentFolder));
      dispatch(populateCurrentFolder(id));
      dispatch(populateUser(res));
    }
  };

  const refreshListEvent = async () => {
    console.log("refresh");
    const [res, err] = await queryApi("list/" + selectedCurrentFolder);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      console.log(res);
      //dispatch(deleteUser(id));
      dispatch(populateUser(res));
    }
  };
  const listLastFolderEvent = async () => {
    const lastFolder = selectedLastFolder[selectedLastFolder.length - 1];
    console.log(lastFolder);
    const [res, err] = await queryApi("list/" + lastFolder);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      console.log(res);
      //dispatch(deleteUser(id));
      dispatch(deleteFolder(lastFolder));
      dispatch(populateCurrentFolder(lastFolder));
      dispatch(populateUser(res));
    }
  };
  const deleteFileEvent = async (id) => {
    console.log(id);
    const [res, err] = await queryApi("delete/" + id);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      console.log(res);
      dispatch(deleteUser(id));
      refreshListEvent();
      //dispatch(populateUser(res));
    }
  };
  let frm = "";

  const viewFileEvent = async (id, name) => {
    console.log(id + " " + name);
    dispatch(populateFrm("http://localhost:8080/api/download/" + id))
    //frm = "http://localhost:8080/api/download/12OFtDSCKFLskeOgzxw7rP3ZnnkYdW_dN";
    console.log(selectedFrm);
    setShow(true);
  };
  const downloadFileEvent = async (id, name) => {
    /* console.log(id);
    const [res, err] = await queryApi("download/" + id);
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      console.log(res);
      const element = document.createElement("a");
      const file = new Blob([res]);
      element.href = URL.createObjectURL(file);
      element.download = "myFilea.png";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
      console.log("file downloaded"); */
    //dispatch(deleteUser(id));
    //dispatch(populateUser(res));
    console.log("name" + name);
    let mime = "";
    let mimetypesVar = "";
    for (let i = name.length - 1; i >= 0; i--) {
      if (name.charAt(i) === ".") {
        mime = name.substring(i);
        mimetypesVar = mimeType.lookup(mime);
        break;
      }
    }
    console.log("mime : " + mime);
    console.log("mime type : " + mimetypesVar);
    fetch("http://localhost:8080/api/download/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': mimetypesVar,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(
          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          name,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });

  };
  const newFolderEvent = async () => {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      console.log("User cancelled the prompt.");
    } else {
      console.log("Folder " + person + "created");
      const [res, err] = await queryApi("directory/create/" + person + "/" + selectedCurrentFolder);
      if (err) {
        dispatch(setErrors(err));
        console.log(err);
      } else {
        console.log(res);
        //dispatch(deleteUser(id));
        //dispatch(fetchUsers());
        refreshListEvent();
      }
    }
  };
  console.log(selectedUser[0]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-transparent card-block card-stretch card-height mb-3">
              <div className="d-flex justify-content-between">
                <i class="las la-arrow-left la-2x ml-3" onClick={() => listLastFolderEvent()}></i>
                <div className="select-dropdown input-prepend input-append">
                  <div className="btn-group">
                    <label data-toggle="dropdown">
                      <div className="dropdown-toggle search-query">
                        My Drive<i className="las la-angle-down  ml-3"></i>
                      </div>
                      <span className="search-replace"></span>
                      <span className="caret"></span>
                    </label>
                    <ul className="dropdown-menu" style={{ zIndex: 10 }}>
                      <li>
                        <div className="item" onClick={() => newFolderEvent()}>
                          <i className="ri-folder-add-line pr-3"></i>New Folder
                        </div>
                      </li>
                      <li>
                        <div className="item" onClick={() => handleClickEvent()}>
                          <i className="ri-file-upload-line pr-3" ></i>Upload Files
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="ri-folder-upload-line pr-3"></i>Upload
                          Folders
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dashboard1-dropdown d-flex align-items-center">
                  <div className="dashboard1-info">
                    <a
                      href="#calander"
                      className="collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul
                      id="calander"
                      className="iq-dropdown list-inline m-0 p-0 mt-2 collapse"
                    >
                      <li className="mb-2">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Calander"
                        >
                          <i className="las la-calendar iq-arrow-left"></i>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Keep"
                        >
                          <i className="las la-lightbulb iq-arrow-left"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Tasks"
                        >
                          <i className="las la-tasks iq-arrow-left"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon icon-grid i-grid">
          <div className="row">
            <div>
              <button style={{ display: "none" }} onClick={notify}>Notify!</button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
            {/*  <Button variant="primary" onClick={() => setShow(true)}>
              Custom Width Modal
            </Button> */}
            <form onSubmit={handleSubmit}>
              <input type="file" id="file" style={{ display: "none" }} multiple name="file" ref={myRefname} onChange={handleChange} />
              <button type="submit" style={{ display: "none" }} className="btn btn-info"> Update File </button>
            </form>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-xl"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ height: "800px" }}>
                <div id="frame" style={{ height: "100%", width: "100%" }}>

                  <iframe src={selectedFrm} height="100%" width="100%" title="Iframe Example"></iframe>
                </div>
              </Modal.Body>
            </Modal>

            {/* <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <div className="mb-4 text-center p-3 rounded iq-thumb">
                    <div className="iq-image-overlay"></div>
                    <a
                      href="#"
                      data-title="Spike.pdf"
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <img
                        src="../assets/images/layouts/page-7/pdf.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </a>
                  </div>
                  <h6>Spike.pdf</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <div className="mb-4 text-center p-3 rounded iq-thumb">
                    <div className="iq-image-overlay"></div>
                    <a
                      href="#"
                      data-title="Support.docx"
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.docx"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <img
                        src="../assets/images/layouts/page-7/doc.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </a>
                  </div>
                  <h6>Support.docx</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <div className="mb-4 text-center p-3 rounded iq-thumb">
                    <div className="iq-image-overlay"></div>
                    <a
                      href="#"
                      data-title="Colour.xlsx"
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <img
                        src="../assets/images/layouts/page-7/xlsx.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </a>
                  </div>
                  <h6>Colour.xlsx</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-block card-stretch card-height">
                <div className="card-body image-thumb">
                  <div className="mb-4 text-center p-3 rounded iq-thumb">
                    <div className="iq-image-overlay"></div>
                    <a
                      href="#"
                      data-title="Flavour.pptx"
                      data-load-file="file"
                      data-load-target="#resolte-contaniner"
                      data-url="../assets/vendor/doc-viewer/files/demo.pptx"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <img
                        src="../assets/images/layouts/page-7/ppt.png"
                        className="img-fluid"
                        alt="image1"
                      />
                    </a>
                  </div>
                  <h6>Flavour.pptx</h6>
                </div>
              </div>
            </div> */}
            {selectedUser[0].length === 0 && <img
              src="../assets/images/layouts/page-7/empty-folder.png"
              className="img-fluid"
              alt="image1"
              style={{ marginLeft: "25%", width: "50%" }}

            />}
            {selectedUser[0].map((data, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-block card-stretch card-height">
                  <div className="card-header-toolbar" style={{ textAlign: "right" }}>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton2"
                      /* style="" */
                      >
                        <a className="dropdown-item" onClick={() => viewFileEvent(data.id, data.name)} >
                          <i className="ri-eye-fill mr-2"></i>View
                        </a>
                        <a className="dropdown-item" onClick={() => deleteFileEvent(data.id)}>
                          <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                        </a>
                        {/*  <a className="dropdown-item" href="#">
                          <i className="ri-pencil-fill mr-2"></i>Edit
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ri-printer-fill mr-2"></i>Print
                        </a> */}
                        <a className="dropdown-item" onClick={() => downloadFileEvent(data.id, data.name)} href="#">
                          <i className="ri-file-download-fill mr-2"></i>Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body image-thumb">
                    <div className="mb-4 text-center p-3 rounded iq-thumb">
                      <div className="iq-image-overlay"></div>
                      {/*  <a
                        href="#"
                        data-title="Spike.pdf"
                        data-load-file="file"
                        data-load-target="#resolte-contaniner"
                        data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      > */}
                      {(!data.name.toLowerCase().includes(".") || data.name.toLowerCase().includes("graphe")) && (
                        <img
                          src="../assets/images/layouts/page-7/folder.png"
                          className="img-fluid"
                          alt="image1"
                          onClick={() => listFolderEvent(data.id)}
                        />
                      )}

                      {data.name.toLowerCase().includes(".pdf") && (
                        <img
                          src="../assets/images/layouts/page-7/pdf.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}

                      {data.name.toLowerCase().includes(".txt") && (
                        <img
                          src="../assets/images/layouts/page-7/txt.png"
                          className="img-fluid"
                          alt="image1"

                        />
                      )}

                      {data.name.toLowerCase().includes(".rar") && (
                        <img
                          src="../assets/images/layouts/page-7/rar.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}
                      {(data.name.toLowerCase().includes(".doc") || data.name.toLowerCase().includes(".docx")) && (
                        <img
                          src="../assets/images/layouts/page-7/doc.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}
                      {(data.name.toLowerCase().includes(".ppt") || data.name.toLowerCase().includes(".pptx")) && (
                        <img
                          src="../assets/images/layouts/page-7/ppt.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}
                      {(data.name.toLowerCase().includes(".png") || data.name.toLowerCase().includes(".jpg") || data.name.toLowerCase().includes(".jpeg") || data.name.toLowerCase().includes(".bmp")) && (
                        <img
                          src="../assets/images/layouts/page-7/image.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}
                      {(data.name.toLowerCase().includes(".") && !data.name.toLowerCase().includes("graphe") && !data.name.toLowerCase().includes(".pdf") && !data.name.toLowerCase().includes(".txt") && !data.name.toLowerCase().includes(".rar") && !data.name.toLowerCase().includes(".doc") && !data.name.toLowerCase().includes(".docx") && !data.name.toLowerCase().includes(".png") && !data.name.toLowerCase().includes(".jpg") && !data.name.toLowerCase().includes(".jpeg") && !data.name.toLowerCase().includes(".bmp") && !data.name.toLowerCase().includes(".ppt") && !data.name.toLowerCase().includes(".pptx")) && (
                        <img
                          src="../assets/images/layouts/page-7/file.png"
                          className="img-fluid"
                          alt="image1"
                        />
                      )}
                      {/*  </a> */}
                    </div>
                    <h6> {data.name} </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="icon icon-grid i-list">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-block card-stretch card-height">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table mb-0 table-borderless tbl-server-info">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Owner</th>
                          <th scope="col">Last Edit</th>
                          <th scope="col">File Size</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-danger rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa5.pdf"
                              /*  style="cursor: pointer;" */
                              >
                                Weekly Report.pdf
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Mar 30, 2020 Gail Forcewind</td>
                          <td>10 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton10"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton10"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-primary rounded mr-3">
                                <i className="ri-file-download-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa6.docx"
                              /*   style="cursor: pointer;" */
                              >
                                Milestone.docx
                              </div>
                            </div>
                          </td>
                          <td>Penny</td>
                          <td>Mar 31, 2020 Penny</td>
                          <td>65 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton11"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton11"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-info rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-title="Alexa8.xlsx"
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              /*  style="cursor: pointer;" */
                              >
                                Training center.xlsx
                              </div>
                            </div>
                          </td>
                          <td>Banny</td>
                          <td>Mar 30, 2020 Banny</td>
                          <td>90 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton13"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton13"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="icon-small bg-success rounded mr-3">
                                <i className="ri-file-excel-line"></i>
                              </div>
                              <div
                                data-load-file="file"
                                data-load-target="#resolte-contaniner"
                                data-url="../assets/vendor/doc-viewer/files/demo.docx"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                data-title="alexa7.pptx"
                              /*  style="cursor: pointer;" */
                              >
                                Flavour.pptx
                              </div>
                            </div>
                          </td>
                          <td>Me</td>
                          <td>Apr 04, 2020 me</td>
                          <td>10 MB</td>
                          <td>
                            <div className="dropdown">
                              <span
                                className="dropdown-toggle"
                                id="dropdownMenuButton12"
                                data-toggle="dropdown"
                              >
                                <i className="ri-more-fill"></i>
                              </span>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="dropdownMenuButton12"
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="ri-eye-fill mr-2"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-delete-bin-6-fill mr-2"></i>
                                  Delete
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-pencil-fill mr-2"></i>Edit
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-printer-fill mr-2"></i>Print
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="ri-file-download-fill mr-2"></i>
                                  Download
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Files;
