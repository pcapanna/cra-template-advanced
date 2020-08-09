import {GoogleLoginResponse} from 'react-google-login';
import ExtendedUser from "./User";

export default class GoogleUserSerializer {

  public static deserialize(googleUser: GoogleLoginResponse): ExtendedUser {

    const profile = googleUser.getBasicProfile();
    const newUser: ExtendedUser = {
      id: profile.getId(),
      name: profile.getName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail(),
      oauthData: googleUser,
    };

    return newUser;
  }
}
