import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const johnDoe = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('John')
    .lastName('Doe')
    .streetName('Center Road')
    .streetNumber('1')
    .postalCode('34567')
    .city('Center Town')
    .country('DE');

export default johnDoe;
