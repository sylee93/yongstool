<template>
  <div class="text-center h-full w-96" >
    <!-- 조회 대상 종목의 시세 -->
    <div class="inline-block mt-3 mr-2 w-36">
      <label for="curPrice" class="block text-lg font-medium text-gray-500">대상 종목 시장가</label>
    </div>
    <div class="inline-block mt-3 mr-2 w-52">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm ">₩</span>
        </div>
        <input id="curPrice" v-model="curPrice" type="number" name="curPrice" 
          class="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           placeholder="0" @change="calTotalMoney" />
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">원</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 보유 종목 정보-->
    <div class="inline-block mt-10 mr-2 w-40">
      <label for="avgPrice" class="block text-sm font-medium text-gray-500">보유 평균 단가</label>
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm ">₩</span>
        </div>
        <input id="avgPrice" v-model="avgPrice" type="number" name="avgPrice"  
          class="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
          placeholder="0" @change="calTotalMoney" />
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">원</span>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block w-40 ml-2 ">
      <label for="curQuantity" class="block text-sm font-medium text-gray-500">보유 수량</label>
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <input id="curQuantity" v-model="curQuantity" type="number" name="curQuantity"
          class="block w-full text-right rounded-md border-gray-300 pl-3 pr-5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
          min="0" placeholder="0" @keyup="calTotalMoney"/>
      </div>
    </div>
    <div class="flex w-full justify-center my-2 ">
      <label class="block text-base font-medium text-gray-500">보유잔고 : {{this.balance}} 원</label>
    </div>

    <hr>

    
    <div class="inline-block mt-5 mr-2 w-32">
      <select v-model="flag" class="text-base w-28 pl-2 font-medium text-gray-500 rounded-md shadow-sm border-solid border-2">
        <option value="0">투입금액</option>
        <option value="1">투입수량</option>
        <option value="2">목표단가</option>
      </select>
    </div>

    <!-- 투입금액 대비 평단 계산 -->
    <div v-if="this.flag === 0" class="inline-block mt-10 mr-2 w-48">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm ">₩</span>
        </div>
        <input id="insertMoney" v-model="insertMoney" type="number" name="insertMoney" 
          class="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
          placeholder="0" @focus="calTotalMoney" />
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">원</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 투입 수량 평단 계산 -->
    <div v-if="this.flag === 1" class="inline-block mt-10 mr-2 w-48">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <input id="insertQuantity" v-model="insertQuantity" type="number" name="insertQuantity" 
          class="w-full text-right rounded-md border-gray-300 pl-3 pr-10 sm:text-sm pr-5 "
          placeholder="0" @focus="calTotalMoney"/>
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">개</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 목표단가까지의 필요 수량 계산 -->
    <div v-if="this.flag === 2" class="inline-block mt-10 mr-2 w-48">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm ">₩</span>
        </div>
        <input id="targerPrice" v-model="targetPrice" type="number" name="targerPrice" 
          class="block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
          placeholder="0" @focus="calTotalMoney"  />
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">원</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 계산 버튼 -->
    <div class="ml-2 pt-3">
      <button class="h-10 px-5 w-60 rounded-xl bg-gradient-to-r from-pink-200 to-purple-200 text-gray-600 scale-90 hover:scale-100" @click="calculator(flag)">계산하기</button>
    </div>

    <div v-if="this.flag === 0 || this.flag === 1" class="inline-block w-30 ml-2 mt-3 ">
      <label for="preAvgPrice" class="text-lg font-medium text-gray-500">예상 평균 단가</label>
    </div>
    <div v-if="this.flag === 2" class="inline-block w-30 ml-2 mt-3 ">
      <label for="" class="text-lg font-medium text-gray-500">추매 수량</label>
    </div>
    
    <!-- 예상 평균 단가 -->
    <div v-if="this.flag === 0 || this.flag === 1" class="inline-block w-44 ml-2 mt-3">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm ">₩</span>
        </div>
        <input v-if="this.flag === 0" id="preAvgPrice" v-model="preAvgPrice" type="number" name="preAvgPrice"  readonly
        class="read-only:bg-gray-100 block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-s" min="0" placeholder="0" />
        <input v-if="this.flag === 1" id="preAvgPrice" v-model="preAvgPrice" type="number" name="preAvgPrice" readonly
        class="read-only:bg-gray-100 block w-full rounded-md border-gray-300 pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-s" min="0" placeholder="0" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm ">원</span>
          </div>
        </div>
      </div>
    </div>
   
    <!-- 필요 수량 -->
    <div v-if="this.flag === 2" class="inline-block w-44 ml-2 mt-3">
      <div class="relative mt-1 rounded-md shadow-sm border-solid border-2">
        <input id="needQuantity" v-model="needQuantity" type="number" name="needQuantity" readonly
        class="read-only:bg-gray-100 w-full text-right rounded-md border-gray-300 pl-3 pr-10 sm:text-sm pr-5" min="0" placeholder="0" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <span class="text-gray-500 sm:text-sm ">개</span>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>

export default {
  
  data() {
    return {
      avgPrice: "",
      curQuantity:"",
      balance: 0,
      needQuantity: 0,
      targetPrice: "",
      curPrice: "",
      insertMoney: "",
      preAvgPrice: 0,
      insertQuantity: "",
      flag: 0,
    }
  },

  methods: {
    // 보유 잔고 계산
    calTotalMoney(){
      this.balance = this.avgPrice*this.curQuantity
    },
    // 목표단가 대비 필요수량 계산
    calculator(status){
      const curPrice = this.curPrice ? this.curPrice : 0; // 시장가
      const avgPrice = this.avgPrice ? this.avgPrice : 0; // 평균단가
      const balance = this.balance; // 보유잔고
      const curQuantity = this.curQuantity; // 현재 보유 수량
      
      if(status === 0){
        const insertMoney = this.insertMoney;
        this.preAvgPrice = Math.ceil((insertMoney + balance) / ((insertMoney / curPrice) + curQuantity) * 100 ) / 100;
      } else if (status === 1){
        const insertQuantity = this.insertQuantity;
        this.preAvgPrice = Math.ceil((balance + (insertQuantity * curPrice)) / (insertQuantity + curQuantity) * 100) / 100; 
      } else if (status === 2){
        //  유효성 체크
        const targetPrice = this.targetPrice ? this.targetPrice : 0;

        // 시장가보다 목표 단가가 높을 경우
        if(curPrice === 0 || avgPrice === 0 || targetPrice === 0){
          alert("시장가, 보유평단, 목표단가 항목은 필수 입력 사항입니다.");
        }
        // 평단이 시장가보다 낮을 때 목표단가는 평단보다 낮게 잡을 수 없다
        else if((this.avgPrice <= this.curPrice)){
          alert("대상 종목의 시장가 보다 보유 평단이 낮으므로\n물타기를 할 수 없습니다.");
        }

        let temp = 0;
        let temp2 = 0;
        temp = (this.targetPrice * this.curQuantity);
        temp = temp - this.balance;
        temp2 = this.curPrice - this.targetPrice;
        this.needQuantity = Math.ceil((temp / temp2) * 10) / 10;
      }
      
    },
  },
  head: {
    title: '물타기 계산기 - 국내 및 해외 자산의 물타기 계산기',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '국내 및 해외 또는 코인 자산등의 물타기계산기 투입금액 및 수량 또는 목표단가등 다양한 방식으로 계산하는 물타기 계산기',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '국내주식, 해외주식, 코인, 물타기, 목표단가, 추매, 추가구매, 불타기',
      }
    ]
  }
}
</script>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
  /* Firefox  */
  input[type='number'] {
  -moz-appearance: textfield;
}
</style>