import React, { Component } from 'react';
import axios from 'axios';
import CustomPaginationActionsTable from './Table';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SimpleCard from './Card';

class FileUpload extends Component{

    state = {
        selectedFile: '',
        history: [],
        clamav: '',
        version: '',
        os: ''
    };

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files,
        })
    }

    flattenAndAdd = (item) => {
        let elements = this.state.history;
        elements.unshift(item)
        this.setState({'history': elements});
        console.log(this.state.history)
    }

    onClickHandler = () => {
        const data = new FormData()
        for(var x = 0; x<this.state.selectedFile.length; x++) {
            data.append('files', this.state.selectedFile[x])
        }
     
    //    const url = "http://localhost:8080/api/v1/scan/asset";
       const url = "https://clamav-dev-va6.stage.cloud.adobe.io/api/v1/scan/assets";
       axios.post(url, data)
       .then(response => 
            {
                if(typeof response.data.metaData != 'undefined') {
                    let os = response.data.metaData.OS != undefined ? response.data.metaData.OS : undefined;
                    let version = response.data.metaData.Version != undefined ? response.data.metaData.Version : undefined;
                    let clamav = response.data.metaData.ClamAv != undefined ? response.data.metaData.ClamAv : undefined;
                    this.setState({'os': os});
                    this.setState({'version': version});
                    this.setState({'clamav': clamav});
                }
                response.data.data.forEach(this.flattenAndAdd)
            }
        )
     }

    render(){
        let { selectedFile, history, clamav, version, os } = this.state;
        return(
            <div style = {{ "textAlign": "center"}}>
                <section className="upload">
                    <Input type="file" className="" multiple onChange={this.onChangeHandler}/>
                    <Button type="button" color="primary" className="" onClick={this.onClickHandler}>Upload</Button> 
                </section>
                <SimpleCard os={os} version={version} clamav={clamav} label="About Environment"/>
                <hr />
                <label>Uploaded File Status</label>
                <br />
                <br />
                <CustomPaginationActionsTable data={history}/>
            </div>
        );
    }
}

export default FileUpload;