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
function Header(props) {
    // const headerTitle = [{ title: 'Eric Shin' }, { title: 'Front - End' }, { title: 'Developer' }];
    const spans = [
        <h1>
            <span>Eric Shin</span>
            <span>Front - End</span>
            <span>Developer</span>
        </h1>,
    ];
    return <header className="Main-header">{spans}</header>;
}
function Footer(props) {
    const legalLinks = [
        <ul className="Legal-links">
            <span>Eric Hoon Shin</span>
            <span>@ 2022 - Hn.</span>
            <span>United States</span>
        </ul>,
    ];
    return <footer className="Global-footer">{legalLinks}</footer>;
}
function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}

export default App;
