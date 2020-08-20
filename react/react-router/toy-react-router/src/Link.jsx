import React, { useContext } from 'react';
import { context } from './BrowserRouter'

export default function Link(props) {
  const { update } = useContext(context)
  console.log(props);
  const { to, children } = props;
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, to)
    update({ pathname: to })
  }
  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  )
}
