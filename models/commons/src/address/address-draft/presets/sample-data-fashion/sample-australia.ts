import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sampleAustralia = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sample Customer')
    .lastName('Australia')
    .streetName('Center Road')
    .streetNumber('1')
    .postalCode('34567')
    .city('Center Town')
    .country('AU');

export default sampleAustralia;
