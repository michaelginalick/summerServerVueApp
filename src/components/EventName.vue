<template>
  <div>
    <p> Name: {{event.Name}} </p>
  </div>
</template>

<script>
export default {
  name: "eventName",


  props: {
    event: {
      Object,
      required: true
    }
  }
}
</script>



