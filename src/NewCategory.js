const NewCategory = (props) => {
    const save_cat = () => {
        const category_input = document.getElementById('category_input');
        
        if (category_input.value.length > 3) {
            props.on_new_category_click(category_input.value);
        }
    }
    
    return (
        <>
        <div className="input-group">
            <span
                className="input-group-text"
                id="category_input_label"
            >Category:</span>
            
            <input
                type="text"
                id="category_input"
                className="form-control"
                aria-label="Category"
                aria-describedby="category_label"
            />
        </div>

        <div className="form-group m-5">
            <button
                className="btn btn-success form-control"
                id="save_category_btn"
                onClick={save_cat}
            >Save category</button>
        </div>
        </>
    );
}

export default NewCategory;
