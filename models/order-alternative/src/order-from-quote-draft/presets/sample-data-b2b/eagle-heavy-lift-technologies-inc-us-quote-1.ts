import { KeyReferenceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { QuoteDraft, type TQuoteDraft } from '@commercetools-test-data/quote';
import {
  constants,
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../../../index';
import { restPresets, graphqlPresets } from '../index';

const quote = QuoteDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUsQuote1(1)
  .build<TQuoteDraft>();

const customizeBuilder = <
  T extends TOrderFromQuoteDraftRest | TOrderFromQuoteDraftGraphql
>(
  builder: TBuilder<T>,
  versionNumber: number
): TBuilder<T> => {
  return builder
    .version(versionNumber)
    .quote(KeyReferenceDraft.presets.quote().key(quote.key!))
    .quoteStateToAccepted(true)
    .orderNumber('eagle-heavy-lift-technologies-inc-us-from-quote-1')
    .orderState(constants.orderState.Open)
    .paymentState(constants.paymentState.Pending)
    .shipmentState(constants.shipmentState.Pending);
};

export const restPreset = (versionNumber: number) =>
  customizeBuilder(restPresets.empty(), versionNumber);

export const graphqlPreset = (versionNumber: number) =>
  customizeBuilder(graphqlPresets.empty(), versionNumber);
