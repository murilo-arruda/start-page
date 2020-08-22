<script>
  import LinkBox from "./components/LinkBox.svelte";
  import Search from "./components/Search.svelte";
  import { sections, time } from "./store";

  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  const getGretting = (hours) => {
    if (hours >= 17) {
      return "Evening";
    }
    if (hours >= 12) {
      return "Afternoon";
    }
    if (hours >= 5) {
      return "Morning";
    } else {
      console.log("returning day");
      return "Day";
    }
  };
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
  h2,
  h3 {
    text-align: center;
  }
  .icons {
    text-align: center;
    margin-top: 10px;
  }
  .options {
    text-align: right;
    font-size: 0.8em;
  }
</style>

<div>
  <p class="options">Options</p>

</div>
<main>
  <h2>Good {getGretting($time.getHours())}!</h2>
  <h3>{formatter.format($time)}</h3>
  <Search />
  <section class="icons">
    <a href="https://www.twitter.com">
      <i class="nes-icon twitter is-large" />
    </a>
    <a href="https://www.facebook.com">
      <i class="nes-icon facebook is-large" />
    </a>
    <a href="https://www.instagram.com">
      <i class="nes-icon instagram is-large" />
    </a>
    <a href="https://www.github.com">
      <i class="nes-icon github is-large" />
    </a>
    <a href="https://www.google.com">
      <i class="nes-icon google is-large" />
    </a>
    <a href="https://www.gmail.com">
      <i class="nes-icon gmail is-large" />
    </a>
    <a href="https://www.medium.com">

      <i class="nes-icon medium is-large" />
    </a>
    <a href="https://www.linkedin.com">

      <i class="nes-icon linkedin is-large" />
    </a>
    <a href="https://www.twitch.tv">

      <i class="nes-icon twitch is-large" />
    </a>
    <a href="https://www.youtube.com">

      <i class="nes-icon youtube is-large" />
    </a>
    <a href="https://www.reddit.com">

      <i class="nes-icon reddit is-large" />
    </a>

    <a href="https://web.whatsapp.com/">
      <i class="nes-icon whatsapp is-large" />
    </a>

  </section>
  <div class="wrapper">
    {#each $sections as section}
      <LinkBox title={section.title} links={section.links} />
    {/each}
  </div>
</main>
