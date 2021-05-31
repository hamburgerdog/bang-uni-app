// 请求返回时不能直接使用Welfare而是在ResponseEntity封装后的数据中获取
declare class Welfare {
  public uuid: string     //  null
  public title: string
  public content: string
  //  类型为：时间戳
  public createTime: Date  // null
  //  备注
  public tips: string     //  null
  //  图片路径
  public images: Array<string>  //  null
  //  分类 寻物启事 | 失物招领 | 校园帮帮
  public category: string
  // public issuerId: string
  //  分类 tel: | qq: | email: | wx:
  public contactInfo: string
  //  具体时间：最终转化成时间戳
  public deadline: Date
  // public consultants_id : Array<string>
}


declare class WelfareAPI {
  /**
   * 创建公益订单
   * @param welfare 数据对象不包含uuid
   * @returns 完整的订单信息 - 不能直接返回Welfare而是在ResponseEntity封装后的数据中获取
   */
  public createWelfare(welfare: Welfare): Welfare {
    return;
  }

  /**
   * 下滑获取数据
   * @param limited 要查询的条数
   * @returns 公益对象数组
   */
  public getWelfares(beginIndex: number, limited: number): Welfare[] {
    return;
  }

  /**
   * 根据关键字获取数据
   * @param keyWord 搜索关键字
   * @returns 公益对象数组
   */
  public searchWelfaresByTitle(keyWord: string): Welfare[] {
    return;
  }

  /**
   * 
   * @param openId 根据当前用户查询
   * @returns 
   */
  public getOwnWelfares(openId: string): Welfare[] {
    return;
  }

  /**
   * 删除公益对象
   * @param welfareId 公益对象id
   * @returns 删除成功与否
   */
  public delWelfare(welfareId: string): boolean {
    return;
  }

  // public updateWelfare()
}