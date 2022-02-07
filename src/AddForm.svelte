<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  let name;
  let color;
  let age;

  let skills = [];

  const handleSubmit = () => {
    const newOne = {
      name: name,
      color: color,
      age: age,
      skills: skills,
      id: Math.random(),
    };
    dispatch("addOne", newOne);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <label for="color" />
  <select name="color" bind:value={color}>
    <option value="red">Red</option>
    <option value="white">White</option>
    <option value="black">Black</option>
  </select>
  <input type="number" placeholder="age" bind:value={age} />
  <label for="">Skills</label>
  <input type="checkbox" bind:group={skills} value="Vue" /> Vue <br />
  <input type="checkbox" bind:group={skills} value="React" /> React <br />
  <input type="checkbox" bind:group={skills} value="Svelte" /> Svelte <br />
  <button>Add</button>
</form>
