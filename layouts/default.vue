<template>
    <div class="w-[100vw]">
        <div id="top-nav" >
            <header class="flex justify-center space-x-4">
                <NuxtLink class="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to="/">홈페이지</NuxtLink>
                <NuxtLink class="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to="/RealIncome">연봉실수령액</NuxtLink>
                <NuxtLink class="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to="/WaterRide">물타기계산기</NuxtLink>
            </header>
            <h1 class="text-center font-bold text-2xl my-10">{{ $route.name }}</h1>
        </div>
        <div id="main-view" class="w-full flex justify-center mt-10">
            <Nuxt />
            <!--<Nuxt></Nuxt>
            <router-view></router-view>-->
        </div>
        <div>
            <MainFooter/>
        </div>
    </div>
</template>

<script>
import MainFooter from "../components/MainFooter.vue";
export default {
    data() {
        return {
            
        }
    },
    components: {
        MainFooter,
    },
}
</script>
