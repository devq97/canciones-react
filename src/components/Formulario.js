import React, {useState} from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Formulario = ({guardarBusquedaLetra}) => {

  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  const [error, guardarError] = useState(false);

  const actualizarState = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  };

  const buscarInformacion = e => {
    e.preventDefault();

    if (artista.trim() === '' || cancion.trim() === '') {
        guardarError(true);
        return;
    }

    guardarError(false);

    guardarBusquedaLetra(busqueda);
  };

  const { artista, cancion } = busqueda;

  return (
    <div className="bg-info">
      <div className="container">
        { error ? <Error texto="Todos los campos son obligatorios" /> : null}
        <div className="row">
          <form
            className="col card text-white bg-transparent bm-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend
                className="text-center"
              >
                Buscador Letras Canciones
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      value={artista}
                      onChange={actualizarState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      value={cancion}
                      onChange={actualizarState}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Buscar
              </button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
};

Formulario.propTypes = {
  guardarBusquedaLetra : PropTypes.func.isRequired
};

export default Formulario;