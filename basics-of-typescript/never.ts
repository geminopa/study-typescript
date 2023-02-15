/**
 * never型は決して発生しない値の種類を表す
 * 常に例外を発生させる関数など、決して値が返されることのない戻り値の型をneverとして定義したりできる
 */

function error(message: string): never {
    throw new Error(message)
}

function foo(x: string | number | number[]):boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }

    // neverを利用することで明示的に値が帰らないことをコンパイラに伝えることができる
    // neverを使用しないとTypeScrioptはコンパイルエラーになる
    return error('Never happens')
}

/**
 * neverのより有効な使い方として、if文やswitch文でTypeScriptの型の条件分岐に漏れがないことを保証するようなケースがある
 * 以下は、Enumで定義した各ページのタイプとそのタイプに応じたタイトルを返す関数を実装した例
 * 関数内switch文でそれぞれのEnum型のチェックを行った後に明示的にneverを使用することで、将来PageTypeが新しく追加された際にswitch文の実装が漏れているとコンパイルエラーを発生させることができる
 */

enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = (type: PageType) => {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting'
        case PageType.EditProfile:
            return 'Edit Profile'
        case PageType.ChangePassword:
            return 'Change Password'
        default:
            // 決して起きないことをコンパイラに伝えるnever型に代入を行う
            // これにより仮に将来PageTypeのenum型に定数が新規で追加された際に
            // コンパイル時にエラーが起きるため、バグを未然に防ぐことができる
            const wrongType: never = type
            throw new Error(`${wrongType} is not in PageType`)
    }
}