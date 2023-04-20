import * as AddressDraft from '../..';
import { TAddressDraftBuilder } from '../../../types';

const jamieDoe = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Jamie')
    .lastName('Doe')
    .streetName('Main Street')
    .streetNumber('1')
    .postalCode('56789')
    .city('Mainville')
    .state('New Jersey')
    .country('US');

export default jamieDoe;
