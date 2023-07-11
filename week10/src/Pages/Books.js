import React from 'react'
import {Outlet,Link} from 'react-router-dom';
export const Books = () => {
  return (
    <div>
        <h1>이 달의 책</h1>
        <Outlet/>
        <ul>
            <li>
                <Link to="/books/1">책 하나</Link>
            </li>
            <li>
                <Link to="/books/2">책2</Link>
            </li>
            <li>
                <Link to="/books/3">책3</Link>
            </li>
        </ul>
    </div>
  )
}
