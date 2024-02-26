import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sophieMüllerAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sophie')
    .lastName('Müller')
    .streetName('Schloßstraße')
    .streetNumber('30')
    .postalCode('10115')
    .city('Berlin')
    .country('DE')
    .state('Berlin');

export default sophieMüllerAddress;
