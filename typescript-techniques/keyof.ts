/**
 * 型に対してkeyofオペレータを用いると、その方が持つ各プロパティの型のUnion型を返せる
 * オブジェクトに存在するキーを使用して何か関数の処理を行いたい際などに安全に実装できる
 */

interface User2 {
    name: string;
    age: number;
    email: string;
}

type UserKey = keyof User2  // 'name' | 'age' | 'email' というUnion型になる

const key1: UserKey = 'name'    // 代入可能
const key2: UserKey = 'phone'   // コンパイル時エラーが起きる
