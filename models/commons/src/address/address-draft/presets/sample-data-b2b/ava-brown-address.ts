import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const avaBrownAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Ava')
    .lastName('Brown')
    .streetName('Queen Street')
    .streetNumber('72')
    .postalCode('CF10 2DL')
    .city('Cardiff')
    .country('GB')
    .region('Wales');

export default avaBrownAddress;
