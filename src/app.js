import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './react-charts.js';


// sample page content
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var chart = this.props.data;
    return (
      <div>
        <Charts data={chart} type={"line"}/>
        <Charts data={chart} type={"bar"}/>
        <Charts data={chart} type={"radar"}/>
        <Charts data={chart} type={"polar"}/>
        <Charts data={chart} type={"pie"}/>
        <Charts data={chart} type={"doughnut"}/>
        <Charts data={chart}/>
        <Charts data={chart} type={"radar"}/>
        <Charts data={chart} type={"bar"}/>
      </div>
    );
  }
}

// sample usage 1
/*
var chart = { osX: [], osY: [] };

for (var i=0; i<10; i++) {
  chart.osX[i] = i;
  chart.osY[i] = Math.sin(i)-Math.tan(i);
}

ReactDOM.render(
  <App data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
var chart = { osX: [], osY: [] };

function setRandomChart() {
  for (var i=0; i<10; i++) {
    chart.osX[i] = i;
    chart.osY[i] = Math.cos(i)*Math.random();
  }

  ReactDOM.render(
    <App data={chart}/>,
    document.getElementById('app')
  );
}

setInterval(() => { setRandomChart() }, 5000);
