import {IProfile} from '../../../common/models/user.model';

export class User extends IProfile {
  email!: string;
  password!: string;
}
