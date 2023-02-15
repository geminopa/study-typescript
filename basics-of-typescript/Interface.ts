/**
 * ex.1
 */

interface Point2 {
    x: number;
    y: number;
}

function printPoint2(point2: Point2) {
    console.log(`x座標は${point2.x}です`);
    console.log(`y座標は${point2.y}です`);
    console.log(`z座標は${point2.z}です`);
}

/**
 * インターフェースは拡張可能
 * ※型エイリアスは後から同盟での型定義はできない
 */
interface Point2 {
    z: number;
}

// 引数のオブジェクトにzが存在しないためコンパイル時にエラー
printPoint2({ x: 100, y: 100 });

// 問題なく動作する
printPoint2({ x: 100, y: 100, z: 200 });

/**
 * インタフェースはクラスのふるまいの型を定義し、implementsを使用してクラスに実装を与えること（移譲）が可能
 */

interface Point3 {
    x: number;
    y: number;
    z: number;
}

// クラスがインタフェースをimplementsした際に、zが存在しないためコンパイル時エラーとなる
class MyPoint implements Point3 {
    x: number;
    y: number;
}

/**
 * プロパティに?を定義すると、オプショナルなプロパティになる
 */

interface Point4 {
    x: number;
    y: number;
    z?: number;
}

// この場合エラーは発生しない
class MyPoint implements Point4 {
    x: number;
    y: number;
}

/**
 * インタフェースはextendsを使ってほかのインタフェースを拡張可能
 */

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {
    color: '赤',
    radius: 10
}

/**
 * インタフェース：クラスやデータの一側面を定義した型、つまりインタフェースにマッチする型でもその値以外にほかのフィールドやメソッドがある前提のもの
 * 型エイリアス：オブジェクトの型そのものを表す
 * クラスやオブジェクトの一部のプロパティや関数含む一部のふるまいを定義するのであれば、インタフェースを利用するのが望ましい
 * 
 */