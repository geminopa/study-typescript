/**
 * 型エイリアス、インタフェース、クラスにおいてreadonlyプロパティを指定できる
 * readonlyを指定されたプロパティは変更不可になる
 */

type User3 = {
    readonly name: string;
    readonly gender: string;
}

let user: User3 = { name: 'Takuya', gender: 'Male' }

// 以下の代入を行った際にコンパイル時エラーが起きる
user.gender = 'Female'

/**
 * JSの再代入不可の機能としてconstがあるが、用途が異なる
 * constは変数の代入に対して行い、readonlyはオブジェクトやクラスのプロパティに対して行う宣言
 * コンパイル時にエラーを検知できる
 * Readonly型というジェネリック型も存在する
 * Readonly型に型エイリアスを指定すると、すべてのプロパティが変更不可の型が作成される
 */

type User4 = {
    name: string;
    gender: string;
}

type UserReadonly = Readonly<User4>

let user4: User4 = { name: 'Takuya', gender: 'Male' }
let userReadonly: UserReadonly = { name: 'Takuya', gender: 'Male' }

user4.name = 'Yoshiki'   // OK
userReadonly.name = 'Yoshiki'   // コンパイル時エラーが起きる