import type { TAddressDraftBuilder } from '../../../types';
import * as AddressDraft from '../../index';

const lifttechSolutionsLtdDeAddress = (): TAddressDraftBuilder =>
  AddressDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-de')
    .streetName('Hauptstraße')
    .streetNumber('456')
    .additionalStreetInfo('Etage 3')
    .postalCode('12345')
    .city('Berlin')
    .country('DE')
    .company('LiftTech Solutions Ltd DE')
    .building('D')
    .apartment('654');

export default lifttechSolutionsLtdDeAddress;
