import type { LineItemReturnItem } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#lineitemreturnitem
const generator = Generator<LineItemReturnItem>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: null,
    quantity: fake((f) => f.number.int()),
    type: 'LineItemReturnItem',
    comment: null,
    shipmentState: fake((f) =>
      f.helpers.arrayElement(['Advised', 'Returned', 'BackInStock', 'Unusable'])
    ),
    paymentState: fake((f) =>
      f.helpers.arrayElement([
        'NonRefundable',
        'Initial',
        'Refunded',
        'NotRefunded',
      ])
    ),
    lineItemId: fake((f) => f.string.uuid()),
    custom: null,
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
  },
});

export default generator;
