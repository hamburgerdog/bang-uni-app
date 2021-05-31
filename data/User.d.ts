declare class User {
  public openId: string
  public nickName: string
  public userName: string // null
  public picUrl: string   // null
  public telephone: string // null
  // public balance : number 
}

declare class UserApi {
  /**
   * getUserprofile()后 向服务器注册|登录的接口
   * @param nickName 用户昵称
   * @param picUrl 用户头像地址
   * @param rawData 用于计算签名
   * @param signature 用于验证
   * @param encryptedData 加密数据
   * @param iv 解密向量
   */
  // public postUserProfile(nickName: string, picUrl: string, rawData: string, signature: string, encryptedData: string, iv: string, sessionKey: string) {

  // }


  /**
   * 发送code给后端以拿到用户数据
   * @param code login()返回的用于拿到openId
   * @returns  用户对象
   */
  public login(code: string): User {
    return;
  }

  /**
   * 注册功能以拿到用户数据
   * @param nickName 名称
   * @param picUrl 头像
   * @param code 用于获取openid
   * @returns 用户对象
   */
  public register(nickName: string, picUrl: string, code: string): User {
    return;
  }
}