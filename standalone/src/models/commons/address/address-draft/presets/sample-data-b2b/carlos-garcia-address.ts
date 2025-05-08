import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const carlosGarcíaAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .firstName('Carlos')
    .lastName('García')
    .streetName('Gran Vía')
    .streetNumber('28')
    .postalCode('28013')
    .city('Madrid')
    .country('ES')
    .region('Comunidad de Madrid');

export default carlosGarcíaAddress;
