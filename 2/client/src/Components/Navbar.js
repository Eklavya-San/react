import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <Link to="/">Form</Link>
            </th>
            <th>
              <Link to="/students">Student List</Link>
            </th>
            <th>
              <Link to="/edit">Edit</Link>
            </th>
            <th>
              <Link to="/delete">Delete</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Navbar