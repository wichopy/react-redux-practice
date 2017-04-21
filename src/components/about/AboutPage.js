import React from 'react';

//using class component instead of stateless component to allow hot reloading.
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux... blah blah libraries</p>
      </div>
    )
  }
}

export default AboutPage;