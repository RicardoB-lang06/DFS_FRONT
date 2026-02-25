import { API } from '@/config';

export async function getProductos() {
  
  const res = await fetch(`${API}/api/productos`);
  if (!res.ok) {
    throw new Error('Error al cargar productos');
  }

  return res.json();
}