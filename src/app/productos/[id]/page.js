async function getProductoPorID(id) {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API}/prouctos/${id}`);

    if(!res.ok){
        throw new Error('Error al obtener producto');

    }
    return res.json();
}

export default async function ProductoPage({params}) {
    console.log(await params)
    const parametros = await params;
    const id = parametros.id;

    const producto=await getProductoPorID(id);

    console.log(producto)

    return (
        <main>
            <h1>{ producto.nombre }</h1>
            <p>${producto.precio}</p>
            <p>Cantidad disponible: {producto.stock}</p>
            <p>Descricpción: {producto.descripcion}</p>
        </main>
    );
}