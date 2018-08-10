<template>
  <transition name="fade">
    <div class="modal" v-show="this.showModal">
      <div class="modal-content">
        <span class="close" @click="toogle()">&times;</span>
        <div class="align-center">
          <h2>Event Details</h2>
        </div>
          <ul>
            <li>
              <eventName 
                :event="event"
              />
            </li>
            <li>
              <eventLink 
                :event="event"
              />
            </li>
            <li>
              <eventLocation 
                :event="event"
              />
            </li>
          </ul>
          <div class="clearer"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import EventName from "./EventName.vue";
import EventLink from "./EventLink.vue";
import EventLocation from "./EventLocation.vue";

export default {
  name: "eventModal",

  components: {
    eventName: EventName,
    eventLink: EventLink,
    eventLocation: EventLocation
  },

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

/* /* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 50%;
  margin-top: 15%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.modal-content p a {
  word-break: break-all;
}


/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.align-center {
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
}

.clearer {
 height:0;
 clear:both;
}

ul {
   display: flex;
   flex-direction: column;
   background-color: solid whitesmoke; 
}
  
li {
  list-style: none;
  margin:10px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
}

@media screen and (max-width: 600px) {
    ul {
      float: none;
      margin: 0px;
      white-space: normal;
      overflow-y:auto;
    }

    li {
      float: none;
      margin-top: 25px;
      width: 100%;
    }
    
    .modal-content {
      margin: 0;
      border: 1px solid #888;
      width: 100%;
      height: 50%;
      margin-top: 30%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-y:auto;
    }

    .clearer {
      height:0;
      clear:both;
    }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}



</style>
