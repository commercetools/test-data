import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lucasDuboisAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Lucas')
    .lastName('Dubois')
    .streetName('Rue de Rivoli')
    .streetNumber('117')
    .postalCode('75001')
    .city('Paris')
    .country('FR')
    .region('Île-de-France');

export default lucasDuboisAddress;
