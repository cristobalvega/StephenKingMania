import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

import * as blobalbumActions from "../../actions/blobalbumActions";

class BlobAlbum extends React.Component {
  componentDidMount() {}

  handleChange = event => {
    this.props.handleChange(event.target);
  };

  BlobAlbum = e => {
    console.log();
    e.preventDefault();
    this.props.blobalbum(this.props);
  };

  deshabilitar = () => {
    const {
      Id,
      AlbumId,
      DateCreated,
      DateModified,
      URI,
      BlobTypeId
    } = this.props;
    if (
      !Id ||
      !AlbumId ||
      !DateCreated ||
      !DateModified ||
      !URI ||
      !BlobTypeId
    ) {
      return true;
    }
    return false;
  };

  mostrarAccion = () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error} />;
    }
  };

  render() {
    console.log("blobalbum: ", this.props);
    return (
      <section className="py-6">
        <div className="container">
          <div className="col-md-10 offset-md-1">
            <div className="card">
              <div className="card-body px-5">
                <h3 className="mb-5">Sube una portada y un trailer </h3>
                <form>
                  <div className="row">
                    Subir imagen y video
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary mt-4"
                        to="jobPreview"
                        onClick={this.BlobAlbum}
                      >
                        Caragar Contenido
                      </button>
                      {this.mostrarAccion()}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.blobalbumReducer;
};

export default connect(mapStateToProps, blobalbumActions)(BlobAlbum);
