import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lukasSchmidtAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Lukas')
    .lastName('Schmidt')
    .streetName('Königstraße')
    .streetNumber('50')
    .postalCode('70173')
    .city('Stuttgart')
    .country('DE')
    .state('Baden-Württemberg');

export default lukasSchmidtAddress;
