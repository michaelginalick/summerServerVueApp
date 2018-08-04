<template>
  <div id="month">
    <table class="ui celled table">
      <tableHead />
      <tableBody 
        :month="month"
      />
    </table>
  </div>
</template>

<script>

import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";

export default {
  name: "month",

   components: {
    tableHead: TableHead,
    tableBody: TableBody
  },

  data() {
    return {};
  },

  props: {
    month: {
      Array,
      required: true
    },

    eventsThisMonth: {
      Array,
      required: true
    },

    firstDay: {
      Date,
      required: true
    }
  },
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#month {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.table {
  justify-content: space-between;
  width: 100%;
}


</style>
