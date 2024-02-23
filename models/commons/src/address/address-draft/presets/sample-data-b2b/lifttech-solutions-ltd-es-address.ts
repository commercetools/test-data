import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lifttechSolutionsLtdEsAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es')
    .streetName('Calle Mayor')
    .streetNumber('101')
    .postalCode('28013')
    .city('Madrid')
    .country('ES')
    .region('Community of Madrid')
    .state('Community of Madrid')
    .company('LiftTech Solutions Ltd ES')
    .building('F')
    .apartment('567');

export default lifttechSolutionsLtdEsAddress;
