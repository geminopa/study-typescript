/**
 * 指定した複数の型の和集合を意味するUnion、積集合を意味するIntersection
 * それぞれ|と&を使用する
 */

/**
 * ex.1
 * Union型
 */

function printId(id: number | string) {
    console.log(id)
}

printId(11) //numberでも正常に動作する
printId('22')   // stringでも正常に動作する


/**
 * ex.2
 * Union型（型エイリアス）
 */

type Identity = {
    id: number | string;
    name: string;
}

type Contact = {
    name: string;
    email: string;
    phone: string;
}

// 和集合による新たなUnion型の定義
// UdentityもしくはContactの型を受けることが可能
type IdentityOrContact = Identity | Contact

// OK
const id: IdentityOrContact = {
    id: '111',
    name: 'Takuya'
}

// OK
const contact: IdentityOrContact = {
    name: 'Takuya',
    email: 'test@example.com',
    phone: '012345678'
}



/**
 * ex.3
 * Intersection型
 */

// 先述のIdentityとContactに対して、積集合による新たなIntersection型の定義をする
type Employee = Identity & Contact

// OK
const employee: Employee = {
    id: '111',
    name: 'Takuya',
    email: 'test@example.com',
    phone: '012345678'
}

// エラー：Contact情報のみでの変数定義はできない。idが必要
const employeeContact: Employee = {
    name: 'Takuya',
    email: 'test@example.com',
    phone: '012345678'
}