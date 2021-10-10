export type Prefectures = {
  prefCode: number
  prefName: string
}

export type PrefecturesResponse = {
  message: string | null | undefined
  result: Prefectures[]
}
