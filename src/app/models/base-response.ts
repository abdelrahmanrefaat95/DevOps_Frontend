export class BaseResponse {
  id: number;
  replyCode: number;
  replyMessage: string;


  constructor(id: number, replyCode: number, replyMessage: string) {
    this.id = id;
    this.replyCode = replyCode;
    this.replyMessage = replyMessage;
  }
}
