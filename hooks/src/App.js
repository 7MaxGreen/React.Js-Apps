import React, {useState, useEffect, useMemo, useRef, useReducer} from "react";
// useState se defineste inafara oricarei functiei 

//useMemo - pentru a crea o functie care  va fi apelata doar atunci cand argumentul va fi apelat; 
//          randuirea operatiunelor in baza unui argument; un fel de multiTasking

//useEffect raspunde dupa ce o anumita variabila isi indeplineste valoarea;

//useRef - accesarea elementelor din DOM; stocarea elementelor fara ca acestea sa fie supuse re-renderului; 

//useReducer - 

let started = false;

function complex(num) {
  for(let i=0; i<1000000000; i++){

  }
  return 5 * num;
}

const ACTIONS = {
  INCREMENT : "increment",
  DECREMENT : "decrement",
  RESET : "reset"
}

function reducer(count, action){

switch (action.type) {
  case ACTIONS.INCREMENT : 
      return count + 1; break;
  case ACTIONS.DECREMENT : 
      return count -1; break;    
  case ACTIONS.RESET : 
      count = action.payload;
  return count ; break;    
}
}



function App() {

  
  const countRef = useRef();
  const[count, dispatch] = useReducer(reducer, 0);

  const [numberrr, setNumberrr] = useState(Math.round(Math.random() * 100000));
  const prevNumberrr = useRef();
  const prevprevNumber = useRef();
  const prevPrevPrevNumber = useRef();

  const inputRef = useRef(null); //cu proprietatea "current" avem acces la elelemnt

  const [dark, setDark] = useState(false);

  const [numberr, setNumberr] = useState(0);
  let complexNumber = useMemo(() => complex(numberr), [numberr]);

  const [name, setName] = useState("");
  const [age, setAge] = useState(29);

  const [person, setPerson] = useState({name: "", age: 18});
  const [info, setInfo] = useState(() => {
    console.log("info");
  })



  function increment(){
    setAge(prevAge => prevAge +1);
    setAge(prevAge => prevAge +1);
  }

  const[ boolean, setBoolean] = useState(false);

  useEffect(() => {
    if(started){
      console.log(boolean);
      if(boolean) {
        document.title="JUMP"
      } else document.title="RUN"
    }
  }, [boolean])

  useEffect(() => {
    if(started === false) {started = true}
  }, []);

  useEffect(() => {
    prevPrevPrevNumber.current = prevprevNumber.current;
  }, [prevprevNumber.current]);

  useEffect(() => {
    prevprevNumber.current = prevNumberrr.current;
  }, [prevNumberrr.current]);

  
  useEffect(() => {
    if(count > 0) {
      countRef.current.style.color = "green";

    } else countRef.current.style.color = "red";
  }, [count])



  return (
    <div className="App" style={{backgroundColor: dark ? "black" : "white", color: dark? "white" : "black"}}>
      {name}
      <input type="text" name={name} onChange={(e) => setName(e.target.value)} />
      {age}
      <button onClick={() => increment() }>+</button>
      <br/>
      <br/>

      Name: {person.name}
      <br/>
      Age: {person.age}
      <br/>
      <input type="text" value={person.name} 
      onChange={(e) => setPerson(prevObj => {
        return {...prevObj, name: e.target.value}
       
      })} />
      <br/>

      <input type="number" value={person.age} onChange={
        (e) => setPerson(prevObj => {
          return {...prevObj, age: e.target.value}
        })
      } />
      <br/>
      <br/>

      {boolean.toString()}
      <button onClick={() => setBoolean(!boolean)}>Toogle</button>
      <br/>
      <br/>
      {numberr}
      <input type="number" value={numberr} onChange ={(e) => {
        setNumberr(e.target.value);
      }
      }/>
      <br/>
      Complex number: {complexNumber};
      <br/>
      <button onClick={() => setDark(!dark)}>Dark or Light mode</button>
      <br/>
      <br/>

      <input type="text" ref={inputRef} />
      <button onClick={() => {
        // console.log(inputRef.current)
        inputRef.current.focus();
        inputRef.current.style.border = "1px solid red";
        inputRef.current.style.height = "100px";
      }}>Focus</button>
      <br/>
      <br/>

      Number: {numberrr};
      <br/>
      <button onClick={() => {
        prevNumberrr.current = numberrr;
        setNumberrr(Math.round(Math.random() * 100))}}> Generate a new number</button>
      <br/>
      Previous Number : {prevNumberrr.current}
      <br/>
      Before Previous Number: {prevprevNumber.current}
      <br/>
      Before Previous Previous Number: {prevPrevPrevNumber.current}
      <br/>
      <br/>

      <h1 ref={countRef}>{count}</h1>
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.RESET, payload: 0})}>RESET</button>
    </div>
  );
}

export default App;
