import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>
        Bienvenido a la página <code>account</code>
      </h1>
      <p>
        Estamos en la página de <code>account</code>
      </p>
      <h2>Otras páginas de interés</h2>
      <ul>
        <li>
          Principal:
          <Link href="/" class="my-link">
            Ir al inicio
          </Link>
          <li>
            Blog (error 404):{" "}
            <Link href="/blog" class="my-link">
              Ir al blog con error (No existe)
            </Link>
          </li>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
