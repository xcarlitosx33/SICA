import "./AmbienteTable.css";

function AmbienteTable() {
    return (
        <section className="ambiente-table-container">


            <div className="ambiente-table-wrapper">
                <table className="ambiente-table">

                    <thead>
                        <tr>
                            <th>Ambiente</th>
                            <th>Nombre</th>
                            <th>Piso</th>
                            <th>Sede</th>
                            <th>Estado</th>
                            <th>Capacidad</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* PISO 1 */}

                        <tr>
                            <td>101</td>
                            <td>Laboratorio de Sistemas</td>
                            <td>1</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>30</td>
                        </tr>

                        <tr>
                            <td>102</td>
                            <td>Aula de Formación</td>
                            <td>1</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>103</td>
                            <td>Laboratorio de Redes</td>
                            <td>1</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status mantenimiento">
                                    Mantenimiento
                                </span>
                            </td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>104</td>
                            <td>Aula Multimedia</td>
                            <td>1</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>20</td>
                        </tr>


                        {/* PISO 2 */}

                        <tr>
                            <td>201</td>
                            <td>Laboratorio de Programación</td>
                            <td>2</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>30</td>
                        </tr>

                        <tr>
                            <td>202</td>
                            <td>Aula de Diseño</td>
                            <td>2</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>203</td>
                            <td>Laboratorio de Hardware</td>
                            <td>2</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status mantenimiento">
                                    Mantenimiento
                                </span>
                            </td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>204</td>
                            <td>Aula de Innovación</td>
                            <td>2</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>20</td>
                        </tr>


                        {/* PISO 3 */}

                        <tr>
                            <td>301</td>
                            <td>Laboratorio de Software</td>
                            <td>3</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>30</td>
                        </tr>

                        <tr>
                            <td>302</td>
                            <td>Aula de Formación 3</td>
                            <td>3</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>303</td>
                            <td>Laboratorio de Electrónica</td>
                            <td>3</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>304</td>
                            <td>Aula Multimedia 3</td>
                            <td>3</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>20</td>
                        </tr>


                        {/* PISO 4 */}

                        <tr>
                            <td>401</td>
                            <td>Laboratorio de Redes 2</td>
                            <td>4</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>30</td>
                        </tr>

                        <tr>
                            <td>402</td>
                            <td>Aula de Formación 4</td>
                            <td>4</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>403</td>
                            <td>Laboratorio de Sistemas 2</td>
                            <td>4</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>404</td>
                            <td>Aula de Reuniones</td>
                            <td>4</td>
                            <td>Sede principal</td>
                            <td>
                                <span className="ambiente-status disponible">
                                    Disponible
                                </span>
                            </td>
                            <td>20</td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </section>
    );
}

export default AmbienteTable;