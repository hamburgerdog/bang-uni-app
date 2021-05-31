declare class Deliver {
  public deliverId: string
  public createTime: Date
  // 已结束（完成、取消、异常） | 未接单 | 已接单未完成
  public deliverStatus: string
  // 梅苑 | 菊苑 | 兰苑 | 竹苑 | 其他
  public destinationCategory: string
  public destination: string
  // 菜鸟 | 丰巢 | 顺丰 | 京东 | 其他
  public pickUpAddress: string
  //  具体时间最终转换成时间戳
  public deadline: Date
  public commission: number
  public publisherId: string
  public recipientId: string  // null
  //  快递描述：重量 | 物品大小 
  public briefInfo: string
  public packageNumbers: number
}

declare class DeliverAPI {
  /**
   * 创建快递请求
   * @param Deliver 仅包含必要数据的表单对象
   * @returns 完整的快递对象
   */
  public createDeliver(Deliver): Deliver {
    return
  }

  /**
   * 接受订单请求
   * @param openId 接单用户的ID
   * @param deliverId 被接单的ID
   * @returns 返回一个更新后的订单信息
   */
  public acceptDeliver(openId:string,deliverId:string):Deliver {
    return
  }
}