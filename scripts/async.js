// async - await를 더 알아보자!

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function callbackChain() {
    console.log('결제 중');
    await delay(3000); //3초 동안 대기 
    console.log('기다려주셔서 감사합니다~ 배달 출발했습니다!')
    await delay(9000); 
    console.log('배달 완료')
}

callbackChain();