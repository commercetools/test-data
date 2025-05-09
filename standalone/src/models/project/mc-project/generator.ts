import { fake, Generator, sequence } from '../../../core';
import { createRelatedDates } from '../../../utils';
import * as AllPermissionsForAllApplications from './all-permissions-for-all-applications';
import * as AppliedActionRight from './applied-action-right';
import * as AppliedDataFence from './applied-data-fence';
import * as AppliedPermission from './applied-permission';
import { TMcProject } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TMcProject>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    version: sequence(),
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.lorem.words()),
    countries: fake(() => ['EN']),
    currencies: fake(() => ['EUR']),
    languages: fake(() => ['en']),
    isProductionProject: fake(() => false),
    initialized: fake(() => true),
    expiry: null,
    suspension: null,
    shippingRateInputType: null,
    apiVersion: fake(() => '1'),
    plan: fake((f) => f.helpers.arrayElement(['Standard', 'Unlimited'])),
    sampleDataImportDataset: fake((f) => f.lorem.word()),
    // TODO: link to Organization
    owner: null,
    allAppliedActionRights: fake(() => [AppliedActionRight.random()]),
    allAppliedDataFences: fake(() => [AppliedDataFence.random()]),
    allAppliedPermissions: fake(() => [AppliedPermission.random()]),
    allPermissionsForAllApplications: fake(() =>
      AllPermissionsForAllApplications.random()
    ),
  },
});

export default generator;
