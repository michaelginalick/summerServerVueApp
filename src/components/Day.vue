<template>
  <td v-if="day.dayNumber === 0" v-bind:key="day.id">
  </td>
  <td v-else-if="day.dayNumber > 0 && day.dayNumber != 100" 
    v-bind:class="[{ activeDay: day.activeDay, nextMonth: day.nextMonth }]"
    v-bind:key="day.id"
  >
    {{day.dayNumber}}
  <div class="day">
    <eventsInDay 
      :day="this.mapEventToDay(day)"
      :nextMonth="this.day.nextMonth"
    />
  </div>
  </td>
</template>


<script>

import EventsInDay from "./EventsInDay.vue";

export default {
  name: "day",

  components: {
    eventsInDay: EventsInDay
  },

  props: {
    day: {
      Object,
      required: true
    },

    eventsInMonth: {
      Array,
      required: true
    }
  },

  methods: {

    mapEventToDay(day) {
      let dayEvents = this.eventsInMonth[day.dayNumber]
      
      if (dayEvents && dayEvents.length > 0 && !day.nextMonth) {
        day["events"] = dayEvents
        return day
      }
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
  border-radius: 0%;;
}

.ui.celled.table tr td {
  border: 1px solid rgba(34, 36, 38, 0.1);
}

.day {
  display: flex;
  justify-content: end;
}

</style>

