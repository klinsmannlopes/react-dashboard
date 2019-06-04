import React, { Component } from "react";
import { URL_API } from "../../services/base";
import  { consultarResumo } from "../../services/resumo_service";

class Resumo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "consultas": {
                "consultas_30dias_anteriores": 87,
                "consultas_30dias_posteriores": 28
            },
            "faturamento": {
                "anterior": {
                    "valor": 100000,
                    "comparativo": 19
                },
                "previsao": {
                    "valor": 90000,
                    "comparativo": -10
                }
            }
        }
    }
    componentDidMount(){
        consultarResumo().then(dados => this.setState(dados));
    }

    render() {
        return (
            <div>
                <h2 className="mt-2">Resumo</h2>

                <div className="row">
                    <div className="col">
                        <h3>Consultas</h3>

                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">
                                        30 dias anteriores
                            </div>
                                    <div className="card-body">
                                        {
                                            this.state
                                            .consultas
                                            .consultas_30dias_anteiores
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">
                                        Próximos 30 dias
                            </div>
                                    <div className="card-body">
                                        {
                                            this.state
                                                .consultas
                                                .consultas_30dias_posteriores
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <h3>Faturamento</h3>

                        <div className="row">
                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">
                                        30 dias anteriores
                            </div>
                                    <div className="card-body">
                                        {
                                            this.state.faturamento.anterior.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                        }
                                        <span className={ "badge m1-1 " + (this.state.faturamento.anterior.comparativo > 0 ? "badge-success" : "badge-danger" )}>
                                                {this.state.faturamento.anterior.comparativo} %
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card mt-2 text-center">
                                    <div className="card-header">
                                        Próximos 30 dias
                            </div>
                                    <div className="card-body">
                                        {
                                            this.state.faturamento.previsao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                                        }
                                        <span className={ "badge m1-1 " + (this.state.faturamento.previsao.comparativo > 0 ? "badge-success" : "badge-danger" )}>
                                            {this.state.faturamento.previsao.comparativo}  %
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resumo;