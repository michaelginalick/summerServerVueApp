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
        {{ this.fetchYear() }}
      <span> 
        <arrow 
          :cssClass="rightArrow" 
          :method="getNextMonth"
          @nextMonth="getNextMonth"
        /> 
      </span>
    </div>
      <month 
        :eventsInMonth="eventsInMonth" 
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
import { groupBy } from "../modules/groupBy";

export default {
  name: "app",

  components: {
    month: Month,
    arrow: Arrow
  },

  data() {
    return {
      eventsInMonth: [],
      leftArrow: "angle double left icon",
      rightArrow: "angle double right icon",
      year: 0,
      counter: new Date().getMonth(),
      currentMonth: () => {
        let date = new Date();
        return date.getMonth();
      },
      initialYear: () => {
        let date = new Date();

        return date.getFullYear();
      },
    };
  },

  computed: {

    daysInCurrentMonth() {
      const currentYear = this.year
      const currentMonth = this.month().monthNumber;

      return new Date(currentYear, currentMonth, 0).getDate();
    },

    firstDayInMonth() {
      const firstDay = new Date(this.year, this.month().monthNumber-1);

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
    this.fetchEventsByMonth(monthNames[this.currentMonth.call()]);
    this.fetchYear();
  },

  methods: {

    fetchYear() {
      if (this.year === 0) {
        this.year = this.initialYear.call();
      }
      return this.year;
    },

    month() {
      return { monthName: monthNames[this.counter], monthNumber: this.counter+1 };
    },

    getNextMonth() {
      let currentMonth = this.month();
      this.counter++;

      if(this.counter > 11) {
        this.counter=0;
      }
      let newMonth = this.month();

      this.willChangeYear(currentMonth, newMonth);
      this.fetchEventsByMonth(newMonth.monthName);
    },

    getPreviousMonth() {
      let currentMonth = this.month();
      this.counter--;

      if(this.counter < 0) {
        this.counter = 11;
      }
      let newMonth = this.month();

      this.willChangeYear(currentMonth, newMonth);
      this.fetchEventsByMonth(newMonth.monthName);
    },

    isToday(innerCounter) {
      const today = new Date();

      const isCurrentMonth = today.getMonth() + 1 === this.month().monthNumber;
      const isCurrentYear = today.getFullYear() === this.year;
      if (today.getDate() === innerCounter && isCurrentMonth && isCurrentYear) {
        return true;
      }
      return false;
    },

    willChangeYear(currentMonth, newMonth) {
      if (currentMonth.monthNumber === 12 && newMonth.monthNumber === 1) {
        this.year += 1;
        return true;
      } else if (
        currentMonth.monthNumber === 1 &&
        newMonth.monthNumber === 12
      ) {
        this.year -= 1;
        return true;
      }
      return false;
    },

    fetchEventsByMonth(currentMonth) {
      this.resetEventsInMonth();
      let year = this.fetchYear();
      try {
        const data = apiGet(`events_by_month/${currentMonth}/${year}`);
        data.then(res => {
          this.eventsInMonth = res;
          this.eventsInMonth = this.eventsInMonth.groupBy("Day");
        });
      } catch (err) {
        console.log(err);
      }
    },

    resetEventsInMonth() {
      return (this.eventsInMonth = []);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.55s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .ui.huge.header {
    font-size: 1.8em;
  }
}
</style>
