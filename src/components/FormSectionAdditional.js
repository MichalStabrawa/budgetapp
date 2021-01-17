import React from "react";
import { Component } from "react";

class FormSectionAdditional extends Component {
  render() {
    let salaryValue = this.props.salary;
    return (
      <div className="form-row">
        <label htmlFor="">Dodaj twoje wydatki</label>
        <div className="col-7">
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder=""
            onChange={this.props.change}
          />
        </div>
        <div className="col">
          <button onClick type="button" className="btn btn-primary">
            Dodaj {salaryValue}
          </button>
        </div>
      </div>
    );
  }
}
export default FormSectionAdditional;
