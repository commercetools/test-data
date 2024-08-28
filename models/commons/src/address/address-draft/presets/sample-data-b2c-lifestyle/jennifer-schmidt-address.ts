import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const jenniferSchmidtAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Jennifer')
    .lastName('Schmidt')
    .streetName('Hauptstrasse')
    .streetNumber('25')
    .postalCode('14467')
    .city('Potsdam')
    .country('DE');

export default jenniferSchmidtAddress;
