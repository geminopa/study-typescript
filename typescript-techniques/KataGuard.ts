/**
 * if文やswitch文の条件分岐にて型のチェックを行った際、その条件分岐ブロック以降は変数の型を絞り込まれる推論が行われる
 * numberとstringのUnion型で定義された引数をtypeofを用いてstring型の判定をするif文を記述
 * ifブロック以降の引数である変数は自動的にnumber型であると扱われる
 */

function addOne(value: number | string) {
    if (typeof value === 'string') {
        return Number(value) + 1
    }
    return value + 1
}

console.log(addOne(10)) // 11
console.log(addOne('20'))   // 21

/**
 * 型ガードの機能を用いると、実行時エラーを引き起こしやすいasを使用する型アサーションよりも安全に型を利用したコードを書ける
 * オプショナルのプロパティとして定義された値をif文で絞り込む際も同様に型ガードの機能により、if文の中ではnull安全なプロパティとして扱うことができる
 */

// オプショナルプロパティでinfoを定義
type User = {
    info?: {
        name: string;
        age: number;
    }
}

let response = {}
// responseはJSON形式のAPIレスポンスが代入されている想定。Userに型アサーション
const user = (response as any) as User

// オプショナルのプロパティへの型ガードを行う
if (user.info) {
    // オプショナルプロパティは以下のプロパティであるuser.info.nameにアクセスしてもエラーが起きない
    // もしifの条件がない場合は Object is possibly 'undefined' というエラーが発生する
    console.log(user.info.name)
}