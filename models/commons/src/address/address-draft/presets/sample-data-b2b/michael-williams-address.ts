import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const michaelWilliamsAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Michael')
    .lastName('Williams')
    .streetName('George Street')
    .streetNumber('42')
    .postalCode('EH2 2LE')
    .city('Edinburgh')
    .country('GB')
    .region('Scotland');

export default michaelWilliamsAddress;
