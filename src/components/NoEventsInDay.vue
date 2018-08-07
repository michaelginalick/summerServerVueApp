<template>
  <div v-if="!this.day && !this.nextMonth">
    <p> There are no events today 😰</p>
  </div>
</template>


<script>
export default {
  name: "noEventsInDay",

  props: {
    day: {
      Object,
      required: true
    },

    nextMonth: {
      Boolean,
      required: true
    }
  }
};
</script>

