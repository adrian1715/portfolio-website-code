import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import ProjectsNote from "../../components/ProjectsNote";
import { Helmet } from "react-helmet";

export default function BuscaCEP() {
  const [submitHandler, setSubmitHandler] = useState();

  async function imports() {
    try {
      const imp = await import("./app");
      imp.dataLoader();
      setSubmitHandler(() => imp.submitHandler);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <Helmet>
        <title>BuscaCEP - Adrian Lobato</title>
      </Helmet>

      <div id="busca-cep">
        <h1 className="mt-2 mb-4">Requisição AJAX</h1>
        <form action="" className="mb-4" onSubmit={submitHandler}>
          <div className="card mb-4">
            <div className="card-header">
              <h2>Cadastro</h2>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-4 form-group">
                  <span>CEP</span>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="CEP"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-4 form-group">
                  <span>Rua</span>
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    placeholder="Rua"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-4 form-group">
                  <span>Bairro</span>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Bairro"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-5 form-group">
                  <span>Complemento</span>
                  <input
                    type="text"
                    id="complemento"
                    name="complemento"
                    placeholder="Complemento"
                    className="form-control"
                  />
                </div>
                <div className="col-3 form-group">
                  Estado
                  <select
                    id="estados"
                    className="form-select"
                    name="estados"
                    required
                  >
                    <option selected hidden disabled>
                      Estado
                    </option>
                  </select>
                </div>
                <div className="col-4 form-group">
                  Cidade
                  <select
                    id="cidade"
                    className="form-select"
                    name="cidade"
                    required
                  >
                    <option selected hidden disabled>
                      Cidade
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                value="submit"
                id="btn-cadastrar"
                className="btn btn-primary mt-3"
              >
                Cadastrar endereço
              </button>
              <i
                id="loading-icon"
                className="bi bi-hourglass"
                style={{ display: "none" }}
              ></i>
            </div>
          </div>
        </form>

        <div className="registros">
          <div className="card">
            <div className="card-header d-flex aling-items">
              <h2>Registros</h2>
              <button id="btn-consultar" className="btn btn-success ms-2">
                Consultar
              </button>
            </div>
            <div className="card-body">
              <div id="bq-resultado" className="blockquote"></div>
            </div>
          </div>
        </div>
      </div>

      <ProjectsNote />
    </>
  );
}
