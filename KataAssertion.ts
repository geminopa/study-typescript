// 変数 = 値 as 値

/**
 * TypeScriptが具体的な型を知ることのできないケース
 * document.getElementByIdを使用する場合、TSはHTMLElementが帰ってくるということしかわからず、それがdivなのか、canvasなのかの判定は自動でしてくれない
 * 下記は、document.getElementById()が返すのはHTMLElenetで、HTMLCanvasElenetではないため型が合わないというエラー
 */
const myCanvas = document.getElementById('main_canvas');
console.log(myCanvas.width);    // error TS2339: Property 'width' does not exists on type 'HTMLElement'.

/**
 * もし開発者がHTMLElementの中でもHTMLCanvasElementであることを知っている場合には、明示的に型を指定することができる
 */

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

/**
 * TSで型アサーションが認められるのは、
 * ・対象となる方に対してより具体的になる型
 * ・より汎化される型
 *  に変換するケース
 */


/**
 * ただし、型アサーションはコンパイル時に型チェックを通過し、実行時にエラーを引き起こす可能性があるため注意
 */