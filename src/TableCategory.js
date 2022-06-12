const TableCategory = (props) => {
    const table_categories = props.categories_for_table_categories;

    const edit_category_click = (e) => {
        const id = e.target.getAttribute('data-edit_category_id');
        const name = document.getElementById('edit_category_input_' + id).value;

        props.on_update_category_click(id, name);
    }

    const delete_category_click = (e) => {
        const id = e.target.getAttribute('data-delete_category_id');
        props.on_delete_category_click(id);
    }

    const table_rows = table_categories.map((one) => {
        return (
            <tr
                key = {one.id}
            >
                <td className="text-center">{one.id}</td>
                <td className="text-center">
                    <input
                        type="text"
                        id={ "edit_category_input_" + one.id }
                        className="form-control"
                        defaultValue={one.name}
                        onChange={() => {}}
                    />
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        id="edit_category_btn"
                        className="btn btn-warning form-control"
                        data-edit_category_id={one.id}
                        onClick={edit_category_click}
                    >Edit</button>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        id={ "delete_category_btn_" + one.id }
                        className="btn btn-danger form-control"
                        data-delete_category_id={one.id}
                        onClick={delete_category_click}
                    >Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                </tr>
            </thead>

            <tbody>
                {table_rows}
            </tbody>
        </table>
    );
}

export default TableCategory;
