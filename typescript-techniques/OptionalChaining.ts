/**
 * ネストされたオブジェクトのプロパティが存在するかどうかの条件分岐を簡単に記述できる機能
 * 当機能により?をプロパティアクセス時に用いることでnullまたはundefinedになりうるオブジェクトに対して安全に処理を記述できる
 */

interface User {
    name: string
    social?: {
        facebook: boolean
        twitter: boolean
    }
}

let user: User

user = { name: 'Takuya', social: { facebook: true, twitter: true }}
// trueが出力される
console.log(user.social?.facebook)

user = { name: 'Takuya' }
// socialが存在しないケースでも実行時エラーにならない
console.log(user.social?.facebook)