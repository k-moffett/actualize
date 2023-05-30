import { SignUp } from '@/components/cognito-authentication/sign-up';
import { SignIn } from '@/components/cognito-authentication/sign-in';
import { ForgotPassword } from '@/components/cognito-authentication/forgot-password';
import { useState } from 'react';
import { UserAuthActions } from '@shared/enums';

export const CognitoAuthentication = () => {
    const [userAction, setUserAction] = useState(UserAuthActions.SIGN_UP);
    const UserAuthForm = {
        [UserAuthActions.FORGOT_PASSWORD]: <ForgotPassword />,
        [UserAuthActions.SIGN_IN]: <SignIn />,
        [UserAuthActions.SIGN_UP]: <SignUp />
    };

    return(
        <>
            { UserAuthForm[userAction] }
            { userAction !== UserAuthActions.SIGN_IN &&
                <button onClick={() => setUserAction(UserAuthActions.SIGN_IN)}>Go to Sign In</button>
            }
            { userAction !== UserAuthActions.SIGN_UP &&
                <button onClick={() => setUserAction(UserAuthActions.SIGN_UP)}>Go to Sign Up</button>
            }
            { userAction !== UserAuthActions.FORGOT_PASSWORD &&
                <button onClick={() => setUserAction(UserAuthActions.FORGOT_PASSWORD)}>Go to Forgot Password</button>
            }
        </>
    );
};
