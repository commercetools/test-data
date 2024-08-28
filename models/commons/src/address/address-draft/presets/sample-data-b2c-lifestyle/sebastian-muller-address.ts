import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const sebastianMullerAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Sebastian')
    .lastName('Müller')
    .streetName('Schulstrasse')
    .streetNumber('12')
    .postalCode('80331')
    .city('München')
    .country('DE');

export default sebastianMullerAddress;
