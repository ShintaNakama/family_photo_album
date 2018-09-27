import React, { Component } from 'react';
// import Amplify from 'aws-amplify';
import { Storage } from 'aws-amplify';
// import S3ImageGet from './S3ImageGet.js';
import { S3Image } from 'aws-amplify-react';

class List extends Component {
    constructor(props){
      super(props);
      this.state = { 
        images: [],
        // videos: [],
        // list: []
      };
      // const video = ""
    }
    componentWillMount() {
      this.upDateList()
    }
    upDateList(){
      console.log(Storage);
      Storage.list('')
      .then((result) => {
        console.log(result)
        this.setState({
          images: result
        })
      })
      .catch(err => console.log(err));
    }
    // videoGet(key){
    //   Storage.get(key)
    //   .then((result) => {
    //     console.log(result)
    //     this.setState({
    //       videos: result
    //     })
    //     // video = result
    //   })
    //   .catch(err => console.log(err));
    // }
    
    render() {
      // const { videos } = this.state;
      const { images } = this.state;
      console.log(images);
        return (
          <div className="container">
            <ul>
              {images.map((d) => {
                console.log(d.key);
                  return(
                    <li key={d.key} className="border border-success rounded" style={{float: 'left', width: 310, height: 410, listStyleType: 'none', padding:3}}>
                      <S3Image imgKey={d.key} />
                    </li>
                  );
              })}
            </ul>
          </div>
        );
    }
}
export default List;
