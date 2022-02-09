<script>
  import { fade, slide, scale } from "svelte/transition";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import NewPollForm from "./components/NewPollFrom.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let tabs = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";
  const tabChange = (e) => {
    activeTab = e.detail;
  };

  const handleAdd = (e) => {
    activeTab = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {activeTab} {tabs} on:tabChange={tabChange} />
  {#if activeTab === "Current Polls"}
    <PollList />
  {:else if activeTab === "Add New Poll"}
    <NewPollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 800px;
    margin: 40px auto;
  }

  @media (min-width: 640px) {
  }
</style>
