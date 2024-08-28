import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sebastianSmithAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sebastian')
    .lastName('Smith')
    .streetName('Center Street')
    .streetNumber('1')
    .postalCode('PO167GZ')
    .city('Fareham')
    .country('GB');

export default sebastianSmithAddress;
