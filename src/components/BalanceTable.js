import React from "react";
import { Component } from "react";

const BalanceTable = (props) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Wpływ</th>
          <th scope="col">Wydatki</th>
          <th scope="col">Zostało</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.salary}</td>
          <td>{props.additional}</td>
          <td>{props.salary - props.additional}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default BalanceTable;
