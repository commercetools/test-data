import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sebastianFranklinAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sebastian')
    .lastName('Franklin')
    .streetName('South Road')
    .streetNumber('9')
    .postalCode('27517')
    .city('Durham')
    .state('North Carolina')
    .country('US');

export default sebastianFranklinAddress;
