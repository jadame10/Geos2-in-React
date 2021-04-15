import React from "react";
import ReactDOM from "react-dom";
import	{	Router,		Route,	Link,
  IndexLink,		IndexRoute,	hashHistory
}	from	'react-router';
import geo from './db.json';

let answer, answer2, answer3, answer4, question;
let a00, a0, a1, a2, a3;
let x0, result;
let counter = 0;

class Geo extends React.Component{
  constructor(props){
    super(props);
    this.state =  {
      geos: this.props.geo.regioncentercoordinateslist,
      counter: null,
      errors: null,
      correct: null
    };

  }
  restartGame(event) {
    event.preventDefault();
      this.setState({ result: this.state.result });
    }


  submit = (e) => {
    result =  e.target.value;
  }

  handleSubmit	=	(e)	=>	{
    e.preventDefault();
    console.log('Input value:', this.input.value);
    console.log('Selected value:', result);
    this.input.value = result;
    (this.input.value == answer) ?  alert('PRAWIDŁOWO' + " " +  result)  : alert('ŹLE' + " " +  result );
    (this.input.value == answer)  ? this.state.correct++ : this.state.errors++;
    (this.input.value) ? this.state.counter++ : this.state.counter;
}

  render(){

        let geol = this.state.geos;
        let rd = Math.floor((Math.random()*1000) +1);
        let nt1 = Math.floor((Math.random()*1000) +1);
        let nt2 = Math.floor((Math.random()*1000) +1);
        let nt3 = Math.floor((Math.random()*1000) +1);


         let macz = geol[rd].RegionName;
         let seg = geol[nt1].RegionName;
         let trt = geol[nt2].RegionName;
         let qd = geol[nt3].RegionName;
         let all = macz.split(', ');
         let fe = seg.split(', ');
         let fe2 = trt.split(', ');
         let fe3 = qd.split(', ');
         if(all.length == 3){
           all.splice(1, 1);
           }
           if(fe.length == 3){
             fe.splice(1, 1);
             }
             if(fe2.length == 3){
               fe2.splice(1, 1);
               }
               if(fe3.length == 3){
                 fe3.splice(1, 1);
                 }
          question = all.slice(0, 1);
          answer = all.slice(1,2);
          answer2 = fe.slice(1,2);
          answer3 = fe2.slice(1,2);
          answer4 = fe2.slice(1,2);
          let arr1 =[];
          arr1.push(answer, answer2, answer3, answer4);
          arr1.sort(function(a, b){return 0.5 - Math.random()});
          arr1.push("---");
          a00 = arr1[4]
          a0 = arr1[1];
          a1 = arr1[2];
          a2 = arr1[3];
          a3 = arr1[0];

          return(
            <div className = "wyg">
                <h3 className = "text-center">Gra gegraficzna</h3>
            <div className ="qn">GDZIE ZNAJDUJE SIĘ TO MIASTO : {question} ?</div>
              <form className = "f9">
                <input type = "text" id = "user" ref={input=>this.input=input}  onChange={this.handleSubmit}
                value = {result} defaultValue={a00} />
                <select defaultValue = {a00} value = {a00}
                onChange = {this.submit} className = "st">
                <option value = {a3}>{a3}</option>
                <option value = {a0}>{a0}</option>
                <option value = {a1}>{a1}</option>
                <option value = {a2}>{a2}</option>
                <option value = {a00}>{a00}</option>
                </select>
                <br />
                <input type = "submit" id = "sub" className = 'btn-success' onClick={this.handleSubmit} value = "ODPOWIADAM" />
                <input type = "submit" id = "suby" onClick={ this.restartGame.bind(this) } className = 'btn-primary' value = "NOWE PYTANIE" />
                </form>

                  <div className = "cr">Poprawne odpowiedzi: {this.state.correct} / {this.state.counter} Procent: {Math.floor(this.state.correct * 100  / this.state.counter)   }  %</div>
                  <div className = "cr">Złe odpowiedzi: {this.state.errors} / {this.state.counter} Procent: {Math.floor(this.state.errors * 100  / this.state.counter)} %</div>
              </div>

              );

            }




  }


document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
      <div>
      <Geo geo = {geo} />,
      </div>,


		document.getElementById('app')

   );
 });
