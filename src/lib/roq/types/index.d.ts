/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model property
 *
 */
export type property = $Result.DefaultSelection<Prisma.$propertyPayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **property** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Properties
   * const properties = await prisma.property.findMany()
   * ```
   */
  get property(): Prisma.propertyDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    booking: 'booking';
    company: 'company';
    property: 'property';
    review: 'review';
    team_member: 'team_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'booking' | 'company' | 'property' | 'review' | 'team_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      property: {
        payload: Prisma.$propertyPayload<ExtArgs>;
        fields: Prisma.propertyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.propertyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.propertyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          findFirst: {
            args: Prisma.propertyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.propertyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          findMany: {
            args: Prisma.propertyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>[];
          };
          create: {
            args: Prisma.propertyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          createMany: {
            args: Prisma.propertyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.propertyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          update: {
            args: Prisma.propertyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          deleteMany: {
            args: Prisma.propertyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.propertyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.propertyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>;
          };
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProperty>;
          };
          groupBy: {
            args: Prisma.propertyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PropertyGroupByOutputType>[];
          };
          count: {
            args: Prisma.propertyCountArgs<ExtArgs>;
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    property: number;
    team_member: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | CompanyCountOutputTypeCountPropertyArgs;
    team_member?: boolean | CompanyCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountPropertyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: propertyWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    booking: number;
    review: number;
  };

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | PropertyCountOutputTypeCountBookingArgs;
    review?: boolean | PropertyCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookingWhereInput;
  };

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking: number;
    company: number;
    review: number;
    team_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UserCountOutputTypeCountBookingArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
    team_member?: boolean | UserCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: bookingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingAvgAggregateOutputType = {
    total_price: number | null;
  };

  export type BookingSumAggregateOutputType = {
    total_price: number | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    property_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    total_price: number | null;
    user_id: string | null;
    property_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    total_price: number;
    user_id: number;
    property_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingAvgAggregateInputType = {
    total_price?: true;
  };

  export type BookingSumAggregateInputType = {
    total_price?: true;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    total_price?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    total_price: number;
    user_id: string;
    property_id: string;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      total_price?: boolean;
      user_id?: boolean;
      property_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      property?: boolean | propertyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    total_price?: boolean;
    user_id?: boolean;
    property_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | propertyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      property: Prisma.$propertyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        total_price: number;
        user_id: string;
        property_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    property<T extends propertyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, propertyDefaultArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly start_date: FieldRef<'booking', 'DateTime'>;
    readonly end_date: FieldRef<'booking', 'DateTime'>;
    readonly total_price: FieldRef<'booking', 'Int'>;
    readonly user_id: FieldRef<'booking', 'String'>;
    readonly property_id: FieldRef<'booking', 'String'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      property?: boolean | company$propertyArgs<ExtArgs>;
      team_member?: boolean | company$team_memberArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    property?: boolean | company$propertyArgs<ExtArgs>;
    team_member?: boolean | company$team_memberArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      property: Prisma.$propertyPayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    property<T extends company$propertyArgs<ExtArgs> = {}>(
      args?: Subset<T, company$propertyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends company$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, company$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.property
   */
  export type company$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    where?: propertyWhereInput;
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[];
    cursor?: propertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[];
  };

  /**
   * company.team_member
   */
  export type company$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
  };

  export type PropertyAvgAggregateOutputType = {
    price: number | null;
  };

  export type PropertySumAggregateOutputType = {
    price: number | null;
  };

  export type PropertyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    price: number | null;
    availability: boolean | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PropertyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    location: string | null;
    price: number | null;
    availability: boolean | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PropertyCountAggregateOutputType = {
    id: number;
    name: number;
    location: number;
    price: number;
    availability: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PropertyAvgAggregateInputType = {
    price?: true;
  };

  export type PropertySumAggregateInputType = {
    price?: true;
  };

  export type PropertyMinAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    price?: true;
    availability?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PropertyMaxAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    price?: true;
    availability?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PropertyCountAggregateInputType = {
    id?: true;
    name?: true;
    location?: true;
    price?: true;
    availability?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property to aggregate.
     */
    where?: propertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: propertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned properties
     **/
    _count?: true | PropertyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PropertyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PropertySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PropertyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PropertyMaxAggregateInputType;
  };

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
    [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>;
  };

  export type propertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertyWhereInput;
    orderBy?: propertyOrderByWithAggregationInput | propertyOrderByWithAggregationInput[];
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum;
    having?: propertyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertyCountAggregateInputType | true;
    _avg?: PropertyAvgAggregateInputType;
    _sum?: PropertySumAggregateInputType;
    _min?: PropertyMinAggregateInputType;
    _max?: PropertyMaxAggregateInputType;
  };

  export type PropertyGroupByOutputType = {
    id: string;
    name: string;
    location: string;
    price: number;
    availability: boolean;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PropertyCountAggregateOutputType | null;
    _avg: PropertyAvgAggregateOutputType | null;
    _sum: PropertySumAggregateOutputType | null;
    _min: PropertyMinAggregateOutputType | null;
    _max: PropertyMaxAggregateOutputType | null;
  };

  type GetPropertyGroupByPayload<T extends propertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PropertyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
          : GetScalarType<T[P], PropertyGroupByOutputType[P]>;
      }
    >
  >;

  export type propertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        location?: boolean;
        price?: boolean;
        availability?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        booking?: boolean | property$bookingArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        review?: boolean | property$reviewArgs<ExtArgs>;
        _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['property']
    >;

  export type propertySelectScalar = {
    id?: boolean;
    name?: boolean;
    location?: boolean;
    price?: boolean;
    availability?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type propertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | property$bookingArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    review?: boolean | property$reviewArgs<ExtArgs>;
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $propertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'property';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        location: string;
        price: number;
        availability: boolean;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['property']
    >;
    composites: {};
  };

  type propertyGetPayload<S extends boolean | null | undefined | propertyDefaultArgs> = $Result.GetResult<
    Prisma.$propertyPayload,
    S
  >;

  type propertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    propertyFindManyArgs,
    'select' | 'include'
  > & {
    select?: PropertyCountAggregateInputType | true;
  };

  export interface propertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['property']; meta: { name: 'property' } };
    /**
     * Find zero or one Property that matches the filter.
     * @param {propertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends propertyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, propertyFindUniqueArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Property that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {propertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends propertyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends propertyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyFindFirstArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends propertyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     *
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends propertyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Property.
     * @param {propertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     *
     **/
    create<T extends propertyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, propertyCreateArgs<ExtArgs>>,
    ): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Properties.
     *     @param {propertyCreateManyArgs} args - Arguments to create many Properties.
     *     @example
     *     // Create many Properties
     *     const property = await prisma.property.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends propertyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Property.
     * @param {propertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     *
     **/
    delete<T extends propertyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, propertyDeleteArgs<ExtArgs>>,
    ): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Property.
     * @param {propertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends propertyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, propertyUpdateArgs<ExtArgs>>,
    ): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Properties.
     * @param {propertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends propertyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, propertyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends propertyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, propertyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Property.
     * @param {propertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     **/
    upsert<T extends propertyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, propertyUpsertArgs<ExtArgs>>,
    ): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
     **/
    count<T extends propertyCountArgs>(
      args?: Subset<T, propertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PropertyAggregateArgs>(
      args: Subset<T, PropertyAggregateArgs>,
    ): Prisma.PrismaPromise<GetPropertyAggregateType<T>>;

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends propertyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: propertyGroupByArgs['orderBy'] }
        : { orderBy?: propertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, propertyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the property model
     */
    readonly fields: propertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__propertyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends property$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, property$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    review<T extends property$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, property$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the property model
   */
  interface propertyFieldRefs {
    readonly id: FieldRef<'property', 'String'>;
    readonly name: FieldRef<'property', 'String'>;
    readonly location: FieldRef<'property', 'String'>;
    readonly price: FieldRef<'property', 'Int'>;
    readonly availability: FieldRef<'property', 'Boolean'>;
    readonly company_id: FieldRef<'property', 'String'>;
    readonly created_at: FieldRef<'property', 'DateTime'>;
    readonly updated_at: FieldRef<'property', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * property findUnique
   */
  export type propertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter, which property to fetch.
     */
    where: propertyWhereUniqueInput;
  };

  /**
   * property findUniqueOrThrow
   */
  export type propertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter, which property to fetch.
     */
    where: propertyWhereUniqueInput;
  };

  /**
   * property findFirst
   */
  export type propertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter, which property to fetch.
     */
    where?: propertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for properties.
     */
    cursor?: propertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[];
  };

  /**
   * property findFirstOrThrow
   */
  export type propertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter, which property to fetch.
     */
    where?: propertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for properties.
     */
    cursor?: propertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` properties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[];
  };

  /**
   * property findMany
   */
  export type propertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter, which properties to fetch.
     */
    where?: propertyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing properties.
     */
    cursor?: propertyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` properties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` properties.
     */
    skip?: number;
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[];
  };

  /**
   * property create
   */
  export type propertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * The data needed to create a property.
     */
    data: XOR<propertyCreateInput, propertyUncheckedCreateInput>;
  };

  /**
   * property createMany
   */
  export type propertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many properties.
     */
    data: propertyCreateManyInput | propertyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * property update
   */
  export type propertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * The data needed to update a property.
     */
    data: XOR<propertyUpdateInput, propertyUncheckedUpdateInput>;
    /**
     * Choose, which property to update.
     */
    where: propertyWhereUniqueInput;
  };

  /**
   * property updateMany
   */
  export type propertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update properties.
     */
    data: XOR<propertyUpdateManyMutationInput, propertyUncheckedUpdateManyInput>;
    /**
     * Filter which properties to update
     */
    where?: propertyWhereInput;
  };

  /**
   * property upsert
   */
  export type propertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * The filter to search for the property to update in case it exists.
     */
    where: propertyWhereUniqueInput;
    /**
     * In case the property found by the `where` argument doesn't exist, create a new property with this data.
     */
    create: XOR<propertyCreateInput, propertyUncheckedCreateInput>;
    /**
     * In case the property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<propertyUpdateInput, propertyUncheckedUpdateInput>;
  };

  /**
   * property delete
   */
  export type propertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
    /**
     * Filter which property to delete.
     */
    where: propertyWhereUniqueInput;
  };

  /**
   * property deleteMany
   */
  export type propertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to delete
     */
    where?: propertyWhereInput;
  };

  /**
   * property.booking
   */
  export type property$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * property.review
   */
  export type property$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * property without action
   */
  export type propertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: propertyInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    property_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    property_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    comment: number;
    user_id: number;
    property_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    property_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    comment: string | null;
    user_id: string;
    property_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      comment?: boolean;
      user_id?: boolean;
      property_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      property?: boolean | propertyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    comment?: boolean;
    user_id?: boolean;
    property_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | propertyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      property: Prisma.$propertyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        comment: string | null;
        user_id: string;
        property_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    property<T extends propertyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, propertyDefaultArgs<ExtArgs>>,
    ): Prisma__propertyClient<
      $Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly comment: FieldRef<'review', 'String'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly property_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    position: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    company_id: string | null;
    position: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    company_id: number;
    position: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    company_id?: true;
    position?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    user_id: string;
    company_id: string;
    position: string;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        position?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    position?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        company_id: string;
        position: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly user_id: FieldRef<'team_member', 'String'>;
    readonly company_id: FieldRef<'team_member', 'String'>;
    readonly position: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | user$bookingArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      team_member?: boolean | user$team_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | user$bookingArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    team_member?: boolean | user$team_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends user$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends user$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user.team_member
   */
  export type user$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookingScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    total_price: 'total_price';
    user_id: 'user_id';
    property_id: 'property_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const PropertyScalarFieldEnum: {
    id: 'id';
    name: 'name';
    location: 'location';
    price: 'price';
    availability: 'availability';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    rating: 'rating';
    comment: 'comment';
    user_id: 'user_id';
    property_id: 'property_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    company_id: 'company_id';
    position: 'position';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_date?: DateTimeFilter<'booking'> | Date | string;
    end_date?: DateTimeFilter<'booking'> | Date | string;
    total_price?: IntFilter<'booking'> | number;
    user_id?: UuidFilter<'booking'> | string;
    property_id?: UuidFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    property?: XOR<PropertyRelationFilter, propertyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    property?: propertyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      start_date?: DateTimeFilter<'booking'> | Date | string;
      end_date?: DateTimeFilter<'booking'> | Date | string;
      total_price?: IntFilter<'booking'> | number;
      user_id?: UuidFilter<'booking'> | string;
      property_id?: UuidFilter<'booking'> | string;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      property?: XOR<PropertyRelationFilter, propertyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _avg?: bookingAvgOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
    _sum?: bookingSumOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    start_date?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    total_price?: IntWithAggregatesFilter<'booking'> | number;
    user_id?: UuidWithAggregatesFilter<'booking'> | string;
    property_id?: UuidWithAggregatesFilter<'booking'> | string;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    property?: PropertyListRelationFilter;
    team_member?: Team_memberListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    property?: propertyOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      property?: PropertyListRelationFilter;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type propertyWhereInput = {
    AND?: propertyWhereInput | propertyWhereInput[];
    OR?: propertyWhereInput[];
    NOT?: propertyWhereInput | propertyWhereInput[];
    id?: UuidFilter<'property'> | string;
    name?: StringFilter<'property'> | string;
    location?: StringFilter<'property'> | string;
    price?: IntFilter<'property'> | number;
    availability?: BoolFilter<'property'> | boolean;
    company_id?: UuidFilter<'property'> | string;
    created_at?: DateTimeFilter<'property'> | Date | string;
    updated_at?: DateTimeFilter<'property'> | Date | string;
    booking?: BookingListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    review?: ReviewListRelationFilter;
  };

  export type propertyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    price?: SortOrder;
    availability?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type propertyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: propertyWhereInput | propertyWhereInput[];
      OR?: propertyWhereInput[];
      NOT?: propertyWhereInput | propertyWhereInput[];
      name?: StringFilter<'property'> | string;
      location?: StringFilter<'property'> | string;
      price?: IntFilter<'property'> | number;
      availability?: BoolFilter<'property'> | boolean;
      company_id?: UuidFilter<'property'> | string;
      created_at?: DateTimeFilter<'property'> | Date | string;
      updated_at?: DateTimeFilter<'property'> | Date | string;
      booking?: BookingListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type propertyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    price?: SortOrder;
    availability?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: propertyCountOrderByAggregateInput;
    _avg?: propertyAvgOrderByAggregateInput;
    _max?: propertyMaxOrderByAggregateInput;
    _min?: propertyMinOrderByAggregateInput;
    _sum?: propertySumOrderByAggregateInput;
  };

  export type propertyScalarWhereWithAggregatesInput = {
    AND?: propertyScalarWhereWithAggregatesInput | propertyScalarWhereWithAggregatesInput[];
    OR?: propertyScalarWhereWithAggregatesInput[];
    NOT?: propertyScalarWhereWithAggregatesInput | propertyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'property'> | string;
    name?: StringWithAggregatesFilter<'property'> | string;
    location?: StringWithAggregatesFilter<'property'> | string;
    price?: IntWithAggregatesFilter<'property'> | number;
    availability?: BoolWithAggregatesFilter<'property'> | boolean;
    company_id?: UuidWithAggregatesFilter<'property'> | string;
    created_at?: DateTimeWithAggregatesFilter<'property'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'property'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringNullableFilter<'review'> | string | null;
    user_id?: UuidFilter<'review'> | string;
    property_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    property?: XOR<PropertyRelationFilter, propertyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    property?: propertyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      rating?: IntFilter<'review'> | number;
      comment?: StringNullableFilter<'review'> | string | null;
      user_id?: UuidFilter<'review'> | string;
      property_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      property?: XOR<PropertyRelationFilter, propertyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    comment?: StringNullableWithAggregatesFilter<'review'> | string | null;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    property_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    company_id?: UuidFilter<'team_member'> | string;
    position?: StringFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      user_id?: UuidFilter<'team_member'> | string;
      company_id?: UuidFilter<'team_member'> | string;
      position?: StringFilter<'team_member'> | string;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    user_id?: UuidWithAggregatesFilter<'team_member'> | string;
    company_id?: UuidWithAggregatesFilter<'team_member'> | string;
    position?: StringWithAggregatesFilter<'team_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    booking?: BookingListRelationFilter;
    company?: CompanyListRelationFilter;
    review?: ReviewListRelationFilter;
    team_member?: Team_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      booking?: BookingListRelationFilter;
      company?: CompanyListRelationFilter;
      review?: ReviewListRelationFilter;
      team_member?: Team_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bookingCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    property: propertyCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    property?: propertyUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    property?: propertyCreateNestedManyWithoutCompanyInput;
    team_member?: team_memberCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    property?: propertyUncheckedCreateNestedManyWithoutCompanyInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    property?: propertyUpdateManyWithoutCompanyNestedInput;
    team_member?: team_memberUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    property?: propertyUncheckedUpdateManyWithoutCompanyNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type propertyCreateInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutPropertyInput;
    company: companyCreateNestedOneWithoutPropertyInput;
    review?: reviewCreateNestedManyWithoutPropertyInput;
  };

  export type propertyUncheckedCreateInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutPropertyInput;
    review?: reviewUncheckedCreateNestedManyWithoutPropertyInput;
  };

  export type propertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutPropertyNestedInput;
    company?: companyUpdateOneRequiredWithoutPropertyNestedInput;
    review?: reviewUpdateManyWithoutPropertyNestedInput;
  };

  export type propertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutPropertyNestedInput;
    review?: reviewUncheckedUpdateManyWithoutPropertyNestedInput;
  };

  export type propertyCreateManyInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type propertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type propertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    property: propertyCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    property?: propertyUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutTeam_memberInput;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    company_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutTeam_memberNestedInput;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    user_id: string;
    company_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type PropertyRelationFilter = {
    is?: propertyWhereInput;
    isNot?: propertyWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingAvgOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    total_price?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingSumOrderByAggregateInput = {
    total_price?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type PropertyListRelationFilter = {
    every?: propertyWhereInput;
    some?: propertyWhereInput;
    none?: propertyWhereInput;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type propertyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type propertyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    price?: SortOrder;
    availability?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type propertyAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type propertyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    price?: SortOrder;
    availability?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type propertyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    location?: SortOrder;
    price?: SortOrder;
    availability?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type propertySumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    property_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    position?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type propertyCreateNestedOneWithoutBookingInput = {
    create?: XOR<propertyCreateWithoutBookingInput, propertyUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: propertyCreateOrConnectWithoutBookingInput;
    connect?: propertyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type propertyUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<propertyCreateWithoutBookingInput, propertyUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: propertyCreateOrConnectWithoutBookingInput;
    upsert?: propertyUpsertWithoutBookingInput;
    connect?: propertyWhereUniqueInput;
    update?: XOR<
      XOR<propertyUpdateToOneWithWhereWithoutBookingInput, propertyUpdateWithoutBookingInput>,
      propertyUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    upsert?: userUpsertWithoutBookingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>,
      userUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type propertyCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>
      | propertyCreateWithoutCompanyInput[]
      | propertyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: propertyCreateOrConnectWithoutCompanyInput | propertyCreateOrConnectWithoutCompanyInput[];
    createMany?: propertyCreateManyCompanyInputEnvelope;
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type propertyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>
      | propertyCreateWithoutCompanyInput[]
      | propertyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: propertyCreateOrConnectWithoutCompanyInput | propertyCreateOrConnectWithoutCompanyInput[];
    createMany?: propertyCreateManyCompanyInputEnvelope;
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type propertyUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>
      | propertyCreateWithoutCompanyInput[]
      | propertyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: propertyCreateOrConnectWithoutCompanyInput | propertyCreateOrConnectWithoutCompanyInput[];
    upsert?: propertyUpsertWithWhereUniqueWithoutCompanyInput | propertyUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: propertyCreateManyCompanyInputEnvelope;
    set?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    disconnect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    delete?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    update?: propertyUpdateWithWhereUniqueWithoutCompanyInput | propertyUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: propertyUpdateManyWithWhereWithoutCompanyInput | propertyUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: propertyScalarWhereInput | propertyScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?:
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | team_memberUpdateManyWithWhereWithoutCompanyInput
      | team_memberUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type propertyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>
      | propertyCreateWithoutCompanyInput[]
      | propertyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: propertyCreateOrConnectWithoutCompanyInput | propertyCreateOrConnectWithoutCompanyInput[];
    upsert?: propertyUpsertWithWhereUniqueWithoutCompanyInput | propertyUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: propertyCreateManyCompanyInputEnvelope;
    set?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    disconnect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    delete?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[];
    update?: propertyUpdateWithWhereUniqueWithoutCompanyInput | propertyUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: propertyUpdateManyWithWhereWithoutCompanyInput | propertyUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: propertyScalarWhereInput | propertyScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>
      | team_memberCreateWithoutCompanyInput[]
      | team_memberUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCompanyInput | team_memberCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput
      | team_memberUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: team_memberCreateManyCompanyInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?:
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput
      | team_memberUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | team_memberUpdateManyWithWhereWithoutCompanyInput
      | team_memberUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type bookingCreateNestedManyWithoutPropertyInput = {
    create?:
      | XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>
      | bookingCreateWithoutPropertyInput[]
      | bookingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutPropertyInput | bookingCreateOrConnectWithoutPropertyInput[];
    createMany?: bookingCreateManyPropertyInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutPropertyInput = {
    create?: XOR<companyCreateWithoutPropertyInput, companyUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: companyCreateOrConnectWithoutPropertyInput;
    connect?: companyWhereUniqueInput;
  };

  export type reviewCreateNestedManyWithoutPropertyInput = {
    create?:
      | XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>
      | reviewCreateWithoutPropertyInput[]
      | reviewUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutPropertyInput | reviewCreateOrConnectWithoutPropertyInput[];
    createMany?: reviewCreateManyPropertyInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?:
      | XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>
      | bookingCreateWithoutPropertyInput[]
      | bookingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutPropertyInput | bookingCreateOrConnectWithoutPropertyInput[];
    createMany?: bookingCreateManyPropertyInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?:
      | XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>
      | reviewCreateWithoutPropertyInput[]
      | reviewUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutPropertyInput | reviewCreateOrConnectWithoutPropertyInput[];
    createMany?: reviewCreateManyPropertyInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type bookingUpdateManyWithoutPropertyNestedInput = {
    create?:
      | XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>
      | bookingCreateWithoutPropertyInput[]
      | bookingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutPropertyInput | bookingCreateOrConnectWithoutPropertyInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutPropertyInput | bookingUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: bookingCreateManyPropertyInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutPropertyInput | bookingUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutPropertyInput | bookingUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<companyCreateWithoutPropertyInput, companyUncheckedCreateWithoutPropertyInput>;
    connectOrCreate?: companyCreateOrConnectWithoutPropertyInput;
    upsert?: companyUpsertWithoutPropertyInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutPropertyInput, companyUpdateWithoutPropertyInput>,
      companyUncheckedUpdateWithoutPropertyInput
    >;
  };

  export type reviewUpdateManyWithoutPropertyNestedInput = {
    create?:
      | XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>
      | reviewCreateWithoutPropertyInput[]
      | reviewUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutPropertyInput | reviewCreateOrConnectWithoutPropertyInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutPropertyInput | reviewUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: reviewCreateManyPropertyInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutPropertyInput | reviewUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutPropertyInput | reviewUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?:
      | XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>
      | bookingCreateWithoutPropertyInput[]
      | bookingUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutPropertyInput | bookingCreateOrConnectWithoutPropertyInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutPropertyInput | bookingUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: bookingCreateManyPropertyInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutPropertyInput | bookingUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutPropertyInput | bookingUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?:
      | XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>
      | reviewCreateWithoutPropertyInput[]
      | reviewUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutPropertyInput | reviewCreateOrConnectWithoutPropertyInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutPropertyInput | reviewUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: reviewCreateManyPropertyInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutPropertyInput | reviewUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutPropertyInput | reviewUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type propertyCreateNestedOneWithoutReviewInput = {
    create?: XOR<propertyCreateWithoutReviewInput, propertyUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: propertyCreateOrConnectWithoutReviewInput;
    connect?: propertyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type propertyUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<propertyCreateWithoutReviewInput, propertyUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: propertyCreateOrConnectWithoutReviewInput;
    upsert?: propertyUpsertWithoutReviewInput;
    connect?: propertyWhereUniqueInput;
    update?: XOR<
      XOR<propertyUpdateToOneWithWhereWithoutReviewInput, propertyUpdateWithoutReviewInput>,
      propertyUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type companyCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: companyCreateOrConnectWithoutTeam_memberInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: companyCreateOrConnectWithoutTeam_memberInput;
    upsert?: companyUpsertWithoutTeam_memberInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutTeam_memberInput, companyUpdateWithoutTeam_memberInput>,
      companyUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    upsert?: userUpsertWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeam_memberInput, userUpdateWithoutTeam_memberInput>,
      userUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type bookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type propertyCreateWithoutBookingInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutPropertyInput;
    review?: reviewCreateNestedManyWithoutPropertyInput;
  };

  export type propertyUncheckedCreateWithoutBookingInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutPropertyInput;
  };

  export type propertyCreateOrConnectWithoutBookingInput = {
    where: propertyWhereUniqueInput;
    create: XOR<propertyCreateWithoutBookingInput, propertyUncheckedCreateWithoutBookingInput>;
  };

  export type userCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
  };

  export type propertyUpsertWithoutBookingInput = {
    update: XOR<propertyUpdateWithoutBookingInput, propertyUncheckedUpdateWithoutBookingInput>;
    create: XOR<propertyCreateWithoutBookingInput, propertyUncheckedCreateWithoutBookingInput>;
    where?: propertyWhereInput;
  };

  export type propertyUpdateToOneWithWhereWithoutBookingInput = {
    where?: propertyWhereInput;
    data: XOR<propertyUpdateWithoutBookingInput, propertyUncheckedUpdateWithoutBookingInput>;
  };

  export type propertyUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutPropertyNestedInput;
    review?: reviewUpdateManyWithoutPropertyNestedInput;
  };

  export type propertyUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutPropertyNestedInput;
  };

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
  };

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type propertyCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutPropertyInput;
    review?: reviewCreateNestedManyWithoutPropertyInput;
  };

  export type propertyUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutPropertyInput;
    review?: reviewUncheckedCreateNestedManyWithoutPropertyInput;
  };

  export type propertyCreateOrConnectWithoutCompanyInput = {
    where: propertyWhereUniqueInput;
    create: XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>;
  };

  export type propertyCreateManyCompanyInputEnvelope = {
    data: propertyCreateManyCompanyInput | propertyCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutCompanyInput = {
    id?: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>;
  };

  export type team_memberCreateManyCompanyInputEnvelope = {
    data: team_memberCreateManyCompanyInput | team_memberCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type propertyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: propertyWhereUniqueInput;
    update: XOR<propertyUpdateWithoutCompanyInput, propertyUncheckedUpdateWithoutCompanyInput>;
    create: XOR<propertyCreateWithoutCompanyInput, propertyUncheckedCreateWithoutCompanyInput>;
  };

  export type propertyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: propertyWhereUniqueInput;
    data: XOR<propertyUpdateWithoutCompanyInput, propertyUncheckedUpdateWithoutCompanyInput>;
  };

  export type propertyUpdateManyWithWhereWithoutCompanyInput = {
    where: propertyScalarWhereInput;
    data: XOR<propertyUpdateManyMutationInput, propertyUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type propertyScalarWhereInput = {
    AND?: propertyScalarWhereInput | propertyScalarWhereInput[];
    OR?: propertyScalarWhereInput[];
    NOT?: propertyScalarWhereInput | propertyScalarWhereInput[];
    id?: UuidFilter<'property'> | string;
    name?: StringFilter<'property'> | string;
    location?: StringFilter<'property'> | string;
    price?: IntFilter<'property'> | number;
    availability?: BoolFilter<'property'> | boolean;
    company_id?: UuidFilter<'property'> | string;
    created_at?: DateTimeFilter<'property'> | Date | string;
    updated_at?: DateTimeFilter<'property'> | Date | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutCompanyInput, team_memberUncheckedUpdateWithoutCompanyInput>;
    create: XOR<team_memberCreateWithoutCompanyInput, team_memberUncheckedCreateWithoutCompanyInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutCompanyInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutCompanyInput, team_memberUncheckedUpdateWithoutCompanyInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutCompanyInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    company_id?: UuidFilter<'team_member'> | string;
    position?: StringFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type bookingCreateWithoutPropertyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutPropertyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutPropertyInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>;
  };

  export type bookingCreateManyPropertyInputEnvelope = {
    data: bookingCreateManyPropertyInput | bookingCreateManyPropertyInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutPropertyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    team_member?: team_memberCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutPropertyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutPropertyInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutPropertyInput, companyUncheckedCreateWithoutPropertyInput>;
  };

  export type reviewCreateWithoutPropertyInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutPropertyInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutPropertyInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>;
  };

  export type reviewCreateManyPropertyInputEnvelope = {
    data: reviewCreateManyPropertyInput | reviewCreateManyPropertyInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutPropertyInput, bookingUncheckedUpdateWithoutPropertyInput>;
    create: XOR<bookingCreateWithoutPropertyInput, bookingUncheckedCreateWithoutPropertyInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutPropertyInput, bookingUncheckedUpdateWithoutPropertyInput>;
  };

  export type bookingUpdateManyWithWhereWithoutPropertyInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutPropertyInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_date?: DateTimeFilter<'booking'> | Date | string;
    end_date?: DateTimeFilter<'booking'> | Date | string;
    total_price?: IntFilter<'booking'> | number;
    user_id?: UuidFilter<'booking'> | string;
    property_id?: UuidFilter<'booking'> | string;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type companyUpsertWithoutPropertyInput = {
    update: XOR<companyUpdateWithoutPropertyInput, companyUncheckedUpdateWithoutPropertyInput>;
    create: XOR<companyCreateWithoutPropertyInput, companyUncheckedCreateWithoutPropertyInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutPropertyInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutPropertyInput, companyUncheckedUpdateWithoutPropertyInput>;
  };

  export type companyUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    team_member?: team_memberUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type reviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutPropertyInput, reviewUncheckedUpdateWithoutPropertyInput>;
    create: XOR<reviewCreateWithoutPropertyInput, reviewUncheckedCreateWithoutPropertyInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutPropertyInput, reviewUncheckedUpdateWithoutPropertyInput>;
  };

  export type reviewUpdateManyWithWhereWithoutPropertyInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutPropertyInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringNullableFilter<'review'> | string | null;
    user_id?: UuidFilter<'review'> | string;
    property_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type propertyCreateWithoutReviewInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutPropertyInput;
    company: companyCreateNestedOneWithoutPropertyInput;
  };

  export type propertyUncheckedCreateWithoutReviewInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutPropertyInput;
  };

  export type propertyCreateOrConnectWithoutReviewInput = {
    where: propertyWhereUniqueInput;
    create: XOR<propertyCreateWithoutReviewInput, propertyUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type propertyUpsertWithoutReviewInput = {
    update: XOR<propertyUpdateWithoutReviewInput, propertyUncheckedUpdateWithoutReviewInput>;
    create: XOR<propertyCreateWithoutReviewInput, propertyUncheckedCreateWithoutReviewInput>;
    where?: propertyWhereInput;
  };

  export type propertyUpdateToOneWithWhereWithoutReviewInput = {
    where?: propertyWhereInput;
    data: XOR<propertyUpdateWithoutReviewInput, propertyUncheckedUpdateWithoutReviewInput>;
  };

  export type propertyUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutPropertyNestedInput;
    company?: companyUpdateOneRequiredWithoutPropertyNestedInput;
  };

  export type propertyUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutPropertyNestedInput;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    property?: propertyCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    property?: propertyUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutTeam_memberInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
  };

  export type userCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeam_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
  };

  export type companyUpsertWithoutTeam_memberInput = {
    update: XOR<companyUpdateWithoutTeam_memberInput, companyUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<companyCreateWithoutTeam_memberInput, companyUncheckedCreateWithoutTeam_memberInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutTeam_memberInput, companyUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type companyUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    property?: propertyUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    property?: propertyUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutTeam_memberInput = {
    update: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type userUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    property: propertyCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    property?: propertyCreateNestedManyWithoutCompanyInput;
    team_member?: team_memberCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    property?: propertyUncheckedCreateNestedManyWithoutCompanyInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    property: propertyCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutUserInput = {
    id?: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    company_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
  };

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type propertyCreateManyCompanyInput = {
    id?: string;
    name: string;
    location: string;
    price: number;
    availability?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type propertyUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutPropertyNestedInput;
    review?: reviewUpdateManyWithoutPropertyNestedInput;
  };

  export type propertyUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutPropertyNestedInput;
    review?: reviewUncheckedUpdateManyWithoutPropertyNestedInput;
  };

  export type propertyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    availability?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyPropertyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyPropertyInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    total_price: number;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    property_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateManyUserInput = {
    id?: string;
    company_id: string;
    position: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    property?: propertyUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_price?: IntFieldUpdateOperationsInput | number;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    property?: propertyUpdateManyWithoutCompanyNestedInput;
    team_member?: team_memberUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    property?: propertyUncheckedUpdateManyWithoutCompanyNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    property?: propertyUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    property_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PropertyCountOutputTypeDefaultArgs instead
   */
  export type PropertyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PropertyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use propertyDefaultArgs instead
   */
  export type propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    propertyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
