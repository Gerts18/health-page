interface UserData {
    email?: string;
  }
  
  const sharedData: UserData = {};
  
  export const setUserEmail = (email: string) => {
    sharedData.email = email;
  };
  
  export const getUserEmail = (): string | undefined => {
    return sharedData.email;
  };