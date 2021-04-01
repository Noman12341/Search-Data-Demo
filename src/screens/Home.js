import React from 'react';
import '../styles/Home.css';
import professorImg from '../images/professor.jpg';

function Home() {
    return <main id="home">
        <div className="header-link">
            <div>
                <a href="/">Startseite</a>
                <a href="/" style={{ marginLeft: 20 }}>Erweiterte Suche</a>
            </div>
            <div>
                <a href="/">Anmelden</a>
            </div>
        </div>
        {/* image div section */}
        <section className="heading-block">
            <div>
                <img src={professorImg} alt="" width="108" height="157" />
            </div>
            <div className="title-block">
                <h3>o. Univ.-Prof. Dr. Gerhard Köbler<br />Zentrum integrativer europäischer Legistik</h3>
                <div className="title-block-2">
                    Universität Innsbruck<br />Innrain 52/52b<br />A-6020 Innsbruck
            </div>
                <div className="title-block-3">
                    Tel.: +43-512/507-8050<br />
                    <a href="/" target="">Gerhard.Koebler@uibk.ac.at</a><br />
                    <a href="/" target="">www.gerhardkoebler.de</a> | <a href="/">www.koebler.at</a> | <a href="/">www.ziel.cc</a>
                </div>
            </div>
            <div>
                <img src={professorImg} alt="" width="108" height="157" />
            </div>
        </section>
        <div className="title">Juristen</div>
        <div className="introText">
            Juristen enthält möglichst viele bedeutende deutschsprachige Juristen der Gegenwart und der Vergangenheit (Wer ist wer im deutschen Recht, Wer ist weiter wer im deutschen Recht, Wer war wer im deutschen Recht). Es soll laufend erweitert und verbessert werden. Für Hinweise und Vorschläge bin ich jedermann sehr dankbar (E-Mail: <a href="/">gerhard.koebler@uibk.ac.at</a>).<br />
            Jeder Nutzer kann einzelne Juristen und jede Kombination in dem Gesamtwerk entweder über die vier Abteilungen (Wer ist wer, Wer ist weiter wer, Wer war wer, Alle) und die einzelnen Anfangsbuchstaben (A, B, C, D usw.) blätternd (z. B. von Aa bis Az oder von Za bis Zz) suchen oder durch die Eingabe des Familiennamens oder einer anderen gesuchten Zeichenkombination in das Suchfeld rechts unten unmittelbar ermitteln. Bei Eingabe der gesuchten Zeichenkombination erscheinen grundsätzlich alle Stellen, an denen die Zeichenkombination im Werk enthalten ist (u. a. auch bei Namen der Haupteintrag), wobei Umlaute berücksichtigt werden.
        <br /><br />
        Viel Erfolg!
        </div>
        <div id="letterPanel">
            <table class="letterPanelTable">
                <tbody><tr>
                    <td class="colFirst">Wer ist wer</td>
                    <td><a href="/result/A">A</a></td>
                    <td><a href="/result/B">B</a></td>
                    <td><a href="/">C</a></td>
                    <td><a href="/">D</a></td>
                    <td><a href="/e">E</a></td>
                    <td><a href="/f">F</a></td>
                    <td><a href="/g">G</a></td>
                    <td><a href="/h">H</a></td>
                    <td><a href="/i">I</a></td>
                    <td><a href="/j">J</a></td>
                    <td><a href="/k">K</a></td>
                    <td><a href="/l">L</a></td>
                    <td><a href="/m">M</a></td>
                    <td><a href="/n">N</a></td>
                    <td><a href="/o">O</a></td>
                    <td><a href="/p">P</a></td>
                    <td><a href="/q">Q</a></td>
                    <td><a href="/r">R</a></td>
                    <td><a href="/s">S</a></td>
                    <td><a href="/t">T</a></td>
                    <td><a href="/u">U</a></td>
                    <td><a href="/v">V</a></td>
                    <td><a href="/w">W</a></td>
                    <td><a href="/x">X</a></td>
                    <td><a href="/y">Y</a></td>
                    <td><a href="/z">Z</a></td>
                </tr>
                    <tr>
                        <td class="colFirst">Wer ist weiter wer</td>
                        <td><a href="/result/A">A</a></td>
                        <td><a href="/result/B">B</a></td>
                        <td><a href="/c">C</a></td>
                        <td><a href="/d">D</a></td>
                        <td><a href="/e">E</a></td>
                        <td><a href="/f">F</a></td>
                        <td><a href="/g">G</a></td>
                        <td><a href="/h">H</a></td>
                        <td><a href="/i">I</a></td>
                        <td><a href="/j">J</a></td>
                        <td><a href="/k">K</a></td>
                        <td><a href="/l">L</a></td>
                        <td><a href="/m">M</a></td>
                        <td><a href="/n">N</a></td>
                        <td><a href="/o">O</a></td>
                        <td><a href="/p">P</a></td>
                        <td><a href="/q">Q</a></td>
                        <td><a href="/r">R</a></td>
                        <td><a href="/s">S</a></td>
                        <td><a href="/t">T</a></td>
                        <td><a href="/u">U</a></td>
                        <td><a href="/v">V</a></td>
                        <td><a href="/w">W</a></td>
                        <td><a href="/x">X</a></td>
                        <td><a href="/y">Y</a></td>
                        <td><a href="/z">Z</a></td>
                    </tr>
                    <tr>
                        <td class="colFirst">Wer war wer</td>
                        <td><a href="/result/A">A</a></td>
                        <td><a href="/result/B">B</a></td>
                        <td><a href="/c">C</a></td>
                        <td><a href="/d">D</a></td>
                        <td><a href="/e">E</a></td>
                        <td><a href="/f">F</a></td>
                        <td><a href="/g">G</a></td>
                        <td><a href="/h">H</a></td>
                        <td><a href="/i">I</a></td>
                        <td><a href="/j">J</a></td>
                        <td><a href="/k">K</a></td>
                        <td><a href="/l">L</a></td>
                        <td><a href="/m">M</a></td>
                        <td><a href="/n">N</a></td>
                        <td><a href="/o">O</a></td>
                        <td><a href="/p">P</a></td>
                        <td><a href="/q">Q</a></td>
                        <td><a href="/r">R</a></td>
                        <td><a href="/s">S</a></td>
                        <td><a href="/t">T</a></td>
                        <td><a href="/u">U</a></td>
                        <td><a href="/v">V</a></td>
                        <td><a href="/w">W</a></td>
                        <td><a href="/x">X</a></td>
                        <td><a href="/y">Y</a></td>
                        <td><a href="/z">Z</a></td>
                    </tr>
                    <tr>
                        <td class="colFirst">Alle</td>
                        <td><a href="/result/A">A</a></td>
                        <td><a href="/result/B">B</a></td>
                        <td><a href="/c">C</a></td>
                        <td><a href="/d">D</a></td>
                        <td><a href="/e">E</a></td>
                        <td><a href="/f">F</a></td>
                        <td><a href="/g">G</a></td>
                        <td><a href="/h">H</a></td>
                        <td><a href="/i">I</a></td>
                        <td><a href="/j">J</a></td>
                        <td><a href="/k">K</a></td>
                        <td><a href="/l">L</a></td>
                        <td><a href="/m">M</a></td>
                        <td><a href="/n">N</a></td>
                        <td><a href="/o">O</a></td>
                        <td><a href="/p">P</a></td>
                        <td><a href="/q">Q</a></td>
                        <td><a href="/r">R</a></td>
                        <td><a href="/s">S</a></td>
                        <td><a href="/t">T</a></td>
                        <td><a href="/u">U</a></td>
                        <td><a href="/v">V</a></td>
                        <td><a href="/w">W</a></td>
                        <td><a href="/x">X</a></td>
                        <td><a href="/y">Y</a></td>
                        <td><a href="/z">Z</a></td>
                    </tr>
                </tbody></table>
            <form action="/juristen2/web/juristen/search/basic" method="POST">
                <table>
                    <tbody>
                        <tr>
                            <td class="colFirst">In allen Feldern suchen</td>
                            <td><input type="text" id="criteria" name="criteria" /></td>
                            <td class="searchButton"><button type="submit">Suchen</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a class="green" href="/juristen2/web/juristen/search">Erweiterte Suche</a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </main>
}
export default Home;