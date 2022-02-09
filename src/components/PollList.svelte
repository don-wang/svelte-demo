<script>
  // import { onDestroy } from "svelte";
  import PollStore from "../stores/PollStore";
  import PollDetails from "./PollDetails.svelte";

  // export let polls = [];
  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onDestroy(() => {
  //   unsub();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
