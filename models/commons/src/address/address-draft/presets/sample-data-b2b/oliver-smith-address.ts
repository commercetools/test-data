import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const oliverSmithAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Oliver')
    .lastName('Smith')
    .streetName('Victoria Street')
    .streetNumber('100')
    .postalCode('SW1E 5JL')
    .city('London')
    .country('GB')
    .region('Greater London');

export default oliverSmithAddress;
