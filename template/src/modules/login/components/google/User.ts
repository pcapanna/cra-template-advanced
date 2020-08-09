import {User} from "../../../../model";

interface UserConstructorParams {
  profileId: string,
  name: string;
  imageUrl: string;
  email: string;
  oauthData: any;
}

interface ExtendedUser extends User{

  imageUrl: string;
  email:string;
  oauthData: any;

}

export default ExtendedUser;
