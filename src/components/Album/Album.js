import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

import * as albumActions from "../../actions/albumActions";

class Album extends React.Component {
  componentDidMount() {}

  handleChange = event => {
    this.props.handleChange(event.target);
  };

  Album = e => {
    console.log();
    e.preventDefault();
    this.props.album(this.props);
  };

  deshabilitar = () => {
    const {
      Id,
      AspNetUserId,
      DateCreated,
      DateModified,
      Title,
      Sipnosis
    } = this.props;
    if (
      !Id ||
      !AspNetUserId ||
      !DateCreated ||
      !DateModified ||
      !Title ||
      !Sipnosis
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
    console.log("album: ", this.props);
    return (
      <section className="py-6">
        <div className="container">
          <div className="col-md-10 offset-md-1">
            <div className="card">
              <div className="card-body px-5">
                <h3 className="mb-5">Album</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      {" "}
                      <div className="form-group">
                        {" "}
                        <label className="font-weight-bold"> Title </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          name="Title"
                          value={this.props.Title}
                          onChange={this.handleChange}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      {" "}
                      <div className="form-group">
                        {" "}
                        <label className="font-weight-bold">
                          {" "}
                          Sipnosis{" "}
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          name="Sipnosis"
                          value={this.props.Sipnosis}
                          onChange={this.handleChange}
                        />{" "}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary mt-4"
                        to="jobPreview"
                        onClick={this.Album}
                      >
                        Crear
                      </button>
                      {this.mostrarAccion()}
                      <button className="btn btn-secondary mt-4 ml-3">
                        Cancelar
                      </button>
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
  return reducers.albumReducer;
};

export default connect(mapStateToProps, albumActions)(Album);
