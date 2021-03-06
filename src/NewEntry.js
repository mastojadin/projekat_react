import { useState } from 'react';

const NewEntry = (props) => {
    const select_categories = props.categories_for_new_entry;

    const options = select_categories.map((categorie) => {
        return (
            <option
                key={categorie.id}
                value={categorie.id}
            >{categorie.name}</option>
        );
    });

    const save_entry = () => {
        const category_id = document.getElementById('category_selector').value;
        const amount_all = document.getElementById('amount_input').value;
        const amount = amount_all.replace(/[^0-9.]/g, '');

        props.on_new_entry_click(category_id, amount);
    };

    return (
        <div className="container">
            <div className="input-group m-3 p-3">
                <span
                    className="input-group-text fw-bold fst-italic"
                    id="category_selector_label"
                >Category:</span>
                    
                <select
                    className="form-control"
                    id="category_selector"
                    aria-label="Category"
                    aria-describedby="category_selector_label"
                    onChange={() => {}}
                >
                    <option value="00"> ... </option>
                    {options}
                </select>
            </div>
                
            <div className="input-group m-3 p-3">
                <span
                    className="input-group-text fw-bold fst-italic"
                    id="amount_input_label"
                >Amount:</span>
                    
                <input
                    type="text"
                    className="form-control"
                    id="amount_input"
                    aria-label="Amount"
                    aria-describedby="amount_input"
                />
            </div>
            
            <div className="form-group m-5">
                <button
                    type="button"
                    className="btn btn-success form-control"
                    id="save_entry_btn"
                    onClick={save_entry}
                >Save Entry</button>
            </div>
        </div>
    );
}

export default NewEntry;
