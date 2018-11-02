import React from "react";

class PortalPage extends React.Component {
  render() {
    return (
        <div>
            <h2>Portal page</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="metric">
                        <span class="icon"><i class="fa fa-download"></i></span>
                        <p>
                            <span class="title">CIS</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="metric">
                        <span class="icon"><i class="fa fa-ship"></i></span>
                        <p>
                            <span class="title">SIP</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="metric">
                        <span class="icon"><i class="fa fa-download"></i></span>
                        <p>
                            <span class="title">ITT</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
  }
}

export {PortalPage} ;
