import { useState } from 'react';

const Overview = (props) => {
    const date = props.dates_for_overview;
    const my_data = props.my_data_for_overview;

    const changing_dates = () => {
    }

    return (
        <>
        <div className="row">
            <div className="col-md-6">
                <input type="date" id="date_from" className="form-control p-1" value={date.from} onChange={changing_dates} />
            </div>
            <div className="col-md-6">
                <input type="date" id="date_to" className="form-control p-1" value={date.to} onChange={changing_dates} />
            </div>
        </div>

        <div className="container"></div>

        <hr />

        <table className="table table-bordered">
            <thead>
               <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Cat</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Date</th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
        </table>
        </>
    );
}

export default Overview;
