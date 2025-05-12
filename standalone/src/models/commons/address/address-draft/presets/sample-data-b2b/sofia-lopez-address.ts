import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sofiaLópezAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sofía')
    .lastName('López')
    .streetName('La Rambla')
    .streetNumber('91')
    .postalCode('08002')
    .city('Barcelona')
    .country('ES')
    .region('Catalunya');

export default sofiaLópezAddress;
