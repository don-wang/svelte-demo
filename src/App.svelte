<script>
  import Modal from "./Modal.svelte";
  import AddForm from "./AddForm.svelte";

  let showModal = false;

  let people = [
    { name: "Xu", color: "red", age: 18, skills: [], id: 1 },
    { name: "Don", color: "pink", age: 35, skills: [], id: 2 },
    { name: "Pi", color: "black", age: 24, skills: [], id: 3 },
  ];

  const handleClick = (id) => {
    people = people.filter((one) => one.id != id);
  };

  const togleModal = () => {
    showModal = !showModal;
  };

  const addOne = (e) => {
    const newOne = e.detail;
    people = [newOne, ...people];
    showModal = false;
  };
</script>

<Modal {showModal} on:click={togleModal}>
  <AddForm on:addOne={addOne} />
</Modal>
<main>
  <button on:click|once={togleModal}>Toggle</button>
  {#each people as one (one.id)}
    <div>
      <h1>{one.name}</h1>
      {#if one.color === "black"}
        <p>Master</p>
      {/if}
      <p>{one.age} years old, seems {one.color}</p>
      <p>{one.skills}</p>
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
