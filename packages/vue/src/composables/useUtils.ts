import {
  AuthEventData,
  AuthenticatorServiceFacade,
  AmplifyUser,
} from '@aws-amplify/ui';

export const facade: AuthenticatorServiceFacade = {
  error: '',
  hasValidationErrors: false,
  isPending: false,
  route: 'setup',
  authStatus: 'configuring',
  socialProviders: ['amazon'],
  initializeMachine: (data?: AuthEventData) => null,
  user: {} as AmplifyUser,
  totpSecretCode: null,
  unverifiedContactMethods: { email: '', phone_number: '' },
  validationErrors: {},
  codeDeliveryDetails: {
    AttributeName: '',
    Destination: '',
    DeliveryMedium: '',
  },
  updateForm: (data?: AuthEventData) => null,
  updateBlur: (data?: AuthEventData) => null,
  resendCode: (data?: AuthEventData) => null,
  signOut: (data?: AuthEventData) => null,
  toFederatedSignIn: (data?: AuthEventData) => null,
  toResetPassword: (data?: AuthEventData) => null,
  toSignIn: (data?: AuthEventData) => null,
  toSignUp: (data?: AuthEventData) => null,
  skipVerification: (data?: AuthEventData) => null,
  submitForm: (data?: AuthEventData) => null,
};
