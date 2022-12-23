<template>
  <div class="overflow-x-scroll">
    <table class="m-auto border-t-1 border-slate-300 border-collapse text-sm">
      <tr>
        <th class="border-b-2 border-slate-500 w-20">연봉</th>
        <th class="border-b-2 border-slate-500 w-24">(세후)연봉 </th>
        <th class="border-b-2 border-slate-500 w-20">(세전)월급</th>
        <th class="border-b-2 border-slate-500 w-24">(세후)월급 </th>
        <th class="border-b-2 border-slate-500 w-20">(연)공제액 </th>
        <th class="border-b-2 border-slate-500 w-20">(월)공제액 </th>
      </tr>
      <tr v-for="(a,i) in realIncome" :key="i">
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{realIncome[i].연봉}}</td>
        <td v-else class="text-center">{{realIncome[i].연봉 }}</td>
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{comma(realIncome[i].실수령액 * 12)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].실수령액 * 12)}}</td>
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{comma(parseInt(realIncome[i].실수령액) + parseInt(realIncome[i].공제액합계))}}</td>
        <td v-else class="text-center">{{comma(parseInt(realIncome[i].실수령액) + parseInt(realIncome[i].공제액합계))}}</td>
        
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{comma(realIncome[i].실수령액)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].실수령액)}}</td>
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{comma(realIncome[i].공제액합계 * 12)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].공제액합계 * 12)}}</td>
        <td v-if="i%2==0" class="text-center" style="background-color: rgb(237 233 254);">{{comma(realIncome[i].공제액합계)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].공제액합계)}}</td>
      </tr>
      
    </table>
    
  </div>
</template>

<script>
import realIncome from '../assets/realIncome.js';

export default {
  data() {
    return {
      realIncome : [...realIncome],
    } 
  },
  
  head: {
    title: '연봉 실수령액 표 - 2023년 직장인 연봉별 실수령액 표',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '2023년 직장인 연봉별 실수령 세후 월급 및 4대보험 세금 분포 표 ',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '2023년, 실수령, 직장인, 연봉, 세후, 월급, 보험료, 4대보험',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '2023년 연봉 실수령액 표',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '실수령 월급 및 각종 세금 정보',
      },
    ]
  },

  methods:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  
}
</script>

<style>
</style>