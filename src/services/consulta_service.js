import { URL_API } from "./base";

export function consultarConsulta() {
    return fetch(`${URL_API}/consulta`).then(resultados => resultados.json());
}