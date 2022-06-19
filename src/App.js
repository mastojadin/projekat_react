import NewCategory from './NewCategory';
import Overview from './Overview';
import NewEntry from './NewEntry';
import TableCategory from './TableCategory';
import MyChart from './MyChart';

import { useState, useEffect } from 'react';

const App = () => {
    const [categories, set_categories] = useState([]);
    
    const tmp_date = new Date();
    const [dates, set_dates] = useState({
        'from': new Date(tmp_date.getFullYear(), tmp_date.getMonth(), 1),
        'to': new Date(tmp_date.getFullYear(), (tmp_date.getMonth() + 1), 0)
    });
    
    const [my_data, set_my_data] = useState([]);

    useEffect(() => {
        my_ajax('http://projekat.test/category/list').then(data_from_server => {
            set_categories(data_from_server.data);
        });

        my_ajax('http://projekat.test/my_data/list').then(data_from_server => {
            set_my_data(data_from_server.data);
        });
    }, []);

    const change_set_dates = date => {
        const my_form_data = new FormData();
        my_form_data.append('date_from', date.from);
        my_form_data.append('date_to', date.to);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/my_data/search', my_options).then(data_from_server => {
            set_my_data(data_from_server.data);
        });

        set_dates(date);
    };

    const add_new_category = new_category => {
        const my_form_data = new FormData();
        my_form_data.append('new_category', new_category);
        
        const my_options = {
            method: 'POST',
            body: my_form_data
        };
        
        my_ajax('http://projekat.test/category/add', my_options).then(data_from_server => {
            set_categories(data_from_server.data);
        });
    };

    const update_category = (id, name) => {
        const my_form_data = new FormData();
        my_form_data.append('id', id);
        my_form_data.append('name', name);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/category/update', my_options).then(data_from_server => {
            set_categories(data_from_server.data);
        });
    };

    const delete_category = id => {
        const my_form_data = new FormData();
        my_form_data.append('id', id);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/category/delete', my_options).then(data_from_server => {
            set_categories(data_from_server.data);
        });
    };

    const add_my_data = (category_id, amount) => {
        const my_form_data = new FormData();
        my_form_data.append('category_id', category_id);
        my_form_data.append('amount', amount);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/my_data/add', my_options).then(data_from_server => {
            set_my_data(data_from_server.data);
        });
    };

    const edit_my_data = (my_data_id, category_id, amount, date) => {
        const my_form_data = new FormData();
        my_form_data.append('my_data_id', my_data_id);
        my_form_data.append('category_id', category_id);
        my_form_data.append('amount', amount);
        my_form_data.append('date', date);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/my_data/update', my_options).then(data_from_server => {
            set_my_data(data_from_server.data);
        });
    };

    const delete_my_data = (my_data_id) => {
        const my_form_data = new FormData();
        my_form_data.append('my_data_id', my_data_id);

        const my_options = {
            method: 'POST',
            body: my_form_data
        };

        my_ajax('http://projekat.test/my_data/delete', my_options).then(data_from_server => {
            set_my_data(data_from_server.data);
        });
    };

    const my_ajax = async (url, options = {method: 'GET'}) => {
        const response = await fetch(url, options);
        const from_server = await response.json();
        return from_server;
    };

    return (
        <>
        <div className="container">
            <h1 className="text-center m-5">My App</h1>
        </div>

        <div className="container-fluid">
            <div>
                <MyChart
                    my_data_for_my_chart={my_data}
                />
            </div>

            <div className="row">
                <div className="col-md-4 border">
                    <h3 className="text-center">Overview</h3>
                    <Overview
                        my_data_for_overview={my_data}
                        delete_my_data_for_overview={delete_my_data}
                        dates_for_overview={dates}
                        change_dates_for_overview={change_set_dates}
                    />
                </div>
                
                <div className="col-md-4 border">
                    <h3 className="text-center">New Entry</h3>
                    <NewEntry
                        categories_for_new_entry={categories}
                        on_new_entry_click={add_my_data}
                    />
                </div>
                
                <div className="col-md-4 border">
                    <h3 className="text-center">New Category</h3>
                    <NewCategory
                        on_new_category_click={add_new_category}
                    />
                    <hr />
                    <h3 className="text-center">Category table</h3>
                    <TableCategory
                        categories_for_table_categories={categories}
                        on_update_category_click={update_category}
                        on_delete_category_click={delete_category}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
