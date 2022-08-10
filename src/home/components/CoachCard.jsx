import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/service.json";
import '../css/style.css';

class Services extends Component {
    render() {
        return (
            <div className="section tr section-padding sigma_service-sec style-16">
                <div className="container">
                    <div className="row">
                        {/* Data */}
                        {serviceblock.slice(0, 4).map((item, i) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                <div className="sigma_service style-16">
                                    <div className="sigma_service-thumb">
                                        {/* <i className={item.image} /> */}
                                        <img src={item.image} alt="Coach Images"></img>
                                    </div>
                                    <div className="sigma_service-body">
                                        <h5>
                                            <Link to={"/service-details/" + item.id}>{item.title}</Link>
                                        </h5>
                                        <b>{item.shorttext}</b>
                                        <div className="sigma_general-list.style2">                                     
                                            <ul>
                                                {item.achievements.map((achievement, index) => (
                                                    <li key={index}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>  
                                        {/* <Link to={"/service-details/" + item.id} className="btn-link primary-color">
                                            Read More
                                            <i className="far fa-long-arrow-alt-right" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;