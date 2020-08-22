<script>
  import LinkBox from "./components/LinkBox.svelte";
</script>

<style>
  main {
    margin: 0 auto;
    max-width: 1080px;
    padding-top: 150px;
  }

  .wrapper {
    padding: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>

<main>

  <input class="nes-input" type="text" placeholder="searchbar" />
  <div class="wrapper">

    <LinkBox title="some title" />
    <LinkBox title="some title" />
    <LinkBox title="some title" />

    <LinkBox title="some title" />
    <LinkBox title="some title" />
    <LinkBox title="some title" />
    <LinkBox title="some title" />
    <LinkBox title="some title" />
    <LinkBox title="some title" />

  </div>
</main>
