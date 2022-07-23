import React, { useState, useEffect } from "react";

const DemandDashboard = () => {
    const [alldata, setAllData] = useState([]);
    const [serviceP, setServiceP] = useState("");

    //fetch all data
    const Getalldata = () => {
        fetch(" http://localhost:1234/demand")
            .then(response => response.json())
            .then(data => {
                setAllData(data)
            })
    }

    
   const uniqueP = [...new Set(alldata.map(data=>data.provider_type))]


    const getprovider = (filterProvider) => {
        alldata.map((pdata, index) => {
            if (filterProvider === pdata.ticket_id) {
                setServiceP(pdata.provider)
                console.log(pdata.provider)
            }
        })

    }

    useEffect(() => {
        Getalldata();
    }, [])
    return (
        <div className="container-fluid my-4">
            <nav className="nav">
                <a className="nav-link m-0 p-0 text-primary" href="#"> <b> Demand</b></a>
            </nav>
            <hr className="m-0 p-0 bg-dark background" />
            <div className="p-3 border bg-light rounded mt-2">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="my-2">
                            <label className="mb-1"> Provider Type </label>
                            <select className="form-select shadow-sm" onChange={obj => getprovider(obj.target.value)}>
                                 {
                                    uniqueP.map((data, index) => {
                                        return (
                                            <option key={index} value={data.ticket_id}>{uniqueP}</option>

                                        )
                                    })
                                } 
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="my-2">
                            <label className="mb-1"> Provider </label>
                            <select className="form-select shadow-sm scrollbar" size="5" value={serviceP} onChange={obj => setServiceP(obj.target.value)}>
                                {alldata.map((info, index) => {
                                    return (
                                        <option key={index} value={info.ticket_id}>
                                             {info.provider} &times;
                                        </option>
                                    );
                                })}

                            </select>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 rounded">
                    <div className="row">
                        <h5 className="text-black tcolor"> <b> Yet to be Allocated </b> </h5>
                        <small> Last Refreshed At: 14 Jun 09:41 AM</small>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="container1 border p-3 shadow rounded my-4">
                                    <h5 className=""> <b> Total Tickets <br /><span className="mt-2 spancolor"> </span> 700 </b> <br />
                                        <small className="size"> Customer : <span className="spancolor">59</span> CX : <span>126</span> OPS : <span>596</span> </small>
                                    </h5>
                                    <i className="fa fa-plus fa-lg icon"></i>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <div className="container1 border p-3 shadow rounded my-4">
                                    <h5 className="mb-3 p-2"> <b> SPD Today <br /><span className="mt-2 spancolor"> 34</span>  </b> <br />

                                    </h5>
                                    <i className="fa fa-calendar fa-lg icon1"></i>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="container1 border p-3 shadow rounded my-4">
                                    <h5 className="mb-3 p-2"> <b> Bereached Tickets <br /><span className="mt-2 spancolor"> 303</span>  </b> <br /> </h5>
                                    <i className="fa fa-exclamation-triangle fa-lg icon2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-3 my-4 rounded">
                    <div className="row">
                        <h5 className="text-dark tcolor"> <b> Today's Snapshot </b> </h5>
                        <small> Last Refreshed At: 14 Jun 09:41 AM</small>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="container1 border p-3 shadow rounded my-4">
                                    <h5 className=""> <b> Today Actioned Tickets <br /><span className="mt-4 spancolor"> 781</span>  </b> <br />
                                    </h5>
                                    <i className="fa fa-user fa-lg  icon3"></i>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <div className="container1 border p-3 shadow rounded my-4">
                                    <h5 className=""> <b> Completed Tickets <br /><span className="mt-4 spancolor"> 781</span>  </b> <br />
                                    </h5>
                                    <i className="fa fa-ticket fa-lg icon"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="nav">
                                <a className="nav-link" href="#"> <b> IN_PROGRESS <span className="background"> {alldata.type} </span></b></a>
                                <a className="nav-link" href="#"> <b> CANCELLED <span className="background"> 17 </span> </b></a>
                                <a className="nav-link" href="#"> <b> CREATED <span className="background"> 42 </span> </b></a>
                                <a className="nav-link" href="#"><b> COMPLETED <span className="background"> 6 </span> </b></a>
                                <a className="nav-link" href="#"><b> ALLOCATED <span className="background"> 494 </span> </b></a>
                                <a className="nav-link" href="#"><b> RESCHEDULED <span className="background"> 13 </span> </b></a>
                                <a className="nav-link" href="#"><b> CANCEL_INITIATED <span className="background"> 3 </span> </b></a>
                            </nav>
                            <hr className="m-0 p-0 background" />
                        </div>
                    </div>
                    <div className="row shadow border border-1 rounded mt-4">
                        <div className="col-lg-3"> </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> INSTALLATION </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b>TECH_VISITE </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b>UNINSTALLATION </b>  </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="my-2"> <b> AC </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 2 </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> - </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 1 </b>  </p>
                        </div>
                    </div>
                    <div className="row bg-light">
                        <div className="col-lg-3">
                            <p className="my-2"> <b> MOBILE </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> - </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 24 </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b>- </b>  </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="my-2"> <b> ELECTRONICS </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> - </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 6 </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> - </b>  </p>
                        </div>
                    </div>
                    <div className="row bg-light">
                        <div className="col-lg-3">
                            <p className="my-2"> <b> NON AC </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 3 </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> 6 </b> </p>
                        </div>
                        <div className="col-lg-3">
                            <p className="my-2"> <b> - </b>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemandDashboard;