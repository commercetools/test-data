import { sequence, fake } from './@jackfranklin/test-data-bot';
import Builder from './builder';
import Generator from './generator';
import {
  buildField,
  buildFields,
  buildGraphqlList,
  buildRestList,
} from './helpers';
import Transformer from './transformer';

type TestUser = {
  id: number;
  userName: string;
  email: string;
  street?: string;
};
type TestUserTransformed = TestUser & {
  identifier: number;
};
type TestOrganization = {
  id: string;
  version: number;
  name: string;
  email?: string;
};
type TestOrganizationTransformed = {
  identifier: number;
  v: string;
  name: string;
};
type TestOrganizationTransformedWithEmail = {
  name: string;
  email: string;
};
type TestOrganizationTransformedWithIdAndVersion = {
  id: string;
  version: number;
};
type TestExpandedUserReference = {
  name: string;
};
type TestExpandedUserReferenceGraphql = TestExpandedUserReference & {
  __typename: string;
};
type TestUserReference = {
  id: string;
  user: TestExpandedUserReference;
};
type TestTeam = {
  id: string;
  users: TestExpandedUserReferenceGraphql[];
};

describe('building', () => {
  describe('without generator', () => {
    it('should build all properties', () => {
      const built = Builder<TestUser>()
        .id(1)
        .userName('Fred')
        .email('fred@foo.com')
        .build();

      expect(built).toEqual(
        expect.objectContaining({
          id: 1,
          userName: 'Fred',
          email: 'fred@foo.com',
        })
      );
    });

    describe('with transformer', () => {
      describe('when adding fields', () => {
        describe('when field does not exist', () => {
          it('should add the desired fields', () => {
            const transformers = {
              graphql: Transformer<TestUser, TestUserTransformed>('graphql', {
                addFields: ({ fields }) => ({
                  identifier: fields.id,
                }),
              }),
            };
            const built = Builder<TestUser>({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql<TestUserTransformed>();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                identifier: built.id,
              })
            );
          });
        });

        describe('when field exists', () => {
          it('should not add the desired fields', () => {
            const transformers = {
              graphql: Transformer<TestUser, TestUser>('graphql', {
                addFields: () => ({
                  id: 2,
                }),
              }),
            };
            const built = Builder<TestUser>({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql<TestUser>();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                id: 1,
              })
            );
          });
        });
      });

      describe('when replacing fields', () => {
        describe('when field exists', () => {
          it('should replace the desired fields', () => {
            const transformers = {
              graphql: Transformer<TestUser, TestUser>('graphql', {
                replaceFields: ({ fields }) => ({
                  ...fields,
                  id: fields.id + 1,
                }),
              }),
            };
            const built = Builder<TestUser>({
              transformers,
            })
              .id(1)
              .userName('Fred')
              .email('fred@foo.com')
              .buildGraphql<TestUser>();

            // Contains regularily built properties
            expect(built).toEqual(
              expect.objectContaining({
                userName: 'Fred',
                email: 'fred@foo.com',
              })
            );

            // Contains properties through transforms
            expect(built).toEqual(
              expect.objectContaining({
                id: 2,
              })
            );
          });
        });

        describe('when transforming from object to array', () => {
          it('should work', () => {
            const transformers = {
              graphql: Transformer<
                { a: number; b: number },
                { label: string; value: number }[]
              >('graphql', {
                replaceFields: ({ fields }) =>
                  Object.entries(fields).map(([label, value]) => ({
                    label,
                    value,
                  })),
              }),
            };
            const built = Builder<{ a: number; b: number }>({
              transformers,
            })
              .a(1)
              .b(2)
              .buildGraphql<{ label: string; value: number }[]>();

            expect(built).toEqual([
              { label: 'a', value: 1 },
              { label: 'b', value: 2 },
            ]);
          });
        });
        describe('when transforming from object to primitive (number)', () => {
          it('should work', () => {
            const transformers = {
              graphql: Transformer<{ a: number; b: number }, number>(
                'graphql',
                {
                  replaceFields: ({ fields }) =>
                    Object.values(fields).reduce(
                      (total, value) => total + value,
                      0
                    ),
                }
              ),
            };
            const built = Builder<{ a: number; b: number }>({
              transformers,
            })
              .a(1)
              .b(2)
              .buildGraphql<number>();

            expect(built).toEqual(3);
          });
        });
      });
    });

    describe('when removing fields', () => {
      it('should remove the desired fields', () => {
        const transformers = {
          graphql: Transformer<TestUser, TestUser>('graphql', {
            removeFields: ['id'],
          }),
        };

        const built = Builder<TestUser>({
          transformers,
        })
          .id(1)
          .userName('Fred')
          .email('fred@foo.com')
          .buildGraphql<TestUser>();

        // Contains regularily built properties
        expect(built).toEqual(
          expect.objectContaining({
            userName: 'Fred',
            email: 'fred@foo.com',
          })
        );

        // Does not contain properties through transforms
        expect(built).toEqual(
          expect.not.objectContaining({
            id: built.id,
          })
        );
      });
    });
  });

  describe('with generator', () => {
    const generator = Generator<TestOrganization>({
      fields: {
        id: fake((f) => f.string.uuid()),
        version: sequence(),
        name: fake((f) => f.company.name()),
      },
    });

    it('should build all properties with custom properties', () => {
      const built = Builder<TestOrganization>({ generator })
        .id('my-id')
        .build();

      expect(built).toEqual(
        expect.objectContaining({
          id: 'my-id',
          name: expect.any(String),
        })
      );
    });

    it('should build all build upon properties with callbacks', () => {
      const built = Builder<TestOrganization>({ generator })
        .id('my-id')
        .name(({ version }) => ({
          name: 'My name',
          version: version ?? 0 + 1,
        }))
        .build<TestOrganization>();

      expect(built).toEqual(
        expect.objectContaining({
          id: 'my-id',
          name: 'My name',
          version: 2,
        })
      );
    });

    it('should build all build upon properties with transforms', () => {
      const transformers = {
        graphql: Transformer<TestOrganization, TestOrganizationTransformed>(
          'graphql',
          {
            addFields: ({ fields }) => {
              const identifier = 1;
              return {
                identifier,
                v: `${fields.version}-${identifier}`,
              };
            },
            removeFields: ['id', 'version'],
          }
        ),
      };
      const built = Builder<TestOrganization>({
        generator,
        transformers,
      })
        .name('My name')
        .buildGraphql<TestOrganizationTransformed>();

      // Should keep non overwritten properties
      expect(built).toEqual(
        expect.objectContaining({
          name: 'My name',
        })
      );

      // Should allow overwriting generated properties
      expect(built).toEqual(
        expect.objectContaining({
          identifier: 1,
          v: '3-1',
        })
      );

      // Should remove properties
      expect(built).toEqual(
        expect.not.objectContaining({
          id: expect.any(String),
          version: expect.any(Number),
        })
      );
    });

    describe('when fields should be omitted', () => {
      describe('with `omitFields`', () => {
        it('should build properties and omit as requested', () => {
          const built = Builder<TestOrganization>({ generator })
            .email('fred@foo.com')
            .build<TestOrganizationTransformedWithEmail>({
              omitFields: ['id', 'version'],
            });

          expect(built).toEqual(
            expect.objectContaining({
              email: 'fred@foo.com',
            })
          );

          expect(built).toEqual(
            expect.not.objectContaining({
              id: expect.any(String),
              version: expect.any(Number),
            })
          );
        });
      });

      describe('with `keepFields`', () => {
        it('should build properties and omit as requested', () => {
          const built = Builder<TestOrganization>({ generator })
            .email('fred@foo.com')
            .build<TestOrganizationTransformedWithIdAndVersion>({
              keepFields: ['id', 'version'],
            });

          expect(built).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              version: expect.any(Number),
            })
          );

          expect(built).toEqual(
            expect.not.objectContaining({
              email: expect.any(String),
            })
          );
        });
      });
    });
  });

  describe('with nested builders', () => {
    describe('building in transformer', () => {
      describe('with default transform', () => {
        describe('with property', () => {
          it('should build nested builder on demand', () => {
            const transformers = {
              default: Transformer<TestUserReference, TestUserReference>(
                'default',
                {
                  buildFields: ['user'],
                }
              ),
            };
            const userBuilder =
              Builder<TestExpandedUserReference>().name('My name');
            const built = Builder<TestUserReference>({
              transformers,
            })
              .id('my-id')
              .user<TestExpandedUserReference>(userBuilder)
              .build<TestUserReference>();

            expect(built).toEqual({
              id: 'my-id',
              user: {
                name: 'My name',
              },
            });
          });
        });
      });

      describe('with named transform', () => {
        describe('with property', () => {
          it('should build nested builder on demand', () => {
            const transformers = {
              graphql: Transformer<TestUserReference, TestUserReference>(
                'graphql',
                {
                  buildFields: ['user'],
                }
              ),
            };
            const userBuilder =
              Builder<TestExpandedUserReference>().name('My name');
            const built = Builder<TestUserReference>({
              transformers,
            })
              .id('my-id')
              .user<TestExpandedUserReference>(userBuilder)
              .buildGraphql<TestUserReference>();

            expect(built).toEqual({
              id: 'my-id',
              user: {
                name: 'My name',
              },
            });
          });
        });

        describe('with list', () => {
          it('should build nested builders', () => {
            const teamTransformers = {
              graphql: Transformer<TestTeam, TestTeam>('graphql', {
                buildFields: ['users'],
              }),
            };
            const userTransformers = {
              graphql: Transformer<
                TestExpandedUserReference,
                TestExpandedUserReferenceGraphql
              >('graphql', {
                addFields: () => ({
                  __typename: 'User',
                }),
              }),
            };
            const userBuilder1 = Builder<TestExpandedUserReference>({
              transformers: userTransformers,
            }).name('My name');
            const userBuilder2 = Builder<TestExpandedUserReference>({
              transformers: userTransformers,
            }).name('My other name');
            const built = Builder<TestTeam>({
              transformers: teamTransformers,
            })
              .id('my-id')
              .users<TestExpandedUserReference>([userBuilder1, userBuilder2])
              .buildGraphql<TestTeam>();

            expect(built).toEqual({
              id: 'my-id',
              users: [
                {
                  __typename: 'User',
                  name: 'My name',
                },
                {
                  __typename: 'User',
                  name: 'My other name',
                },
              ],
            });
          });
          it('should omit __typename field when building nested builders and isGraphqlDraft is true', () => {
            const teamTransformers = {
              graphql: Transformer<TestTeam, TestTeam>('graphql', {
                buildFields: ['users'],
                isGraphqlDraft: true,
              }),
            };
            const userTransformers = {
              graphql: Transformer<
                TestExpandedUserReference,
                TestExpandedUserReferenceGraphql
              >('graphql', {
                addFields: () => ({
                  __typename: 'User',
                }),
                isGraphqlDraft: true,
              }),
            };
            const userBuilder1 = Builder<TestExpandedUserReference>({
              transformers: userTransformers,
            }).name('My name');
            const userBuilder2 = Builder<TestExpandedUserReference>({
              transformers: userTransformers,
            }).name('My other name');
            const built = Builder<TestTeam>({
              transformers: teamTransformers,
            })
              .id('my-id')
              .users<TestExpandedUserReference>([userBuilder1, userBuilder2])
              .buildGraphql<TestTeam>();

            expect(built).toEqual({
              id: 'my-id',
              users: [
                {
                  name: 'My name',
                },
                {
                  name: 'My other name',
                },
              ],
            });
          });
        });
      });
    });

    describe('building in transform', () => {
      describe('with property', () => {
        it('should build nested builders on demand', () => {
          const transformers = {
            graphql: Transformer<TestUserReference, TestUserReference>(
              'graphql',
              {
                replaceFields: ({ fields }) => ({
                  ...fields,
                  user: buildField<TestExpandedUserReference>(fields.user),
                }),
              }
            ),
          };
          const userBuilder =
            Builder<TestExpandedUserReference>().name('My name');
          const built = Builder<TestUserReference>({ transformers })
            .id('my-id')
            .user<TestExpandedUserReference>(userBuilder)
            .buildGraphql<TestUserReference>();

          expect(built).toEqual({
            id: 'my-id',
            user: {
              name: 'My name',
            },
          });
        });
      });

      describe('with list', () => {
        it('should build nested builders on demand', () => {
          const teamTransformers = {
            graphql: Transformer<TestTeam, TestTeam>('graphql', {
              replaceFields: ({ fields }) => ({
                ...fields,
                users: buildFields<TestExpandedUserReferenceGraphql>(
                  fields.users,
                  'graphql'
                ),
              }),
            }),
          };
          const userTransformers = {
            graphql: Transformer<
              TestExpandedUserReference,
              TestExpandedUserReferenceGraphql
            >('graphql', {
              addFields: () => ({
                __typename: 'User',
              }),
            }),
          };
          const userBuilder1 = Builder<TestExpandedUserReferenceGraphql>({
            transformers: userTransformers,
          }).name('My name');
          const userBuilder2 = Builder<TestExpandedUserReferenceGraphql>({
            transformers: userTransformers,
          }).name('My other name');
          const built = Builder<TestTeam>({
            transformers: teamTransformers,
          })
            .id('my-id')
            .users<TestExpandedUserReferenceGraphql>([
              userBuilder1,
              userBuilder2,
            ])
            .buildGraphql<TestTeam>();

          expect(built).toEqual({
            id: 'my-id',
            users: [
              {
                __typename: 'User',
                name: 'My name',
              },
              {
                __typename: 'User',
                name: 'My other name',
              },
            ],
          });
        });
      });
    });
  });

  describe('paginated list', () => {
    const generator = Generator<TestOrganization>({
      fields: {
        id: fake((f) => f.string.uuid()),
        version: sequence(),
        name: fake((f) => f.company.name()),
      },
    });

    describe('with graphql transform', () => {
      it('should build a paginated graphql list', () => {
        const builder = Builder<TestOrganization>({ generator }).id('my-id');
        const list = buildGraphqlList([builder, builder], {
          name: 'Organization',
          total: 10,
          offset: 2,
        });

        expect(list).toEqual({
          __typename: 'OrganizationQueryResult',
          total: 10,
          offset: 2,
          count: 2,
          results: expect.arrayContaining([
            expect.objectContaining({ id: 'my-id' }),
          ]),
        });
      });
    });

    describe('with rest transform', () => {
      it('should build a paginated rest list', () => {
        const builder = Builder<TestOrganization>({ generator }).id('my-id');
        const list = buildRestList([builder, builder], {
          total: 10,
          offset: 2,
        });

        expect(list).toEqual({
          total: 10,
          offset: 2,
          count: 2,
          results: expect.arrayContaining([
            expect.objectContaining({ id: 'my-id' }),
          ]),
        });
      });
    });

    describe('with typename overwrite', () => {
      it('should build a paginated list with an overwritten typename', () => {
        const builder = Builder<TestOrganization>({ generator }).id('my-id');
        const list = buildGraphqlList([builder, builder], {
          total: 10,
          offset: 2,
          __typename: 'OrganizationPaginatedResultList',
        });

        expect(list).toEqual({
          __typename: 'OrganizationPaginatedResultList',
          total: 10,
          offset: 2,
          count: 2,
          results: expect.arrayContaining([
            expect.objectContaining({ id: 'my-id' }),
          ]),
        });
      });
    });
  });
});
