import React from 'react';
import ReactDOM from 'react-dom';

export default class Charts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chr: "init" };
  }

  render() {
    return (
      <div className="Chart">
        <canvas id="canvas"></canvas>
      </div>
    );
  }

  componentDidMount() {
    if (
          this.props.type === "polar" ||
          this.props.type === "pie" ||
          this.props.type === "doughnut"
        ) {
      var ChartData = [];
      var items = this.props.data.osY.length;
      for (var i=0; i<items; i++) {
          var color = Math.round( i*(360/items) );
          ChartData[i] = {};
          ChartData[i].value = this.props.data.osY[i];
          ChartData[i].color = "hsl("+color+",100%,50%)";
          ChartData[i].highlight = "#E1E1E1";
          ChartData[i].label = "";
      }
      var GlobalOptions = {
        responsive: true,
        animationEasing: "easeOutBounce",
        animationSteps : 30,
        scaleShowGridLines : true,
        scaleGridLineColor : "#E1E1E1",
        scaleBeginAtZero: false
      };
    } else {
      var ChartData = {
        labels : this.props.data.osX,
        datasets : [
          {
            label: "",
            fillColor : "#F1F1F1",
            strokeColor : "#C1C1C1",
            pointColor : "#F1F1F1",
            pointStrokeColor : "#C1C1C1",
            pointHighlightFill : "#FFFFFF",
            pointHighlightStroke : "#A1A1A1",
            data : this.props.data.osY
          }
        ]
      };
      var GlobalOptions = {
        responsive: true,
        animationEasing: "easeOutElastic",
        scaleShowGridLines : true,
        scaleGridLineColor : "#E1E1E1",
        scaleBeginAtZero: false
      };
    }

    var nde = ReactDOM.findDOMNode(this);
    var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');

    if (this.props.type === "bar") {
      this.state.chr = new Chart(ctx).Bar(ChartData, GlobalOptions);
    } else if (this.props.type === "radar") {
      this.state.chr = new Chart(ctx).Radar(ChartData, GlobalOptions);
    } else if (this.props.type === "polar") {
      this.state.chr = new Chart(ctx).PolarArea(ChartData, GlobalOptions);
    } else if (this.props.type === "pie") {
      this.state.chr = new Chart(ctx).Pie(ChartData, GlobalOptions);
    } else if (this.props.type === "doughnut") {
      this.state.chr = new Chart(ctx).Doughnut(ChartData, GlobalOptions);
    } else {
      this.state.chr = new Chart(ctx).Line(ChartData, GlobalOptions);
    }
  }

  componentDidUpdate() {

    if (this.props.type === "bar") {

      for (var i=0; i<this.props.data.osX.length; i++) {
        this.state.chr.datasets[0].bars[i].value = this.props.data.osY[i];
      }

    } else if (
                this.props.type === "polar" ||
                this.props.type === "pie" ||
                this.props.type === "doughnut"
              ) {

      for (var i=0; i<this.props.data.osY.length; i++) {
        this.state.chr.segments[i].value = this.props.data.osY[i];
      }

    } else {

      for (var i=0; i<this.props.data.osX.length; i++) {
        this.state.chr.datasets[0].points[i].value = this.props.data.osY[i];
      }

    }

    this.state.chr.update();
  }
}
