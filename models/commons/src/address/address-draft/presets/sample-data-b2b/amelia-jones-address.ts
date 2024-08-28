import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const ameliaJonesAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Amelia')
    .lastName('Jones')
    .streetName('Churchill Way')
    .streetNumber('59')
    .postalCode('B3 4BH')
    .city('Birmingham')
    .country('GB')
    .region('West Midlands');

export default ameliaJonesAddress;
