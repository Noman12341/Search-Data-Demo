import React, { useEffect, useState } from 'react';
import '../styles/Result.css';
import Card from '../component/Card';
import { useParams } from 'react-router-dom';
import { data } from '../data';

function Result() {
    const { letter } = useParams();
    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const filterData = () => {
            setArr(data.filter(obj => obj.name.charAt(0) === letter));
            setIsLoading(false);
        }
        filterData();
    }, [letter])
    return <main id="result">
        <header>
            <div className="header-link">
                <div>
                    <a href="/">Startseite</a>
                    <a href="/" style={{ marginLeft: 20 }}>Erweiterte Suche</a>
                </div>
                <div>
                    <a href="/">Anmelden</a>
                </div>
            </div>
            <div className="back-nav">
                <span>
                    ABEGG
                </span>
                <span>
                    ACHATZ
                </span>
            </div>
        </header>
        <div style={{ marginTop: 20 }}>
            <div id='content'>
                {isLoading ? "Loading..." : arr.map((obj, index) => <Card key={index} obj={obj} />)}
            </div>
            <div id="sideMenu">
                <form action="/juristen2/web/juristen/search/basic" method="POST">
                    <table>
                        <tbody><tr>
                            <td><input type="text" id="criteria" name="criteria" /></td>
                        </tr>
                        </tbody></table>
                    <table style={{ marginTop: 10 }}>
                        <tbody><tr>
                            <td><a href="/juristen2/web/juristen/search">Erweiterte Suche</a></td>
                            <td class="right"><button type="submit">Suchen</button></td>
                        </tr>
                        </tbody></table>
                </form>
                <nav>
                    <ul>
                        <li class="left"><a href="/juristen2/web/juristen">Startseite</a></li>
                        <li class="left"><a href="/juristen2/web/juristen/pdf/create" target="_blank">Liste exportieren ...</a></li>
                        <li class="left"><a href="/juristen2/web/juristen/login">Anmelden</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
}
export default Result;