import React, { Component } from 'react';
import { Storage } from 'aws-amplify';
import {Button, ButtonToolbar} from 'react-bootstrap';

class S3ImageUpload extends Component {
    
//    listUpload(){
//         Storage.list('')
//         .then((result) => {
//             console.log(result)
//             this.setState({
//                 list: result
//             })
//         })
//         .catch(err => console.log(err));
//     }
    onChange(e) {
        console.log(Storage);
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        // const file = e.target.files;
        console.log(file);
        Storage.put(file.name, file, {bucket: "yukito-photos"}, {
            contentType: 'image/*, video/*'
        })
        .then (result => {
            console.log(result)
        })
        .catch(err => console.log(err));
    }
  
    render() {
        return (
            <div>
              <div>
                <input type="file" multiple onChange={(e) => this.onChange(e)}/>
                {/* <label className="custom-file-label" for="inputGroupFile01">Choose file</label> */}
              </div>
            </div>
        )
    }
}
export default S3ImageUpload;
