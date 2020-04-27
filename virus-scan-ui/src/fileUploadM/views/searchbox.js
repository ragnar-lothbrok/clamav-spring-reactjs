import React, { Component } from 'react';
import axios from 'axios';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import InventoryInstanceCard from './InventoryInstanceCard';

class SearchBox extends Component{

    state = {
        instanceName:'',
        instanceDetails: {
            customerName: '',
            instanceId: '',
            tenantId: '',
            imsOrgId: '',
            buildNumber: '',
            deployType: '',
            hostedType: '',
            instanceTypes: [],
            environment: '',
            error: {}
        }
    };

    onClickHandler = () => {
       const url = "http://localhost:8080/cp/instance/" + this.state.instanceName;
       axios.get(url)
       .then((response) => 
            {
                if(typeof response != 'undefined' && typeof response.data != 'undefined') {
                    let instanceDetails = {};
                    instanceDetails.customerName = response.data.customerName;
                    instanceDetails.instanceId = response.data.instance;
                    instanceDetails.tenantId = response.data.tenantId;
                    instanceDetails.imsOrgId = response.data.imsOrgId;
                    instanceDetails.buildNumber = response.data.buildNumber;
                    instanceDetails.hostedType = response.data.hostedType;
                    instanceDetails.deployType = response.data.deployType;
                    instanceDetails.instanceTypes = response.data.instanceTypes;
                    instanceDetails.environment = response.data.environment;
                    this.setState({'instanceDetails': instanceDetails});
                }
            },
        (error) => { 
            console.log(error)
            let instanceDetails = {};
            if(typeof error.response != 'undefined' && typeof error.response.data != 'undefined') {
                instanceDetails.error = {};
                instanceDetails.error.code = error.response.data.error;
                instanceDetails.error.message = error.response.data.message;
            } else {
                instanceDetails.error.message = 'Error occurred please contact developer';
            }
            this.setState({'instanceDetails': instanceDetails});
        })
     }

    render(){
        let { instanceName, instanceDetails} = this.state;
        return(
            <div style = {{ "textAlign": "center"}}>
                <section className="search">
                    <Input type="text" className="" onChange={ evt => this.setState({instanceName : evt.target.value}) }/>
                    <Button type="button" color="primary" className="" onClick={this.onClickHandler}>Search</Button> 
                </section>
                <InventoryInstanceCard instanceDetails = {instanceDetails}/>
            </div>
        );
    }
}

export default SearchBox;