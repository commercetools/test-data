import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sampleGermany = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sample Customer')
    .lastName('Germany')
    .streetName('Sample Street')
    .streetNumber('1')
    .postalCode('12345')
    .city('Sample Town')
    .country('DE');

export default sampleGermany;
