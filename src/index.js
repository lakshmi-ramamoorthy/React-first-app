import React , {Component} from 'react'
import ReactDom from 'react-dom'

/*
// Step 1 
let elm = React.createElement("h1", null,"Welcome to React");
ReactDom.render(elm,document.getElementById("root"));
*/

/*
//Step 2
let elm = React.createElement("ol", null,
[
                        React.createElement("li" , null , "item 1"),
                        React.createElement("li" , null , "item 2")
]);
ReactDom.render(elm,document.getElementById("root"));
*/


/*
// Example to iterate array
const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];

let elm = React.createElement("ol" , null , heros.map(function(val,idx){
    // key has to be unique when we use li
    return React.createElement("li" , {key : idx},val);
}))

ReactDom.render(elm,document.getElementById("root"));
*/

//Using JSX -> It is a syntatic sugar
/* const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];
let elm = <ol>
    <li> { heros[1] } </li>
    <li> { heros[2] } </li>
    <li> { heros[3] } </li>
    
</ol>
ReactDom.render(elm,document.getElementById("root"));
*/

//If we want to group multiple tags use div and then group them. JSX internally converts the ol li tags to React component
/*const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];
let elm = 
    <div>
        <h1>Heros list</h1>
        <ol>
            <li> { heros[1] } </li>
            <li> { heros[2] } </li>
            <li> { heros[3] } </li>
            
        </ol>
    </div>
ReactDom.render(elm,document.getElementById("root"));
*/

//JSX using map
// Whenever there is flower bracket JSX executes that as javascript
//To group multiple tags we are using div as React.createelemnet can allow us to pass one tag alone
/*const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];
let elm = 
    <div>
        <h1>Heros list</h1>
        <ol>
            {
                    heros.map( (val,idx) => {
                        return <li key={idx} > {val}</li>
                    })
            }
            
        </ol>
    </div>
ReactDom.render(elm,document.getElementById("root"));
*/
/*
const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];
let elm = 
//Empty tags or <React.Fragment> in order to group multiple tags instead of using div
    <>
        <h1>Heros list</h1>
        <ol>
            {
                    heros.map( (val,idx) => {
                        return <li key={idx} > {val}</li>
                    })
            }
            
        </ol>
    </>
ReactDom.render(elm,document.getElementById("root"));
*/

//Two ways to create component 1. classes and 2. functions.
//step 1 - classes
const heros=["Batman" ,"Ironman" ,"SuperMan" ,"SpiderMan"];

class HeaderComponent extends Component{
    render(){
        return  <h1> {this.props.title}</h1>
    }
}

class HeroListComponent extends Component{
    render(){
        return <ol>
            {
                    this.props.heros.map( (val,idx) => {
                        return <li key={idx} > {val}</li>
                    })
            } 
        </ol>
    }
}
class MainComponent extends Component{
    compTitle = " Heros App "
    avengers = ["IronMan" ,"Thor" , "Spiderman"];
    justicelegue = ["B1" , "b2"]
        render(){
        return  <React.Fragment>
            <HeaderComponent title={ this.compTitle}/>
            <HeroListComponent heros={ this.avengers}/>
            <hr/>
            <HeroListComponent heros={ this.justicelegue}></HeroListComponent>
        </React.Fragment>
    }
}

ReactDom.render(<MainComponent/>,document.getElementById("root"));
