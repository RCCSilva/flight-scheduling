import { Result } from '~/types/result'

export function composeResults<Input, Arg1>(
  func1: (input: Input) => Promise<Result<Arg1>> | Result<Arg1>
): (input: Input) => Promise<Result<Arg1>>

export function composeResults<Input, Arg1, Arg2>(
  func1: (input: Input) => Promise<Result<Arg1>> | Result<Arg1>,
  func2: (input: Arg1) => Promise<Result<Arg2>> | Result<Arg2>
): (input: Input) => Promise<Result<Arg2>>

export function composeResults<Input, Arg1, Arg2, Arg3>(
  func1: (input: Input) => Promise<Result<Arg1>> | Result<Arg1>,
  func2: (input: Arg1) => Promise<Result<Arg2>> | Result<Arg2>,
  func3: (input: Arg2) => Promise<Result<Arg3>> | Result<Arg3>
): (input: Input) => Promise<Result<Arg3>>

export function composeResults<Input, Arg1, Arg2, Arg3, Arg4>(
  func1: (input: Input) => Promise<Arg1> | Arg1,
  func2: (input: Arg1) => Promise<Result<Arg2>> | Result<Arg2>,
  func3: (input: Arg2) => Promise<Result<Arg3>> | Result<Arg3>,
  func4: (infer: Arg3) => Promise<Result<Arg3>> | Result<Arg3>
): (input: Input) => Promise<Result<Arg4>>

export function composeResults(...args: any[]) {
  return async (input: unknown) => {
    let parameter = input

    for await (const func of args) {
      const result = await func(parameter)
      if (!result.isOk) {
        return result
      }
      parameter = result.data
    }

    return {
      isOk: true,
      data: parameter,
    }
  }
}
