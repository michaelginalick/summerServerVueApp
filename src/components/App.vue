<template>
  <div id="app">
    <div class="ui huge header">
      <span>
        <arrow 
          :cssClass="leftArrow" 
          :method="getPreviousMonth"
          @previousMonth="getPreviousMonth"
        /> 
      </span>
        {{ this.month().monthName }}
        -
        {{ this.year() }}
      <span> 
        <arrow 
          :cssClass="rightArrow" 
          :method="getNextMonth"
          @nextMonth="getNextMonth"
        /> 
      </span>
    </div>
      <month 
        :eventsThisMonth="eventsInMonth" 
        :month="this.buildMonth" 
        :firstDay="this.firstDayInMonth.name"
      />
  </div>
</template>

<script>
import { apiGet } from "../apiBase/apiRequest";
import Month from "./Month.vue";
import Arrow from "./Arrow.vue";
import { monthNames, dayNames } from "../constants/calendar";

export default {
  name: "app",

  components: {
    month: Month,
    arrow: Arrow
  },

  data() {
    return {
      eventsInMonth: [],
      counter: 0,
      leftArrow: "angle double left icon",
      rightArrow: "angle double right icon",

      currentMonth: () => {
        let date = new Date();
        return date.getMonth();
      },
      currentYear: () => {
        let date = new Date();
        return date.getFullYear();
      },
      loading: false
    };
  },

  computed: {
    daysInCurrentMonth() {
      var now = new Date();
      let calculateMonth = this.currentMonth.call() + 1 + this.counter;

      return new Date(now.getFullYear(), calculateMonth, 0).getDate();
    },

    firstDayInMonth() {
      let date = new Date();
      let firstDay = new Date(
        date.getFullYear(),
        this.currentMonth.call() + this.counter,
        1
      );

      return { name: dayNames[firstDay.getDay()], number: firstDay.getDay() };
    },

    daysArray() {
      let daysInMonth = [];

      for (let i = 0; i < this.daysInCurrentMonth; i++) {
        daysInMonth.push(1);
      }
      return daysInMonth;
    },

    buildMonth() {
      let month = new Array();
      let innerCounter = 1;
      let nextMonthDayCounter = 1;
      let dayCounter = 1;
      let monthStarted = false;
      let monthStart = this.firstDayInMonth.number;

      for (let i = 0; i < 6; i++) {
        let week = [];
        for (let j = 0; j < 7; j++) {
          if (j < monthStart && monthStarted == false) {
            week.push({ dayName: null, dayNumber: 0 });
            continue;
          } else {
            monthStarted = true;
          }

          if (innerCounter <= this.daysArray.length) {
            week.push({
              dayName: dayNames[j],
              activeDay: this.isToday(innerCounter),
              dayNumber: innerCounter++
            });
          } else {
            week.push({ dayNumber: nextMonthDayCounter++, nextMonth: true });
          }
        }
        month[i] = week;
      }
      return month;
    }
  },

  created() {
    // try {
    //   const data =  apiGet(`events_by_month/${this.getEventsByCurrentMonth()}`)
    //   data.then((res) => {
    //     this.eventsInMonth = res
    //   })
    // } catch(err) {
    //   console.log(err)
    // }
  },

  methods: {
    currentPointer() {
      return this.currentMonth.call() + this.counter;
    },

    year() {
      let pointer = this.currentPointer();

      if (pointer % 12 === 0) {
        let incrementYear = this.currentYear.call();
        return (incrementYear += 1);
      }

      return this.currentYear.call();
    },

    month() {
      let pointer = this.currentPointer() % monthNames.length;

      if (pointer < 0) {
        pointer = 11;
      }

      return { monthName: monthNames[pointer], monthNumber: pointer + 1 };
    },

    getEventsByCurrentMonth() {
      return monthNames[this.currentMonth.call()];
    },

    getNextMonth() {
      this.counter++;

      this.month();
    },

    getPreviousMonth() {
      this.counter--;

      this.month();
    },

    isToday(innerCounter) {
      let today = new Date();
      let isCurrentMonth = today.getMonth() + 1 === this.month().monthNumber;

      if (today.getDate() === innerCounter && isCurrentMonth) {
        return true;
      }
      return false;
    }
  }
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
  text-align: center;
  width: 80%;
  margin-left: 10%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.55s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
