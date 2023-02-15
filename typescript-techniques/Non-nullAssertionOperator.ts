/**
 * コンパイラオプション--strictNullChecksを指定してコンパイルする場合、TSは通常nullの可能性のあるオブジェクトへのアクセスはエラーとして扱う
 * nullでないことを示したいとき、Non-null Assertionという機能で明示的にコンパイラに問題がないことを伝えられる
 * Non-nullを示したい変数などに!を記す
 */

function processUser(user?: User) {
    let s = user!.name
}