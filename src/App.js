import React, { Component } from 'react';
import logo from './logo.svg';
import S3ImageUpload from './S3ImageUpload.js';
import List from './List.js';
import './App.css';
// aws-amplifyの読み込み
import Amplify from 'aws-amplify';
// import { Storage } from 'aws-amplify';
// import aws_exports from './aws-exports';

// Amplify.configure(aws_exports);
// Reactへの組み込み用HOC
import { withAuthenticator } from 'aws-amplify-react';

// AWSリソースの情報読み込み
Amplify.configure({
  Auth: {
  },
  Storage: {
    bucket: 'yukito-photos-resized', //使用するS3バケット名
    region: 'ap-northeast-1', //リージョン
    // identityPoolId: 'ap-northeast-1:f2bbfdce-e505-4c71-998a-e2f904721921', //REQUIRED - Amazon Cognito Identity Pool ID
  }
});

class App extends Component {

  
  render() {
    // const yukito = 'https://s3-ap-northeast-1.amazonaws.com/yukito-photos/S__19390475.jpg';
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nakama Family Photos</h1>
        </header>
        <div className="container" style={{marginTop: 5}}>
          <S3ImageUpload/>
          <List />
        </div>
      </div>
    );
  }
}

// export default App;
export default withAuthenticator(App, { includeGreetings: true });
