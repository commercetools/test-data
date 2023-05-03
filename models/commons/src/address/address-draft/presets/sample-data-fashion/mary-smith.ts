import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const marySmith = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Mary')
    .lastName('Smith')
    .streetName('Sample Street')
    .streetNumber('1')
    .postalCode('12345')
    .city('Sample Town')
    .country('DE');

export default marySmith;
