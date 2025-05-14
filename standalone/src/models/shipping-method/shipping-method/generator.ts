import { sequence, fake, Generator } from '@/core';
import { ClientLogging, LocalizedString } from '@/models/commons';
import { TaxCategory } from '@/models/tax-category';
import { createRelatedDates } from '@/utils';
import { TShippingMethod } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingmethod

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TShippingMethod>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    localizedName: fake((f) => LocalizedString.random()),
    localizedDescription: fake(() => LocalizedString.random()),
    taxCategory: fake(() => TaxCategory.random()),
    zoneRates: fake(() => []),
    isDefault: fake((f) => f.datatype.boolean()),
    predicate: '1=1',
    active: fake(() => false),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
