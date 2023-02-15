/**
 * クラスや関数において、その中で使う型を抽象化し外部から具体的な型を指定できる機能
 * 外側から指定される型が異なっても動作するような汎用的なクラスや関数を実装する際に便利
 */

// Tはクラス内で利用する仮の型の名前
class Queue<T> {
    // 内部にTの型の配列を初期化する
    private array: T[] = []

    // Tの型の値を配列に追加する
    push(item: T) {
        this.array.push(item);
    }

    // Tの型の配列最初の値を取り出す
    pop(): T | undefined {
        return this.array.shift()
    }
}

const queue = new Queue<number>()   // 数値型を扱うキューを生成
queue.push(111);
queue.push(112);
queue.push('hoge');  // number型でないのでコンパイル時にエラーになる
let str = 'fuga';
str = queue.pop();  // strはnumber型でないのでコンパイル時にエラーになる

