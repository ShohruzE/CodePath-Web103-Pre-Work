import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
        <nav>
            <ul>
                <li><strong><Link to="/">CreatorVerse</Link></strong></li>
            </ul>
            <ul>
                <li><Link to="/add-creator" role='button'>Add Creator</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Home