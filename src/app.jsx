import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountRecieved: '',
      alert: '',
      alertMoneyOwed: 'Not enough Payment',

      twenties: 0,
      tens:     0,
      fives:    0,
      dollars:  0,
      quarters: 0,
      dimes:    0,
      nickles:  0,
      pennies:  0
    };

    this.updateData = this.updateData.bind(this);
    this.calculate  = this.calculate.bind(this);
  }

  updateData(e) {
    this.setState({[e.target.name] : e.target.value})
  }

  

  calculate(e) {
    e.preventDefault();
    let amountDue = this.state.amountDue;
    let amountRecieved = this.state.amountRecieved;
    let change = (amountRecieved - amountDue).toFixed(2);

    let currency = {
      twenty:  20.00,
      ten:     10.00,
      five:     5.00,
      dollar:   1.00,
      quarter:   .25,
      dime:      .10,
      nickle:    .05,
      penny:     .01
    };

    let twenties  = Math.floor(change / currency.twenty);
    let tens      = Math.floor(((change % currency.twenty).toFixed(2)) / currency.ten);
    let fives     = Math.floor(((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) / currency.five);
    let dollars   = Math.floor(((((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) % currency.five).toFixed(2)) / currency.dollar);
    let quarters  = Math.floor(((((((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) % currency.five).toFixed(2)) % currency.dollar).toFixed(2)) / currency.quarter);
    let dimes     = Math.floor(((((((((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) % currency.five).toFixed(2)) % currency.dollar).toFixed(2)) % currency.quarter).toFixed(2)) / currency.dime);
    let nickles   = Math.floor(((((((((((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) % currency.five).toFixed(2)) % currency.dollar).toFixed(2)) % currency.quarter).toFixed(2)) % currency.dime).toFixed(2)) / currency.nickle);
    let pennies   = Math.floor(((((((((((((((change % currency.twenty).toFixed(2)) % currency.ten).toFixed(2)) % currency.five).toFixed(2)) % currency.dollar).toFixed(2)) % currency.quarter).toFixed(2)) % currency.dime).toFixed(2)) % currency.nickle).toFixed(2)) / currency.penny);

    this.setState({
      alert: 'Change due is $' + change,
      twenties: twenties,
      tens: tens,
      fives: fives,
      dollars: dollars,
      quarters: quarters,
      dimes: dimes,
      nickles: nickles,
      pennies: pennies
    })
  }

  render() {
    return(
      <div className='contiainer' style={{margin: '30px'}}>
      <h1>Change Calculator</h1><hr style={{backgroundColor:'white'}}/>
        <div className='row'>
          <div className='col-4'>
            <div className='panel'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <h6>How much is due?</h6>
                <input name='amountDue' type='number' defaultValue={this.state.amountDue} onChange={this.updateData}></input>
                <h6>How much was recieved?</h6>
                <input name='amountRecieved' type='number' defaultValue={this.state.amountRecieved} onChange={this.updateData}></input>
              </div>
              <div className='panel-footer'>
                <button className='btn btn-info' type='submit' name='submit' onClick={this.calculate}>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col-8'>
          <div className='box'>
        <div className='row'>
          <div className='alert alert-info' defaultValue={this.state.alert} onChange={this.updateData}>Let's Calculate Some Numbers!</div>
        </div>
        <div className='row'>
          <div name='twentyBox'>
            <h3>Twenties</h3>
            <h1>{this.state.twenties}</h1>
          </div>
          <div name='tenBox'>
            <h3>Tens</h3>
            <h1>{this.state.tens}</h1>
          </div>
          <div name='fiveBox'>
            <h3>Fives</h3>
            <h1>{this.state.fives}</h1>
          </div>
          <div name='dollarsBox'>
            <h3>Ones</h3>
            <h1>{this.state.dollars}</h1>
          </div>
        </div>
        <div className='row'>
          <div name='quartersBox'>
            <h3>Quarters</h3>
            <h1>{this.state.quarters}</h1>
          </div>
          <div name='dimesBox'>
            <h3>Dimes</h3>
            <h1>{this.state.dimes}</h1>
          </div>
          <div name='nicklesBox'>
            <h3>Nickles</h3>
            <h1>{this.state.nickles}</h1>
          </div>
          <div name='penniesBox'>
            <h3>Pennies</h3>
            <h1>{this.state.pennies}</h1>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    )
  }
}

// class userPanel extends Component {
//   render() {
//     return(
//     <div className='panel'>
//     <div className='panel-heading'>Enter Information</div>
//     <div classname='panel-body'>
//       <h6>How much is due?</h6>
//       <input name='amountDue' type='number' defaultValue={this.state.amountDue} onChange={this.updateData}></input>
//       <h6>How much was recieved?</h6>
//       <input name='amountRecieved' type='number' defaultValue={this.state.amountRecieved} onChange={this.updateData}></input>
//     </div>
//     <div className='panel-footer'>
//       <button className='btn btn-info' type='submit' name='submit' onClick={this.calculate}>Calculate</button>
//     </div>
//   </div>
//     )
//   }
// }

// class resultsPanel extends Component {
//   render() {
//     return(
//     <div className='box'>
//     <div className='row'>
//       <div className='alert alert-info' name='alert'>Let's Calculate Some Numbers</div>
//     </div>
//     <div className='row'>
//       <div name='twentyBox'>
//         <h3>Twenties</h3>
//         <h1>{this.state.twenties}</h1>
//       </div>
//       <div name='tenBox'>
//         <h3>Tens</h3>
//         <h1>{this.state.tens}</h1>
//       </div>
//       <div name='fiveBox'>
//         <h3>Fives</h3>
//         <h1>{this.state.fives}</h1>
//       </div>
//       <div name='oneBox'>
//         <h3>Ones</h3>
//         <h1>{this.state.ones}</h1>
//       </div>
//     </div>
//     <div className='row'>
//       <div name='quartersBox'>
//           <h3>Quarters</h3>
//           <h1>{this.state.quarters}</h1>
//         </div>
//         <div name='dimesBox'>
//           <h3>Dimes</h3>
//           <h1>{this.state.dimes}</h1>
//         </div>
//         <div name='nicklesBox'>
//           <h3>Nickles</h3>
//           <h1>{this.state.nickles}</h1>
//         </div>
//         <div name='penniesBox'>
//           <h3>Pennies</h3>
//           <h1>{this.state.pennies}</h1>
//         </div>
//     </div>
//     </div>
//     )
//   }
// }

export default App;
