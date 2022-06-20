// import logo from './logo.svg';
import './App.css';
function Nav() {
    return (
        <nav className="Global-nav">
            <div>
                <a href="/">Hn.</a>
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Tech</a>
                    </li>
                    <li>
                        <a href="/">Work</a>
                    </li>
                    <li>
                        <a href="/">Service</a>
                    </li>
                    <li>
                        <a href="/">Content</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
function Header() {
    return (
        <header className="Main-header">
            <h1>
                <span>Eric Shin</span>
                <span>Front - End</span>
                <span>Developer</span>
            </h1>
        </header>
    );
}
function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
        </div>
    );
}

export default App;
