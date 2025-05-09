import type { ReturnInfo } from '@commercetools/platform-sdk';
import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { LineItemReturnItem } from '../line-item-return-item';

const [returnDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#returninfo
const generator = Generator<ReturnInfo>({
  fields: {
    items: [fake(() => LineItemReturnItem.random())],
    returnTrackingId: fake((f) => f.string.uuid()),
    returnDate: fake(returnDate),
  },
});

export default generator;
