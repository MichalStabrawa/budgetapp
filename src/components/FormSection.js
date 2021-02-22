import React from "react";
import { Component } from "react";
import FormSectionAdditional from "./FormSectionAdditional";
import BalanceTable from "./BalanceTable";

class FormSection extends Component {
  state = {
    value: null,
    moneyValue: null,
    rangeValue: 0,
    progress: null,
    valueIsActive: false,
    additionalValue: null,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: parseInt(e.target.value),
      additionalValue: null,
    });
  };

  handleChangeAdditional = (e) => {
    if (this.state.value >= e.target.value) {
      this.setState({
        additionalValue: parseInt(e.target.value),
        moneyValue: this.state.value - parseInt(e.target.value),
      });
    } else {
      alert("Twoje wydatki są za duże ");
      this.setState({
        additionalValue: this.state.value,
      });
    }
  };

  showValue = () => {
    this.setState({
      moneyValue: this.state.value,
      rangeValue: 0,
      valueIsActive: true,
    });
  };

  ranngeValue = (e) => {
    console.log(e.target.value);
    this.setState({
      rangeValue: e.target.value,
    });
  };

  listClick = () => {
    return this.state.additionalValue;
  };

  render() {
    const now = `${(
      100 -
      (this.state.rangeValue * 100) / this.state.moneyValue
    ).toFixed(2)}%`;

    return (
      <section className="form-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>Wprowadz miesięczne wpływy</h2>
              <form htmlFor="">
                <label htmlFor="formControlRange">Example Range input</label>
                <div className="form-row">
                  <div className="col-7">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      placeholder="Add money"
                      onChange={this.handleChange}
                    />
                    {this.state.value}
                  </div>
                  <div className="col">
                    <button
                      onClick={this.showValue}
                      type="button"
                      className="btn btn-primary"
                    >
                      Dodaj wplyw
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col">
              <h4>
                Stan Portfela to:
                {this.state.moneyValue != null
                  ? `${this.state.moneyValue - this.state.rangeValue} pln`
                  : `Nie wprowadziłes jeszcze ile masz`}
              </h4>
              {this.state.moneyValue != null ? (
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className={
                      (
                        100 -
                        (this.state.rangeValue * 100) / this.state.moneyValue
                      ).toFixed(2) > 40
                        ? "progress-bar bg-success"
                        : "progress-bar bg-danger"
                    }
                    role="progressbar"
                    style={{
                      width: `${
                        100 -
                        (this.state.rangeValue * 100) / this.state.moneyValue
                      }%`,
                    }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {`${(
                      100 -
                      (this.state.rangeValue * 100) / this.state.moneyValue
                    ).toFixed(2)}%`}
                  </div>
                </div>
              ) : null}

              <p>Ile chcesz zaoszczędzić </p>

              <input
                type="range"
                id="myRange"
                min={0}
                max={this.state.moneyValue}
                defaultValue={0}
                onChange={this.ranngeValue}
              ></input>
              <span>{this.state.rangeValue}pln</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {(this.state.value != null) &
              (this.state.valueIsActive === true) ? (
                <FormSectionAdditional
                  change={this.handleChangeAdditional}
                  salary={this.state.value}
                  click={this.listClick}
                />
              ) : null}
            </div>
            <div className="col">
              {this.state.valueIsActive ? (
                <BalanceTable
                  salary={this.state.value}
                  additional={this.state.additionalValue}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FormSection;
