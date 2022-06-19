import { useState, useEffect } from 'react';

const Overview = (props) => {
    const date = props.dates_for_overview;
    const my_data = props.my_data_for_overview;

    useEffect(() => {
        // mozilla sets to day before
        // ???
        // so we add a day to date
        document.getElementById('date_from').valueAsDate = new Date(date.from.getTime() + 86400000);
        document.getElementById('date_to').valueAsDate = new Date(date.to.getTime() + 86400000);
    }, []);

    const changing_dates = () => {
        const date_from = document.getElementById('date_from').value;
        const date_to = document.getElementById('date_to').value;
        const date = {};
        date.from = date_from;
        date.to = date_to;

        props.change_dates_for_overview(date);
    }

    const delete_my_data = (e) => {
        const my_data_id = e.target.getAttribute('data-my_data_id');

       props.delete_my_data_for_overview(my_data_id);
    }

    let total = 0;
    const table_data = props.my_data_for_overview.map(row => {
        total += row.amount;
        return (
            <tr key={row.id}>
                <td className="text-center">{row.id}</td>
                <td className="text-center">{row.name}</td>
                <td className="text-center">{row.amount.toFixed(2)}</td>
                <td className="text-center">{row.date}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-danger form-control" data-my_data_id={row.id} onClick={delete_my_data}>DELETE</button>
                </td>
            </tr>
        );
    });

    return (
        <>
        <div className="row">
            <div className="col-md-6">
                <input type="date" id="date_from" className="form-control p-1" defaultValue={date.from} onChange={changing_dates} />
            </div>
            <div className="col-md-6">
                <input type="date" id="date_to" className="form-control p-1" defaultValue={date.to} onChange={changing_dates} />
            </div>
        </div>

        <div className="container"></div>

        <hr />

        <table className="table table-bordered">
            <thead>
               <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Cat</th>
                    <th className="text-center">Amount / RSD</th>
                    <th className="text-center">Date</th>
                    <th className="text-center"></th>
                </tr>
            </thead>
            
            <tbody>
                {table_data}
                <tr>
                    <td className="text-center" colSpan="5">{total.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default Overview;
