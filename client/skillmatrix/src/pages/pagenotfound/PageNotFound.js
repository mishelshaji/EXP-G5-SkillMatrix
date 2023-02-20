
import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../pagenotfound/PageNotFound.css";

function PageNotFound() {
    return (
        <div>
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center " className="pop-heading">404</h1>
                                </div>
                                <div class="contant_box_404">
                                    <h3 class="pop-heading-two">
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