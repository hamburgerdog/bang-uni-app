declare class Aside {
  public uuid: string
  // 闲置物品简介
  public title: string
  // 两种交易方式：自提|邮递
  public trading: string
  // 闲置详情
  public content: string
  // 图片URL数组
  public images: string[]
  // 热度
  public hot: number
  // 截止日期
  public deadline: Date
  // 生活用品 | 体育用品 | 课本书籍 | 其他
  public category: string
  // 分类 tel: | qq: | email: | wx:
  public contactInfo: string
}