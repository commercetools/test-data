import { sequence, fake, Generator } from '@/core';
import { McProject } from '@/models/project';
import { createRelatedDates } from '@/utils';
import { fakeBusinessRoles } from '../constants';
import * as IdTokenUserInfo from './id-token-user-info';
import type { TMcUser } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TMcUser>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    email: fake((f) => f.internet.email()),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    language: fake(() => 'en'),
    numberFormat: fake(() => 'en'),
    timeZone: fake(() => 'Europe/Berlin'),
    launchdarklyTrackingId: fake((f) => f.string.uuid()),
    launchdarklyTrackingGroup: fake((f) => f.lorem.word()),
    launchdarklyTrackingSubgroup: fake((f) => f.lorem.word()),
    launchdarklyTrackingTeam: fake((f) => [f.lorem.word()]),
    launchdarklyTrackingTenant: fake((f) => f.lorem.word()),
    launchdarklyTrackingCloudEnvironment: fake((f) => f.lorem.word()),
    gravatarHash: fake((f) => f.lorem.word()),
    defaultProjectKey: fake((f) => f.lorem.word()),
    projects: fake(() => [McProject.random()]),
    businessRole: fake((f) => f.helpers.arrayElement(fakeBusinessRoles)),
    idTokenUserInfo: fake(() => IdTokenUserInfo.random()),
    verificationStatus: fake(() => 'Verified'),
  },
});

export default generator;
