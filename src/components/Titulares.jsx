import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg"

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j=> (
                    <artricle className="titular"  key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={()=> quitarTitular(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </artricle>
                ))
            }
            <img src={cancha} alt="cancha de fut"/>
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Titulares)