import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper';


const PaymentsPage = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(
              "https://django-react-shop-api.herokuapp.com/api/payments/"
            );
            const data = await response.json();
            setPayments(data)
        })();
    }, []);

    /*
    setInterval(() => {
        window.location.reload();
        console.log("Page Reloaded");
    }, 60000);
    */
  return (
    <Wrapper>
      <div className="row mt-3">
        <div className="col-6">
          <h3 className="">Payments</h3>
        </div>
        <div className="col-6">
          <a
            href="https://buy.stripe.com/test_7sIcPzbiK2S36Fa28b"
            className="btn btn-primary"
          >
            Make Payment
          </a>
        </div>
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Ref.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="colspan-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => {
              return (
                <tr key={payment.id}>
                  <td>{payment.payment_ref}</td>
                  <td>{payment.name}</td>
                  <td>{payment.email}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status}</td>

                  <td>
                    <a
                      href="/"
                      className="btn btn-sm btn-outline btn-primary mr-2"
                    >
                      Update
                    </a>
                    
                  </td>
                  <td>
                    <a href="/" className="btn btn-sm btn-outline btn-danger">
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default PaymentsPage