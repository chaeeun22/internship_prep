let data = [
    {회원번호:0, 아이디:"red", 성별:"남자", 나이:21},
    {회원번호:1, 아이디:"yellow", 성별:"남자", 나이:17},
    {회원번호:2, 아이디:"orange", 성별:"여자", 나이:16},
    {회원번호:3, 아이디:"green", 성별:"여자", 나이:55},
];

// for(let element of data){
//         if(element.성별=="여자" && element.나이>20);
//         console.log("성별은 $(element.나이)이고 ");
// }
console.log(data[1]);

for(let i = 0; i<data.length; i++){
    if (data[i].성별 == "여자" && data[i].나이 >20){
        console.log(`성별은 ${data[i].성별}이고 나이는 ${data[i].나이}입니다.` );

    }
}