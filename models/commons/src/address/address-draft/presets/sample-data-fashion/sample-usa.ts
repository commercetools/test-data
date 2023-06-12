import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sampleUsa = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sample Customer')
    .lastName('USA')
    .streetName('Main Street')
    .streetNumber('1')
    .postalCode('56789')
    .city('Mainville')
    .state('New Jersey')
    .country('US');

export default sampleUsa;
