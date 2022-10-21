<template>
  <div>
    <h2>Exercise 4</h2>
    <h4>Statement</h4>
    <div class="statement">
      <p>
        Please update <span class="code">App.vue</span> in order to display a list
        of people aged from 25 to 35 years old, from the youngest to the oldest.
      </p>
      <p>
        Use Vuex store <span class="code">store/store.js</span> to retrieve the list
        of people, use the component <span class="code">components/List.vue</span>
        to display people's age and name, make use of the props and slot, use the
        functions in <span class="code">helpers/helpers.js</span> to filter and sort
        the data.
      </p>
    </div>
    <h4>Solution</h4>
    <div class="solution">
      <!-- TODO: implement template here -->
      <List :data="peoples" :sorting="sorting" :filtering="filtering" v-slot="props">
        <div>
          {{props.item.name}}
          {{props.item.age}}
        </div>
      </List>
    </div>
  </div>
</template>

<script>
  // TODO: implement logic here
  import {mapState, mapActions} from 'vuex';
  import helpers from './helpers/helpers';
  import List from './components/List.vue';

  const {sortByAge, filterByAge} = helpers;

  export default {
    components: {List},
    created() {
      this.getPeople();
    },
    methods: {
      ...mapActions(['getPeople']),
    },
    computed: mapState({
      peoples: (state) => state.people,
      sorting() {
        return sortByAge;
      },
      filtering() {
        return filterByAge(25, 35);
      },
    }),
  };
</script>

<style lang="scss">

  .statement, .solution {
    border: 1px solid #dedede;
    padding: 0 0.5em;
    min-height: 40px;

    .code {
      color: #434343;
      background-color: #f9f9f9;
      padding: 0 5px;
    }
  }


</style>
