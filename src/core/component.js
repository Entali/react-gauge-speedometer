import React from 'react';


export default function component(displayName, desc) {
  if (typeof desc === 'function') {
    const render = desc;
    desc = {
      render() {
        return render.call(this, this.props, this.state);
      }
    };
  }
  desc.displayName = displayName;
  return React.createClass(desc);
}

component.React = React;
