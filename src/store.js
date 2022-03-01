import {createStore} from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 2,
        nombre: "Beto Quiroga",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 3,
        nombre: "Alejo Garcia",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 4,
        nombre: "Juan Disain",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 5,
        nombre: "Alvaro Felipe",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 6,
        nombre: "Alexys Lozada",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    
        },
    {
        id: 7,
        nombre: "Harold Pajuelo",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 8,
        nombre: "Manu Rodriguez",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 9,
        nombre: "AlejoRodríguez",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 10,
        nombre: "Andrés Muquinche",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 11,
        nombre: "Ricardo Otero",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 12,
        nombre: "Deivis Rivera",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    },
    {
        id: 13,
        nombre: "Percy Tuncar",
        foto: "https://cdn-icons-png.flaticon.com/512/1163/1163063.png"
    }
],
    titulares: [],
    suplentes: []
}

// funcion reductura
const reducerEntrenador = (state = initialState, action) =>{
console.log(action)
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
   

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j =>j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
        }
      
        if ( action.type === "QUITAR_SUPLENTE") {
            return {
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        }
    
          

    return state;
    
}




export default createStore( reducerEntrenador) 