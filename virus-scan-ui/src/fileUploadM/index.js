import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';
// import FileUpload from './views/fileupload.js';
// import SideBar from './views/sidebar.js'
import SearchBox from './views/searchbox.js'

class FileUploadComponent extends Component {

    render() {
        const back = "163986191-adobe-wallpapers.jpg";
        // const back = "images.jpg";
        const imagetest = "url(" + back + ")";
        console.log(imagetest);
        return (
            <div style={{
                "textAlign": "center", "position": "absolute",
                "height": "100%",
                "width": "100%",
                "backgroundImage": imagetest,
                "backgroundSize": "100% 100%"
            }}>
                {/* <Typography variant="h2" component="h3">
                    File Virus Scanner UI
                </Typography>

                <hr />
                <SideBar />
                <FileUpload /> */}
                <Typography variant="h2" component="h3">
                    Inventory Instance Search
                    <hr />
                    <SearchBox />
                </Typography>
            </div>
        )
    }
}

export default FileUploadComponent