<script>
  import PollStore from "../stores/PollStore";
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";
  export let poll;

  $: totalVotes = poll.votes1 + poll.votes2;
  $: percent1 = Math.floor((100 / totalVotes) * poll.votes1);
  $: percent2 = Math.floor((100 / totalVotes) * poll.votes2);

  const handleVote = (option, id) => {
    PollStore.update((currentPolls) => {
      let cpPolls = [...currentPolls];
      let votedPoll = cpPolls.find((poll) => poll.id === id);
      if (option === "1") {
        votedPoll.votes1++;
      }
      if (option === "2") {
        votedPoll.votes2++;
      }
      return cpPolls;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id != id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("1", poll.id)}>
      <div class="percent percent-1" style="width: {percent1}%;" />
      <span>{poll.answer1}({poll.votes1})</span>
    </div>
    <div class="answer" on:click={() => handleVote("2", poll.id)}>
      <div class="percent percent-2" style="width: {percent2}%;" />
      <span>{poll.answer2}({poll.votes2})</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-1 {
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-2 {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
