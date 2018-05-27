import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';

const tasks = [ 'go to office', 'attend scrum', 'take lunch'];

//using react create element
const element = React.createElement('ol',null,
     tasks.map((task, index)=> React.createElement('li', {key:index}, task))
);

ReactDom.render(element, document.getElementById('root'));


//using jsx
const jsxElement=<div>
                        <h2>Task List</h2>
                        <ol> 
                            {tasks.map((task, index)=><li key={index}>{task}</li>)}
                        </ol>
                 </div>
ReactDom.render(jsxElement, document.getElementById('root'));

//using component

ReactDom.render(<Main/>, document.getElementById('root'));
