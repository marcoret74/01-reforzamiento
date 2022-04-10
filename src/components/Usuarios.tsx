import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    //const [usuarios, setUsuarios] = useState<Usuario[]>([]);



    // useEffect(() => {
    //     reqResApi.get('/users/')
    // }, []);

    // const renderItem = (usuario: Usuario) => {
    //     return (
    //         <tr>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //         </tr>
    //     )
    // }

    return (
        <>
            <h3>Usuaros</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
        </>
    );
}