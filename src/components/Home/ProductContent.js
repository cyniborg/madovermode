import React from 'react';

import {Link} from 'react-router-dom';

export default function ProductContent(props) {
    return (
        <div className="p-content col-25">
            <h2>A Beautiful Ring</h2>
            <p>
                <span className="p-desc">Metal</span>: Silver |
                <span className="p-desc">
                    Stones</span>: Zirconia |
                <span className="p-desc">
                    Weight</span>: 3.06gm
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus fuga iure
                quasi possimus harum consequatur quam beatae a, rem rerum porro error itaque
                sunt eaque, minima ipsum unde. Laudantium, ullam.</p>

            <div className="buttons">
                <Link className="btn-link" to="/">Add to enquiry list</Link>
                <Link className="btn-link" to="/jewellery/a-beautiful-ring">Details</Link>
            </div>
        </div>
    )
}
