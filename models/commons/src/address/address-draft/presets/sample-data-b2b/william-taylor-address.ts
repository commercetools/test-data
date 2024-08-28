import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const williamTaylorAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('William')
    .lastName('Taylor')
    .streetName('Duke Street')
    .streetNumber('32')
    .postalCode('L1 5AS')
    .city('Liverpool')
    .country('GB')
    .region('Merseyside');

export default williamTaylorAddress;
