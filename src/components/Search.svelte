<script>
  function handleSubmit(e) {
    if (e.code === "Enter") {
      console.log(`redirect to ${e.target.value}`);
      window.location.replace(
        `https://www.google.com/search?q=${e.target.value}`
      );
    }
  }
</script>

<input
  class="nes-input"
  type="text"
  placeholder="search"
  on:keydown={handleSubmit} />
