import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

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
