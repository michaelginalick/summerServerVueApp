<template >
  <tr class="textAlignRight">
    <template v-for="day in week">
      <day :day="day" v-bind:key="day.id" />
    </template>
  </tr>
</template>

<script>
import Day from "./Day.vue";

export default {
  name: "tableRow",
  components: {
    day: Day
  },

  data() {
    return {
    }
  },

  props: {
    week: {
      Array,
      required: true
    }
  }
};
</script>

<style scoped>

.textAlignRight {
  text-align: right;
}

</style>
