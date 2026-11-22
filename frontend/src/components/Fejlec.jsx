import { Link } from "react-router-dom";

export default function Fejlec(){
    return( 
       <header className="fejlec">
        <h1><Link to="/">Budapest Parti Radar</Link></h1>
        <Link className="gomb fo" to="/belepes.html">Belépés</Link>
       </header> 
    )
}