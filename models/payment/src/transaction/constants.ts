export const TRANSACTION_TYPE = {
  AUTHORIZATION: 'Authorization',
  CANCEL_AUTHORIZATION: 'CancelAuthorization',
  CHARGE: 'Charge',
  REFUND: 'Refund',
  CHARGEBACK: 'Chargeback',
};

export const TRANSACTION_STATE = {
  INITIAL: 'Initial',
  PENDING: 'Pending',
  SUCCESS: 'Success',
  FAILURE: 'Failure',
};
