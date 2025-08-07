export interface PersonInterface {
  name: string
  age: number
  // 可以添加更多属性
  // address?: string // 可选属性
  // phone?: string // 可选属性
  //任意多个属性
  [key: string]: any // 任意多个属性
}

export type Persons = PersonInterface[]