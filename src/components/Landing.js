import React, { Component } from "react";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      Data: {},
      counter: 1
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements["name1"].value);
    let counter1 = this.state.counter;

    this.setState({
      Data: {
        ...this.state.Data,
        [counter1]: [
          e.target.elements["name1"].value,
          e.target.elements["job"].value
        ]
      }
    });
    counter1++;
    this.setState({ counter: counter1 });
    console.log(this.state);
  }
  onClick(e) {
    e.preventDefault();
    delete this.state.Data[e.target.id];
    this.setState(this.state);
  }
  render() {
    const data = this.state.Data;
    const content1 = Object.keys(data).map(key => {
      return (
        <tr key={key}>
          <td>{data[key][0]}</td>
          <td>{data[key][1]}</td>
          <td>
            <button id={key} type="button" onClick={this.onClick}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    // const content = data.map(element => {
    //   return (
    //     <tr key={element[0]}>
    //       <td>{element[1]}</td>
    //       <td>{element[2]}</td>
    //       <td>
    //         <button id={element[0]} type="button" onClick={this.onClick}>
    //           Click Me!
    //         </button>
    //       </td>
    //     </tr>
    //   );
    // });

    return (
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>{content1}</tbody>
          </table>
        </div>

        <div className="container">
          <h2>Add New</h2>
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name1" />
                </div>
                <div className="form-group">
                  <label>Job</label>
                  <input type="text" className="form-control" name="job" />
                </div>

                <input type="submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
