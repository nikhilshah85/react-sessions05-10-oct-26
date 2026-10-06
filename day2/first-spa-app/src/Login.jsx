import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>

        <form>
          <h1>Please log in</h1>
          <input type="text" placeholder="Enter User Name" />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
        </form>
      </div>
    );
  } 
}

export default App;