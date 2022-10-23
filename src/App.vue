<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

type IUserInfo  = {
  name: string
  age: number
}
let useInfo = ref<IUserInfo>({
  name:'xxx',
  age:15
})

let str = ref('hello3')
let age = ref(10)

let businessArr = ref([
  [
    {
      name: 'liuning',
      age: age.value
    }
  ]
])


  setTimeout(() => {
    useInfo.value.name = 'gaosui',
    useInfo.value.age = 15
    str.value = 'how are you'
    age.value = 100
    businessArr.value = [
  [
    {
      name: 'liuning',
      age: age.value
    }
  ]
]
    console.log('father', businessArr.value);
    
  }, 2000);
  
</script>

<template>
  <div>
    
      <img src="/vite.svg" class="logo" alt="Vite logo" />
   
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" :use-info="useInfo" :str="str" :businessArr="businessArr" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
