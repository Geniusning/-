<script setup lang="ts">
import { ref,watch } from 'vue'
import JsonEditorVue from 'json-editor-vue'
import { parse, stringify } from 'lossless-json'
import type { Mode } from 'json-editor-vue'

const parser = { parse, stringify }

let jsonVal = ref<any>(
  {
  "tableData": [
    {
      "name": "小明",
      "age": 28
    },
    {
      "name": "小红",
      "age": 54
    }
  ],
  "tableColumn": [
    {
      "prop": "name",
      "label": "姓名"
    },
    {
      "prop": "age",
      "label": "年龄"
    }
  ]
}
)
let layout = 'text-align: left'
let mode = ref<Mode>('text')

const tableData = ref([
  {
    name: '小明',
    age: 28
  },
  {
    name: '小红',
    age: 54
  }
])
let tableColumn = ref([
  {prop: 'name',label: '姓名'},
  {prop: 'age', label:'年龄'}
])
let tableKey = ref(0)
watch(()=>jsonVal.value,(jsonVal)=>{
  console.log('jsonVal', jsonVal);
  tableData.value = JSON.parse(jsonVal).tableData
  tableColumn.value = JSON.parse(jsonVal).tableColumn
  tableKey.value++
  console.log('tableColumn', tableColumn.value);
  console.log('tableData', tableData.value);
  
})



</script>

<template>
  <el-row :gutter="20" style="width:100%;height: 500px">
    <el-col :span="12" style="height:100%; text-align:left">
      <JsonEditorVue  :mode="mode" v-model="jsonVal" />
  </el-col>
    <el-col :span="12">
      <el-table border :data="tableData" :key="tableKey">
        <template v-for="item in tableColumn">
          <el-table-column  :prop="item.prop" :label="item.label"></el-table-column>
        </template>
      </el-table>
    </el-col>
  </el-row>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
