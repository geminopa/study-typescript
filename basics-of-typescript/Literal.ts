/**
 * |でデータを区切るリテラル型を用いると、決まった文字列や数値しか入らない型という制御ができる
 * 変数: 許可するデータ1 | 許可するデータ2 | ...
 */


let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft' // OK
postStatus = 'drafts'   // 型宣言にない文字列が割り当てられているためエラー