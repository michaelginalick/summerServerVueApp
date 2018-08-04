<template>
  <td v-if="day.dayNumber === 0" v-bind:key="day.id">
  </td>
  <td v-else-if="day.dayNumber > 0 && day.dayNumber != 100" 
    v-bind:class="[{ activeDay: day.activeDay, nextMonth: day.nextMonth }]"
    v-bind:key="day.id"
  >
    {{day.dayNumber}}
  </td>
</template>


<script>

export default {
  name: "day",

  props: {
    day: {
      Object,
      required: true
    }
  }
};
</script>


<style scoped>
.nextMonth {
  color:firebrick;
}

.activeDay {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  background-color: lightgray;
  color: white;
  min-width: 1em;
  border-radius: 0%;
  width: -webkit-fill-available;
}

activeDay:before {
  content: "";
  float: left;
  width: auto;
  padding-bottom: 100%;
}
</style>

