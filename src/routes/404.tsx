import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Página de error <code>principal</code>. Solo existen las siguientes rutas:
    <ul>
        <li>Principal: <Link href='/'>Ir a inicio</Link></li>
        <li>Account: <Link href='/account'>Ir a account</Link></li>
    </ul>
  </div>
});