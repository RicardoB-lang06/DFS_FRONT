export async function crearProducto() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${API}/productos`);
}