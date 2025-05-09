import type { TBuilder } from '../../../../../../core';
import { AddressDraft } from '../../../../../commons';
import { CustomLineItemDraft } from '../../../../custom-line-item/custom-line-item-draft';
import type {
  TCartDraft,
  TCartDraftGraphql,
  TCartDraftRest,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const populatePreset = <TModel extends TCartDraftGraphql | TCartDraftRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .customLineItems([
      CustomLineItemDraft.presets.changeHistoryData.customLineItemWithUsdCurrencyCode(),
    ])
    .currency('USD')
    .country('US')
    .locale('en-US')
    .shippingAddress(
      AddressDraft.presets.changeHistoryData.withCountryUsNoState()
    )
    .customerId(undefined)
    .customerEmail(undefined)
    .customerGroup(undefined)
    .anonymousId(undefined)
    .businessUnit(undefined)
    .store(undefined)
    .lineItems(undefined)
    .taxMode(undefined)
    .externalTaxRateForShippingMethod(undefined)
    .taxRoundingMode(undefined)
    .taxCalculationMode(undefined)
    .inventoryMode(undefined)
    .billingAddress(undefined)
    .shippingMethod(undefined)
    .shippingRateInput(undefined)
    .shippingMode(undefined)
    .customShipping(undefined)
    .shipping(undefined)
    .itemShippingAddresses(undefined)
    .discountCodes(undefined)
    .origin(undefined)
    .deleteDaysAfterLastModification(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.random());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.random());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.random());
