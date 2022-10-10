<template >
  <div class="text-center h-full w-96" >
    <div class="btn cursor-pointer inline-block w-36 h-36 m-5 rounded-3xl shadow-xl text-3xl text-white bg-gradient-to-r from-pink-400 to-blue-400" @click="$router.push('/realincome')">
      <div class="text-center relative top-1/2" style="transform: translateY(-50%)"> 연봉 실 <br>수령액 표 </div>
    </div>
    <div class="btn cursor-pointer inline-block w-36 h-36 m-5 rounded-3xl shadow-xl text-3xl text-white bg-gradient-to-r from-blue-400 to-indigo-400" @click="$router.push('/calcwater')">
      <div class="text-center relative top-1/2" style="transform: translateY(-50%)"> 물타기<br>계산기 </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'IndexPage',
}
</script>

<style>
.btn {
  transition: all 0.3s;
}
.btn:hover{
  transform: scale(1.1);
}
</style>
