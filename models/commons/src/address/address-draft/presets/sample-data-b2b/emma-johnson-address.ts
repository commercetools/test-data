import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const emmaJohnsonAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Emma')
    .lastName('Johnson')
    .streetName('High Street')
    .streetNumber('15')
    .postalCode('B4 7SL')
    .city('Birmingham')
    .country('GB')
    .region('West Midlands');

export default emmaJohnsonAddress;
