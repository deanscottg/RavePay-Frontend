import { Link } from 'react-router-dom'

const NavLink = ({ to, children, className = '' }) => (
  <Link className={`pr-4 ${className}`} to={to}>
    {children}
  </Link>
)

export default NavLink
