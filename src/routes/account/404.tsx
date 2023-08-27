import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      Página de error <code>account</code>. Solo existe la ruta{" "}
      <code>/account</code>
      <ul>
        <li>
          Principal: <Link href="/">Ir a inicio</Link>
        </li>
        <li>
          Account: <Link href="/account">Ir a account</Link>
        </li>
      </ul>
    </div>
  );
});
