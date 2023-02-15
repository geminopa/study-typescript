/**
 * オブジェクトのプロパティが可変のとき、まとめて型を定義できる
 */

// プロパティ名を任意のnumberとして扱う型の定義
type SupportVersions = {
    [env: number]: boolean;
}

// stringのプロパティに定義した場合エラーが起きる
let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
    'v105': true// errorになる
}

