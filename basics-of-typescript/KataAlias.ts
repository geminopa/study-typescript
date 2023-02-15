// type 型名 = 型
// 型名は大文字始まりにすることが一般的

/**
 * ex.1
 * xとyの座標プロパティを持つPointという型エイリアスを定義
 */

type Point = {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
}

printPoint({ x: 100, y: 100 });
// ↓型が合っていてもプロパティ名が異なるとエラー
printPoint({ z: 100, t: 100 });

/**
 * ex.2
 * 関数の型を型エイリアスで定義
 * stringを引数として受け取り、stringの型を返す例
 */

type Formatter = (a: string) => string;

function printName(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName));
}


/**
 * ex.3
 * オブジェクトのキー名を明記せずに型エイリアスを定義する例
 * キー名やキー数が定まらないケースのオブジェクトを定義するときに便利
 */

type Label = {
    [key: string] : string
}

const labels: Label = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature2: 'トップページの機能2です'
}
// 値部分の型が合わないためエラー
const hoge: Label = {
    message: 100
}

