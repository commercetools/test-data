import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

export const samSmithAddress1 = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Saumya')
    .lastName('Goel')
    .streetName('dfdfds')
    .postalCode('24453')
    .city('sdfdsf')
    .country('GB')
    .key('sam-smith-address-1');

export const samSmithAddress2 = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('sfsdf')
    .lastName('sfsdf')
    .streetName('sfsdf')
    .postalCode('23243')
    .city('cvdsfa')
    .country('GB')
    .additionalAddressInfo('dsfdsf')
    .key('sam-smith-address-2');

export const samSmithAddress3 = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('gfadg')
    .lastName('fdgsfgd')
    .streetName('4dfgfes')
    .postalCode('fdgsg')
    .city('dfgsfg')
    .country('GB')
    .key('sam-smith-address-3');

export const samSmithAddress4 = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('dsfdsgf')
    .lastName('sdfdsf')
    .streetName('sdfsdfsdf')
    .postalCode('43424')
    .city('dfafdsf')
    .country('GB')
    .key('sam-smith-address-4');
