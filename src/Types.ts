export interface initialUserState {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
  user: null | User;
}

interface User {
  uid: string;
  photoUrl: string;
  email: string;
  displayName: string;
}
