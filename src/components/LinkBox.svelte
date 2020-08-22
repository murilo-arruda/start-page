<script>
  export let title;

  let links = [
    { name: "reddit", url: "https://www.reddit.com" },
    { name: "youtube", url: "https://www.youtube.com" },
    { name: "youtube", url: "https://www.youtube.com" },
    { name: "youtube", url: "https://www.youtube.com" },
  ];
</script>

<style>
  section {
    margin: 5px;
  }
</style>

<section class="nes-container with-title">

  <p class="title">{title || ''}</p>

  <ul class="nes-list is-circle">
    {#each links as link}
      <li>

        <a href={link.url} class="nes-text is-primary">{link.name}</a>
      </li>
    {/each}
  </ul>
</section>
