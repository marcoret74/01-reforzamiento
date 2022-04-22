import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {

    const { usuarios, cargarUsuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        // console.log(usuario);
        return (
            <tr>
                <td><img src={avatar} alt={first_name} style={
                    {
                        width: 30,
                        borderRadius: 100
                    }
                } /></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuaros</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>


            </table>

            <button className="btn btn-primary"
                onClick={paginaAnterior}>
                Anteriores
            </button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    );
}