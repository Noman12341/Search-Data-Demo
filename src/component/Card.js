import React from 'react';
import '../styles/card.css';

function Card({ obj }) {
    return <div className="subBlock">
        <table className="underline">
            <tbody><tr>
                <td><h4>{obj.name}</h4></td>
            </tr>
            </tbody></table>
        <table>
            <tbody>
                {obj.born && <tr>
                    <td className="colFirst">Geboren</td>
                    <td className="colLast">{obj.born}</td>
                </tr>}

                {obj.died && <tr>
                    <td className="colFirst">Gestorben</td>
                    <td className="colLast">{obj.died}</td>
                </tr>}
                {obj.career && <tr>
                    <td className="colFirst">Werdegang</td>
                    <td className="colLast">{obj.career}</td>
                </tr>}
                {obj.businessAddress && <tr>
                    <td className="colFirst">Dienstanschrift</td>
                    <td className="colLast">{obj.businessAddress}</td>
                </tr>}
                {obj.serviceContact && <tr>
                    <td className="colFirst">Dienstkontakt</td>
                    <td className="colLast">{obj.serviceContact}</td>
                </tr>}
                {obj.subjects && <tr>
                    <td className="colFirst">Fächer</td>
                    <td className="colLast">{obj.subjects}</td>
                </tr>}

                {obj.publications && <tr>
                    <td className="colFirst">Veröffentlichungen</td>
                    <td className="colLast">{obj.publications}</td>
                </tr>}
                {obj.others && <tr>
                    <td className="colFirst">Sonstiges</td>
                    <td className="colLast">{obj.others}</td>
                </tr>}
            </tbody>
        </table>
    </div>
}
export default Card;