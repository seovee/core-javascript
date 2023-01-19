

import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from './typeOf.js';


const first = getNode('.first');
const second = getNode('.second');




function delay(callback,timeout = 1000){
  setTimeout(callback, timeout);
}





// 초기값
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}


//^ 딜레이 + 프라미스 콜라보 사용하기
export function delayP(options = {}){

  //^ 얕은 복사한것(기본값 변형이 없도록 하는 것) => 기본을 깐다
  let config = {...defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }

  if(isObject(options)){
  //^ 객체 합성 mixin => 디폴트 값이랑 새로운 값이랑 대체를 해야한다.
  config = {...config, ...options};
  }



  //^ shouldReject?
  const {shouldReject,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {

    setTimeout(()=> {
      // if(!shouldReject){
      //   resolve('성공');
      // }else {
      //   reject(errorMessage);
      // }
      !shouldReject ? resolve(data) : reject(errorMessage);
  }, timeout);
  });
}

// delayP(true).then((res)=>{
//   console.log(res);
// });







//^ 함수실행 -> 체이닝으로 표시한 것!
// delayP()
// .then((res)=>{console.log(res)})        // 더 줄여서 쓸 수 있음 그것은 연구해봐!
// .catch((err)=>{console.log(err)})       // 더 줄여서 쓸 수 있음 그것은 연구해봐!





// //^ 간단한 애니메이션
// delayP()

// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '0px';
// })








//* ---------------- async await ---------------------


// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await :  1. promise가 반환하는 result를 가져오기.
//          2. 코드 실행 흐름 제어 


async function delayA(){
  return '완료'
}

let result = await delayA();


//* 라면끓이기 어웨이트 딜레이로 만든 것!
// async function 라면끓이기(){

//   try{

//     await delayP()
//     first.style.top = '-100px';

//     await delayP()
//     first.style.transform = 'rotate(360deg)';

//     await delayP()
//     first.style.top = '0px';

//     await delayP()
//     console.log('계란넣기');

//     throw new Error('계란 껍질이 들어가버렸다!');
//     await delayP()
//     console.log('그릇에담기');

//   }catch(err){
//       console.log(err);
//   }
// }

// 라면끓이기()