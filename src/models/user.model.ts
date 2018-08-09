export class UserModel{
  public name: string;
  public nick: string;
  public email: string;
  public password: string;
  public password_confirmation: string;

  constructor(){
    this.name = "";
    this.nick = "";
    this.email = "";
    this.password = "";
    this.password_confirmation = "";
  }
}