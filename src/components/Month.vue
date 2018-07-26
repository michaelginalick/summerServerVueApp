<template>
  <div id="month">
    <table class="ui celled table">
      <tableHead />
      <tbody>
        <template v-for="weeks in month" >
          <tr class="textAlignRight" v-bind:key="weeks.id">
            <template v-for="day in weeks">
              <td v-if="day.dayNumber === 0" v-bind:key="day.id">
              </td>
              <td v-else-if="day.dayNumber > 0 && day.dayNumber != 100" 
                v-bind:class="[{ activeDay: day.activeDay, nextMonth: day.nextMonth }]"
                v-bind:key="day.id"
              >
                {{day.dayNumber}}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>

import TableHead from "./TableHead.vue";

export default {
  name: "month",

   components: {
    tableHead: TableHead,
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

  computed: {},

  methods: {
    getMonth(arg) {
      console.log(arg);
    }
  }
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

.textAlignRight {
  text-align: right;
}

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
