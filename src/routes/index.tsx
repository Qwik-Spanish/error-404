import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Bienvenido a mi página 👋</h1>
      <p>Página principal</p>
      <h2>Otras páginas de interés</h2>
      <ul>
        <li>
          Account:{" "}
          <Link href="/account" class="my-link">
            Ir al account
          </Link>
        </li>
        <li>
          Account con detalles (error 404):{" "}
          <Link href="/account/details" class="my-link">
            Ir al account con error
          </Link>
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
