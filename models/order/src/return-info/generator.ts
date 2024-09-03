import type { ReturnInfo } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { LineItemReturnItem } from '../line-item-return-item';

const [returnDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#returninfo
const generator = Generator<ReturnInfo>({
  fields: {
    items: [LineItemReturnItem.random()],
    returnTrackingId: fake((f) => f.string.uuid()),
    returnDate: fake(returnDate),
  },
});

export default generator;
