import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='contiainer'>
      <h1>Change Calculator</h1><hr style={{backgroundColor:'white'}}/>
        <div className='row'>
          <div className='col-4'>
            <div className='panel'>
              <div className='panel-heading'>Enter Information</div>
              <div classname='panel-body'>
                <h6>How much is due?</h6>
                <input type='number'></input>
                <h6>How much was recieved?</h6>
                <input type='number'></input>
              </div>
              <div className='panel-footer'>
                <button className='btn btn-info' type='submit' name='submit'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className='box'>
              <div className='row'>
                <div className='alert alert-info'>Let's Calculate Some Numbers</div>
              </div>
              <div className='row'>
                <div className='twentyBox'>
                  <h3>Twenties</h3>
                  <h1>0</h1>
                </div>
                <div className='tenBox'>
                  <h3>Tens</h3>
                  <h1>0</h1>
                </div>
                <div className='fiveBox'>
                  <h3>Fives</h3>
                  <h1>0</h1>
                </div>
                <div className='oneBox'>
                  <h3>Ones</h3>
                  <h1>0</h1>
                </div>
              </div>
              <div className='row'>
                <div className='quartersBox'>
                    <h3>Quarters</h3>
                    <h1>0</h1>
                  </div>
                  <div className='dimesBox'>
                    <h3>Dimes</h3>
                    <h1>0</h1>
                  </div>
                  <div className='nicklesBox'>
                    <h3>Nickles</h3>
                    <h1>0</h1>
                  </div>
                  <div className='penniesBox'>
                    <h3>Pennies</h3>
                    <h1>0</h1>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
