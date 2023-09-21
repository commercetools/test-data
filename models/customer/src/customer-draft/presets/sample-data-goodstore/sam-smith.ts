import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const samSmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sam-smith') //TODO: is there a preferred format for keys ww/in goodstore  ?
    .email('sam.smith@example.com')
    .password('****MHY=') //TODO: do we need to be making something up for the first 4 masked chars?
    .firstName('Sam')
    .lastName('Smith')
    .addresses([
      AddressDraft.presets.sampleDataGoodstore.samSmithAddress1(),
      AddressDraft.presets.sampleDataGoodstore.samSmithAddress2(),
      AddressDraft.presets.sampleDataGoodstore.samSmithAddress3(),
      AddressDraft.presets.sampleDataGoodstore.samSmithAddress4(),
    ])
    // "defaultShippingAddressId": "Iuaz-HzV",
    // "defaultBillingAddressId": "kTQHfM8Y",
    // "shippingAddressIds": ["Iuaz-HzV", "sX7YhNtR", "0zfY80BQ"],
    // "billingAddressIds": ["kTQHfM8Y"],
    .isEmailVerified(false)
    .authenticationMode(authenticationMode.Password);

export default samSmith;
