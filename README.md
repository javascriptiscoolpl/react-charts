# Description

This is Chart.js React component full library. It contains all types of charts in one module. It is little more complicated than the simple modules for each type of chart. So you may want to use the simple modules instead of this one if you do not want to use all types of charts together in your page. However, here the usage has been unified and simplified.

# Quickstart

In project directory run command:

    bash install.bash

then open <code>index.html</code> file in your browser (it might be very slow).

# Options

    <Charts data={chart} type={"line"}/>
    <Charts data={chart} type={"bar"}/>
    <Charts data={chart} type={"radar"}/>
    <Charts data={chart} type={"polar"}/>
    <Charts data={chart} type={"pie"}/>
    <Charts data={chart} type={"doughnut"}/>

The <code>line</code> is default type of chart, so you can use it like this:

    <Charts data={chart}/>

Make sure the <code>chart</code> is object with such structure:

    var chart = { osX: [], osY: [] };

and is not empty.

# Sample usage

### Sample page content

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Charts from './react-charts.js';

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

### Sample usage - basic

    var chart = { osX: [], osY: [] };

    for (var i=0; i<10; i++) {
      chart.osX[i] = i;
      chart.osY[i] = Math.sin(i)-Math.tan(i);
    }

    ReactDOM.render(
      <App data={chart}/>,
      document.getElementById('app')
    );

### Sample usage - update

If you send updated <code>chart</code> object again to the <code>Charts</code> React component as <code>data</code> it will update itself.

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

# License

MIT
