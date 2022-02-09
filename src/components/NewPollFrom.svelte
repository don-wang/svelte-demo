<script>
  import PollStore from "../stores/PollStore";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();
  let fields = {
    question: "",
    answer1: "",
    answer2: "",
  };
  let errors = {
    question: "",
    answer1: "",
    answer2: "",
  };
  let valid = false;

  const submitHandler = () => {
    valid = true;
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Must be 5 or more";
    } else {
      errors.question = "";
    }
    if (fields.answer1.trim().length < 1) {
      valid = false;
      errors.answer1 = "No empty";
    } else {
      errors.answer1 = "";
    }
    if (fields.answer2.trim().length < 1) {
      valid = false;
      errors.answer2 = "No empty";
    } else {
      errors.answer2 = "";
    }

    if (valid) {
      let poll = { ...fields, votes1: 0, votes2: 0, id: Math.random() };
      // add new poll to store
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Question:</label>
    <input type="text" name="" id="questnion" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-1">Answer 1:</label>
    <input type="text" name="" id="answer-1" bind:value={fields.answer1} />
    <div class="error">{errors.answer1}</div>
  </div>
  <div class="form-field">
    <label for="answer-2">Answer 2:</label>
    <input type="text" name="" id="answer-2" bind:value={fields.answer2} />
    <div class="error">{errors.answer2}</div>
  </div>
  <Button type="secondary" flat={true}>Add</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
