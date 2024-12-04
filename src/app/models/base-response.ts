export class BaseResponse {
  id: number;
  replyCode: string;
  replyMessage: string;


  constructor(id: number, replyCode: string, replyMessage: string) {
    this.id = id;
    this.replyCode = replyCode;
    this.replyMessage = replyMessage;
  }
}
