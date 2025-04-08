# @commercetools-test-data/cart

This package provides access to all the data model used in the commercetools APIs .

# Install

```bash
$ pnpm add -D @commercetools/composable-commerce-test-data
```

# Usage

This package gives you access to all the test data models available.
In order to make sure consumers only pull the models they need, you need to import each one independently.

## Example

```ts
import {
  ChanelGraphql,
  TChannelGraphql,
} from '@commercetools/composable-commerce-test-data/channel';
import {
  ProductRest,
  TProductRest,
} from '@commercetools/composable-commerce-test-data/product';

const channelGraphqlModel: TChannelGraphql = ChannelGraphql.random().build();
const productRestModel: TProductRest = ProductRest.random().build();
```

## Available test data models

_(head to the respective data model directory for more details)_

- associate-role
- attribute-group
- business-unit
- cart
- cart-discount
- category
- channel
- commons
- core
- custom-application
- custom-object
- custom-view
- customer
- customer-group
- customers-search-list-my-view
- discount-code
- discounts-custom-view
- filter-values
- inventory-entry
- order
- organization
- organization-extension
- payment
- platform-limits
- product
- product-discount
- product-projection
- product-selection
- product-tailoring
- product-type
- project
- project-extension
- quote
- quote-request
- review
- shipping-method
- shopping-list
- staged-quote
- standalone-price
- state
- store
- tax-category
- type
- user
- zone
- utils
