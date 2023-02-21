
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../pagenotfound/PageNotFound.css";

function PageNotFound() {
    return (
        <div>
            <section className="page_404">
                <div>
                    <div className="pagenotfound-home">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1 ">
                                <div className="four_zero_four_bg">
                                    <h1  >404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="pop-heading-two">
                                        Look like you're lost
                                    </h3>
                                    <Button bg="green" color="white" ml="25vw"><Link to="/admin/home">Go to Home</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageNotFound