import React, {Component} from "react";
import {Link} from "react-router-dom";

class Cabecera extends Component {
    render(){
        return (
            <header>
                <h6><Link to={"https://www.nuestrodiario.es"}><span className="mdi">anchor</span></Link></h6>
            </header>
        )
    }
}

export default Cabecera;