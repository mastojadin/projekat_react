import NewCategory from './NewCategory';
import Overview from './Overview';
import NewEntry from './NewEntry';

import { useState } from 'react';

function App() {
    const [categories, set_categories] = useState([]);
    const [dates, set_dates] = useState({
        'from': '',
        'to': ''
    });
    const [my_data, set_my_data] = useState([]);

    const change_categories = categorie => {
        set_categories(old_value => {
            return old_value;
        });
    }

    const change_set_dates = date => {
        set_dates(old_value => {
            return old_value;
        });
    }

    const add_new_category = new_category => {
    }

    const add_new_data = new_data => {
    }

    return (
        <>
        <div className="container">
            <h1 className="text-center m-5">My App</h1>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 border">
                    <h3 className="text-center">Overview</h3>
                    <Overview
                        my_data_for_overview={my_data}
                        dates_for_overview={dates}
                    />
                </div>
                
                <div className="col-md-4 border">
                    <h3 className="text-center">New Entry</h3>
                    <NewEntry
                        categories_for_new_entry={categories}
                        on_new_entry_click={add_new_data}
                    />
                </div>
                
                <div className="col-md-4 border">
                    <h3 className="text-center">New Category</h3>
                    <NewCategory
                        on_new_category_click={add_new_category}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
