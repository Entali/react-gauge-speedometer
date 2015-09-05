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
                   sections={["#8cc152", "#ffb74d", "#ffb74d", "#e84528", "#e84528", "#e84528"]}
                   arrow={{height: 60, width: 6, color: "#ccc"}}
                   legend={['0Gb', '2Gb', '4Gb', '6Gb', '8Gb', '10Gb']}
                   label="15%"/>
          </div>

          <div className="box">
            <Gauge value={50}
                   size={20}
                   radius={100}
                   sections={["#8cc152", "#8cc152", "#ffb74d", "#ffb74d", "#e84528", "#e84528"]}
                   arrow={{height: 60, width: 8, color: "#515151"}}
                   legend={['0Gb', '2Gb', '4Gb', '6Gb', '8Gb', '10Gb']}
                   label="15%"/>
          </div>

          <div className="box">
            <Gauge value={85}
                   size={20}
                   radius={100}
                   sections={["#8cc152", "#8cc152", "#8cc152", "#ffb74d", "#ffb74d", "#e84528"]}
                   arrow={{height: 60, width: 6, color: "#000"}}
                   legend={['0Gb', '2Gb', '4Gb', '6Gb', '8Gb', '10Gb']}
                   label="15%"/>
          </div>
        </div>
      </section>
    );
  }
});



module.exports = App;