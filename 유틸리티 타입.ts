// keyof
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "id";

// ----------------------------------------------------------------

// Partial<T>
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};

// ----------------------------------------------------------------

// Required<T>

interface User2 {
  id: number;
  name: string;
  age?: number;
}

let admin1: Required<User2> = {
  id: 1,
  name: "Bob",
  age: 30,
};

// --------------------------------------------

// Readonly<T>

interface User3 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Readonly<User3> = {
  id: 1,
  name: "Bob",
};

// admin2.id = 4;

// -----------------------------------------------

// Record<K, T>

// interface Score {
//   "1": "A" | "B" | "C" | "D";
//   "2": "A" | "B" | "C" | "D";
//   "3": "A" | "B" | "C" | "D";
//   "4": "A" | "B" | "C" | "D";
// }

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

const score: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

// case2

interface User4 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User4) {
  const result: Record<keyof User4, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

// -------------------------------------------------

// Pick<T, K>

interface User5 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const admin5: Pick<User5, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

// ----------------------------------------------

// Omit<T, K>

interface User6 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const admin6: Omit<User6, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

// ------------------------------------------------------

// Exclude<T1, T2>
// T1 type중에서 T2 type과 겹치는 type을 제외하고 사용
// Omit은 property를 제거하고 Exclude는 Type으로 제거한다.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// -------------------------------------------------------

// NonNullable<Type>
// null과 undefined를 제외한 Type

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
