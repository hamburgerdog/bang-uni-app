declare class food {
  public uuid: string
  // 二号天桥下 | 广大公寓 | 菊苑保安亭 | 广大正门保安亭 | 广大西门保安亭 | 广大西北门保安亭 | 文俊东楼保安亭 | 其他
  public pickUpAddress: string
  // 理学楼 | 文科楼 | 生活区 | 行政楼 | 生化楼
  public destinationCategory: string
  // 目的地址
  public destination: string
  public deadline: Date
  public commission: number
  public contactInfo: string
  public briefInfo: string
  public pickUpName: string
  // 取餐号 | 手机后四位
  public pickUpNumber: string
  public pickUpPhone: string
  public images: string[]
  // 特殊要求
  public remarks: string
}