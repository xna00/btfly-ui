<template>
   <Demo :component="Toast1"/> 
   <Demo :component="Toast2"/>
</template>
<script lang="ts">
import Toast1 from '/@demos/toasts/Toast1.vue'
import Toast2 from '/@demos/toasts/Toast2.vue'
import Demo from './Demo.vue'
export default {
    components:{
        Demo
    },
    setup(){
        return {Toast1, Toast2}
    }
}
</script>