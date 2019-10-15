<script>

  import Navaid from "navaid";
  import { onDestroy } from "svelte";
  import Nav from "./Nav.svelte";

  let Route, params, active;
  let uri = location.pathname;
  $: active = uri.split("/")[1] || "home";
  
  function draw(m, obj) {
      params = obj || {};
      if (m.preload) {
          m.preload({ params }).then(() => {
          Route = m.default;
        });
      } else {
          Route = m.default;
        }
  }

  const router = Navaid("/")
    .on("/", () => import("../routes/Home.svelte").then(draw))
    .on("/about", () => import("../routes/About.svelte").then(draw))
    .listen();
  onDestroy(router.unlisten);

</script>

<Nav {active} />

<main>
  <svelte:component this={Route} {params} />
</main>
