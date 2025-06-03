import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recipes/new">Add Recipe</Link>
        </nav>
    )
}