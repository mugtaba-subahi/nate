<template>
  <div class="app">
    <form class="form" v-on:submit.prevent>
      <label for="input">Url:</label>
      <input id="input" class="form__input" type="text" v-model="url" />

      <label class="sort__label" for="sort">Sort by:</label>
      <select class="sort__select" id="sort" v-model="sort">
        <option value="count,desc" selected="selected">Count - desc</option>
        <option value="count,asc">Count - asc</option>
        <option value="word,desc">Word - desc</option>
        <option value="word,asc">Word - asc</option>
      </select>

      <button class="form__primary" type="submit" @click="getData">Submit</button>
    </form>

    <Table :content="data" v-if="data" />
  </div>
</template>

<script>
import { request } from "../services/api";
import Table from "../components/Table";

export default {
  components: { Table },
  data() {
    return {
      url: "",
      data: null,
      sort: "count,desc"
    };
  },
  methods: {
    async getData() {
      this.data = await request({
        method: "POST",
        body: { url: this.url },
        query: { sort: this.sort }
      });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html {
  font-family: roboto;
}

.app {
  display: grid;
  justify-content: center;
}

.form {
  display: grid;
  grid-template-areas:
    "url-label sort-label ."
    "url-input sort-select primary";
  margin-bottom: 20px;
  column-gap: 10px;
  row-gap: 10px;

  &__input,
  &__primary {
    border-radius: 3px;
    padding: 6px 10px;
  }

  &__input {
    grid-area: url-input;
    border: solid 1px #afc5df;
    width: 300px;

    &:focus {
      border: solid 1px #338ef5;
    }
  }

  &__primary {
    grid-area: primary;
    background-color: #338ef5;
    border: none;
    color: white;
  }
}

.sort__label {
  grid-area: sort-label;
}

.sort__select {
  grid-area: sort-select;
  border: solid 1px #afc5df;
  padding: 6px 10px;
  border-radius: 3px;
}
</style>
