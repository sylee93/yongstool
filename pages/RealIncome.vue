<template>
  <div class="w-100 overflow-x-scroll">
    <table class="m-auto border-t-1 border-slate-300 border-collapse text-xs">
      <tr>
        <th class="border-b-2 border-slate-500 min-w-[70px]">연봉</th>
        <th class="border-b-2 border-slate-500 min-w-[50px]">실수령액</th>
        <th class="border-b-2 border-slate-500 min-w-[70px]">공제액합계</th>
        <th class="border-b-2 border-slate-500 min-w-[65px]">월급</th>
        <th class="border-b-2 border-slate-500 min-w-[55px]">국민연금</th>
        <th class="border-b-2 border-slate-500 min-w-[55px]">건강보험</th>
        <th class="border-b-2 border-slate-500 min-w-[55px]">장기요양</th>
        <th class="border-b-2 border-slate-500 min-w-[45px]">고용보험</th>
        <th class="border-b-2 border-slate-500 min-w-[50px]">소득세</th>
        <th class="border-b-2 border-slate-500 min-w-[50px]">지방소득세</th>
      </tr>
      <tr v-for="(a,i) in realIncome" :key="i">
        <td v-if="i%2==0" class="text-center bg-slate-200 min-w-[50px]">{{realIncome[i].연봉}}</td>
        <td v-else class="text-center min-w-[50px]">{{realIncome[i].연봉 }}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].실수령액)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].실수령액)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].공제액합계)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].공제액합계)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].월급)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].월급)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].국민연금)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].국민연금)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].건강보험)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].건강보험)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].장기요양)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].장기요양)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].고용보험)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].고용보험)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].소득세)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].소득세)}}</td>
        <td v-if="i%2==0" class="text-center bg-slate-200">{{comma(realIncome[i].지방소득세)}}</td>
        <td v-else class="text-center">{{comma(realIncome[i].지방소득세)}}</td>
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
  methods:{
    comma(val){
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  // meta 태그 작성
  head: {
    title: '연봉 실수령액 표 - 2022년 직장인 연봉별 실수령액 표',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '2022년 직장인 연봉별 실수령 세후 월급 및 4대보험 세금 분포 표 ',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '2022년, 실수령, 직장인, 연봉, 세후, 월급, 보험료, 4대보험',
      }
    ]
  }
}
</script>

<style>
</style>