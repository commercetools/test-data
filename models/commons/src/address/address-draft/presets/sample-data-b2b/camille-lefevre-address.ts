import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const camilleLefèvreAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Camille')
    .lastName('Lefèvre')
    .streetName('Avenue Jean Médecin')
    .streetNumber('22')
    .postalCode('06000')
    .city('Nice')
    .country('FR')
    .region("Provence-Alpes-Côte d'Azur");

export default camilleLefèvreAddress;
