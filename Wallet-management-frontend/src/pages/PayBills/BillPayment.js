import React from "react";
import "./BillPayment.css";

function BillPayment() {
  return (
    <div className="container-fluid-bill mx-auto">
      <h2 className="text-center m-4">Bill Payment</h2>
      <div className="row ">
        <div className="col">
          <div className="p-3  bill border  ">Airtime</div>
        </div>
        <div className="col">
          <div className="p-3 bill border  ">Internet</div>
        </div>
        <div className="col">
          <div className="p-3 bill border ">Water</div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <div className="p-3 bill border  ">TV</div>
        </div>
        <div className="col">
          <div className="p-3 bill border  ">Electricity</div>
        </div>
        <div className="col">
          <div className="p-3 bill border  ">SparaPlus</div>
        </div>
      </div>
    </div>
  );
}

export default BillPayment;
