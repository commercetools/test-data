import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lifttechSolutionsLtdEsAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es')
    .streetName('Calle Mayor')
    .streetNumber('101')
    .additionalStreetInfo('Piso 2')
    .postalCode('28013')
    .city('Madrid')
    .country('ES')
    .company('LiftTech Solutions Ltd ES')
    .building('F')
    .apartment('567');

export default lifttechSolutionsLtdEsAddress;
