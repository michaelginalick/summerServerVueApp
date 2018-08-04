<template>
  <tbody>
    <template v-for="week in month">
      <tableRow :week="week" v-bind:key="week.id"/>
    </template>
  </tbody>
</template>


<script>

import TableRow from "./TableRow.vue";

export default {
  name: "tableBody",

  components: {
    tableRow: TableRow
  },

  props: {
    month: {
      Array,
      required: true
    }
  }
};
</script>


<style scoped>

</style>
