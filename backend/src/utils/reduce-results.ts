import { BadResult, GoodResult, Result } from '~/types/result'

type ResultFunction<T> = () => Promise<Result<T>>

export async function reduceResults<T1>(
  ...args: [ResultFunction<T1>]
): Promise<Result<[T1]>>

export async function reduceResults<T1, T2>(
  ...args: [ResultFunction<T1>, ResultFunction<T2>]
): Promise<Result<[T1, T2]>>

export async function reduceResults<T1, T2, T3>(
  ...args: [ResultFunction<T1>, ResultFunction<T2>, ResultFunction<T3>]
): Promise<Result<[T1, T2, T3]>>

export async function reduceResults<T1, T2, T3, T4>(
  ...args: [
    ResultFunction<T1>,
    ResultFunction<T2>,
    ResultFunction<T3>,
    ResultFunction<T4>
  ]
): Promise<Result<[T1, T2, T3, T4]>>

export async function reduceResults(
  ...funcs: ResultFunction<unknown>[]
): Promise<Result<unknown[]>> {
  const results = await Promise.all(funcs.map((func) => func()))
  const badResults = results.filter((result) => !result.isOk) as BadResult[]

  if (badResults.length === 0) {
    return {
      isOk: true,
      data: (results as unknown as GoodResult<unknown>[]).map(
        (result) => result.data
      ),
    }
  }

  const messages = badResults.flatMap((badResult) => badResult.messages)

  return {
    isOk: false,
    statusCode: 400,
    messages: messages,
  }
}
