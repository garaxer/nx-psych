import { createContext, Dispatch, useReducer, useContext } from 'react';

type UserProfile = {
  name?: string;
  roles?: string[];
};
export type UserState = {
  isLoading: boolean;
  identity?: UserProfile;
  error?: Error;
};

export type UserIdentity = {
  state: UserState;
  isLoggedIn: () => boolean;
  isInRole: (roleName: string) => boolean;
};

type UserAction =
  | { type: 'GET_USER_PROFILE_STARTED' }
  | { type: 'GET_USER_PROFILE_SUCCESS'; data: UserProfile }
  | { type: 'GET_USER_PROFILE_ERROR'; error: Error };

interface ProviderProps {
  children: React.ReactNode;
}

const initialState: UserState = {
  isLoading: false,
};

const UserStateContext = createContext<UserIdentity | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch<UserAction> | undefined>(
  undefined
);

export const reducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'GET_USER_PROFILE_STARTED':
      return { ...state, isLoading: true };
    case 'GET_USER_PROFILE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        identity: action.data,
      };
    case 'GET_USER_PROFILE_ERROR':
      return { ...state, isLoading: false, error: action.error };
    default: {
      return state;
    }
  }
};

const UserProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isLoggedIn = (): boolean => {
    return !!state.identity;
  };

  const isInRole = (roleName: string): boolean => {
    return state?.identity?.roles?.includes(roleName) || false;
  };

  const contextValue = {
    state,
    isLoggedIn,
    isInRole,
  };

  return (
    <UserStateContext.Provider value={contextValue}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = (): UserIdentity => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

const useUserDispatch = (): Dispatch<UserAction> => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};

// ###########################################################

const userActions = {
  getUserProfile: async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: 'GET_USER_PROFILE_STARTED' });
      const user: UserProfile = { name: 'Gary', roles: ['admin'] };
      dispatch({ type: 'GET_USER_PROFILE_SUCCESS', data: user });
    } catch (e) {
      dispatch({ type: 'GET_USER_PROFILE_ERROR', error: e as Error });
    }
  },
};

export { UserProvider, useUserState, useUserDispatch, userActions };
