import React, { Component } from 'react';
import { Storage } from 'aws-amplify';

class S3ImageGet extends Component {
    onClick(e) {
      console.log(Storage);
      Storage.get('example2.jpg')
      .then((result) => {
        console.log(result)
        this.setState({
          images: result
        })
      })
      .catch(err => console.log(err));
    }
  
    render() {
        return (
            <input
                type="file" multiple
                onChange={(e) => this.onChange(e)}
            />
        )
    }
}
export default S3ImageGet;