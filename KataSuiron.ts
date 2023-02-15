/**
 * ex.1
 */
const age = 10;
console.log(age.length);    // エラー：ageはnumber型なのでlengthプロパティはない


/**
 * ex.2
 * 関数の戻り値
 */
function getUser() {
    return {
        name: 'Takuya',
        age: 36
    }
}

const user = getUser();
console.log(user.age.length);   //エラー：同上


/**
 * ex.3
 * 配列の型推論
 */

const names = ['Takuya', 'Yoshiki', 'Taketo'];

names.forEach((name) => {
    console.log(name.toUppercase());
})
// string型として扱われるため、関数名を間違えている呼び出しはコンパイル時にエラーになる
// 本来はtoUpperCase が正しい


