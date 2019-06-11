import React from 'react'
import { Link } from 'react-router-dom'

import ProductTable from './ProductTable.js'

export default function ProductContent() {
    return (
        <div className="p-content col-75">
            <h2>A Beautiful Ring</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus fuga iure
                quasi possimus harum consequatur quam beatae a, rem rerum porro error itaque
                sunt eaque, minima ipsum unde. Laudantium, ullam.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Description</th>
                        <th>Value</th>
                    </tr>
                </thead>
                    <ProductTable />
            </table>

            <div className="buttons">
                <Link className = "btn-link" to="/">Add to enquiry list</Link>
                <Link className="btn-link" to="/">Back</Link>
            </div>
        </div>
    )
}
