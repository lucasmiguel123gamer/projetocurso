import { Link } from "react-router-dom";
    function Header() {
        
    return (
        <header>
            <div class="headerTopo">
                <h1>Curso Técinco em Desenvolvimento de Sistema</h1>
            </div>
            <nav class="headerMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">SobreCurso</Link></li>
                    <li><Link to="/">disciplinasCurriculares</Link></li>
                    <li><Link to="/">disciplinasTecnicas</Link></li>
                    <li><Link to="/">equipe</Link></li>
                </ul>
            </nav>
            </header>
    )
}
export default Header;