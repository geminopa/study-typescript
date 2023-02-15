/**
 * anyと同じくどのような値も代入できる型
 * anyと異なり、代入された値はそのまま任意の関数やプロパティにアクセスできない
 * typeofやinstanceofなどを利用して型安全な状況をつくることで変数の値にアクセスを行い関数などの処理を実行できる
 */

// anyと同様にどんな値でもunknownとして代入できる
const x: unknown = 123
const y: unknown = 'Hello'

// 関数やプロパティにアクセスした際に、unknown型そのままではコンパイル時にエラーが起きる
// error TS2339: Property 'toFixed' does not exist on type 'unknown'
console.log(x.toFixed(1))
// error TS2339: Property 'toLowerCase' does not exist on type 'unknown'
console.log(y.toLowerCase())

// 型安全な状況下で関数やプロパティにアクセスできる
if (typeof x === 'number') {
    console.log(x.toFixed(1))   // 123.0
}

if (typeof y === 'string') {
    console.log(y.toLowerCase())    // hello
}