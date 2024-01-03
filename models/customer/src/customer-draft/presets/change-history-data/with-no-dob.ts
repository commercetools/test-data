import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const withNoDob = (): TCustomerDraftBuilder =>
  CustomerDraft.random().dateOfBirth(undefined).authenticationMode('Password');
export default withNoDob;
