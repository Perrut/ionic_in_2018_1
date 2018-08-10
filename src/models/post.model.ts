export class PostModel {
  public user_id: string;
  public text: string;
  public image_url: string;

  constructor(){
    this.user_id = "";
    this.text = "";
    this.image_url = "";
  }
}