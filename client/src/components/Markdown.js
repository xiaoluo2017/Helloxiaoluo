import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
var marked = require('marked');

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      mark: ""
    };
    this.handleTextarea = this.handleTextarea.bind(this);
  }

  componentDidMount() {
    let text = "Heading\n=======\n\nSub-heading\n-----------\n\n### This is an `<h3>` tag\n\n###### This is an `<h6>` tag\n\nInline code: I think you should use an `<addr>` element here instead.\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~.\n\nUnordered\n* Item 1\n* Item 2\n * Item 2a\n * Item 2b\n\nOrdered\n1. Item 1\n1. Item 2 \n1. Item 3\n 1. Item 3a\n 1. Item 3b\n\n*[XiaoLuo](https://github.com/xiaoluo2017)*";
    let mark = marked(text);
    this.setState({
      text: text,
      mark: mark
    });
  }

  handleTextarea(event) {
    this.setState({
      text: event.target.value,
      mark: marked(event.target.value)
    });
  }

  render() {
    const footer = (
      <div className="copyright">
        <p><FontAwesome className='icon' name='copyright' /> Xiao Luo 2017</p>
      </div>
    );

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <textarea value={this.state.text} name="textarea" rows="25" cols="65" onChange={this.handleTextarea}></textarea>
            </div>
            <div className="col-lg-6 col-md-12">
              <div dangerouslySetInnerHTML={{__html: this.state.mark}}  />
            </div>
          </div>
        </div>
      {footer}
      </div>
    );
  }
}

export default Markdown;
