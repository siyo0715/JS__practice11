// setTimeout(() => {
//     console.log(3);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(1)
//         }, 1000);
//     }, 1000);
// }, 1000);


// Promise


// new Promise(resolve => {
//     setTimeout(() => {
//         console.log(3);
//         resolve();
//     },1000)
// }).then(() => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(2);
//             resolve();
//         }, 1000)
//     });
// }).then(() => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(1);
//             resolve();
//         }, 1000)
//     });
// })



// async使用

func = async () => {//関数に対してasyncと宣言
    await log(3);
    await log(2);   //「この関数は非同期関数」
    await log(1);   //関数の呼び出し前にawait
};//⇨Promiseの結果が帰ってくるまで待つ

log = (num) => {//Promiseを返す関数
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(num);
            resolve();
        },1000)
    })
}
func()