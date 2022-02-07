<script>
  import Modal from "./Modal.svelte";

  let people = [
    { name: "Xu", color: "red", age: 18, id: 1 },
    { name: "Don", color: "pink", age: 35, id: 2 },
    { name: "Pi", color: "black", age: 24, id: 3 },
  ];

  const handleClick = (id) => {
    people = people.filter((one) => one.id != id);
  };
</script>

<Modal />

<main>
  {#each people as one}
    <div>
      <h1>{one.name}</h1>
      {#if one.color === "black"}
        <p>Master</p>
      {/if}
      <p>{one.age} years old, seems {one.color}</p>
      <button on:click={() => handleClick(one.id)}>delete</button>
    </div>
  {:else}
    <p>No one here</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
