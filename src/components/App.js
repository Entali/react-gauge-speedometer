var React = require('react');
var Gauge = require('components/Gauge');


let App = React.createClass({
  displayName: 'App',

  render () {
    return (
      <section className="App">
        <h1 className="App__title">React Gauges</h1>

        <div className="App__content">
          <div className="box">
            <Gauge value={15}
                   size={20}
                   radius={100}
                   sections={["#8cc152", "#ffb74d", "#e84528"]}
                   arrow={{height: 65, width: 8, color: "#515151"}}
                   label="15%"/>
          </div>

          <div className="box">
            <Gauge value={50}
                   size={20}
                   radius={100}
                   sections={["#d2bde4", "#8d65b6", "#bd4fc4", "#761068"]}
                   arrow={{height: 65, width: 8, color: "#515151"}}
                   label="50%"/>
          </div>

          <div className="box">
            <Gauge value={85}
                   size={20}
                   radius={100}
                   sections={["#3bc720", "#fdfa1f", "#feaa37", "#f8824f", "#e03e27"]}
                   arrow={{height: 65, width: 8, color: "#515151"}}
                   label="85%"/>
          </div>
        </div>
      </section>
    );
  }
});



module.exports = App;