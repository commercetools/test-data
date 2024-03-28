import { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lifttechSolutionsLtdAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('lifttech-solutions-ltd')
    .streetName('Baker Street')
    .streetNumber('221B')
    .additionalStreetInfo('Sherlock Holmes House')
    .postalCode('SW1A 1AA')
    .city('London')
    .country('GB')
    .region('England')
    .company('LiftTech Solutions Ltd')
    .building('C')
    .apartment('987');

export default lifttechSolutionsLtdAddress;
