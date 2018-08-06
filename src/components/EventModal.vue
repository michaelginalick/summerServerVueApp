<template>
  <transition name="fade">
    <div class="modal" v-show="this.showModal">
      <div class="modal-content">
        <span class="close" @click="toogle()">&times;</span>
        <div class="align-right">
          <h2>Event Details</h2>
        </div>
        <div class="event-details">
          <ul>
            <p> Name: {{event.Name}} </p>
            
            <div v-if="event.Link">
              <p> Link: <a :href="`${event.Link}`"> {{ event.Link }}</a></p>
            </div>
            <div v-else>
              <p> Link: No link was provided</p>
            </div>
            <div v-if="event.Location">
              <p> Location: {{ event.Location }} </p>
            </div>
            <div v-else>
              <p> Location: No location was provided</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "eventModal",

  props: {
    showModal: {
      Boolean,
      required: true
    },

    event: {
      Object,
      required: true
    },
  },


  methods: {
    toogle() {
      this.$emit("toogleModal")
    }
  }
}
</script>

<style>

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(119, 112, 112); /* Fallback color */
  background-color: rgba(119, 112, 112, 0.4); /* Black w/ opacity */
  display: block;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.align-right {
  display: flex;
  align-items: center;
  color: black;
}

.event-details {
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}
.event-details p {
  margin: 0;
  font-size: 1.5em;
  display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}


</style>
