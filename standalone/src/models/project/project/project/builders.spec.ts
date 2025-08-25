import type { TProjectGraphql, TProjectRest } from './types';
import { Project, ProjectGraphql, ProjectRest } from './index';

const validateCommon = (model: TProjectRest | TProjectGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      createdAt: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      name: expect.any(String),
      countries: ['EN'],
      currencies: ['EUR'],
      languages: ['en'],
      isProductionProject: false,
      initialized: true,
      trialUntil: null,
      businessUnits: null,
      searchIndexing: null,
      carts: null,
      externalOAuth: null,
      shippingRateInputType: null,
      shoppingLists: null,
    })
  );
  expect(model.messages).toEqual(expect.objectContaining({ enabled: false }));
};

const validateRest = (model: TProjectRest) => {
  validateCommon(model);
};

const validateGraphql = (model: TProjectGraphql) => {
  validateCommon(model);
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'Project',
      plan: 'Standard',
      participations: expect.any(Array),
      participationsRef: expect.any(Array),
      lastModifiedAt: expect.any(String),
      cdnContainerConfiguration: expect.objectContaining({ enabled: false }),
      suspended: null,
      createdBy: null,
      lastModifiedBy: null,
      billingInfo: null,
    })
  );
};

describe('Project model specialized builders', () => {
  it('builds a REST project', () => {
    const model = ProjectRest.random().build();
    validateRest(model);
  });

  it('builds a GraphQL project', () => {
    const model = ProjectGraphql.random().build();
    validateGraphql(model);
  });
});

describe('Project model compatibility builder', () => {
  it('builds default (REST) project', () => {
    const model = Project.random().build();
    validateRest(model as TProjectRest);
  });

  it('builds REST project explicitly', () => {
    const model = Project.random().buildRest();
    validateRest(model as TProjectRest);
  });

  it('builds GraphQL project explicitly', () => {
    const model = Project.random().buildGraphql<TProjectGraphql>();
    validateGraphql(model);
  });
});
