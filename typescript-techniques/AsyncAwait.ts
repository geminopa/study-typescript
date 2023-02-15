// 非同期関数の定義
function fetchFromServer(id: string): Promise<{success: boolean}> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({success: true})
        }, 100)
    })
}

// 非同期処理を含むasync functionの戻り値の型はPromiseとなる
async function asyncFunc(): Promise<string> {
    // Promiseな値をawaitすると中身が取り出せる（ように見える）
    const result = await fetchFromServer('111')
    return `The result: ${result.success}`
}

// await構文を使うためにはasync functionの中で呼び出す必要がある
(async () => {
    const result = await asyncFunc()
    console.log(result)
})()

// Promiseとして扱う際は以下のように記述する
asyncFunc().then(result => console.log(result))