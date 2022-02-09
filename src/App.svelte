<script>
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

  let polls = [
    {
      id: 1,
      question: "React or Vue?",
      answer1: "React",
      answer2: "Vue",
      votes1: 9,
      votes2: 15,
    },
    {
      id: 2,
      question: "Svelte or Vue?",
      answer1: "Svelte",
      answer2: "Vue",
      votes1: 23,
      votes2: 11,
    },
  ];
  const handleAdd = (e) => {
    console.log(polls);
    const newPoll = e.detail;
    polls = [newPoll, ...polls];
    activeTab = "Current Polls";
  };

  const handleVote = (e) => {
    const { option, id } = e.detail;
    let cpPolls = [...polls];
    let votedPoll = cpPolls.find((poll) => poll.id === id);
    if (option === "1") {
      votedPoll.votes1++;
    }
    if (option === "2") {
      votedPoll.votes2++;
    }
    polls = [...cpPolls];
  };
</script>

<Header />
<main>
  <Tabs {activeTab} {tabs} on:tabChange={tabChange}>X</Tabs>
  {#if activeTab === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
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
