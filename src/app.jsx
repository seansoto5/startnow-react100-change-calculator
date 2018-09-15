import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container' style={{width:'100%', margin:'auto', paddingTop:'2%', paddingBottom:'2%' }}>
        <div className='row' style={{alignItems:'center'}}>
          <div className='col'>
            <h1 
            style={{color: 'white'}}>
            Change Calculator
            </h1>
            <hr style={{borderColor:'white'}}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='panel'style={{backgroundColor:'white'}}>
              <div className='panel-header'>
              Enter Information
              </div><hr/>
              <div className='panel-body'>
                <h4>How much is due?</h4>
                <input type='number' name='amountDue'/>
                <h4>How much was recieved?</h4>
                <input type='number' name='amountRecieved'/>
              </div><hr/>
              <div className='panel-footer' style={{alignContent:'center'}}>
                <button type='submit' name='submit'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='col' id='changeOutputPanel'>
            <div classname='panel'>
              <div classname='panel-header'>
                <div classname='output' name='output'>Placeholder text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className='conatainer'>
  //       <div className='header'>
  //         <h1>Change Calculator</h1><hr></hr>
  //       </div>
  //       <div className='row'>
  //         <div className='col-xs-4'>
  //           <div className='panel'>
  //             <div className='panel-header'>
  //               Enter Information
  //             </div>
  //             <div className='panel-body'>
  //               <div className='due'>
  //                 <h4>How much is due?</h4>
  //                 <input 
  //                   type='number' 
  //                   name='amountDue'>
  //                 </input>
  //                 <h4>How much was recieved?</h4>
  //                 <input 
  //                   type='number' 
  //                   name='amountRecieved'>
  //                 </input>
  //               </div>
  //             </div>
  //             <div className='panel-footer'>
  //               <button type='submit' name='submit'>Calculate</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
}

export default App;
