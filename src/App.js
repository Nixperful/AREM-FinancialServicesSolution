import React, { Component } from 'react';
import logo from './coin_logo.svg';
import './App.css';
import {getFinancialServicesAxiosList} from './AxiosConnection'
import backEndSimulator from './BackEndSimulator';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {FinancialServicesList} from './FinancialServiceList';
import {FinancialCurrencyConverter} from './FinancialCurrencyConverter';

class App extends Component {


  constructor(props) {
    super(props);
    this.getFinancialServicesMockedList=this.getFinancialServicesMockedList.bind(this);
    this.getFinancialServicesList=this.getFinancialServiceList.bind(this);
    this.state = {financialServicesList:{}};
    this.getFinancialServicesMockedList();
  }
  

  getFinancialServiceList(){
      var self = this;
      var callback = {
          onSuccess: function(response){
              self.setState({
                  financialService: response.data.financialService
              });
          },
          onFailed: function(error){
              console.log(error);
          }
      };
      getFinancialServicesAxiosList(callback);
  }

  getFinancialServicesMockedList(){
      var self=this;
      backEndSimulator.getFinancialServicesMockedList( function (response) {
          self.state={financialServicesList:response.data};   
      }
      );
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
        <img class="moneyGif"  data-load="false" data-type="image" src="https://media.giphy.com/media/3dB5OgH1xd4je/giphy.gif?format=100w"  width="100%" height= "100" ></img>
        <div>
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">AREM Financial Services</h1>
        </div>
        
          
        </header>
        <div >
        
        <Grid className="ContainerApp" container spacing={4} >
          <Grid item xs={3}>
            <Paper >
              <FinancialServicesList financialServices={this.state.financialServicesList} />
            </Paper>
          </Grid>
          <Grid item xs={16}>
            <Paper >
              <FinancialCurrencyConverter financialServices={this.state.financialServicesList}/>
              
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <img class="thumb-image loaded"  data-load="false" data-type="image" src="https://media.giphy.com/media/72HahsJD4atSE/giphy.gif?format=300w" width="100%" height= "100%" data-image-resolution="400w"></img>
            
          </Grid>
        </Grid>
        
        </div>

        <footer>
          
        </footer>
        

       




      </div>
    );
  }
}

export default App;
