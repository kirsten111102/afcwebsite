
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Chairman
 * 
 */
export type Chairman = $Result.DefaultSelection<Prisma.$ChairmanPayload>
/**
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model Leagues
 * 
 */
export type Leagues = $Result.DefaultSelection<Prisma.$LeaguesPayload>
/**
 * Model PersonalAchievements
 * 
 */
export type PersonalAchievements = $Result.DefaultSelection<Prisma.$PersonalAchievementsPayload>
/**
 * Model PlayerInfo
 * 
 */
export type PlayerInfo = $Result.DefaultSelection<Prisma.$PlayerInfoPayload>
/**
 * Model PlayerRatings
 * 
 */
export type PlayerRatings = $Result.DefaultSelection<Prisma.$PlayerRatingsPayload>
/**
 * Model PlayerStats
 * 
 */
export type PlayerStats = $Result.DefaultSelection<Prisma.$PlayerStatsPayload>
/**
 * Model PlayerTeamAchievements
 * 
 */
export type PlayerTeamAchievements = $Result.DefaultSelection<Prisma.$PlayerTeamAchievementsPayload>
/**
 * Model PlayerPersonalAchievements
 * 
 */
export type PlayerPersonalAchievements = $Result.DefaultSelection<Prisma.$PlayerPersonalAchievementsPayload>
/**
 * Model PlayerTeammateThoughts
 * 
 */
export type PlayerTeammateThoughts = $Result.DefaultSelection<Prisma.$PlayerTeammateThoughtsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teams
 * const teams = await prisma.teams.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Teams
   * const teams = await prisma.teams.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chairman`: Exposes CRUD operations for the **Chairman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chairmen
    * const chairmen = await prisma.chairman.findMany()
    * ```
    */
  get chairman(): Prisma.ChairmanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leagues`: Exposes CRUD operations for the **Leagues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leagues
    * const leagues = await prisma.leagues.findMany()
    * ```
    */
  get leagues(): Prisma.LeaguesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalAchievements`: Exposes CRUD operations for the **PersonalAchievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalAchievements
    * const personalAchievements = await prisma.personalAchievements.findMany()
    * ```
    */
  get personalAchievements(): Prisma.PersonalAchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerInfo`: Exposes CRUD operations for the **PlayerInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerInfos
    * const playerInfos = await prisma.playerInfo.findMany()
    * ```
    */
  get playerInfo(): Prisma.PlayerInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerRatings`: Exposes CRUD operations for the **PlayerRatings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerRatings
    * const playerRatings = await prisma.playerRatings.findMany()
    * ```
    */
  get playerRatings(): Prisma.PlayerRatingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerStats`: Exposes CRUD operations for the **PlayerStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerStats
    * const playerStats = await prisma.playerStats.findMany()
    * ```
    */
  get playerStats(): Prisma.PlayerStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTeamAchievements`: Exposes CRUD operations for the **PlayerTeamAchievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTeamAchievements
    * const playerTeamAchievements = await prisma.playerTeamAchievements.findMany()
    * ```
    */
  get playerTeamAchievements(): Prisma.PlayerTeamAchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerPersonalAchievements`: Exposes CRUD operations for the **PlayerPersonalAchievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerPersonalAchievements
    * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findMany()
    * ```
    */
  get playerPersonalAchievements(): Prisma.PlayerPersonalAchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTeammateThoughts`: Exposes CRUD operations for the **PlayerTeammateThoughts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTeammateThoughts
    * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findMany()
    * ```
    */
  get playerTeammateThoughts(): Prisma.PlayerTeammateThoughtsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Teams: 'Teams',
    Employee: 'Employee',
    Chairman: 'Chairman',
    Players: 'Players',
    Leagues: 'Leagues',
    PersonalAchievements: 'PersonalAchievements',
    PlayerInfo: 'PlayerInfo',
    PlayerRatings: 'PlayerRatings',
    PlayerStats: 'PlayerStats',
    PlayerTeamAchievements: 'PlayerTeamAchievements',
    PlayerPersonalAchievements: 'PlayerPersonalAchievements',
    PlayerTeammateThoughts: 'PlayerTeammateThoughts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "teams" | "employee" | "chairman" | "players" | "leagues" | "personalAchievements" | "playerInfo" | "playerRatings" | "playerStats" | "playerTeamAchievements" | "playerPersonalAchievements" | "playerTeammateThoughts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Chairman: {
        payload: Prisma.$ChairmanPayload<ExtArgs>
        fields: Prisma.ChairmanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChairmanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChairmanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          findFirst: {
            args: Prisma.ChairmanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChairmanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          findMany: {
            args: Prisma.ChairmanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>[]
          }
          create: {
            args: Prisma.ChairmanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          createMany: {
            args: Prisma.ChairmanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChairmanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>[]
          }
          delete: {
            args: Prisma.ChairmanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          update: {
            args: Prisma.ChairmanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          deleteMany: {
            args: Prisma.ChairmanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChairmanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChairmanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>[]
          }
          upsert: {
            args: Prisma.ChairmanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairmanPayload>
          }
          aggregate: {
            args: Prisma.ChairmanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChairman>
          }
          groupBy: {
            args: Prisma.ChairmanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChairmanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChairmanCountArgs<ExtArgs>
            result: $Utils.Optional<ChairmanCountAggregateOutputType> | number
          }
        }
      }
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      Leagues: {
        payload: Prisma.$LeaguesPayload<ExtArgs>
        fields: Prisma.LeaguesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaguesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaguesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          findFirst: {
            args: Prisma.LeaguesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaguesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          findMany: {
            args: Prisma.LeaguesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>[]
          }
          create: {
            args: Prisma.LeaguesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          createMany: {
            args: Prisma.LeaguesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaguesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>[]
          }
          delete: {
            args: Prisma.LeaguesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          update: {
            args: Prisma.LeaguesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          deleteMany: {
            args: Prisma.LeaguesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaguesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaguesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>[]
          }
          upsert: {
            args: Prisma.LeaguesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguesPayload>
          }
          aggregate: {
            args: Prisma.LeaguesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeagues>
          }
          groupBy: {
            args: Prisma.LeaguesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaguesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaguesCountArgs<ExtArgs>
            result: $Utils.Optional<LeaguesCountAggregateOutputType> | number
          }
        }
      }
      PersonalAchievements: {
        payload: Prisma.$PersonalAchievementsPayload<ExtArgs>
        fields: Prisma.PersonalAchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalAchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalAchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          findFirst: {
            args: Prisma.PersonalAchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalAchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          findMany: {
            args: Prisma.PersonalAchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>[]
          }
          create: {
            args: Prisma.PersonalAchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          createMany: {
            args: Prisma.PersonalAchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalAchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>[]
          }
          delete: {
            args: Prisma.PersonalAchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          update: {
            args: Prisma.PersonalAchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          deleteMany: {
            args: Prisma.PersonalAchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalAchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalAchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>[]
          }
          upsert: {
            args: Prisma.PersonalAchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAchievementsPayload>
          }
          aggregate: {
            args: Prisma.PersonalAchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalAchievements>
          }
          groupBy: {
            args: Prisma.PersonalAchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalAchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalAchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalAchievementsCountAggregateOutputType> | number
          }
        }
      }
      PlayerInfo: {
        payload: Prisma.$PlayerInfoPayload<ExtArgs>
        fields: Prisma.PlayerInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          findFirst: {
            args: Prisma.PlayerInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          findMany: {
            args: Prisma.PlayerInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>[]
          }
          create: {
            args: Prisma.PlayerInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          createMany: {
            args: Prisma.PlayerInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>[]
          }
          delete: {
            args: Prisma.PlayerInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          update: {
            args: Prisma.PlayerInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          deleteMany: {
            args: Prisma.PlayerInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>[]
          }
          upsert: {
            args: Prisma.PlayerInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerInfoPayload>
          }
          aggregate: {
            args: Prisma.PlayerInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerInfo>
          }
          groupBy: {
            args: Prisma.PlayerInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerInfoCountAggregateOutputType> | number
          }
        }
      }
      PlayerRatings: {
        payload: Prisma.$PlayerRatingsPayload<ExtArgs>
        fields: Prisma.PlayerRatingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerRatingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerRatingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          findFirst: {
            args: Prisma.PlayerRatingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerRatingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          findMany: {
            args: Prisma.PlayerRatingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>[]
          }
          create: {
            args: Prisma.PlayerRatingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          createMany: {
            args: Prisma.PlayerRatingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerRatingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>[]
          }
          delete: {
            args: Prisma.PlayerRatingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          update: {
            args: Prisma.PlayerRatingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerRatingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerRatingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerRatingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerRatingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerRatingsPayload>
          }
          aggregate: {
            args: Prisma.PlayerRatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerRatings>
          }
          groupBy: {
            args: Prisma.PlayerRatingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerRatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerRatingsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerRatingsCountAggregateOutputType> | number
          }
        }
      }
      PlayerStats: {
        payload: Prisma.$PlayerStatsPayload<ExtArgs>
        fields: Prisma.PlayerStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findFirst: {
            args: Prisma.PlayerStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findMany: {
            args: Prisma.PlayerStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          create: {
            args: Prisma.PlayerStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          createMany: {
            args: Prisma.PlayerStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          delete: {
            args: Prisma.PlayerStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          update: {
            args: Prisma.PlayerStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          aggregate: {
            args: Prisma.PlayerStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerStats>
          }
          groupBy: {
            args: Prisma.PlayerStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsCountAggregateOutputType> | number
          }
        }
      }
      PlayerTeamAchievements: {
        payload: Prisma.$PlayerTeamAchievementsPayload<ExtArgs>
        fields: Prisma.PlayerTeamAchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTeamAchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTeamAchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          findFirst: {
            args: Prisma.PlayerTeamAchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTeamAchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          findMany: {
            args: Prisma.PlayerTeamAchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>[]
          }
          create: {
            args: Prisma.PlayerTeamAchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          createMany: {
            args: Prisma.PlayerTeamAchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerTeamAchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>[]
          }
          delete: {
            args: Prisma.PlayerTeamAchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          update: {
            args: Prisma.PlayerTeamAchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTeamAchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTeamAchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerTeamAchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerTeamAchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamAchievementsPayload>
          }
          aggregate: {
            args: Prisma.PlayerTeamAchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTeamAchievements>
          }
          groupBy: {
            args: Prisma.PlayerTeamAchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeamAchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTeamAchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeamAchievementsCountAggregateOutputType> | number
          }
        }
      }
      PlayerPersonalAchievements: {
        payload: Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>
        fields: Prisma.PlayerPersonalAchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerPersonalAchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerPersonalAchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          findFirst: {
            args: Prisma.PlayerPersonalAchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerPersonalAchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          findMany: {
            args: Prisma.PlayerPersonalAchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>[]
          }
          create: {
            args: Prisma.PlayerPersonalAchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          createMany: {
            args: Prisma.PlayerPersonalAchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerPersonalAchievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>[]
          }
          delete: {
            args: Prisma.PlayerPersonalAchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          update: {
            args: Prisma.PlayerPersonalAchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerPersonalAchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerPersonalAchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerPersonalAchievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerPersonalAchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPersonalAchievementsPayload>
          }
          aggregate: {
            args: Prisma.PlayerPersonalAchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerPersonalAchievements>
          }
          groupBy: {
            args: Prisma.PlayerPersonalAchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerPersonalAchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerPersonalAchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerPersonalAchievementsCountAggregateOutputType> | number
          }
        }
      }
      PlayerTeammateThoughts: {
        payload: Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>
        fields: Prisma.PlayerTeammateThoughtsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTeammateThoughtsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTeammateThoughtsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          findFirst: {
            args: Prisma.PlayerTeammateThoughtsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTeammateThoughtsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          findMany: {
            args: Prisma.PlayerTeammateThoughtsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>[]
          }
          create: {
            args: Prisma.PlayerTeammateThoughtsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          createMany: {
            args: Prisma.PlayerTeammateThoughtsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerTeammateThoughtsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>[]
          }
          delete: {
            args: Prisma.PlayerTeammateThoughtsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          update: {
            args: Prisma.PlayerTeammateThoughtsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTeammateThoughtsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTeammateThoughtsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerTeammateThoughtsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerTeammateThoughtsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeammateThoughtsPayload>
          }
          aggregate: {
            args: Prisma.PlayerTeammateThoughtsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTeammateThoughts>
          }
          groupBy: {
            args: Prisma.PlayerTeammateThoughtsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeammateThoughtsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTeammateThoughtsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeammateThoughtsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    teams?: TeamsOmit
    employee?: EmployeeOmit
    chairman?: ChairmanOmit
    players?: PlayersOmit
    leagues?: LeaguesOmit
    personalAchievements?: PersonalAchievementsOmit
    playerInfo?: PlayerInfoOmit
    playerRatings?: PlayerRatingsOmit
    playerStats?: PlayerStatsOmit
    playerTeamAchievements?: PlayerTeamAchievementsOmit
    playerPersonalAchievements?: PlayerPersonalAchievementsOmit
    playerTeammateThoughts?: PlayerTeammateThoughtsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    employee: number
    player: number
    league_achievement: number
    personal_achievement: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | TeamsCountOutputTypeCountEmployeeArgs
    player?: boolean | TeamsCountOutputTypeCountPlayerArgs
    league_achievement?: boolean | TeamsCountOutputTypeCountLeague_achievementArgs
    personal_achievement?: boolean | TeamsCountOutputTypeCountPersonal_achievementArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountLeague_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamAchievementsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountPersonal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPersonalAchievementsWhereInput
  }


  /**
   * Count Type PlayersCountOutputType
   */

  export type PlayersCountOutputType = {
    player_team_achievement: number
    player_personal_achievement: number
    thoughtsAuthored: number
    thoughtsReceived: number
  }

  export type PlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_team_achievement?: boolean | PlayersCountOutputTypeCountPlayer_team_achievementArgs
    player_personal_achievement?: boolean | PlayersCountOutputTypeCountPlayer_personal_achievementArgs
    thoughtsAuthored?: boolean | PlayersCountOutputTypeCountThoughtsAuthoredArgs
    thoughtsReceived?: boolean | PlayersCountOutputTypeCountThoughtsReceivedArgs
  }

  // Custom InputTypes
  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayersCountOutputType
     */
    select?: PlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountPlayer_team_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamAchievementsWhereInput
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountPlayer_personal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPersonalAchievementsWhereInput
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountThoughtsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeammateThoughtsWhereInput
  }

  /**
   * PlayersCountOutputType without action
   */
  export type PlayersCountOutputTypeCountThoughtsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeammateThoughtsWhereInput
  }


  /**
   * Count Type LeaguesCountOutputType
   */

  export type LeaguesCountOutputType = {
    league_achievement: number
  }

  export type LeaguesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league_achievement?: boolean | LeaguesCountOutputTypeCountLeague_achievementArgs
  }

  // Custom InputTypes
  /**
   * LeaguesCountOutputType without action
   */
  export type LeaguesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaguesCountOutputType
     */
    select?: LeaguesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaguesCountOutputType without action
   */
  export type LeaguesCountOutputTypeCountLeague_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamAchievementsWhereInput
  }


  /**
   * Count Type PersonalAchievementsCountOutputType
   */

  export type PersonalAchievementsCountOutputType = {
    personal_achievement: number
  }

  export type PersonalAchievementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal_achievement?: boolean | PersonalAchievementsCountOutputTypeCountPersonal_achievementArgs
  }

  // Custom InputTypes
  /**
   * PersonalAchievementsCountOutputType without action
   */
  export type PersonalAchievementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievementsCountOutputType
     */
    select?: PersonalAchievementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalAchievementsCountOutputType without action
   */
  export type PersonalAchievementsCountOutputTypeCountPersonal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPersonalAchievementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    name: string
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    employee?: boolean | Teams$employeeArgs<ExtArgs>
    chairman?: boolean | Teams$chairmanArgs<ExtArgs>
    player?: boolean | Teams$playerArgs<ExtArgs>
    league_achievement?: boolean | Teams$league_achievementArgs<ExtArgs>
    personal_achievement?: boolean | Teams$personal_achievementArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["teams"]>
  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Teams$employeeArgs<ExtArgs>
    chairman?: boolean | Teams$chairmanArgs<ExtArgs>
    player?: boolean | Teams$playerArgs<ExtArgs>
    league_achievement?: boolean | Teams$league_achievementArgs<ExtArgs>
    personal_achievement?: boolean | Teams$personal_achievementArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>[]
      chairman: Prisma.$ChairmanPayload<ExtArgs> | null
      player: Prisma.$PlayersPayload<ExtArgs>[]
      league_achievement: Prisma.$PlayerTeamAchievementsPayload<ExtArgs>[]
      personal_achievement: Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsFindUniqueArgs>(args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsFindFirstArgs>(args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsFindManyArgs>(args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends TeamsCreateArgs>(args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsCreateManyArgs>(args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends TeamsDeleteArgs>(args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsUpdateArgs>(args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsDeleteManyArgs>(args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsUpdateManyArgs>(args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends TeamsUpsertArgs>(args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Teams$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Teams$employeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chairman<T extends Teams$chairmanArgs<ExtArgs> = {}>(args?: Subset<T, Teams$chairmanArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player<T extends Teams$playerArgs<ExtArgs> = {}>(args?: Subset<T, Teams$playerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    league_achievement<T extends Teams$league_achievementArgs<ExtArgs> = {}>(args?: Subset<T, Teams$league_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personal_achievement<T extends Teams$personal_achievementArgs<ExtArgs> = {}>(args?: Subset<T, Teams$personal_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teams model
   */
  interface TeamsFieldRefs {
    readonly id: FieldRef<"Teams", 'String'>
    readonly name: FieldRef<"Teams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams createManyAndReturn
   */
  export type TeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams updateManyAndReturn
   */
  export type TeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Teams.employee
   */
  export type Teams$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Teams.chairman
   */
  export type Teams$chairmanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    where?: ChairmanWhereInput
  }

  /**
   * Teams.player
   */
  export type Teams$playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    cursor?: PlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Teams.league_achievement
   */
  export type Teams$league_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    where?: PlayerTeamAchievementsWhereInput
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * Teams.personal_achievement
   */
  export type Teams$personal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    where?: PlayerPersonalAchievementsWhereInput
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    position: string | null
    team_id: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    position: string | null
    team_id: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    age: number
    position: number
    team_id: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    age: number
    position: string
    team_id: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "position" | "team_id", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      position: string
      team_id: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly age: FieldRef<"Employee", 'Int'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly team_id: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Chairman
   */

  export type AggregateChairman = {
    _count: ChairmanCountAggregateOutputType | null
    _avg: ChairmanAvgAggregateOutputType | null
    _sum: ChairmanSumAggregateOutputType | null
    _min: ChairmanMinAggregateOutputType | null
    _max: ChairmanMaxAggregateOutputType | null
  }

  export type ChairmanAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type ChairmanSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type ChairmanMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    team_id: string | null
  }

  export type ChairmanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    team_id: string | null
  }

  export type ChairmanCountAggregateOutputType = {
    id: number
    name: number
    age: number
    team_id: number
    _all: number
  }


  export type ChairmanAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type ChairmanSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type ChairmanMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    team_id?: true
  }

  export type ChairmanMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    team_id?: true
  }

  export type ChairmanCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    team_id?: true
    _all?: true
  }

  export type ChairmanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chairman to aggregate.
     */
    where?: ChairmanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairmen to fetch.
     */
    orderBy?: ChairmanOrderByWithRelationInput | ChairmanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChairmanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairmen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairmen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chairmen
    **/
    _count?: true | ChairmanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChairmanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChairmanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChairmanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChairmanMaxAggregateInputType
  }

  export type GetChairmanAggregateType<T extends ChairmanAggregateArgs> = {
        [P in keyof T & keyof AggregateChairman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChairman[P]>
      : GetScalarType<T[P], AggregateChairman[P]>
  }




  export type ChairmanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairmanWhereInput
    orderBy?: ChairmanOrderByWithAggregationInput | ChairmanOrderByWithAggregationInput[]
    by: ChairmanScalarFieldEnum[] | ChairmanScalarFieldEnum
    having?: ChairmanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChairmanCountAggregateInputType | true
    _avg?: ChairmanAvgAggregateInputType
    _sum?: ChairmanSumAggregateInputType
    _min?: ChairmanMinAggregateInputType
    _max?: ChairmanMaxAggregateInputType
  }

  export type ChairmanGroupByOutputType = {
    id: number
    name: string
    age: number
    team_id: string
    _count: ChairmanCountAggregateOutputType | null
    _avg: ChairmanAvgAggregateOutputType | null
    _sum: ChairmanSumAggregateOutputType | null
    _min: ChairmanMinAggregateOutputType | null
    _max: ChairmanMaxAggregateOutputType | null
  }

  type GetChairmanGroupByPayload<T extends ChairmanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChairmanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChairmanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChairmanGroupByOutputType[P]>
            : GetScalarType<T[P], ChairmanGroupByOutputType[P]>
        }
      >
    >


  export type ChairmanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chairman"]>

  export type ChairmanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chairman"]>

  export type ChairmanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    team_id?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chairman"]>

  export type ChairmanSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    team_id?: boolean
  }

  export type ChairmanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "team_id", ExtArgs["result"]["chairman"]>
  export type ChairmanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type ChairmanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type ChairmanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $ChairmanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chairman"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      team_id: string
    }, ExtArgs["result"]["chairman"]>
    composites: {}
  }

  type ChairmanGetPayload<S extends boolean | null | undefined | ChairmanDefaultArgs> = $Result.GetResult<Prisma.$ChairmanPayload, S>

  type ChairmanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChairmanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChairmanCountAggregateInputType | true
    }

  export interface ChairmanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chairman'], meta: { name: 'Chairman' } }
    /**
     * Find zero or one Chairman that matches the filter.
     * @param {ChairmanFindUniqueArgs} args - Arguments to find a Chairman
     * @example
     * // Get one Chairman
     * const chairman = await prisma.chairman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChairmanFindUniqueArgs>(args: SelectSubset<T, ChairmanFindUniqueArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chairman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChairmanFindUniqueOrThrowArgs} args - Arguments to find a Chairman
     * @example
     * // Get one Chairman
     * const chairman = await prisma.chairman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChairmanFindUniqueOrThrowArgs>(args: SelectSubset<T, ChairmanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chairman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanFindFirstArgs} args - Arguments to find a Chairman
     * @example
     * // Get one Chairman
     * const chairman = await prisma.chairman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChairmanFindFirstArgs>(args?: SelectSubset<T, ChairmanFindFirstArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chairman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanFindFirstOrThrowArgs} args - Arguments to find a Chairman
     * @example
     * // Get one Chairman
     * const chairman = await prisma.chairman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChairmanFindFirstOrThrowArgs>(args?: SelectSubset<T, ChairmanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chairmen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chairmen
     * const chairmen = await prisma.chairman.findMany()
     * 
     * // Get first 10 Chairmen
     * const chairmen = await prisma.chairman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chairmanWithIdOnly = await prisma.chairman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChairmanFindManyArgs>(args?: SelectSubset<T, ChairmanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chairman.
     * @param {ChairmanCreateArgs} args - Arguments to create a Chairman.
     * @example
     * // Create one Chairman
     * const Chairman = await prisma.chairman.create({
     *   data: {
     *     // ... data to create a Chairman
     *   }
     * })
     * 
     */
    create<T extends ChairmanCreateArgs>(args: SelectSubset<T, ChairmanCreateArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chairmen.
     * @param {ChairmanCreateManyArgs} args - Arguments to create many Chairmen.
     * @example
     * // Create many Chairmen
     * const chairman = await prisma.chairman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChairmanCreateManyArgs>(args?: SelectSubset<T, ChairmanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chairmen and returns the data saved in the database.
     * @param {ChairmanCreateManyAndReturnArgs} args - Arguments to create many Chairmen.
     * @example
     * // Create many Chairmen
     * const chairman = await prisma.chairman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chairmen and only return the `id`
     * const chairmanWithIdOnly = await prisma.chairman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChairmanCreateManyAndReturnArgs>(args?: SelectSubset<T, ChairmanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chairman.
     * @param {ChairmanDeleteArgs} args - Arguments to delete one Chairman.
     * @example
     * // Delete one Chairman
     * const Chairman = await prisma.chairman.delete({
     *   where: {
     *     // ... filter to delete one Chairman
     *   }
     * })
     * 
     */
    delete<T extends ChairmanDeleteArgs>(args: SelectSubset<T, ChairmanDeleteArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chairman.
     * @param {ChairmanUpdateArgs} args - Arguments to update one Chairman.
     * @example
     * // Update one Chairman
     * const chairman = await prisma.chairman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChairmanUpdateArgs>(args: SelectSubset<T, ChairmanUpdateArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chairmen.
     * @param {ChairmanDeleteManyArgs} args - Arguments to filter Chairmen to delete.
     * @example
     * // Delete a few Chairmen
     * const { count } = await prisma.chairman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChairmanDeleteManyArgs>(args?: SelectSubset<T, ChairmanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chairmen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chairmen
     * const chairman = await prisma.chairman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChairmanUpdateManyArgs>(args: SelectSubset<T, ChairmanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chairmen and returns the data updated in the database.
     * @param {ChairmanUpdateManyAndReturnArgs} args - Arguments to update many Chairmen.
     * @example
     * // Update many Chairmen
     * const chairman = await prisma.chairman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chairmen and only return the `id`
     * const chairmanWithIdOnly = await prisma.chairman.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChairmanUpdateManyAndReturnArgs>(args: SelectSubset<T, ChairmanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chairman.
     * @param {ChairmanUpsertArgs} args - Arguments to update or create a Chairman.
     * @example
     * // Update or create a Chairman
     * const chairman = await prisma.chairman.upsert({
     *   create: {
     *     // ... data to create a Chairman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chairman we want to update
     *   }
     * })
     */
    upsert<T extends ChairmanUpsertArgs>(args: SelectSubset<T, ChairmanUpsertArgs<ExtArgs>>): Prisma__ChairmanClient<$Result.GetResult<Prisma.$ChairmanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chairmen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanCountArgs} args - Arguments to filter Chairmen to count.
     * @example
     * // Count the number of Chairmen
     * const count = await prisma.chairman.count({
     *   where: {
     *     // ... the filter for the Chairmen we want to count
     *   }
     * })
    **/
    count<T extends ChairmanCountArgs>(
      args?: Subset<T, ChairmanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChairmanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chairman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChairmanAggregateArgs>(args: Subset<T, ChairmanAggregateArgs>): Prisma.PrismaPromise<GetChairmanAggregateType<T>>

    /**
     * Group by Chairman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairmanGroupByArgs} args - Group by arguments.
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
      T extends ChairmanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChairmanGroupByArgs['orderBy'] }
        : { orderBy?: ChairmanGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChairmanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChairmanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chairman model
   */
  readonly fields: ChairmanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chairman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChairmanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chairman model
   */
  interface ChairmanFieldRefs {
    readonly id: FieldRef<"Chairman", 'Int'>
    readonly name: FieldRef<"Chairman", 'String'>
    readonly age: FieldRef<"Chairman", 'Int'>
    readonly team_id: FieldRef<"Chairman", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chairman findUnique
   */
  export type ChairmanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter, which Chairman to fetch.
     */
    where: ChairmanWhereUniqueInput
  }

  /**
   * Chairman findUniqueOrThrow
   */
  export type ChairmanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter, which Chairman to fetch.
     */
    where: ChairmanWhereUniqueInput
  }

  /**
   * Chairman findFirst
   */
  export type ChairmanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter, which Chairman to fetch.
     */
    where?: ChairmanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairmen to fetch.
     */
    orderBy?: ChairmanOrderByWithRelationInput | ChairmanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairmen.
     */
    cursor?: ChairmanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairmen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairmen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairmen.
     */
    distinct?: ChairmanScalarFieldEnum | ChairmanScalarFieldEnum[]
  }

  /**
   * Chairman findFirstOrThrow
   */
  export type ChairmanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter, which Chairman to fetch.
     */
    where?: ChairmanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairmen to fetch.
     */
    orderBy?: ChairmanOrderByWithRelationInput | ChairmanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairmen.
     */
    cursor?: ChairmanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairmen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairmen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairmen.
     */
    distinct?: ChairmanScalarFieldEnum | ChairmanScalarFieldEnum[]
  }

  /**
   * Chairman findMany
   */
  export type ChairmanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter, which Chairmen to fetch.
     */
    where?: ChairmanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairmen to fetch.
     */
    orderBy?: ChairmanOrderByWithRelationInput | ChairmanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chairmen.
     */
    cursor?: ChairmanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairmen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairmen.
     */
    skip?: number
    distinct?: ChairmanScalarFieldEnum | ChairmanScalarFieldEnum[]
  }

  /**
   * Chairman create
   */
  export type ChairmanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * The data needed to create a Chairman.
     */
    data: XOR<ChairmanCreateInput, ChairmanUncheckedCreateInput>
  }

  /**
   * Chairman createMany
   */
  export type ChairmanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chairmen.
     */
    data: ChairmanCreateManyInput | ChairmanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chairman createManyAndReturn
   */
  export type ChairmanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * The data used to create many Chairmen.
     */
    data: ChairmanCreateManyInput | ChairmanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chairman update
   */
  export type ChairmanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * The data needed to update a Chairman.
     */
    data: XOR<ChairmanUpdateInput, ChairmanUncheckedUpdateInput>
    /**
     * Choose, which Chairman to update.
     */
    where: ChairmanWhereUniqueInput
  }

  /**
   * Chairman updateMany
   */
  export type ChairmanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chairmen.
     */
    data: XOR<ChairmanUpdateManyMutationInput, ChairmanUncheckedUpdateManyInput>
    /**
     * Filter which Chairmen to update
     */
    where?: ChairmanWhereInput
    /**
     * Limit how many Chairmen to update.
     */
    limit?: number
  }

  /**
   * Chairman updateManyAndReturn
   */
  export type ChairmanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * The data used to update Chairmen.
     */
    data: XOR<ChairmanUpdateManyMutationInput, ChairmanUncheckedUpdateManyInput>
    /**
     * Filter which Chairmen to update
     */
    where?: ChairmanWhereInput
    /**
     * Limit how many Chairmen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chairman upsert
   */
  export type ChairmanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * The filter to search for the Chairman to update in case it exists.
     */
    where: ChairmanWhereUniqueInput
    /**
     * In case the Chairman found by the `where` argument doesn't exist, create a new Chairman with this data.
     */
    create: XOR<ChairmanCreateInput, ChairmanUncheckedCreateInput>
    /**
     * In case the Chairman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChairmanUpdateInput, ChairmanUncheckedUpdateInput>
  }

  /**
   * Chairman delete
   */
  export type ChairmanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
    /**
     * Filter which Chairman to delete.
     */
    where: ChairmanWhereUniqueInput
  }

  /**
   * Chairman deleteMany
   */
  export type ChairmanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chairmen to delete
     */
    where?: ChairmanWhereInput
    /**
     * Limit how many Chairmen to delete.
     */
    limit?: number
  }

  /**
   * Chairman without action
   */
  export type ChairmanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairman
     */
    select?: ChairmanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairman
     */
    omit?: ChairmanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairmanInclude<ExtArgs> | null
  }


  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    age: number | null
    shirt_no: number | null
  }

  export type PlayersSumAggregateOutputType = {
    age: number | null
    shirt_no: number | null
  }

  export type PlayersMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    position: string | null
    team_id: string | null
    shirt_no: number | null
  }

  export type PlayersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    position: string | null
    team_id: string | null
    shirt_no: number | null
  }

  export type PlayersCountAggregateOutputType = {
    id: number
    name: number
    age: number
    position: number
    team_id: number
    shirt_no: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    age?: true
    shirt_no?: true
  }

  export type PlayersSumAggregateInputType = {
    age?: true
    shirt_no?: true
  }

  export type PlayersMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
    shirt_no?: true
  }

  export type PlayersMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
    shirt_no?: true
  }

  export type PlayersCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    position?: true
    team_id?: true
    shirt_no?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    shirt_no?: boolean
    player_info?: boolean | Players$player_infoArgs<ExtArgs>
    player_rating?: boolean | Players$player_ratingArgs<ExtArgs>
    player_stats?: boolean | Players$player_statsArgs<ExtArgs>
    player_team_achievement?: boolean | Players$player_team_achievementArgs<ExtArgs>
    player_personal_achievement?: boolean | Players$player_personal_achievementArgs<ExtArgs>
    thoughtsAuthored?: boolean | Players$thoughtsAuthoredArgs<ExtArgs>
    thoughtsReceived?: boolean | Players$thoughtsReceivedArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    shirt_no?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    shirt_no?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    team_id?: boolean
    shirt_no?: boolean
  }

  export type PlayersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "position" | "team_id" | "shirt_no", ExtArgs["result"]["players"]>
  export type PlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player_info?: boolean | Players$player_infoArgs<ExtArgs>
    player_rating?: boolean | Players$player_ratingArgs<ExtArgs>
    player_stats?: boolean | Players$player_statsArgs<ExtArgs>
    player_team_achievement?: boolean | Players$player_team_achievementArgs<ExtArgs>
    player_personal_achievement?: boolean | Players$player_personal_achievementArgs<ExtArgs>
    thoughtsAuthored?: boolean | Players$thoughtsAuthoredArgs<ExtArgs>
    thoughtsReceived?: boolean | Players$thoughtsReceivedArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    _count?: boolean | PlayersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type PlayersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {
      player_info: Prisma.$PlayerInfoPayload<ExtArgs> | null
      player_rating: Prisma.$PlayerRatingsPayload<ExtArgs> | null
      player_stats: Prisma.$PlayerStatsPayload<ExtArgs> | null
      player_team_achievement: Prisma.$PlayerTeamAchievementsPayload<ExtArgs>[]
      player_personal_achievement: Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>[]
      thoughtsAuthored: Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>[]
      thoughtsReceived: Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>[]
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number
      position: string
      team_id: string
      shirt_no: number
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playersWithIdOnly = await prisma.players.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayersCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayersCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayersUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playersWithIdOnly = await prisma.players.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayersUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
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
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player_info<T extends Players$player_infoArgs<ExtArgs> = {}>(args?: Subset<T, Players$player_infoArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player_rating<T extends Players$player_ratingArgs<ExtArgs> = {}>(args?: Subset<T, Players$player_ratingArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player_stats<T extends Players$player_statsArgs<ExtArgs> = {}>(args?: Subset<T, Players$player_statsArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player_team_achievement<T extends Players$player_team_achievementArgs<ExtArgs> = {}>(args?: Subset<T, Players$player_team_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    player_personal_achievement<T extends Players$player_personal_achievementArgs<ExtArgs> = {}>(args?: Subset<T, Players$player_personal_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thoughtsAuthored<T extends Players$thoughtsAuthoredArgs<ExtArgs> = {}>(args?: Subset<T, Players$thoughtsAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thoughtsReceived<T extends Players$thoughtsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, Players$thoughtsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Players model
   */
  interface PlayersFieldRefs {
    readonly id: FieldRef<"Players", 'String'>
    readonly name: FieldRef<"Players", 'String'>
    readonly age: FieldRef<"Players", 'Int'>
    readonly position: FieldRef<"Players", 'String'>
    readonly team_id: FieldRef<"Players", 'String'>
    readonly shirt_no: FieldRef<"Players", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players createManyAndReturn
   */
  export type PlayersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Players updateManyAndReturn
   */
  export type PlayersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Players.player_info
   */
  export type Players$player_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    where?: PlayerInfoWhereInput
  }

  /**
   * Players.player_rating
   */
  export type Players$player_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    where?: PlayerRatingsWhereInput
  }

  /**
   * Players.player_stats
   */
  export type Players$player_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    where?: PlayerStatsWhereInput
  }

  /**
   * Players.player_team_achievement
   */
  export type Players$player_team_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    where?: PlayerTeamAchievementsWhereInput
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * Players.player_personal_achievement
   */
  export type Players$player_personal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    where?: PlayerPersonalAchievementsWhereInput
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * Players.thoughtsAuthored
   */
  export type Players$thoughtsAuthoredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    where?: PlayerTeammateThoughtsWhereInput
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeammateThoughtsScalarFieldEnum | PlayerTeammateThoughtsScalarFieldEnum[]
  }

  /**
   * Players.thoughtsReceived
   */
  export type Players$thoughtsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    where?: PlayerTeammateThoughtsWhereInput
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeammateThoughtsScalarFieldEnum | PlayerTeammateThoughtsScalarFieldEnum[]
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players
     */
    omit?: PlayersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
  }


  /**
   * Model Leagues
   */

  export type AggregateLeagues = {
    _count: LeaguesCountAggregateOutputType | null
    _min: LeaguesMinAggregateOutputType | null
    _max: LeaguesMaxAggregateOutputType | null
  }

  export type LeaguesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type LeaguesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type LeaguesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LeaguesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LeaguesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LeaguesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LeaguesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leagues to aggregate.
     */
    where?: LeaguesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeaguesOrderByWithRelationInput | LeaguesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaguesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leagues
    **/
    _count?: true | LeaguesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaguesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaguesMaxAggregateInputType
  }

  export type GetLeaguesAggregateType<T extends LeaguesAggregateArgs> = {
        [P in keyof T & keyof AggregateLeagues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeagues[P]>
      : GetScalarType<T[P], AggregateLeagues[P]>
  }




  export type LeaguesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaguesWhereInput
    orderBy?: LeaguesOrderByWithAggregationInput | LeaguesOrderByWithAggregationInput[]
    by: LeaguesScalarFieldEnum[] | LeaguesScalarFieldEnum
    having?: LeaguesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaguesCountAggregateInputType | true
    _min?: LeaguesMinAggregateInputType
    _max?: LeaguesMaxAggregateInputType
  }

  export type LeaguesGroupByOutputType = {
    id: string
    name: string
    _count: LeaguesCountAggregateOutputType | null
    _min: LeaguesMinAggregateOutputType | null
    _max: LeaguesMaxAggregateOutputType | null
  }

  type GetLeaguesGroupByPayload<T extends LeaguesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaguesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaguesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaguesGroupByOutputType[P]>
            : GetScalarType<T[P], LeaguesGroupByOutputType[P]>
        }
      >
    >


  export type LeaguesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    league_achievement?: boolean | Leagues$league_achievementArgs<ExtArgs>
    _count?: boolean | LeaguesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leagues"]>

  export type LeaguesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["leagues"]>

  export type LeaguesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["leagues"]>

  export type LeaguesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LeaguesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["leagues"]>
  export type LeaguesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league_achievement?: boolean | Leagues$league_achievementArgs<ExtArgs>
    _count?: boolean | LeaguesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaguesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LeaguesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LeaguesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leagues"
    objects: {
      league_achievement: Prisma.$PlayerTeamAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["leagues"]>
    composites: {}
  }

  type LeaguesGetPayload<S extends boolean | null | undefined | LeaguesDefaultArgs> = $Result.GetResult<Prisma.$LeaguesPayload, S>

  type LeaguesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaguesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaguesCountAggregateInputType | true
    }

  export interface LeaguesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leagues'], meta: { name: 'Leagues' } }
    /**
     * Find zero or one Leagues that matches the filter.
     * @param {LeaguesFindUniqueArgs} args - Arguments to find a Leagues
     * @example
     * // Get one Leagues
     * const leagues = await prisma.leagues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaguesFindUniqueArgs>(args: SelectSubset<T, LeaguesFindUniqueArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leagues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaguesFindUniqueOrThrowArgs} args - Arguments to find a Leagues
     * @example
     * // Get one Leagues
     * const leagues = await prisma.leagues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaguesFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaguesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesFindFirstArgs} args - Arguments to find a Leagues
     * @example
     * // Get one Leagues
     * const leagues = await prisma.leagues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaguesFindFirstArgs>(args?: SelectSubset<T, LeaguesFindFirstArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leagues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesFindFirstOrThrowArgs} args - Arguments to find a Leagues
     * @example
     * // Get one Leagues
     * const leagues = await prisma.leagues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaguesFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaguesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.leagues.findMany()
     * 
     * // Get first 10 Leagues
     * const leagues = await prisma.leagues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaguesWithIdOnly = await prisma.leagues.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaguesFindManyArgs>(args?: SelectSubset<T, LeaguesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leagues.
     * @param {LeaguesCreateArgs} args - Arguments to create a Leagues.
     * @example
     * // Create one Leagues
     * const Leagues = await prisma.leagues.create({
     *   data: {
     *     // ... data to create a Leagues
     *   }
     * })
     * 
     */
    create<T extends LeaguesCreateArgs>(args: SelectSubset<T, LeaguesCreateArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leagues.
     * @param {LeaguesCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const leagues = await prisma.leagues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaguesCreateManyArgs>(args?: SelectSubset<T, LeaguesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leagues and returns the data saved in the database.
     * @param {LeaguesCreateManyAndReturnArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const leagues = await prisma.leagues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leagues and only return the `id`
     * const leaguesWithIdOnly = await prisma.leagues.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaguesCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaguesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leagues.
     * @param {LeaguesDeleteArgs} args - Arguments to delete one Leagues.
     * @example
     * // Delete one Leagues
     * const Leagues = await prisma.leagues.delete({
     *   where: {
     *     // ... filter to delete one Leagues
     *   }
     * })
     * 
     */
    delete<T extends LeaguesDeleteArgs>(args: SelectSubset<T, LeaguesDeleteArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leagues.
     * @param {LeaguesUpdateArgs} args - Arguments to update one Leagues.
     * @example
     * // Update one Leagues
     * const leagues = await prisma.leagues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaguesUpdateArgs>(args: SelectSubset<T, LeaguesUpdateArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leagues.
     * @param {LeaguesDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.leagues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaguesDeleteManyArgs>(args?: SelectSubset<T, LeaguesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const leagues = await prisma.leagues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaguesUpdateManyArgs>(args: SelectSubset<T, LeaguesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues and returns the data updated in the database.
     * @param {LeaguesUpdateManyAndReturnArgs} args - Arguments to update many Leagues.
     * @example
     * // Update many Leagues
     * const leagues = await prisma.leagues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leagues and only return the `id`
     * const leaguesWithIdOnly = await prisma.leagues.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaguesUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaguesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leagues.
     * @param {LeaguesUpsertArgs} args - Arguments to update or create a Leagues.
     * @example
     * // Update or create a Leagues
     * const leagues = await prisma.leagues.upsert({
     *   create: {
     *     // ... data to create a Leagues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leagues we want to update
     *   }
     * })
     */
    upsert<T extends LeaguesUpsertArgs>(args: SelectSubset<T, LeaguesUpsertArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.leagues.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
    **/
    count<T extends LeaguesCountArgs>(
      args?: Subset<T, LeaguesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaguesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaguesAggregateArgs>(args: Subset<T, LeaguesAggregateArgs>): Prisma.PrismaPromise<GetLeaguesAggregateType<T>>

    /**
     * Group by Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaguesGroupByArgs} args - Group by arguments.
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
      T extends LeaguesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaguesGroupByArgs['orderBy'] }
        : { orderBy?: LeaguesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaguesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaguesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leagues model
   */
  readonly fields: LeaguesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leagues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaguesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    league_achievement<T extends Leagues$league_achievementArgs<ExtArgs> = {}>(args?: Subset<T, Leagues$league_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leagues model
   */
  interface LeaguesFieldRefs {
    readonly id: FieldRef<"Leagues", 'String'>
    readonly name: FieldRef<"Leagues", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Leagues findUnique
   */
  export type LeaguesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where: LeaguesWhereUniqueInput
  }

  /**
   * Leagues findUniqueOrThrow
   */
  export type LeaguesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where: LeaguesWhereUniqueInput
  }

  /**
   * Leagues findFirst
   */
  export type LeaguesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeaguesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeaguesOrderByWithRelationInput | LeaguesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeaguesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeaguesScalarFieldEnum | LeaguesScalarFieldEnum[]
  }

  /**
   * Leagues findFirstOrThrow
   */
  export type LeaguesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeaguesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeaguesOrderByWithRelationInput | LeaguesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeaguesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeaguesScalarFieldEnum | LeaguesScalarFieldEnum[]
  }

  /**
   * Leagues findMany
   */
  export type LeaguesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeaguesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeaguesOrderByWithRelationInput | LeaguesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leagues.
     */
    cursor?: LeaguesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    distinct?: LeaguesScalarFieldEnum | LeaguesScalarFieldEnum[]
  }

  /**
   * Leagues create
   */
  export type LeaguesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * The data needed to create a Leagues.
     */
    data: XOR<LeaguesCreateInput, LeaguesUncheckedCreateInput>
  }

  /**
   * Leagues createMany
   */
  export type LeaguesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leagues.
     */
    data: LeaguesCreateManyInput | LeaguesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leagues createManyAndReturn
   */
  export type LeaguesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * The data used to create many Leagues.
     */
    data: LeaguesCreateManyInput | LeaguesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leagues update
   */
  export type LeaguesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * The data needed to update a Leagues.
     */
    data: XOR<LeaguesUpdateInput, LeaguesUncheckedUpdateInput>
    /**
     * Choose, which Leagues to update.
     */
    where: LeaguesWhereUniqueInput
  }

  /**
   * Leagues updateMany
   */
  export type LeaguesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeaguesUpdateManyMutationInput, LeaguesUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeaguesWhereInput
    /**
     * Limit how many Leagues to update.
     */
    limit?: number
  }

  /**
   * Leagues updateManyAndReturn
   */
  export type LeaguesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeaguesUpdateManyMutationInput, LeaguesUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeaguesWhereInput
    /**
     * Limit how many Leagues to update.
     */
    limit?: number
  }

  /**
   * Leagues upsert
   */
  export type LeaguesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * The filter to search for the Leagues to update in case it exists.
     */
    where: LeaguesWhereUniqueInput
    /**
     * In case the Leagues found by the `where` argument doesn't exist, create a new Leagues with this data.
     */
    create: XOR<LeaguesCreateInput, LeaguesUncheckedCreateInput>
    /**
     * In case the Leagues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaguesUpdateInput, LeaguesUncheckedUpdateInput>
  }

  /**
   * Leagues delete
   */
  export type LeaguesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
    /**
     * Filter which Leagues to delete.
     */
    where: LeaguesWhereUniqueInput
  }

  /**
   * Leagues deleteMany
   */
  export type LeaguesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leagues to delete
     */
    where?: LeaguesWhereInput
    /**
     * Limit how many Leagues to delete.
     */
    limit?: number
  }

  /**
   * Leagues.league_achievement
   */
  export type Leagues$league_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    where?: PlayerTeamAchievementsWhereInput
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * Leagues without action
   */
  export type LeaguesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leagues
     */
    select?: LeaguesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leagues
     */
    omit?: LeaguesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaguesInclude<ExtArgs> | null
  }


  /**
   * Model PersonalAchievements
   */

  export type AggregatePersonalAchievements = {
    _count: PersonalAchievementsCountAggregateOutputType | null
    _min: PersonalAchievementsMinAggregateOutputType | null
    _max: PersonalAchievementsMaxAggregateOutputType | null
  }

  export type PersonalAchievementsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PersonalAchievementsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PersonalAchievementsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PersonalAchievementsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PersonalAchievementsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PersonalAchievementsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PersonalAchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalAchievements to aggregate.
     */
    where?: PersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAchievements to fetch.
     */
    orderBy?: PersonalAchievementsOrderByWithRelationInput | PersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalAchievements
    **/
    _count?: true | PersonalAchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalAchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalAchievementsMaxAggregateInputType
  }

  export type GetPersonalAchievementsAggregateType<T extends PersonalAchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalAchievements[P]>
      : GetScalarType<T[P], AggregatePersonalAchievements[P]>
  }




  export type PersonalAchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalAchievementsWhereInput
    orderBy?: PersonalAchievementsOrderByWithAggregationInput | PersonalAchievementsOrderByWithAggregationInput[]
    by: PersonalAchievementsScalarFieldEnum[] | PersonalAchievementsScalarFieldEnum
    having?: PersonalAchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalAchievementsCountAggregateInputType | true
    _min?: PersonalAchievementsMinAggregateInputType
    _max?: PersonalAchievementsMaxAggregateInputType
  }

  export type PersonalAchievementsGroupByOutputType = {
    id: string
    name: string
    _count: PersonalAchievementsCountAggregateOutputType | null
    _min: PersonalAchievementsMinAggregateOutputType | null
    _max: PersonalAchievementsMaxAggregateOutputType | null
  }

  type GetPersonalAchievementsGroupByPayload<T extends PersonalAchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalAchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalAchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalAchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalAchievementsGroupByOutputType[P]>
        }
      >
    >


  export type PersonalAchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    personal_achievement?: boolean | PersonalAchievements$personal_achievementArgs<ExtArgs>
    _count?: boolean | PersonalAchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalAchievements"]>

  export type PersonalAchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["personalAchievements"]>

  export type PersonalAchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["personalAchievements"]>

  export type PersonalAchievementsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PersonalAchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["personalAchievements"]>
  export type PersonalAchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personal_achievement?: boolean | PersonalAchievements$personal_achievementArgs<ExtArgs>
    _count?: boolean | PersonalAchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonalAchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonalAchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonalAchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalAchievements"
    objects: {
      personal_achievement: Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["personalAchievements"]>
    composites: {}
  }

  type PersonalAchievementsGetPayload<S extends boolean | null | undefined | PersonalAchievementsDefaultArgs> = $Result.GetResult<Prisma.$PersonalAchievementsPayload, S>

  type PersonalAchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalAchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalAchievementsCountAggregateInputType | true
    }

  export interface PersonalAchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalAchievements'], meta: { name: 'PersonalAchievements' } }
    /**
     * Find zero or one PersonalAchievements that matches the filter.
     * @param {PersonalAchievementsFindUniqueArgs} args - Arguments to find a PersonalAchievements
     * @example
     * // Get one PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalAchievementsFindUniqueArgs>(args: SelectSubset<T, PersonalAchievementsFindUniqueArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalAchievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalAchievementsFindUniqueOrThrowArgs} args - Arguments to find a PersonalAchievements
     * @example
     * // Get one PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalAchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalAchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsFindFirstArgs} args - Arguments to find a PersonalAchievements
     * @example
     * // Get one PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalAchievementsFindFirstArgs>(args?: SelectSubset<T, PersonalAchievementsFindFirstArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalAchievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsFindFirstOrThrowArgs} args - Arguments to find a PersonalAchievements
     * @example
     * // Get one PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalAchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalAchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findMany()
     * 
     * // Get first 10 PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalAchievementsWithIdOnly = await prisma.personalAchievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalAchievementsFindManyArgs>(args?: SelectSubset<T, PersonalAchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalAchievements.
     * @param {PersonalAchievementsCreateArgs} args - Arguments to create a PersonalAchievements.
     * @example
     * // Create one PersonalAchievements
     * const PersonalAchievements = await prisma.personalAchievements.create({
     *   data: {
     *     // ... data to create a PersonalAchievements
     *   }
     * })
     * 
     */
    create<T extends PersonalAchievementsCreateArgs>(args: SelectSubset<T, PersonalAchievementsCreateArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalAchievements.
     * @param {PersonalAchievementsCreateManyArgs} args - Arguments to create many PersonalAchievements.
     * @example
     * // Create many PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalAchievementsCreateManyArgs>(args?: SelectSubset<T, PersonalAchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalAchievements and returns the data saved in the database.
     * @param {PersonalAchievementsCreateManyAndReturnArgs} args - Arguments to create many PersonalAchievements.
     * @example
     * // Create many PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalAchievements and only return the `id`
     * const personalAchievementsWithIdOnly = await prisma.personalAchievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalAchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalAchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalAchievements.
     * @param {PersonalAchievementsDeleteArgs} args - Arguments to delete one PersonalAchievements.
     * @example
     * // Delete one PersonalAchievements
     * const PersonalAchievements = await prisma.personalAchievements.delete({
     *   where: {
     *     // ... filter to delete one PersonalAchievements
     *   }
     * })
     * 
     */
    delete<T extends PersonalAchievementsDeleteArgs>(args: SelectSubset<T, PersonalAchievementsDeleteArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalAchievements.
     * @param {PersonalAchievementsUpdateArgs} args - Arguments to update one PersonalAchievements.
     * @example
     * // Update one PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalAchievementsUpdateArgs>(args: SelectSubset<T, PersonalAchievementsUpdateArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalAchievements.
     * @param {PersonalAchievementsDeleteManyArgs} args - Arguments to filter PersonalAchievements to delete.
     * @example
     * // Delete a few PersonalAchievements
     * const { count } = await prisma.personalAchievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalAchievementsDeleteManyArgs>(args?: SelectSubset<T, PersonalAchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalAchievementsUpdateManyArgs>(args: SelectSubset<T, PersonalAchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalAchievements and returns the data updated in the database.
     * @param {PersonalAchievementsUpdateManyAndReturnArgs} args - Arguments to update many PersonalAchievements.
     * @example
     * // Update many PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalAchievements and only return the `id`
     * const personalAchievementsWithIdOnly = await prisma.personalAchievements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalAchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalAchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalAchievements.
     * @param {PersonalAchievementsUpsertArgs} args - Arguments to update or create a PersonalAchievements.
     * @example
     * // Update or create a PersonalAchievements
     * const personalAchievements = await prisma.personalAchievements.upsert({
     *   create: {
     *     // ... data to create a PersonalAchievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalAchievements we want to update
     *   }
     * })
     */
    upsert<T extends PersonalAchievementsUpsertArgs>(args: SelectSubset<T, PersonalAchievementsUpsertArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsCountArgs} args - Arguments to filter PersonalAchievements to count.
     * @example
     * // Count the number of PersonalAchievements
     * const count = await prisma.personalAchievements.count({
     *   where: {
     *     // ... the filter for the PersonalAchievements we want to count
     *   }
     * })
    **/
    count<T extends PersonalAchievementsCountArgs>(
      args?: Subset<T, PersonalAchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalAchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalAchievementsAggregateArgs>(args: Subset<T, PersonalAchievementsAggregateArgs>): Prisma.PrismaPromise<GetPersonalAchievementsAggregateType<T>>

    /**
     * Group by PersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAchievementsGroupByArgs} args - Group by arguments.
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
      T extends PersonalAchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalAchievementsGroupByArgs['orderBy'] }
        : { orderBy?: PersonalAchievementsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalAchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalAchievements model
   */
  readonly fields: PersonalAchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalAchievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalAchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personal_achievement<T extends PersonalAchievements$personal_achievementArgs<ExtArgs> = {}>(args?: Subset<T, PersonalAchievements$personal_achievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalAchievements model
   */
  interface PersonalAchievementsFieldRefs {
    readonly id: FieldRef<"PersonalAchievements", 'String'>
    readonly name: FieldRef<"PersonalAchievements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonalAchievements findUnique
   */
  export type PersonalAchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAchievements to fetch.
     */
    where: PersonalAchievementsWhereUniqueInput
  }

  /**
   * PersonalAchievements findUniqueOrThrow
   */
  export type PersonalAchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAchievements to fetch.
     */
    where: PersonalAchievementsWhereUniqueInput
  }

  /**
   * PersonalAchievements findFirst
   */
  export type PersonalAchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAchievements to fetch.
     */
    where?: PersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAchievements to fetch.
     */
    orderBy?: PersonalAchievementsOrderByWithRelationInput | PersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalAchievements.
     */
    cursor?: PersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalAchievements.
     */
    distinct?: PersonalAchievementsScalarFieldEnum | PersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PersonalAchievements findFirstOrThrow
   */
  export type PersonalAchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAchievements to fetch.
     */
    where?: PersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAchievements to fetch.
     */
    orderBy?: PersonalAchievementsOrderByWithRelationInput | PersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalAchievements.
     */
    cursor?: PersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalAchievements.
     */
    distinct?: PersonalAchievementsScalarFieldEnum | PersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PersonalAchievements findMany
   */
  export type PersonalAchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAchievements to fetch.
     */
    where?: PersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAchievements to fetch.
     */
    orderBy?: PersonalAchievementsOrderByWithRelationInput | PersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalAchievements.
     */
    cursor?: PersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAchievements.
     */
    skip?: number
    distinct?: PersonalAchievementsScalarFieldEnum | PersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PersonalAchievements create
   */
  export type PersonalAchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalAchievements.
     */
    data: XOR<PersonalAchievementsCreateInput, PersonalAchievementsUncheckedCreateInput>
  }

  /**
   * PersonalAchievements createMany
   */
  export type PersonalAchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalAchievements.
     */
    data: PersonalAchievementsCreateManyInput | PersonalAchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalAchievements createManyAndReturn
   */
  export type PersonalAchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalAchievements.
     */
    data: PersonalAchievementsCreateManyInput | PersonalAchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalAchievements update
   */
  export type PersonalAchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalAchievements.
     */
    data: XOR<PersonalAchievementsUpdateInput, PersonalAchievementsUncheckedUpdateInput>
    /**
     * Choose, which PersonalAchievements to update.
     */
    where: PersonalAchievementsWhereUniqueInput
  }

  /**
   * PersonalAchievements updateMany
   */
  export type PersonalAchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalAchievements.
     */
    data: XOR<PersonalAchievementsUpdateManyMutationInput, PersonalAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PersonalAchievements to update
     */
    where?: PersonalAchievementsWhereInput
    /**
     * Limit how many PersonalAchievements to update.
     */
    limit?: number
  }

  /**
   * PersonalAchievements updateManyAndReturn
   */
  export type PersonalAchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * The data used to update PersonalAchievements.
     */
    data: XOR<PersonalAchievementsUpdateManyMutationInput, PersonalAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PersonalAchievements to update
     */
    where?: PersonalAchievementsWhereInput
    /**
     * Limit how many PersonalAchievements to update.
     */
    limit?: number
  }

  /**
   * PersonalAchievements upsert
   */
  export type PersonalAchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalAchievements to update in case it exists.
     */
    where: PersonalAchievementsWhereUniqueInput
    /**
     * In case the PersonalAchievements found by the `where` argument doesn't exist, create a new PersonalAchievements with this data.
     */
    create: XOR<PersonalAchievementsCreateInput, PersonalAchievementsUncheckedCreateInput>
    /**
     * In case the PersonalAchievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalAchievementsUpdateInput, PersonalAchievementsUncheckedUpdateInput>
  }

  /**
   * PersonalAchievements delete
   */
  export type PersonalAchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter which PersonalAchievements to delete.
     */
    where: PersonalAchievementsWhereUniqueInput
  }

  /**
   * PersonalAchievements deleteMany
   */
  export type PersonalAchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalAchievements to delete
     */
    where?: PersonalAchievementsWhereInput
    /**
     * Limit how many PersonalAchievements to delete.
     */
    limit?: number
  }

  /**
   * PersonalAchievements.personal_achievement
   */
  export type PersonalAchievements$personal_achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    where?: PlayerPersonalAchievementsWhereInput
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PersonalAchievements without action
   */
  export type PersonalAchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAchievements
     */
    select?: PersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAchievements
     */
    omit?: PersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAchievementsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerInfo
   */

  export type AggregatePlayerInfo = {
    _count: PlayerInfoCountAggregateOutputType | null
    _avg: PlayerInfoAvgAggregateOutputType | null
    _sum: PlayerInfoSumAggregateOutputType | null
    _min: PlayerInfoMinAggregateOutputType | null
    _max: PlayerInfoMaxAggregateOutputType | null
  }

  export type PlayerInfoAvgAggregateOutputType = {
    height: number | null
  }

  export type PlayerInfoSumAggregateOutputType = {
    height: number | null
  }

  export type PlayerInfoMinAggregateOutputType = {
    player_id: string | null
    dob: Date | null
    birthplace: string | null
    gender: string | null
    biography: string | null
    height: number | null
  }

  export type PlayerInfoMaxAggregateOutputType = {
    player_id: string | null
    dob: Date | null
    birthplace: string | null
    gender: string | null
    biography: string | null
    height: number | null
  }

  export type PlayerInfoCountAggregateOutputType = {
    player_id: number
    dob: number
    birthplace: number
    gender: number
    biography: number
    height: number
    _all: number
  }


  export type PlayerInfoAvgAggregateInputType = {
    height?: true
  }

  export type PlayerInfoSumAggregateInputType = {
    height?: true
  }

  export type PlayerInfoMinAggregateInputType = {
    player_id?: true
    dob?: true
    birthplace?: true
    gender?: true
    biography?: true
    height?: true
  }

  export type PlayerInfoMaxAggregateInputType = {
    player_id?: true
    dob?: true
    birthplace?: true
    gender?: true
    biography?: true
    height?: true
  }

  export type PlayerInfoCountAggregateInputType = {
    player_id?: true
    dob?: true
    birthplace?: true
    gender?: true
    biography?: true
    height?: true
    _all?: true
  }

  export type PlayerInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerInfo to aggregate.
     */
    where?: PlayerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInfos to fetch.
     */
    orderBy?: PlayerInfoOrderByWithRelationInput | PlayerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerInfos
    **/
    _count?: true | PlayerInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerInfoMaxAggregateInputType
  }

  export type GetPlayerInfoAggregateType<T extends PlayerInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerInfo[P]>
      : GetScalarType<T[P], AggregatePlayerInfo[P]>
  }




  export type PlayerInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerInfoWhereInput
    orderBy?: PlayerInfoOrderByWithAggregationInput | PlayerInfoOrderByWithAggregationInput[]
    by: PlayerInfoScalarFieldEnum[] | PlayerInfoScalarFieldEnum
    having?: PlayerInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerInfoCountAggregateInputType | true
    _avg?: PlayerInfoAvgAggregateInputType
    _sum?: PlayerInfoSumAggregateInputType
    _min?: PlayerInfoMinAggregateInputType
    _max?: PlayerInfoMaxAggregateInputType
  }

  export type PlayerInfoGroupByOutputType = {
    player_id: string
    dob: Date
    birthplace: string
    gender: string
    biography: string
    height: number
    _count: PlayerInfoCountAggregateOutputType | null
    _avg: PlayerInfoAvgAggregateOutputType | null
    _sum: PlayerInfoSumAggregateOutputType | null
    _min: PlayerInfoMinAggregateOutputType | null
    _max: PlayerInfoMaxAggregateOutputType | null
  }

  type GetPlayerInfoGroupByPayload<T extends PlayerInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerInfoGroupByOutputType[P]>
        }
      >
    >


  export type PlayerInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    dob?: boolean
    birthplace?: boolean
    gender?: boolean
    biography?: boolean
    height?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInfo"]>

  export type PlayerInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    dob?: boolean
    birthplace?: boolean
    gender?: boolean
    biography?: boolean
    height?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInfo"]>

  export type PlayerInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    dob?: boolean
    birthplace?: boolean
    gender?: boolean
    biography?: boolean
    height?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerInfo"]>

  export type PlayerInfoSelectScalar = {
    player_id?: boolean
    dob?: boolean
    birthplace?: boolean
    gender?: boolean
    biography?: boolean
    height?: boolean
  }

  export type PlayerInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "dob" | "birthplace" | "gender" | "biography" | "height", ExtArgs["result"]["playerInfo"]>
  export type PlayerInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }

  export type $PlayerInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerInfo"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      dob: Date
      birthplace: string
      gender: string
      biography: string
      height: number
    }, ExtArgs["result"]["playerInfo"]>
    composites: {}
  }

  type PlayerInfoGetPayload<S extends boolean | null | undefined | PlayerInfoDefaultArgs> = $Result.GetResult<Prisma.$PlayerInfoPayload, S>

  type PlayerInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerInfoCountAggregateInputType | true
    }

  export interface PlayerInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerInfo'], meta: { name: 'PlayerInfo' } }
    /**
     * Find zero or one PlayerInfo that matches the filter.
     * @param {PlayerInfoFindUniqueArgs} args - Arguments to find a PlayerInfo
     * @example
     * // Get one PlayerInfo
     * const playerInfo = await prisma.playerInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerInfoFindUniqueArgs>(args: SelectSubset<T, PlayerInfoFindUniqueArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerInfoFindUniqueOrThrowArgs} args - Arguments to find a PlayerInfo
     * @example
     * // Get one PlayerInfo
     * const playerInfo = await prisma.playerInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoFindFirstArgs} args - Arguments to find a PlayerInfo
     * @example
     * // Get one PlayerInfo
     * const playerInfo = await prisma.playerInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerInfoFindFirstArgs>(args?: SelectSubset<T, PlayerInfoFindFirstArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoFindFirstOrThrowArgs} args - Arguments to find a PlayerInfo
     * @example
     * // Get one PlayerInfo
     * const playerInfo = await prisma.playerInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerInfos
     * const playerInfos = await prisma.playerInfo.findMany()
     * 
     * // Get first 10 PlayerInfos
     * const playerInfos = await prisma.playerInfo.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerInfoWithPlayer_idOnly = await prisma.playerInfo.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends PlayerInfoFindManyArgs>(args?: SelectSubset<T, PlayerInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerInfo.
     * @param {PlayerInfoCreateArgs} args - Arguments to create a PlayerInfo.
     * @example
     * // Create one PlayerInfo
     * const PlayerInfo = await prisma.playerInfo.create({
     *   data: {
     *     // ... data to create a PlayerInfo
     *   }
     * })
     * 
     */
    create<T extends PlayerInfoCreateArgs>(args: SelectSubset<T, PlayerInfoCreateArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerInfos.
     * @param {PlayerInfoCreateManyArgs} args - Arguments to create many PlayerInfos.
     * @example
     * // Create many PlayerInfos
     * const playerInfo = await prisma.playerInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerInfoCreateManyArgs>(args?: SelectSubset<T, PlayerInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerInfos and returns the data saved in the database.
     * @param {PlayerInfoCreateManyAndReturnArgs} args - Arguments to create many PlayerInfos.
     * @example
     * // Create many PlayerInfos
     * const playerInfo = await prisma.playerInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerInfos and only return the `player_id`
     * const playerInfoWithPlayer_idOnly = await prisma.playerInfo.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerInfo.
     * @param {PlayerInfoDeleteArgs} args - Arguments to delete one PlayerInfo.
     * @example
     * // Delete one PlayerInfo
     * const PlayerInfo = await prisma.playerInfo.delete({
     *   where: {
     *     // ... filter to delete one PlayerInfo
     *   }
     * })
     * 
     */
    delete<T extends PlayerInfoDeleteArgs>(args: SelectSubset<T, PlayerInfoDeleteArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerInfo.
     * @param {PlayerInfoUpdateArgs} args - Arguments to update one PlayerInfo.
     * @example
     * // Update one PlayerInfo
     * const playerInfo = await prisma.playerInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerInfoUpdateArgs>(args: SelectSubset<T, PlayerInfoUpdateArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerInfos.
     * @param {PlayerInfoDeleteManyArgs} args - Arguments to filter PlayerInfos to delete.
     * @example
     * // Delete a few PlayerInfos
     * const { count } = await prisma.playerInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerInfoDeleteManyArgs>(args?: SelectSubset<T, PlayerInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerInfos
     * const playerInfo = await prisma.playerInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerInfoUpdateManyArgs>(args: SelectSubset<T, PlayerInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerInfos and returns the data updated in the database.
     * @param {PlayerInfoUpdateManyAndReturnArgs} args - Arguments to update many PlayerInfos.
     * @example
     * // Update many PlayerInfos
     * const playerInfo = await prisma.playerInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerInfos and only return the `player_id`
     * const playerInfoWithPlayer_idOnly = await prisma.playerInfo.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerInfo.
     * @param {PlayerInfoUpsertArgs} args - Arguments to update or create a PlayerInfo.
     * @example
     * // Update or create a PlayerInfo
     * const playerInfo = await prisma.playerInfo.upsert({
     *   create: {
     *     // ... data to create a PlayerInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerInfo we want to update
     *   }
     * })
     */
    upsert<T extends PlayerInfoUpsertArgs>(args: SelectSubset<T, PlayerInfoUpsertArgs<ExtArgs>>): Prisma__PlayerInfoClient<$Result.GetResult<Prisma.$PlayerInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoCountArgs} args - Arguments to filter PlayerInfos to count.
     * @example
     * // Count the number of PlayerInfos
     * const count = await prisma.playerInfo.count({
     *   where: {
     *     // ... the filter for the PlayerInfos we want to count
     *   }
     * })
    **/
    count<T extends PlayerInfoCountArgs>(
      args?: Subset<T, PlayerInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerInfoAggregateArgs>(args: Subset<T, PlayerInfoAggregateArgs>): Prisma.PrismaPromise<GetPlayerInfoAggregateType<T>>

    /**
     * Group by PlayerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerInfoGroupByArgs} args - Group by arguments.
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
      T extends PlayerInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerInfoGroupByArgs['orderBy'] }
        : { orderBy?: PlayerInfoGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerInfo model
   */
  readonly fields: PlayerInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerInfo model
   */
  interface PlayerInfoFieldRefs {
    readonly player_id: FieldRef<"PlayerInfo", 'String'>
    readonly dob: FieldRef<"PlayerInfo", 'DateTime'>
    readonly birthplace: FieldRef<"PlayerInfo", 'String'>
    readonly gender: FieldRef<"PlayerInfo", 'String'>
    readonly biography: FieldRef<"PlayerInfo", 'String'>
    readonly height: FieldRef<"PlayerInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerInfo findUnique
   */
  export type PlayerInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInfo to fetch.
     */
    where: PlayerInfoWhereUniqueInput
  }

  /**
   * PlayerInfo findUniqueOrThrow
   */
  export type PlayerInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInfo to fetch.
     */
    where: PlayerInfoWhereUniqueInput
  }

  /**
   * PlayerInfo findFirst
   */
  export type PlayerInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInfo to fetch.
     */
    where?: PlayerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInfos to fetch.
     */
    orderBy?: PlayerInfoOrderByWithRelationInput | PlayerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerInfos.
     */
    cursor?: PlayerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerInfos.
     */
    distinct?: PlayerInfoScalarFieldEnum | PlayerInfoScalarFieldEnum[]
  }

  /**
   * PlayerInfo findFirstOrThrow
   */
  export type PlayerInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInfo to fetch.
     */
    where?: PlayerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInfos to fetch.
     */
    orderBy?: PlayerInfoOrderByWithRelationInput | PlayerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerInfos.
     */
    cursor?: PlayerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerInfos.
     */
    distinct?: PlayerInfoScalarFieldEnum | PlayerInfoScalarFieldEnum[]
  }

  /**
   * PlayerInfo findMany
   */
  export type PlayerInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PlayerInfos to fetch.
     */
    where?: PlayerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerInfos to fetch.
     */
    orderBy?: PlayerInfoOrderByWithRelationInput | PlayerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerInfos.
     */
    cursor?: PlayerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerInfos.
     */
    skip?: number
    distinct?: PlayerInfoScalarFieldEnum | PlayerInfoScalarFieldEnum[]
  }

  /**
   * PlayerInfo create
   */
  export type PlayerInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerInfo.
     */
    data: XOR<PlayerInfoCreateInput, PlayerInfoUncheckedCreateInput>
  }

  /**
   * PlayerInfo createMany
   */
  export type PlayerInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerInfos.
     */
    data: PlayerInfoCreateManyInput | PlayerInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerInfo createManyAndReturn
   */
  export type PlayerInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerInfos.
     */
    data: PlayerInfoCreateManyInput | PlayerInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerInfo update
   */
  export type PlayerInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerInfo.
     */
    data: XOR<PlayerInfoUpdateInput, PlayerInfoUncheckedUpdateInput>
    /**
     * Choose, which PlayerInfo to update.
     */
    where: PlayerInfoWhereUniqueInput
  }

  /**
   * PlayerInfo updateMany
   */
  export type PlayerInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerInfos.
     */
    data: XOR<PlayerInfoUpdateManyMutationInput, PlayerInfoUncheckedUpdateManyInput>
    /**
     * Filter which PlayerInfos to update
     */
    where?: PlayerInfoWhereInput
    /**
     * Limit how many PlayerInfos to update.
     */
    limit?: number
  }

  /**
   * PlayerInfo updateManyAndReturn
   */
  export type PlayerInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * The data used to update PlayerInfos.
     */
    data: XOR<PlayerInfoUpdateManyMutationInput, PlayerInfoUncheckedUpdateManyInput>
    /**
     * Filter which PlayerInfos to update
     */
    where?: PlayerInfoWhereInput
    /**
     * Limit how many PlayerInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerInfo upsert
   */
  export type PlayerInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerInfo to update in case it exists.
     */
    where: PlayerInfoWhereUniqueInput
    /**
     * In case the PlayerInfo found by the `where` argument doesn't exist, create a new PlayerInfo with this data.
     */
    create: XOR<PlayerInfoCreateInput, PlayerInfoUncheckedCreateInput>
    /**
     * In case the PlayerInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerInfoUpdateInput, PlayerInfoUncheckedUpdateInput>
  }

  /**
   * PlayerInfo delete
   */
  export type PlayerInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
    /**
     * Filter which PlayerInfo to delete.
     */
    where: PlayerInfoWhereUniqueInput
  }

  /**
   * PlayerInfo deleteMany
   */
  export type PlayerInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerInfos to delete
     */
    where?: PlayerInfoWhereInput
    /**
     * Limit how many PlayerInfos to delete.
     */
    limit?: number
  }

  /**
   * PlayerInfo without action
   */
  export type PlayerInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerInfo
     */
    select?: PlayerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerInfo
     */
    omit?: PlayerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInfoInclude<ExtArgs> | null
  }


  /**
   * Model PlayerRatings
   */

  export type AggregatePlayerRatings = {
    _count: PlayerRatingsCountAggregateOutputType | null
    _avg: PlayerRatingsAvgAggregateOutputType | null
    _sum: PlayerRatingsSumAggregateOutputType | null
    _min: PlayerRatingsMinAggregateOutputType | null
    _max: PlayerRatingsMaxAggregateOutputType | null
  }

  export type PlayerRatingsAvgAggregateOutputType = {
    pace: number | null
    shooting: number | null
    passing: number | null
    physical: number | null
    defending: number | null
    dribbling: number | null
  }

  export type PlayerRatingsSumAggregateOutputType = {
    pace: number | null
    shooting: number | null
    passing: number | null
    physical: number | null
    defending: number | null
    dribbling: number | null
  }

  export type PlayerRatingsMinAggregateOutputType = {
    player_id: string | null
    pace: number | null
    shooting: number | null
    passing: number | null
    physical: number | null
    defending: number | null
    dribbling: number | null
  }

  export type PlayerRatingsMaxAggregateOutputType = {
    player_id: string | null
    pace: number | null
    shooting: number | null
    passing: number | null
    physical: number | null
    defending: number | null
    dribbling: number | null
  }

  export type PlayerRatingsCountAggregateOutputType = {
    player_id: number
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
    _all: number
  }


  export type PlayerRatingsAvgAggregateInputType = {
    pace?: true
    shooting?: true
    passing?: true
    physical?: true
    defending?: true
    dribbling?: true
  }

  export type PlayerRatingsSumAggregateInputType = {
    pace?: true
    shooting?: true
    passing?: true
    physical?: true
    defending?: true
    dribbling?: true
  }

  export type PlayerRatingsMinAggregateInputType = {
    player_id?: true
    pace?: true
    shooting?: true
    passing?: true
    physical?: true
    defending?: true
    dribbling?: true
  }

  export type PlayerRatingsMaxAggregateInputType = {
    player_id?: true
    pace?: true
    shooting?: true
    passing?: true
    physical?: true
    defending?: true
    dribbling?: true
  }

  export type PlayerRatingsCountAggregateInputType = {
    player_id?: true
    pace?: true
    shooting?: true
    passing?: true
    physical?: true
    defending?: true
    dribbling?: true
    _all?: true
  }

  export type PlayerRatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerRatings to aggregate.
     */
    where?: PlayerRatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRatings to fetch.
     */
    orderBy?: PlayerRatingsOrderByWithRelationInput | PlayerRatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerRatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerRatings
    **/
    _count?: true | PlayerRatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerRatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerRatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerRatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerRatingsMaxAggregateInputType
  }

  export type GetPlayerRatingsAggregateType<T extends PlayerRatingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerRatings[P]>
      : GetScalarType<T[P], AggregatePlayerRatings[P]>
  }




  export type PlayerRatingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerRatingsWhereInput
    orderBy?: PlayerRatingsOrderByWithAggregationInput | PlayerRatingsOrderByWithAggregationInput[]
    by: PlayerRatingsScalarFieldEnum[] | PlayerRatingsScalarFieldEnum
    having?: PlayerRatingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerRatingsCountAggregateInputType | true
    _avg?: PlayerRatingsAvgAggregateInputType
    _sum?: PlayerRatingsSumAggregateInputType
    _min?: PlayerRatingsMinAggregateInputType
    _max?: PlayerRatingsMaxAggregateInputType
  }

  export type PlayerRatingsGroupByOutputType = {
    player_id: string
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
    _count: PlayerRatingsCountAggregateOutputType | null
    _avg: PlayerRatingsAvgAggregateOutputType | null
    _sum: PlayerRatingsSumAggregateOutputType | null
    _min: PlayerRatingsMinAggregateOutputType | null
    _max: PlayerRatingsMaxAggregateOutputType | null
  }

  type GetPlayerRatingsGroupByPayload<T extends PlayerRatingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerRatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerRatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerRatingsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerRatingsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerRatingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    pace?: boolean
    shooting?: boolean
    passing?: boolean
    physical?: boolean
    defending?: boolean
    dribbling?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRatings"]>

  export type PlayerRatingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    pace?: boolean
    shooting?: boolean
    passing?: boolean
    physical?: boolean
    defending?: boolean
    dribbling?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRatings"]>

  export type PlayerRatingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    pace?: boolean
    shooting?: boolean
    passing?: boolean
    physical?: boolean
    defending?: boolean
    dribbling?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerRatings"]>

  export type PlayerRatingsSelectScalar = {
    player_id?: boolean
    pace?: boolean
    shooting?: boolean
    passing?: boolean
    physical?: boolean
    defending?: boolean
    dribbling?: boolean
  }

  export type PlayerRatingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "pace" | "shooting" | "passing" | "physical" | "defending" | "dribbling", ExtArgs["result"]["playerRatings"]>
  export type PlayerRatingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerRatingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerRatingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }

  export type $PlayerRatingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerRatings"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      pace: number
      shooting: number
      passing: number
      physical: number
      defending: number
      dribbling: number
    }, ExtArgs["result"]["playerRatings"]>
    composites: {}
  }

  type PlayerRatingsGetPayload<S extends boolean | null | undefined | PlayerRatingsDefaultArgs> = $Result.GetResult<Prisma.$PlayerRatingsPayload, S>

  type PlayerRatingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerRatingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerRatingsCountAggregateInputType | true
    }

  export interface PlayerRatingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerRatings'], meta: { name: 'PlayerRatings' } }
    /**
     * Find zero or one PlayerRatings that matches the filter.
     * @param {PlayerRatingsFindUniqueArgs} args - Arguments to find a PlayerRatings
     * @example
     * // Get one PlayerRatings
     * const playerRatings = await prisma.playerRatings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerRatingsFindUniqueArgs>(args: SelectSubset<T, PlayerRatingsFindUniqueArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerRatings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerRatingsFindUniqueOrThrowArgs} args - Arguments to find a PlayerRatings
     * @example
     * // Get one PlayerRatings
     * const playerRatings = await prisma.playerRatings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerRatingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerRatingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsFindFirstArgs} args - Arguments to find a PlayerRatings
     * @example
     * // Get one PlayerRatings
     * const playerRatings = await prisma.playerRatings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerRatingsFindFirstArgs>(args?: SelectSubset<T, PlayerRatingsFindFirstArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerRatings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsFindFirstOrThrowArgs} args - Arguments to find a PlayerRatings
     * @example
     * // Get one PlayerRatings
     * const playerRatings = await prisma.playerRatings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerRatingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerRatingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerRatings
     * const playerRatings = await prisma.playerRatings.findMany()
     * 
     * // Get first 10 PlayerRatings
     * const playerRatings = await prisma.playerRatings.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerRatingsWithPlayer_idOnly = await prisma.playerRatings.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends PlayerRatingsFindManyArgs>(args?: SelectSubset<T, PlayerRatingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerRatings.
     * @param {PlayerRatingsCreateArgs} args - Arguments to create a PlayerRatings.
     * @example
     * // Create one PlayerRatings
     * const PlayerRatings = await prisma.playerRatings.create({
     *   data: {
     *     // ... data to create a PlayerRatings
     *   }
     * })
     * 
     */
    create<T extends PlayerRatingsCreateArgs>(args: SelectSubset<T, PlayerRatingsCreateArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerRatings.
     * @param {PlayerRatingsCreateManyArgs} args - Arguments to create many PlayerRatings.
     * @example
     * // Create many PlayerRatings
     * const playerRatings = await prisma.playerRatings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerRatingsCreateManyArgs>(args?: SelectSubset<T, PlayerRatingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerRatings and returns the data saved in the database.
     * @param {PlayerRatingsCreateManyAndReturnArgs} args - Arguments to create many PlayerRatings.
     * @example
     * // Create many PlayerRatings
     * const playerRatings = await prisma.playerRatings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerRatings and only return the `player_id`
     * const playerRatingsWithPlayer_idOnly = await prisma.playerRatings.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerRatingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerRatingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerRatings.
     * @param {PlayerRatingsDeleteArgs} args - Arguments to delete one PlayerRatings.
     * @example
     * // Delete one PlayerRatings
     * const PlayerRatings = await prisma.playerRatings.delete({
     *   where: {
     *     // ... filter to delete one PlayerRatings
     *   }
     * })
     * 
     */
    delete<T extends PlayerRatingsDeleteArgs>(args: SelectSubset<T, PlayerRatingsDeleteArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerRatings.
     * @param {PlayerRatingsUpdateArgs} args - Arguments to update one PlayerRatings.
     * @example
     * // Update one PlayerRatings
     * const playerRatings = await prisma.playerRatings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerRatingsUpdateArgs>(args: SelectSubset<T, PlayerRatingsUpdateArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerRatings.
     * @param {PlayerRatingsDeleteManyArgs} args - Arguments to filter PlayerRatings to delete.
     * @example
     * // Delete a few PlayerRatings
     * const { count } = await prisma.playerRatings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerRatingsDeleteManyArgs>(args?: SelectSubset<T, PlayerRatingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerRatings
     * const playerRatings = await prisma.playerRatings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerRatingsUpdateManyArgs>(args: SelectSubset<T, PlayerRatingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerRatings and returns the data updated in the database.
     * @param {PlayerRatingsUpdateManyAndReturnArgs} args - Arguments to update many PlayerRatings.
     * @example
     * // Update many PlayerRatings
     * const playerRatings = await prisma.playerRatings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerRatings and only return the `player_id`
     * const playerRatingsWithPlayer_idOnly = await prisma.playerRatings.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerRatingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerRatingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerRatings.
     * @param {PlayerRatingsUpsertArgs} args - Arguments to update or create a PlayerRatings.
     * @example
     * // Update or create a PlayerRatings
     * const playerRatings = await prisma.playerRatings.upsert({
     *   create: {
     *     // ... data to create a PlayerRatings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerRatings we want to update
     *   }
     * })
     */
    upsert<T extends PlayerRatingsUpsertArgs>(args: SelectSubset<T, PlayerRatingsUpsertArgs<ExtArgs>>): Prisma__PlayerRatingsClient<$Result.GetResult<Prisma.$PlayerRatingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsCountArgs} args - Arguments to filter PlayerRatings to count.
     * @example
     * // Count the number of PlayerRatings
     * const count = await prisma.playerRatings.count({
     *   where: {
     *     // ... the filter for the PlayerRatings we want to count
     *   }
     * })
    **/
    count<T extends PlayerRatingsCountArgs>(
      args?: Subset<T, PlayerRatingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerRatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerRatingsAggregateArgs>(args: Subset<T, PlayerRatingsAggregateArgs>): Prisma.PrismaPromise<GetPlayerRatingsAggregateType<T>>

    /**
     * Group by PlayerRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerRatingsGroupByArgs} args - Group by arguments.
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
      T extends PlayerRatingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerRatingsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerRatingsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerRatingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerRatings model
   */
  readonly fields: PlayerRatingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerRatings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerRatingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerRatings model
   */
  interface PlayerRatingsFieldRefs {
    readonly player_id: FieldRef<"PlayerRatings", 'String'>
    readonly pace: FieldRef<"PlayerRatings", 'Int'>
    readonly shooting: FieldRef<"PlayerRatings", 'Int'>
    readonly passing: FieldRef<"PlayerRatings", 'Int'>
    readonly physical: FieldRef<"PlayerRatings", 'Int'>
    readonly defending: FieldRef<"PlayerRatings", 'Int'>
    readonly dribbling: FieldRef<"PlayerRatings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerRatings findUnique
   */
  export type PlayerRatingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRatings to fetch.
     */
    where: PlayerRatingsWhereUniqueInput
  }

  /**
   * PlayerRatings findUniqueOrThrow
   */
  export type PlayerRatingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRatings to fetch.
     */
    where: PlayerRatingsWhereUniqueInput
  }

  /**
   * PlayerRatings findFirst
   */
  export type PlayerRatingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRatings to fetch.
     */
    where?: PlayerRatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRatings to fetch.
     */
    orderBy?: PlayerRatingsOrderByWithRelationInput | PlayerRatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerRatings.
     */
    cursor?: PlayerRatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerRatings.
     */
    distinct?: PlayerRatingsScalarFieldEnum | PlayerRatingsScalarFieldEnum[]
  }

  /**
   * PlayerRatings findFirstOrThrow
   */
  export type PlayerRatingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRatings to fetch.
     */
    where?: PlayerRatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRatings to fetch.
     */
    orderBy?: PlayerRatingsOrderByWithRelationInput | PlayerRatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerRatings.
     */
    cursor?: PlayerRatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerRatings.
     */
    distinct?: PlayerRatingsScalarFieldEnum | PlayerRatingsScalarFieldEnum[]
  }

  /**
   * PlayerRatings findMany
   */
  export type PlayerRatingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerRatings to fetch.
     */
    where?: PlayerRatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerRatings to fetch.
     */
    orderBy?: PlayerRatingsOrderByWithRelationInput | PlayerRatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerRatings.
     */
    cursor?: PlayerRatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerRatings.
     */
    skip?: number
    distinct?: PlayerRatingsScalarFieldEnum | PlayerRatingsScalarFieldEnum[]
  }

  /**
   * PlayerRatings create
   */
  export type PlayerRatingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerRatings.
     */
    data: XOR<PlayerRatingsCreateInput, PlayerRatingsUncheckedCreateInput>
  }

  /**
   * PlayerRatings createMany
   */
  export type PlayerRatingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerRatings.
     */
    data: PlayerRatingsCreateManyInput | PlayerRatingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerRatings createManyAndReturn
   */
  export type PlayerRatingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerRatings.
     */
    data: PlayerRatingsCreateManyInput | PlayerRatingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerRatings update
   */
  export type PlayerRatingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerRatings.
     */
    data: XOR<PlayerRatingsUpdateInput, PlayerRatingsUncheckedUpdateInput>
    /**
     * Choose, which PlayerRatings to update.
     */
    where: PlayerRatingsWhereUniqueInput
  }

  /**
   * PlayerRatings updateMany
   */
  export type PlayerRatingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerRatings.
     */
    data: XOR<PlayerRatingsUpdateManyMutationInput, PlayerRatingsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerRatings to update
     */
    where?: PlayerRatingsWhereInput
    /**
     * Limit how many PlayerRatings to update.
     */
    limit?: number
  }

  /**
   * PlayerRatings updateManyAndReturn
   */
  export type PlayerRatingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerRatings.
     */
    data: XOR<PlayerRatingsUpdateManyMutationInput, PlayerRatingsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerRatings to update
     */
    where?: PlayerRatingsWhereInput
    /**
     * Limit how many PlayerRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerRatings upsert
   */
  export type PlayerRatingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerRatings to update in case it exists.
     */
    where: PlayerRatingsWhereUniqueInput
    /**
     * In case the PlayerRatings found by the `where` argument doesn't exist, create a new PlayerRatings with this data.
     */
    create: XOR<PlayerRatingsCreateInput, PlayerRatingsUncheckedCreateInput>
    /**
     * In case the PlayerRatings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerRatingsUpdateInput, PlayerRatingsUncheckedUpdateInput>
  }

  /**
   * PlayerRatings delete
   */
  export type PlayerRatingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
    /**
     * Filter which PlayerRatings to delete.
     */
    where: PlayerRatingsWhereUniqueInput
  }

  /**
   * PlayerRatings deleteMany
   */
  export type PlayerRatingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerRatings to delete
     */
    where?: PlayerRatingsWhereInput
    /**
     * Limit how many PlayerRatings to delete.
     */
    limit?: number
  }

  /**
   * PlayerRatings without action
   */
  export type PlayerRatingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerRatings
     */
    select?: PlayerRatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerRatings
     */
    omit?: PlayerRatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerRatingsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerStats
   */

  export type AggregatePlayerStats = {
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  export type PlayerStatsAvgAggregateOutputType = {
    matches: number | null
    goals: number | null
    assists: number | null
    yellow_cards: number | null
    red_cards: number | null
  }

  export type PlayerStatsSumAggregateOutputType = {
    matches: number | null
    goals: number | null
    assists: number | null
    yellow_cards: number | null
    red_cards: number | null
  }

  export type PlayerStatsMinAggregateOutputType = {
    player_id: string | null
    matches: number | null
    goals: number | null
    assists: number | null
    yellow_cards: number | null
    red_cards: number | null
  }

  export type PlayerStatsMaxAggregateOutputType = {
    player_id: string | null
    matches: number | null
    goals: number | null
    assists: number | null
    yellow_cards: number | null
    red_cards: number | null
  }

  export type PlayerStatsCountAggregateOutputType = {
    player_id: number
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
    _all: number
  }


  export type PlayerStatsAvgAggregateInputType = {
    matches?: true
    goals?: true
    assists?: true
    yellow_cards?: true
    red_cards?: true
  }

  export type PlayerStatsSumAggregateInputType = {
    matches?: true
    goals?: true
    assists?: true
    yellow_cards?: true
    red_cards?: true
  }

  export type PlayerStatsMinAggregateInputType = {
    player_id?: true
    matches?: true
    goals?: true
    assists?: true
    yellow_cards?: true
    red_cards?: true
  }

  export type PlayerStatsMaxAggregateInputType = {
    player_id?: true
    matches?: true
    goals?: true
    assists?: true
    yellow_cards?: true
    red_cards?: true
  }

  export type PlayerStatsCountAggregateInputType = {
    player_id?: true
    matches?: true
    goals?: true
    assists?: true
    yellow_cards?: true
    red_cards?: true
    _all?: true
  }

  export type PlayerStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to aggregate.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerStats
    **/
    _count?: true | PlayerStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type GetPlayerStatsAggregateType<T extends PlayerStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerStats[P]>
      : GetScalarType<T[P], AggregatePlayerStats[P]>
  }




  export type PlayerStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerStatsWhereInput
    orderBy?: PlayerStatsOrderByWithAggregationInput | PlayerStatsOrderByWithAggregationInput[]
    by: PlayerStatsScalarFieldEnum[] | PlayerStatsScalarFieldEnum
    having?: PlayerStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerStatsCountAggregateInputType | true
    _avg?: PlayerStatsAvgAggregateInputType
    _sum?: PlayerStatsSumAggregateInputType
    _min?: PlayerStatsMinAggregateInputType
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type PlayerStatsGroupByOutputType = {
    player_id: string
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  type GetPlayerStatsGroupByPayload<T extends PlayerStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    matches?: boolean
    goals?: boolean
    assists?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    matches?: boolean
    goals?: boolean
    assists?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    matches?: boolean
    goals?: boolean
    assists?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectScalar = {
    player_id?: boolean
    matches?: boolean
    goals?: boolean
    assists?: boolean
    yellow_cards?: boolean
    red_cards?: boolean
  }

  export type PlayerStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "matches" | "goals" | "assists" | "yellow_cards" | "red_cards", ExtArgs["result"]["playerStats"]>
  export type PlayerStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
  }

  export type $PlayerStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerStats"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      matches: number
      goals: number
      assists: number
      yellow_cards: number
      red_cards: number
    }, ExtArgs["result"]["playerStats"]>
    composites: {}
  }

  type PlayerStatsGetPayload<S extends boolean | null | undefined | PlayerStatsDefaultArgs> = $Result.GetResult<Prisma.$PlayerStatsPayload, S>

  type PlayerStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerStatsCountAggregateInputType | true
    }

  export interface PlayerStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerStats'], meta: { name: 'PlayerStats' } }
    /**
     * Find zero or one PlayerStats that matches the filter.
     * @param {PlayerStatsFindUniqueArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerStatsFindUniqueArgs>(args: SelectSubset<T, PlayerStatsFindUniqueArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerStatsFindUniqueOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerStatsFindFirstArgs>(args?: SelectSubset<T, PlayerStatsFindFirstArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerStats
     * const playerStats = await prisma.playerStats.findMany()
     * 
     * // Get first 10 PlayerStats
     * const playerStats = await prisma.playerStats.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerStatsWithPlayer_idOnly = await prisma.playerStats.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends PlayerStatsFindManyArgs>(args?: SelectSubset<T, PlayerStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerStats.
     * @param {PlayerStatsCreateArgs} args - Arguments to create a PlayerStats.
     * @example
     * // Create one PlayerStats
     * const PlayerStats = await prisma.playerStats.create({
     *   data: {
     *     // ... data to create a PlayerStats
     *   }
     * })
     * 
     */
    create<T extends PlayerStatsCreateArgs>(args: SelectSubset<T, PlayerStatsCreateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerStats.
     * @param {PlayerStatsCreateManyArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerStatsCreateManyArgs>(args?: SelectSubset<T, PlayerStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerStats and returns the data saved in the database.
     * @param {PlayerStatsCreateManyAndReturnArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerStats and only return the `player_id`
     * const playerStatsWithPlayer_idOnly = await prisma.playerStats.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerStats.
     * @param {PlayerStatsDeleteArgs} args - Arguments to delete one PlayerStats.
     * @example
     * // Delete one PlayerStats
     * const PlayerStats = await prisma.playerStats.delete({
     *   where: {
     *     // ... filter to delete one PlayerStats
     *   }
     * })
     * 
     */
    delete<T extends PlayerStatsDeleteArgs>(args: SelectSubset<T, PlayerStatsDeleteArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerStats.
     * @param {PlayerStatsUpdateArgs} args - Arguments to update one PlayerStats.
     * @example
     * // Update one PlayerStats
     * const playerStats = await prisma.playerStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerStatsUpdateArgs>(args: SelectSubset<T, PlayerStatsUpdateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerStats.
     * @param {PlayerStatsDeleteManyArgs} args - Arguments to filter PlayerStats to delete.
     * @example
     * // Delete a few PlayerStats
     * const { count } = await prisma.playerStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerStatsDeleteManyArgs>(args?: SelectSubset<T, PlayerStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerStatsUpdateManyArgs>(args: SelectSubset<T, PlayerStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats and returns the data updated in the database.
     * @param {PlayerStatsUpdateManyAndReturnArgs} args - Arguments to update many PlayerStats.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerStats and only return the `player_id`
     * const playerStatsWithPlayer_idOnly = await prisma.playerStats.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerStats.
     * @param {PlayerStatsUpsertArgs} args - Arguments to update or create a PlayerStats.
     * @example
     * // Update or create a PlayerStats
     * const playerStats = await prisma.playerStats.upsert({
     *   create: {
     *     // ... data to create a PlayerStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerStats we want to update
     *   }
     * })
     */
    upsert<T extends PlayerStatsUpsertArgs>(args: SelectSubset<T, PlayerStatsUpsertArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsCountArgs} args - Arguments to filter PlayerStats to count.
     * @example
     * // Count the number of PlayerStats
     * const count = await prisma.playerStats.count({
     *   where: {
     *     // ... the filter for the PlayerStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerStatsCountArgs>(
      args?: Subset<T, PlayerStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerStatsAggregateArgs>(args: Subset<T, PlayerStatsAggregateArgs>): Prisma.PrismaPromise<GetPlayerStatsAggregateType<T>>

    /**
     * Group by PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsGroupByArgs} args - Group by arguments.
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
      T extends PlayerStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerStatsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerStats model
   */
  readonly fields: PlayerStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerStats model
   */
  interface PlayerStatsFieldRefs {
    readonly player_id: FieldRef<"PlayerStats", 'String'>
    readonly matches: FieldRef<"PlayerStats", 'Int'>
    readonly goals: FieldRef<"PlayerStats", 'Int'>
    readonly assists: FieldRef<"PlayerStats", 'Int'>
    readonly yellow_cards: FieldRef<"PlayerStats", 'Int'>
    readonly red_cards: FieldRef<"PlayerStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerStats findUnique
   */
  export type PlayerStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findUniqueOrThrow
   */
  export type PlayerStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findFirst
   */
  export type PlayerStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findFirstOrThrow
   */
  export type PlayerStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findMany
   */
  export type PlayerStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats create
   */
  export type PlayerStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerStats.
     */
    data: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
  }

  /**
   * PlayerStats createMany
   */
  export type PlayerStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStats createManyAndReturn
   */
  export type PlayerStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats update
   */
  export type PlayerStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerStats.
     */
    data: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
    /**
     * Choose, which PlayerStats to update.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats updateMany
   */
  export type PlayerStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStats updateManyAndReturn
   */
  export type PlayerStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats upsert
   */
  export type PlayerStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerStats to update in case it exists.
     */
    where: PlayerStatsWhereUniqueInput
    /**
     * In case the PlayerStats found by the `where` argument doesn't exist, create a new PlayerStats with this data.
     */
    create: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
    /**
     * In case the PlayerStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
  }

  /**
   * PlayerStats delete
   */
  export type PlayerStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter which PlayerStats to delete.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats deleteMany
   */
  export type PlayerStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to delete
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerStats without action
   */
  export type PlayerStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerTeamAchievements
   */

  export type AggregatePlayerTeamAchievements = {
    _count: PlayerTeamAchievementsCountAggregateOutputType | null
    _avg: PlayerTeamAchievementsAvgAggregateOutputType | null
    _sum: PlayerTeamAchievementsSumAggregateOutputType | null
    _min: PlayerTeamAchievementsMinAggregateOutputType | null
    _max: PlayerTeamAchievementsMaxAggregateOutputType | null
  }

  export type PlayerTeamAchievementsAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type PlayerTeamAchievementsSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type PlayerTeamAchievementsMinAggregateOutputType = {
    id: number | null
    player_id: string | null
    place: string | null
    league_id: string | null
    team_id: string | null
    year: number | null
  }

  export type PlayerTeamAchievementsMaxAggregateOutputType = {
    id: number | null
    player_id: string | null
    place: string | null
    league_id: string | null
    team_id: string | null
    year: number | null
  }

  export type PlayerTeamAchievementsCountAggregateOutputType = {
    id: number
    player_id: number
    place: number
    league_id: number
    team_id: number
    year: number
    _all: number
  }


  export type PlayerTeamAchievementsAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type PlayerTeamAchievementsSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type PlayerTeamAchievementsMinAggregateInputType = {
    id?: true
    player_id?: true
    place?: true
    league_id?: true
    team_id?: true
    year?: true
  }

  export type PlayerTeamAchievementsMaxAggregateInputType = {
    id?: true
    player_id?: true
    place?: true
    league_id?: true
    team_id?: true
    year?: true
  }

  export type PlayerTeamAchievementsCountAggregateInputType = {
    id?: true
    player_id?: true
    place?: true
    league_id?: true
    team_id?: true
    year?: true
    _all?: true
  }

  export type PlayerTeamAchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeamAchievements to aggregate.
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamAchievements to fetch.
     */
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTeamAchievements
    **/
    _count?: true | PlayerTeamAchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTeamAchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTeamAchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTeamAchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTeamAchievementsMaxAggregateInputType
  }

  export type GetPlayerTeamAchievementsAggregateType<T extends PlayerTeamAchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTeamAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTeamAchievements[P]>
      : GetScalarType<T[P], AggregatePlayerTeamAchievements[P]>
  }




  export type PlayerTeamAchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamAchievementsWhereInput
    orderBy?: PlayerTeamAchievementsOrderByWithAggregationInput | PlayerTeamAchievementsOrderByWithAggregationInput[]
    by: PlayerTeamAchievementsScalarFieldEnum[] | PlayerTeamAchievementsScalarFieldEnum
    having?: PlayerTeamAchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTeamAchievementsCountAggregateInputType | true
    _avg?: PlayerTeamAchievementsAvgAggregateInputType
    _sum?: PlayerTeamAchievementsSumAggregateInputType
    _min?: PlayerTeamAchievementsMinAggregateInputType
    _max?: PlayerTeamAchievementsMaxAggregateInputType
  }

  export type PlayerTeamAchievementsGroupByOutputType = {
    id: number
    player_id: string
    place: string
    league_id: string
    team_id: string
    year: number
    _count: PlayerTeamAchievementsCountAggregateOutputType | null
    _avg: PlayerTeamAchievementsAvgAggregateOutputType | null
    _sum: PlayerTeamAchievementsSumAggregateOutputType | null
    _min: PlayerTeamAchievementsMinAggregateOutputType | null
    _max: PlayerTeamAchievementsMaxAggregateOutputType | null
  }

  type GetPlayerTeamAchievementsGroupByPayload<T extends PlayerTeamAchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTeamAchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTeamAchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTeamAchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTeamAchievementsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTeamAchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    place?: boolean
    league_id?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamAchievements"]>

  export type PlayerTeamAchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    place?: boolean
    league_id?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamAchievements"]>

  export type PlayerTeamAchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    place?: boolean
    league_id?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamAchievements"]>

  export type PlayerTeamAchievementsSelectScalar = {
    id?: boolean
    player_id?: boolean
    place?: boolean
    league_id?: boolean
    team_id?: boolean
    year?: boolean
  }

  export type PlayerTeamAchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player_id" | "place" | "league_id" | "team_id" | "year", ExtArgs["result"]["playerTeamAchievements"]>
  export type PlayerTeamAchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type PlayerTeamAchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type PlayerTeamAchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    league?: boolean | LeaguesDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $PlayerTeamAchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTeamAchievements"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
      league: Prisma.$LeaguesPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player_id: string
      place: string
      league_id: string
      team_id: string
      year: number
    }, ExtArgs["result"]["playerTeamAchievements"]>
    composites: {}
  }

  type PlayerTeamAchievementsGetPayload<S extends boolean | null | undefined | PlayerTeamAchievementsDefaultArgs> = $Result.GetResult<Prisma.$PlayerTeamAchievementsPayload, S>

  type PlayerTeamAchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTeamAchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTeamAchievementsCountAggregateInputType | true
    }

  export interface PlayerTeamAchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTeamAchievements'], meta: { name: 'PlayerTeamAchievements' } }
    /**
     * Find zero or one PlayerTeamAchievements that matches the filter.
     * @param {PlayerTeamAchievementsFindUniqueArgs} args - Arguments to find a PlayerTeamAchievements
     * @example
     * // Get one PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTeamAchievementsFindUniqueArgs>(args: SelectSubset<T, PlayerTeamAchievementsFindUniqueArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTeamAchievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTeamAchievementsFindUniqueOrThrowArgs} args - Arguments to find a PlayerTeamAchievements
     * @example
     * // Get one PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTeamAchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTeamAchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeamAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsFindFirstArgs} args - Arguments to find a PlayerTeamAchievements
     * @example
     * // Get one PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTeamAchievementsFindFirstArgs>(args?: SelectSubset<T, PlayerTeamAchievementsFindFirstArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeamAchievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsFindFirstOrThrowArgs} args - Arguments to find a PlayerTeamAchievements
     * @example
     * // Get one PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTeamAchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTeamAchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTeamAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findMany()
     * 
     * // Get first 10 PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTeamAchievementsWithIdOnly = await prisma.playerTeamAchievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTeamAchievementsFindManyArgs>(args?: SelectSubset<T, PlayerTeamAchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsCreateArgs} args - Arguments to create a PlayerTeamAchievements.
     * @example
     * // Create one PlayerTeamAchievements
     * const PlayerTeamAchievements = await prisma.playerTeamAchievements.create({
     *   data: {
     *     // ... data to create a PlayerTeamAchievements
     *   }
     * })
     * 
     */
    create<T extends PlayerTeamAchievementsCreateArgs>(args: SelectSubset<T, PlayerTeamAchievementsCreateArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsCreateManyArgs} args - Arguments to create many PlayerTeamAchievements.
     * @example
     * // Create many PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTeamAchievementsCreateManyArgs>(args?: SelectSubset<T, PlayerTeamAchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerTeamAchievements and returns the data saved in the database.
     * @param {PlayerTeamAchievementsCreateManyAndReturnArgs} args - Arguments to create many PlayerTeamAchievements.
     * @example
     * // Create many PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerTeamAchievements and only return the `id`
     * const playerTeamAchievementsWithIdOnly = await prisma.playerTeamAchievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerTeamAchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerTeamAchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsDeleteArgs} args - Arguments to delete one PlayerTeamAchievements.
     * @example
     * // Delete one PlayerTeamAchievements
     * const PlayerTeamAchievements = await prisma.playerTeamAchievements.delete({
     *   where: {
     *     // ... filter to delete one PlayerTeamAchievements
     *   }
     * })
     * 
     */
    delete<T extends PlayerTeamAchievementsDeleteArgs>(args: SelectSubset<T, PlayerTeamAchievementsDeleteArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsUpdateArgs} args - Arguments to update one PlayerTeamAchievements.
     * @example
     * // Update one PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTeamAchievementsUpdateArgs>(args: SelectSubset<T, PlayerTeamAchievementsUpdateArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsDeleteManyArgs} args - Arguments to filter PlayerTeamAchievements to delete.
     * @example
     * // Delete a few PlayerTeamAchievements
     * const { count } = await prisma.playerTeamAchievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTeamAchievementsDeleteManyArgs>(args?: SelectSubset<T, PlayerTeamAchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeamAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTeamAchievementsUpdateManyArgs>(args: SelectSubset<T, PlayerTeamAchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeamAchievements and returns the data updated in the database.
     * @param {PlayerTeamAchievementsUpdateManyAndReturnArgs} args - Arguments to update many PlayerTeamAchievements.
     * @example
     * // Update many PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerTeamAchievements and only return the `id`
     * const playerTeamAchievementsWithIdOnly = await prisma.playerTeamAchievements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerTeamAchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerTeamAchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerTeamAchievements.
     * @param {PlayerTeamAchievementsUpsertArgs} args - Arguments to update or create a PlayerTeamAchievements.
     * @example
     * // Update or create a PlayerTeamAchievements
     * const playerTeamAchievements = await prisma.playerTeamAchievements.upsert({
     *   create: {
     *     // ... data to create a PlayerTeamAchievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTeamAchievements we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTeamAchievementsUpsertArgs>(args: SelectSubset<T, PlayerTeamAchievementsUpsertArgs<ExtArgs>>): Prisma__PlayerTeamAchievementsClient<$Result.GetResult<Prisma.$PlayerTeamAchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTeamAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsCountArgs} args - Arguments to filter PlayerTeamAchievements to count.
     * @example
     * // Count the number of PlayerTeamAchievements
     * const count = await prisma.playerTeamAchievements.count({
     *   where: {
     *     // ... the filter for the PlayerTeamAchievements we want to count
     *   }
     * })
    **/
    count<T extends PlayerTeamAchievementsCountArgs>(
      args?: Subset<T, PlayerTeamAchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTeamAchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTeamAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerTeamAchievementsAggregateArgs>(args: Subset<T, PlayerTeamAchievementsAggregateArgs>): Prisma.PrismaPromise<GetPlayerTeamAchievementsAggregateType<T>>

    /**
     * Group by PlayerTeamAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamAchievementsGroupByArgs} args - Group by arguments.
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
      T extends PlayerTeamAchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTeamAchievementsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTeamAchievementsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTeamAchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTeamAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTeamAchievements model
   */
  readonly fields: PlayerTeamAchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTeamAchievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTeamAchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    league<T extends LeaguesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaguesDefaultArgs<ExtArgs>>): Prisma__LeaguesClient<$Result.GetResult<Prisma.$LeaguesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTeamAchievements model
   */
  interface PlayerTeamAchievementsFieldRefs {
    readonly id: FieldRef<"PlayerTeamAchievements", 'Int'>
    readonly player_id: FieldRef<"PlayerTeamAchievements", 'String'>
    readonly place: FieldRef<"PlayerTeamAchievements", 'String'>
    readonly league_id: FieldRef<"PlayerTeamAchievements", 'String'>
    readonly team_id: FieldRef<"PlayerTeamAchievements", 'String'>
    readonly year: FieldRef<"PlayerTeamAchievements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTeamAchievements findUnique
   */
  export type PlayerTeamAchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamAchievements to fetch.
     */
    where: PlayerTeamAchievementsWhereUniqueInput
  }

  /**
   * PlayerTeamAchievements findUniqueOrThrow
   */
  export type PlayerTeamAchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamAchievements to fetch.
     */
    where: PlayerTeamAchievementsWhereUniqueInput
  }

  /**
   * PlayerTeamAchievements findFirst
   */
  export type PlayerTeamAchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamAchievements to fetch.
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamAchievements to fetch.
     */
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeamAchievements.
     */
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeamAchievements.
     */
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerTeamAchievements findFirstOrThrow
   */
  export type PlayerTeamAchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamAchievements to fetch.
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamAchievements to fetch.
     */
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeamAchievements.
     */
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeamAchievements.
     */
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerTeamAchievements findMany
   */
  export type PlayerTeamAchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamAchievements to fetch.
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamAchievements to fetch.
     */
    orderBy?: PlayerTeamAchievementsOrderByWithRelationInput | PlayerTeamAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTeamAchievements.
     */
    cursor?: PlayerTeamAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamAchievements.
     */
    skip?: number
    distinct?: PlayerTeamAchievementsScalarFieldEnum | PlayerTeamAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerTeamAchievements create
   */
  export type PlayerTeamAchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerTeamAchievements.
     */
    data: XOR<PlayerTeamAchievementsCreateInput, PlayerTeamAchievementsUncheckedCreateInput>
  }

  /**
   * PlayerTeamAchievements createMany
   */
  export type PlayerTeamAchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTeamAchievements.
     */
    data: PlayerTeamAchievementsCreateManyInput | PlayerTeamAchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTeamAchievements createManyAndReturn
   */
  export type PlayerTeamAchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerTeamAchievements.
     */
    data: PlayerTeamAchievementsCreateManyInput | PlayerTeamAchievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeamAchievements update
   */
  export type PlayerTeamAchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerTeamAchievements.
     */
    data: XOR<PlayerTeamAchievementsUpdateInput, PlayerTeamAchievementsUncheckedUpdateInput>
    /**
     * Choose, which PlayerTeamAchievements to update.
     */
    where: PlayerTeamAchievementsWhereUniqueInput
  }

  /**
   * PlayerTeamAchievements updateMany
   */
  export type PlayerTeamAchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTeamAchievements.
     */
    data: XOR<PlayerTeamAchievementsUpdateManyMutationInput, PlayerTeamAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeamAchievements to update
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * Limit how many PlayerTeamAchievements to update.
     */
    limit?: number
  }

  /**
   * PlayerTeamAchievements updateManyAndReturn
   */
  export type PlayerTeamAchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerTeamAchievements.
     */
    data: XOR<PlayerTeamAchievementsUpdateManyMutationInput, PlayerTeamAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeamAchievements to update
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * Limit how many PlayerTeamAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeamAchievements upsert
   */
  export type PlayerTeamAchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerTeamAchievements to update in case it exists.
     */
    where: PlayerTeamAchievementsWhereUniqueInput
    /**
     * In case the PlayerTeamAchievements found by the `where` argument doesn't exist, create a new PlayerTeamAchievements with this data.
     */
    create: XOR<PlayerTeamAchievementsCreateInput, PlayerTeamAchievementsUncheckedCreateInput>
    /**
     * In case the PlayerTeamAchievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTeamAchievementsUpdateInput, PlayerTeamAchievementsUncheckedUpdateInput>
  }

  /**
   * PlayerTeamAchievements delete
   */
  export type PlayerTeamAchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
    /**
     * Filter which PlayerTeamAchievements to delete.
     */
    where: PlayerTeamAchievementsWhereUniqueInput
  }

  /**
   * PlayerTeamAchievements deleteMany
   */
  export type PlayerTeamAchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeamAchievements to delete
     */
    where?: PlayerTeamAchievementsWhereInput
    /**
     * Limit how many PlayerTeamAchievements to delete.
     */
    limit?: number
  }

  /**
   * PlayerTeamAchievements without action
   */
  export type PlayerTeamAchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamAchievements
     */
    select?: PlayerTeamAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamAchievements
     */
    omit?: PlayerTeamAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamAchievementsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerPersonalAchievements
   */

  export type AggregatePlayerPersonalAchievements = {
    _count: PlayerPersonalAchievementsCountAggregateOutputType | null
    _avg: PlayerPersonalAchievementsAvgAggregateOutputType | null
    _sum: PlayerPersonalAchievementsSumAggregateOutputType | null
    _min: PlayerPersonalAchievementsMinAggregateOutputType | null
    _max: PlayerPersonalAchievementsMaxAggregateOutputType | null
  }

  export type PlayerPersonalAchievementsAvgAggregateOutputType = {
    year: number | null
  }

  export type PlayerPersonalAchievementsSumAggregateOutputType = {
    year: number | null
  }

  export type PlayerPersonalAchievementsMinAggregateOutputType = {
    player_id: string | null
    achievement_id: string | null
    league: string | null
    team_id: string | null
    year: number | null
  }

  export type PlayerPersonalAchievementsMaxAggregateOutputType = {
    player_id: string | null
    achievement_id: string | null
    league: string | null
    team_id: string | null
    year: number | null
  }

  export type PlayerPersonalAchievementsCountAggregateOutputType = {
    player_id: number
    achievement_id: number
    league: number
    team_id: number
    year: number
    _all: number
  }


  export type PlayerPersonalAchievementsAvgAggregateInputType = {
    year?: true
  }

  export type PlayerPersonalAchievementsSumAggregateInputType = {
    year?: true
  }

  export type PlayerPersonalAchievementsMinAggregateInputType = {
    player_id?: true
    achievement_id?: true
    league?: true
    team_id?: true
    year?: true
  }

  export type PlayerPersonalAchievementsMaxAggregateInputType = {
    player_id?: true
    achievement_id?: true
    league?: true
    team_id?: true
    year?: true
  }

  export type PlayerPersonalAchievementsCountAggregateInputType = {
    player_id?: true
    achievement_id?: true
    league?: true
    team_id?: true
    year?: true
    _all?: true
  }

  export type PlayerPersonalAchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPersonalAchievements to aggregate.
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPersonalAchievements to fetch.
     */
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerPersonalAchievements
    **/
    _count?: true | PlayerPersonalAchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerPersonalAchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerPersonalAchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerPersonalAchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerPersonalAchievementsMaxAggregateInputType
  }

  export type GetPlayerPersonalAchievementsAggregateType<T extends PlayerPersonalAchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerPersonalAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerPersonalAchievements[P]>
      : GetScalarType<T[P], AggregatePlayerPersonalAchievements[P]>
  }




  export type PlayerPersonalAchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerPersonalAchievementsWhereInput
    orderBy?: PlayerPersonalAchievementsOrderByWithAggregationInput | PlayerPersonalAchievementsOrderByWithAggregationInput[]
    by: PlayerPersonalAchievementsScalarFieldEnum[] | PlayerPersonalAchievementsScalarFieldEnum
    having?: PlayerPersonalAchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerPersonalAchievementsCountAggregateInputType | true
    _avg?: PlayerPersonalAchievementsAvgAggregateInputType
    _sum?: PlayerPersonalAchievementsSumAggregateInputType
    _min?: PlayerPersonalAchievementsMinAggregateInputType
    _max?: PlayerPersonalAchievementsMaxAggregateInputType
  }

  export type PlayerPersonalAchievementsGroupByOutputType = {
    player_id: string
    achievement_id: string
    league: string
    team_id: string
    year: number
    _count: PlayerPersonalAchievementsCountAggregateOutputType | null
    _avg: PlayerPersonalAchievementsAvgAggregateOutputType | null
    _sum: PlayerPersonalAchievementsSumAggregateOutputType | null
    _min: PlayerPersonalAchievementsMinAggregateOutputType | null
    _max: PlayerPersonalAchievementsMaxAggregateOutputType | null
  }

  type GetPlayerPersonalAchievementsGroupByPayload<T extends PlayerPersonalAchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerPersonalAchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerPersonalAchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerPersonalAchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerPersonalAchievementsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerPersonalAchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    achievement_id?: boolean
    league?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPersonalAchievements"]>

  export type PlayerPersonalAchievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    achievement_id?: boolean
    league?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPersonalAchievements"]>

  export type PlayerPersonalAchievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    achievement_id?: boolean
    league?: boolean
    team_id?: boolean
    year?: boolean
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerPersonalAchievements"]>

  export type PlayerPersonalAchievementsSelectScalar = {
    player_id?: boolean
    achievement_id?: boolean
    league?: boolean
    team_id?: boolean
    year?: boolean
  }

  export type PlayerPersonalAchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"player_id" | "achievement_id" | "league" | "team_id" | "year", ExtArgs["result"]["playerPersonalAchievements"]>
  export type PlayerPersonalAchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type PlayerPersonalAchievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type PlayerPersonalAchievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayersDefaultArgs<ExtArgs>
    achievement?: boolean | PersonalAchievementsDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $PlayerPersonalAchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerPersonalAchievements"
    objects: {
      player: Prisma.$PlayersPayload<ExtArgs>
      achievement: Prisma.$PersonalAchievementsPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      player_id: string
      achievement_id: string
      league: string
      team_id: string
      year: number
    }, ExtArgs["result"]["playerPersonalAchievements"]>
    composites: {}
  }

  type PlayerPersonalAchievementsGetPayload<S extends boolean | null | undefined | PlayerPersonalAchievementsDefaultArgs> = $Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload, S>

  type PlayerPersonalAchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerPersonalAchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerPersonalAchievementsCountAggregateInputType | true
    }

  export interface PlayerPersonalAchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerPersonalAchievements'], meta: { name: 'PlayerPersonalAchievements' } }
    /**
     * Find zero or one PlayerPersonalAchievements that matches the filter.
     * @param {PlayerPersonalAchievementsFindUniqueArgs} args - Arguments to find a PlayerPersonalAchievements
     * @example
     * // Get one PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerPersonalAchievementsFindUniqueArgs>(args: SelectSubset<T, PlayerPersonalAchievementsFindUniqueArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerPersonalAchievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerPersonalAchievementsFindUniqueOrThrowArgs} args - Arguments to find a PlayerPersonalAchievements
     * @example
     * // Get one PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerPersonalAchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerPersonalAchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPersonalAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsFindFirstArgs} args - Arguments to find a PlayerPersonalAchievements
     * @example
     * // Get one PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerPersonalAchievementsFindFirstArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsFindFirstArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerPersonalAchievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsFindFirstOrThrowArgs} args - Arguments to find a PlayerPersonalAchievements
     * @example
     * // Get one PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerPersonalAchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerPersonalAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findMany()
     * 
     * // Get first 10 PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerPersonalAchievementsWithPlayer_idOnly = await prisma.playerPersonalAchievements.findMany({ select: { player_id: true } })
     * 
     */
    findMany<T extends PlayerPersonalAchievementsFindManyArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsCreateArgs} args - Arguments to create a PlayerPersonalAchievements.
     * @example
     * // Create one PlayerPersonalAchievements
     * const PlayerPersonalAchievements = await prisma.playerPersonalAchievements.create({
     *   data: {
     *     // ... data to create a PlayerPersonalAchievements
     *   }
     * })
     * 
     */
    create<T extends PlayerPersonalAchievementsCreateArgs>(args: SelectSubset<T, PlayerPersonalAchievementsCreateArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsCreateManyArgs} args - Arguments to create many PlayerPersonalAchievements.
     * @example
     * // Create many PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerPersonalAchievementsCreateManyArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerPersonalAchievements and returns the data saved in the database.
     * @param {PlayerPersonalAchievementsCreateManyAndReturnArgs} args - Arguments to create many PlayerPersonalAchievements.
     * @example
     * // Create many PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerPersonalAchievements and only return the `player_id`
     * const playerPersonalAchievementsWithPlayer_idOnly = await prisma.playerPersonalAchievements.createManyAndReturn({
     *   select: { player_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerPersonalAchievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsDeleteArgs} args - Arguments to delete one PlayerPersonalAchievements.
     * @example
     * // Delete one PlayerPersonalAchievements
     * const PlayerPersonalAchievements = await prisma.playerPersonalAchievements.delete({
     *   where: {
     *     // ... filter to delete one PlayerPersonalAchievements
     *   }
     * })
     * 
     */
    delete<T extends PlayerPersonalAchievementsDeleteArgs>(args: SelectSubset<T, PlayerPersonalAchievementsDeleteArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsUpdateArgs} args - Arguments to update one PlayerPersonalAchievements.
     * @example
     * // Update one PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerPersonalAchievementsUpdateArgs>(args: SelectSubset<T, PlayerPersonalAchievementsUpdateArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsDeleteManyArgs} args - Arguments to filter PlayerPersonalAchievements to delete.
     * @example
     * // Delete a few PlayerPersonalAchievements
     * const { count } = await prisma.playerPersonalAchievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerPersonalAchievementsDeleteManyArgs>(args?: SelectSubset<T, PlayerPersonalAchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerPersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerPersonalAchievementsUpdateManyArgs>(args: SelectSubset<T, PlayerPersonalAchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerPersonalAchievements and returns the data updated in the database.
     * @param {PlayerPersonalAchievementsUpdateManyAndReturnArgs} args - Arguments to update many PlayerPersonalAchievements.
     * @example
     * // Update many PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerPersonalAchievements and only return the `player_id`
     * const playerPersonalAchievementsWithPlayer_idOnly = await prisma.playerPersonalAchievements.updateManyAndReturn({
     *   select: { player_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerPersonalAchievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerPersonalAchievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerPersonalAchievements.
     * @param {PlayerPersonalAchievementsUpsertArgs} args - Arguments to update or create a PlayerPersonalAchievements.
     * @example
     * // Update or create a PlayerPersonalAchievements
     * const playerPersonalAchievements = await prisma.playerPersonalAchievements.upsert({
     *   create: {
     *     // ... data to create a PlayerPersonalAchievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerPersonalAchievements we want to update
     *   }
     * })
     */
    upsert<T extends PlayerPersonalAchievementsUpsertArgs>(args: SelectSubset<T, PlayerPersonalAchievementsUpsertArgs<ExtArgs>>): Prisma__PlayerPersonalAchievementsClient<$Result.GetResult<Prisma.$PlayerPersonalAchievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerPersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsCountArgs} args - Arguments to filter PlayerPersonalAchievements to count.
     * @example
     * // Count the number of PlayerPersonalAchievements
     * const count = await prisma.playerPersonalAchievements.count({
     *   where: {
     *     // ... the filter for the PlayerPersonalAchievements we want to count
     *   }
     * })
    **/
    count<T extends PlayerPersonalAchievementsCountArgs>(
      args?: Subset<T, PlayerPersonalAchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerPersonalAchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerPersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerPersonalAchievementsAggregateArgs>(args: Subset<T, PlayerPersonalAchievementsAggregateArgs>): Prisma.PrismaPromise<GetPlayerPersonalAchievementsAggregateType<T>>

    /**
     * Group by PlayerPersonalAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerPersonalAchievementsGroupByArgs} args - Group by arguments.
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
      T extends PlayerPersonalAchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerPersonalAchievementsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerPersonalAchievementsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerPersonalAchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerPersonalAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerPersonalAchievements model
   */
  readonly fields: PlayerPersonalAchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerPersonalAchievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerPersonalAchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends PersonalAchievementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalAchievementsDefaultArgs<ExtArgs>>): Prisma__PersonalAchievementsClient<$Result.GetResult<Prisma.$PersonalAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerPersonalAchievements model
   */
  interface PlayerPersonalAchievementsFieldRefs {
    readonly player_id: FieldRef<"PlayerPersonalAchievements", 'String'>
    readonly achievement_id: FieldRef<"PlayerPersonalAchievements", 'String'>
    readonly league: FieldRef<"PlayerPersonalAchievements", 'String'>
    readonly team_id: FieldRef<"PlayerPersonalAchievements", 'String'>
    readonly year: FieldRef<"PlayerPersonalAchievements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerPersonalAchievements findUnique
   */
  export type PlayerPersonalAchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPersonalAchievements to fetch.
     */
    where: PlayerPersonalAchievementsWhereUniqueInput
  }

  /**
   * PlayerPersonalAchievements findUniqueOrThrow
   */
  export type PlayerPersonalAchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPersonalAchievements to fetch.
     */
    where: PlayerPersonalAchievementsWhereUniqueInput
  }

  /**
   * PlayerPersonalAchievements findFirst
   */
  export type PlayerPersonalAchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPersonalAchievements to fetch.
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPersonalAchievements to fetch.
     */
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPersonalAchievements.
     */
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPersonalAchievements.
     */
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerPersonalAchievements findFirstOrThrow
   */
  export type PlayerPersonalAchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPersonalAchievements to fetch.
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPersonalAchievements to fetch.
     */
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerPersonalAchievements.
     */
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPersonalAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerPersonalAchievements.
     */
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerPersonalAchievements findMany
   */
  export type PlayerPersonalAchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerPersonalAchievements to fetch.
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerPersonalAchievements to fetch.
     */
    orderBy?: PlayerPersonalAchievementsOrderByWithRelationInput | PlayerPersonalAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerPersonalAchievements.
     */
    cursor?: PlayerPersonalAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerPersonalAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerPersonalAchievements.
     */
    skip?: number
    distinct?: PlayerPersonalAchievementsScalarFieldEnum | PlayerPersonalAchievementsScalarFieldEnum[]
  }

  /**
   * PlayerPersonalAchievements create
   */
  export type PlayerPersonalAchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerPersonalAchievements.
     */
    data: XOR<PlayerPersonalAchievementsCreateInput, PlayerPersonalAchievementsUncheckedCreateInput>
  }

  /**
   * PlayerPersonalAchievements createMany
   */
  export type PlayerPersonalAchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerPersonalAchievements.
     */
    data: PlayerPersonalAchievementsCreateManyInput | PlayerPersonalAchievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerPersonalAchievements createManyAndReturn
   */
  export type PlayerPersonalAchievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerPersonalAchievements.
     */
    data: PlayerPersonalAchievementsCreateManyInput | PlayerPersonalAchievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerPersonalAchievements update
   */
  export type PlayerPersonalAchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerPersonalAchievements.
     */
    data: XOR<PlayerPersonalAchievementsUpdateInput, PlayerPersonalAchievementsUncheckedUpdateInput>
    /**
     * Choose, which PlayerPersonalAchievements to update.
     */
    where: PlayerPersonalAchievementsWhereUniqueInput
  }

  /**
   * PlayerPersonalAchievements updateMany
   */
  export type PlayerPersonalAchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerPersonalAchievements.
     */
    data: XOR<PlayerPersonalAchievementsUpdateManyMutationInput, PlayerPersonalAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerPersonalAchievements to update
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * Limit how many PlayerPersonalAchievements to update.
     */
    limit?: number
  }

  /**
   * PlayerPersonalAchievements updateManyAndReturn
   */
  export type PlayerPersonalAchievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerPersonalAchievements.
     */
    data: XOR<PlayerPersonalAchievementsUpdateManyMutationInput, PlayerPersonalAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerPersonalAchievements to update
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * Limit how many PlayerPersonalAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerPersonalAchievements upsert
   */
  export type PlayerPersonalAchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerPersonalAchievements to update in case it exists.
     */
    where: PlayerPersonalAchievementsWhereUniqueInput
    /**
     * In case the PlayerPersonalAchievements found by the `where` argument doesn't exist, create a new PlayerPersonalAchievements with this data.
     */
    create: XOR<PlayerPersonalAchievementsCreateInput, PlayerPersonalAchievementsUncheckedCreateInput>
    /**
     * In case the PlayerPersonalAchievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerPersonalAchievementsUpdateInput, PlayerPersonalAchievementsUncheckedUpdateInput>
  }

  /**
   * PlayerPersonalAchievements delete
   */
  export type PlayerPersonalAchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
    /**
     * Filter which PlayerPersonalAchievements to delete.
     */
    where: PlayerPersonalAchievementsWhereUniqueInput
  }

  /**
   * PlayerPersonalAchievements deleteMany
   */
  export type PlayerPersonalAchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerPersonalAchievements to delete
     */
    where?: PlayerPersonalAchievementsWhereInput
    /**
     * Limit how many PlayerPersonalAchievements to delete.
     */
    limit?: number
  }

  /**
   * PlayerPersonalAchievements without action
   */
  export type PlayerPersonalAchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerPersonalAchievements
     */
    select?: PlayerPersonalAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerPersonalAchievements
     */
    omit?: PlayerPersonalAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerPersonalAchievementsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerTeammateThoughts
   */

  export type AggregatePlayerTeammateThoughts = {
    _count: PlayerTeammateThoughtsCountAggregateOutputType | null
    _avg: PlayerTeammateThoughtsAvgAggregateOutputType | null
    _sum: PlayerTeammateThoughtsSumAggregateOutputType | null
    _min: PlayerTeammateThoughtsMinAggregateOutputType | null
    _max: PlayerTeammateThoughtsMaxAggregateOutputType | null
  }

  export type PlayerTeammateThoughtsAvgAggregateOutputType = {
    id: number | null
  }

  export type PlayerTeammateThoughtsSumAggregateOutputType = {
    id: number | null
  }

  export type PlayerTeammateThoughtsMinAggregateOutputType = {
    id: number | null
    player_id: string | null
    thoughts: string | null
    sent_to: string | null
  }

  export type PlayerTeammateThoughtsMaxAggregateOutputType = {
    id: number | null
    player_id: string | null
    thoughts: string | null
    sent_to: string | null
  }

  export type PlayerTeammateThoughtsCountAggregateOutputType = {
    id: number
    player_id: number
    thoughts: number
    sent_to: number
    _all: number
  }


  export type PlayerTeammateThoughtsAvgAggregateInputType = {
    id?: true
  }

  export type PlayerTeammateThoughtsSumAggregateInputType = {
    id?: true
  }

  export type PlayerTeammateThoughtsMinAggregateInputType = {
    id?: true
    player_id?: true
    thoughts?: true
    sent_to?: true
  }

  export type PlayerTeammateThoughtsMaxAggregateInputType = {
    id?: true
    player_id?: true
    thoughts?: true
    sent_to?: true
  }

  export type PlayerTeammateThoughtsCountAggregateInputType = {
    id?: true
    player_id?: true
    thoughts?: true
    sent_to?: true
    _all?: true
  }

  export type PlayerTeammateThoughtsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeammateThoughts to aggregate.
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeammateThoughts to fetch.
     */
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeammateThoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeammateThoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTeammateThoughts
    **/
    _count?: true | PlayerTeammateThoughtsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTeammateThoughtsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTeammateThoughtsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTeammateThoughtsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTeammateThoughtsMaxAggregateInputType
  }

  export type GetPlayerTeammateThoughtsAggregateType<T extends PlayerTeammateThoughtsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTeammateThoughts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTeammateThoughts[P]>
      : GetScalarType<T[P], AggregatePlayerTeammateThoughts[P]>
  }




  export type PlayerTeammateThoughtsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeammateThoughtsWhereInput
    orderBy?: PlayerTeammateThoughtsOrderByWithAggregationInput | PlayerTeammateThoughtsOrderByWithAggregationInput[]
    by: PlayerTeammateThoughtsScalarFieldEnum[] | PlayerTeammateThoughtsScalarFieldEnum
    having?: PlayerTeammateThoughtsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTeammateThoughtsCountAggregateInputType | true
    _avg?: PlayerTeammateThoughtsAvgAggregateInputType
    _sum?: PlayerTeammateThoughtsSumAggregateInputType
    _min?: PlayerTeammateThoughtsMinAggregateInputType
    _max?: PlayerTeammateThoughtsMaxAggregateInputType
  }

  export type PlayerTeammateThoughtsGroupByOutputType = {
    id: number
    player_id: string
    thoughts: string
    sent_to: string
    _count: PlayerTeammateThoughtsCountAggregateOutputType | null
    _avg: PlayerTeammateThoughtsAvgAggregateOutputType | null
    _sum: PlayerTeammateThoughtsSumAggregateOutputType | null
    _min: PlayerTeammateThoughtsMinAggregateOutputType | null
    _max: PlayerTeammateThoughtsMaxAggregateOutputType | null
  }

  type GetPlayerTeammateThoughtsGroupByPayload<T extends PlayerTeammateThoughtsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTeammateThoughtsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTeammateThoughtsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTeammateThoughtsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTeammateThoughtsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTeammateThoughtsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    thoughts?: boolean
    sent_to?: boolean
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeammateThoughts"]>

  export type PlayerTeammateThoughtsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    thoughts?: boolean
    sent_to?: boolean
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeammateThoughts"]>

  export type PlayerTeammateThoughtsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_id?: boolean
    thoughts?: boolean
    sent_to?: boolean
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeammateThoughts"]>

  export type PlayerTeammateThoughtsSelectScalar = {
    id?: boolean
    player_id?: boolean
    thoughts?: boolean
    sent_to?: boolean
  }

  export type PlayerTeammateThoughtsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player_id" | "thoughts" | "sent_to", ExtArgs["result"]["playerTeammateThoughts"]>
  export type PlayerTeammateThoughtsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerTeammateThoughtsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }
  export type PlayerTeammateThoughtsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | PlayersDefaultArgs<ExtArgs>
    receiver?: boolean | PlayersDefaultArgs<ExtArgs>
  }

  export type $PlayerTeammateThoughtsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTeammateThoughts"
    objects: {
      author: Prisma.$PlayersPayload<ExtArgs>
      receiver: Prisma.$PlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player_id: string
      thoughts: string
      sent_to: string
    }, ExtArgs["result"]["playerTeammateThoughts"]>
    composites: {}
  }

  type PlayerTeammateThoughtsGetPayload<S extends boolean | null | undefined | PlayerTeammateThoughtsDefaultArgs> = $Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload, S>

  type PlayerTeammateThoughtsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTeammateThoughtsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTeammateThoughtsCountAggregateInputType | true
    }

  export interface PlayerTeammateThoughtsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTeammateThoughts'], meta: { name: 'PlayerTeammateThoughts' } }
    /**
     * Find zero or one PlayerTeammateThoughts that matches the filter.
     * @param {PlayerTeammateThoughtsFindUniqueArgs} args - Arguments to find a PlayerTeammateThoughts
     * @example
     * // Get one PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTeammateThoughtsFindUniqueArgs>(args: SelectSubset<T, PlayerTeammateThoughtsFindUniqueArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTeammateThoughts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTeammateThoughtsFindUniqueOrThrowArgs} args - Arguments to find a PlayerTeammateThoughts
     * @example
     * // Get one PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTeammateThoughtsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTeammateThoughtsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeammateThoughts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsFindFirstArgs} args - Arguments to find a PlayerTeammateThoughts
     * @example
     * // Get one PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTeammateThoughtsFindFirstArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsFindFirstArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeammateThoughts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsFindFirstOrThrowArgs} args - Arguments to find a PlayerTeammateThoughts
     * @example
     * // Get one PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTeammateThoughtsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTeammateThoughts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findMany()
     * 
     * // Get first 10 PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTeammateThoughtsWithIdOnly = await prisma.playerTeammateThoughts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTeammateThoughtsFindManyArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsCreateArgs} args - Arguments to create a PlayerTeammateThoughts.
     * @example
     * // Create one PlayerTeammateThoughts
     * const PlayerTeammateThoughts = await prisma.playerTeammateThoughts.create({
     *   data: {
     *     // ... data to create a PlayerTeammateThoughts
     *   }
     * })
     * 
     */
    create<T extends PlayerTeammateThoughtsCreateArgs>(args: SelectSubset<T, PlayerTeammateThoughtsCreateArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsCreateManyArgs} args - Arguments to create many PlayerTeammateThoughts.
     * @example
     * // Create many PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTeammateThoughtsCreateManyArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerTeammateThoughts and returns the data saved in the database.
     * @param {PlayerTeammateThoughtsCreateManyAndReturnArgs} args - Arguments to create many PlayerTeammateThoughts.
     * @example
     * // Create many PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerTeammateThoughts and only return the `id`
     * const playerTeammateThoughtsWithIdOnly = await prisma.playerTeammateThoughts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerTeammateThoughtsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsDeleteArgs} args - Arguments to delete one PlayerTeammateThoughts.
     * @example
     * // Delete one PlayerTeammateThoughts
     * const PlayerTeammateThoughts = await prisma.playerTeammateThoughts.delete({
     *   where: {
     *     // ... filter to delete one PlayerTeammateThoughts
     *   }
     * })
     * 
     */
    delete<T extends PlayerTeammateThoughtsDeleteArgs>(args: SelectSubset<T, PlayerTeammateThoughtsDeleteArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsUpdateArgs} args - Arguments to update one PlayerTeammateThoughts.
     * @example
     * // Update one PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTeammateThoughtsUpdateArgs>(args: SelectSubset<T, PlayerTeammateThoughtsUpdateArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsDeleteManyArgs} args - Arguments to filter PlayerTeammateThoughts to delete.
     * @example
     * // Delete a few PlayerTeammateThoughts
     * const { count } = await prisma.playerTeammateThoughts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTeammateThoughtsDeleteManyArgs>(args?: SelectSubset<T, PlayerTeammateThoughtsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeammateThoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTeammateThoughtsUpdateManyArgs>(args: SelectSubset<T, PlayerTeammateThoughtsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeammateThoughts and returns the data updated in the database.
     * @param {PlayerTeammateThoughtsUpdateManyAndReturnArgs} args - Arguments to update many PlayerTeammateThoughts.
     * @example
     * // Update many PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerTeammateThoughts and only return the `id`
     * const playerTeammateThoughtsWithIdOnly = await prisma.playerTeammateThoughts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerTeammateThoughtsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerTeammateThoughtsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerTeammateThoughts.
     * @param {PlayerTeammateThoughtsUpsertArgs} args - Arguments to update or create a PlayerTeammateThoughts.
     * @example
     * // Update or create a PlayerTeammateThoughts
     * const playerTeammateThoughts = await prisma.playerTeammateThoughts.upsert({
     *   create: {
     *     // ... data to create a PlayerTeammateThoughts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTeammateThoughts we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTeammateThoughtsUpsertArgs>(args: SelectSubset<T, PlayerTeammateThoughtsUpsertArgs<ExtArgs>>): Prisma__PlayerTeammateThoughtsClient<$Result.GetResult<Prisma.$PlayerTeammateThoughtsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTeammateThoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsCountArgs} args - Arguments to filter PlayerTeammateThoughts to count.
     * @example
     * // Count the number of PlayerTeammateThoughts
     * const count = await prisma.playerTeammateThoughts.count({
     *   where: {
     *     // ... the filter for the PlayerTeammateThoughts we want to count
     *   }
     * })
    **/
    count<T extends PlayerTeammateThoughtsCountArgs>(
      args?: Subset<T, PlayerTeammateThoughtsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTeammateThoughtsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTeammateThoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerTeammateThoughtsAggregateArgs>(args: Subset<T, PlayerTeammateThoughtsAggregateArgs>): Prisma.PrismaPromise<GetPlayerTeammateThoughtsAggregateType<T>>

    /**
     * Group by PlayerTeammateThoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeammateThoughtsGroupByArgs} args - Group by arguments.
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
      T extends PlayerTeammateThoughtsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTeammateThoughtsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTeammateThoughtsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerTeammateThoughtsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTeammateThoughtsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTeammateThoughts model
   */
  readonly fields: PlayerTeammateThoughtsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTeammateThoughts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTeammateThoughtsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends PlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayersDefaultArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerTeammateThoughts model
   */
  interface PlayerTeammateThoughtsFieldRefs {
    readonly id: FieldRef<"PlayerTeammateThoughts", 'Int'>
    readonly player_id: FieldRef<"PlayerTeammateThoughts", 'String'>
    readonly thoughts: FieldRef<"PlayerTeammateThoughts", 'String'>
    readonly sent_to: FieldRef<"PlayerTeammateThoughts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTeammateThoughts findUnique
   */
  export type PlayerTeammateThoughtsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeammateThoughts to fetch.
     */
    where: PlayerTeammateThoughtsWhereUniqueInput
  }

  /**
   * PlayerTeammateThoughts findUniqueOrThrow
   */
  export type PlayerTeammateThoughtsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeammateThoughts to fetch.
     */
    where: PlayerTeammateThoughtsWhereUniqueInput
  }

  /**
   * PlayerTeammateThoughts findFirst
   */
  export type PlayerTeammateThoughtsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeammateThoughts to fetch.
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeammateThoughts to fetch.
     */
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeammateThoughts.
     */
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeammateThoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeammateThoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeammateThoughts.
     */
    distinct?: PlayerTeammateThoughtsScalarFieldEnum | PlayerTeammateThoughtsScalarFieldEnum[]
  }

  /**
   * PlayerTeammateThoughts findFirstOrThrow
   */
  export type PlayerTeammateThoughtsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeammateThoughts to fetch.
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeammateThoughts to fetch.
     */
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeammateThoughts.
     */
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeammateThoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeammateThoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeammateThoughts.
     */
    distinct?: PlayerTeammateThoughtsScalarFieldEnum | PlayerTeammateThoughtsScalarFieldEnum[]
  }

  /**
   * PlayerTeammateThoughts findMany
   */
  export type PlayerTeammateThoughtsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeammateThoughts to fetch.
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeammateThoughts to fetch.
     */
    orderBy?: PlayerTeammateThoughtsOrderByWithRelationInput | PlayerTeammateThoughtsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTeammateThoughts.
     */
    cursor?: PlayerTeammateThoughtsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeammateThoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeammateThoughts.
     */
    skip?: number
    distinct?: PlayerTeammateThoughtsScalarFieldEnum | PlayerTeammateThoughtsScalarFieldEnum[]
  }

  /**
   * PlayerTeammateThoughts create
   */
  export type PlayerTeammateThoughtsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerTeammateThoughts.
     */
    data: XOR<PlayerTeammateThoughtsCreateInput, PlayerTeammateThoughtsUncheckedCreateInput>
  }

  /**
   * PlayerTeammateThoughts createMany
   */
  export type PlayerTeammateThoughtsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTeammateThoughts.
     */
    data: PlayerTeammateThoughtsCreateManyInput | PlayerTeammateThoughtsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTeammateThoughts createManyAndReturn
   */
  export type PlayerTeammateThoughtsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerTeammateThoughts.
     */
    data: PlayerTeammateThoughtsCreateManyInput | PlayerTeammateThoughtsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeammateThoughts update
   */
  export type PlayerTeammateThoughtsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerTeammateThoughts.
     */
    data: XOR<PlayerTeammateThoughtsUpdateInput, PlayerTeammateThoughtsUncheckedUpdateInput>
    /**
     * Choose, which PlayerTeammateThoughts to update.
     */
    where: PlayerTeammateThoughtsWhereUniqueInput
  }

  /**
   * PlayerTeammateThoughts updateMany
   */
  export type PlayerTeammateThoughtsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTeammateThoughts.
     */
    data: XOR<PlayerTeammateThoughtsUpdateManyMutationInput, PlayerTeammateThoughtsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeammateThoughts to update
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * Limit how many PlayerTeammateThoughts to update.
     */
    limit?: number
  }

  /**
   * PlayerTeammateThoughts updateManyAndReturn
   */
  export type PlayerTeammateThoughtsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerTeammateThoughts.
     */
    data: XOR<PlayerTeammateThoughtsUpdateManyMutationInput, PlayerTeammateThoughtsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeammateThoughts to update
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * Limit how many PlayerTeammateThoughts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeammateThoughts upsert
   */
  export type PlayerTeammateThoughtsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerTeammateThoughts to update in case it exists.
     */
    where: PlayerTeammateThoughtsWhereUniqueInput
    /**
     * In case the PlayerTeammateThoughts found by the `where` argument doesn't exist, create a new PlayerTeammateThoughts with this data.
     */
    create: XOR<PlayerTeammateThoughtsCreateInput, PlayerTeammateThoughtsUncheckedCreateInput>
    /**
     * In case the PlayerTeammateThoughts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTeammateThoughtsUpdateInput, PlayerTeammateThoughtsUncheckedUpdateInput>
  }

  /**
   * PlayerTeammateThoughts delete
   */
  export type PlayerTeammateThoughtsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
    /**
     * Filter which PlayerTeammateThoughts to delete.
     */
    where: PlayerTeammateThoughtsWhereUniqueInput
  }

  /**
   * PlayerTeammateThoughts deleteMany
   */
  export type PlayerTeammateThoughtsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeammateThoughts to delete
     */
    where?: PlayerTeammateThoughtsWhereInput
    /**
     * Limit how many PlayerTeammateThoughts to delete.
     */
    limit?: number
  }

  /**
   * PlayerTeammateThoughts without action
   */
  export type PlayerTeammateThoughtsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeammateThoughts
     */
    select?: PlayerTeammateThoughtsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeammateThoughts
     */
    omit?: PlayerTeammateThoughtsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeammateThoughtsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    position: 'position',
    team_id: 'team_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ChairmanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    team_id: 'team_id'
  };

  export type ChairmanScalarFieldEnum = (typeof ChairmanScalarFieldEnum)[keyof typeof ChairmanScalarFieldEnum]


  export const PlayersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    position: 'position',
    team_id: 'team_id',
    shirt_no: 'shirt_no'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const LeaguesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LeaguesScalarFieldEnum = (typeof LeaguesScalarFieldEnum)[keyof typeof LeaguesScalarFieldEnum]


  export const PersonalAchievementsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PersonalAchievementsScalarFieldEnum = (typeof PersonalAchievementsScalarFieldEnum)[keyof typeof PersonalAchievementsScalarFieldEnum]


  export const PlayerInfoScalarFieldEnum: {
    player_id: 'player_id',
    dob: 'dob',
    birthplace: 'birthplace',
    gender: 'gender',
    biography: 'biography',
    height: 'height'
  };

  export type PlayerInfoScalarFieldEnum = (typeof PlayerInfoScalarFieldEnum)[keyof typeof PlayerInfoScalarFieldEnum]


  export const PlayerRatingsScalarFieldEnum: {
    player_id: 'player_id',
    pace: 'pace',
    shooting: 'shooting',
    passing: 'passing',
    physical: 'physical',
    defending: 'defending',
    dribbling: 'dribbling'
  };

  export type PlayerRatingsScalarFieldEnum = (typeof PlayerRatingsScalarFieldEnum)[keyof typeof PlayerRatingsScalarFieldEnum]


  export const PlayerStatsScalarFieldEnum: {
    player_id: 'player_id',
    matches: 'matches',
    goals: 'goals',
    assists: 'assists',
    yellow_cards: 'yellow_cards',
    red_cards: 'red_cards'
  };

  export type PlayerStatsScalarFieldEnum = (typeof PlayerStatsScalarFieldEnum)[keyof typeof PlayerStatsScalarFieldEnum]


  export const PlayerTeamAchievementsScalarFieldEnum: {
    id: 'id',
    player_id: 'player_id',
    place: 'place',
    league_id: 'league_id',
    team_id: 'team_id',
    year: 'year'
  };

  export type PlayerTeamAchievementsScalarFieldEnum = (typeof PlayerTeamAchievementsScalarFieldEnum)[keyof typeof PlayerTeamAchievementsScalarFieldEnum]


  export const PlayerPersonalAchievementsScalarFieldEnum: {
    player_id: 'player_id',
    achievement_id: 'achievement_id',
    league: 'league',
    team_id: 'team_id',
    year: 'year'
  };

  export type PlayerPersonalAchievementsScalarFieldEnum = (typeof PlayerPersonalAchievementsScalarFieldEnum)[keyof typeof PlayerPersonalAchievementsScalarFieldEnum]


  export const PlayerTeammateThoughtsScalarFieldEnum: {
    id: 'id',
    player_id: 'player_id',
    thoughts: 'thoughts',
    sent_to: 'sent_to'
  };

  export type PlayerTeammateThoughtsScalarFieldEnum = (typeof PlayerTeammateThoughtsScalarFieldEnum)[keyof typeof PlayerTeammateThoughtsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    id?: StringFilter<"Teams"> | string
    name?: StringFilter<"Teams"> | string
    employee?: EmployeeListRelationFilter
    chairman?: XOR<ChairmanNullableScalarRelationFilter, ChairmanWhereInput> | null
    player?: PlayersListRelationFilter
    league_achievement?: PlayerTeamAchievementsListRelationFilter
    personal_achievement?: PlayerPersonalAchievementsListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    employee?: EmployeeOrderByRelationAggregateInput
    chairman?: ChairmanOrderByWithRelationInput
    player?: PlayersOrderByRelationAggregateInput
    league_achievement?: PlayerTeamAchievementsOrderByRelationAggregateInput
    personal_achievement?: PlayerPersonalAchievementsOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    name?: StringFilter<"Teams"> | string
    employee?: EmployeeListRelationFilter
    chairman?: XOR<ChairmanNullableScalarRelationFilter, ChairmanWhereInput> | null
    player?: PlayersListRelationFilter
    league_achievement?: PlayerTeamAchievementsListRelationFilter
    personal_achievement?: PlayerPersonalAchievementsListRelationFilter
  }, "id">

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teams"> | string
    name?: StringWithAggregatesFilter<"Teams"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    age?: IntFilter<"Employee"> | number
    position?: StringFilter<"Employee"> | string
    team_id?: StringFilter<"Employee"> | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    team?: TeamsOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    age?: IntFilter<"Employee"> | number
    position?: StringFilter<"Employee"> | string
    team_id?: StringFilter<"Employee"> | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    age?: IntWithAggregatesFilter<"Employee"> | number
    position?: StringWithAggregatesFilter<"Employee"> | string
    team_id?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type ChairmanWhereInput = {
    AND?: ChairmanWhereInput | ChairmanWhereInput[]
    OR?: ChairmanWhereInput[]
    NOT?: ChairmanWhereInput | ChairmanWhereInput[]
    id?: IntFilter<"Chairman"> | number
    name?: StringFilter<"Chairman"> | string
    age?: IntFilter<"Chairman"> | number
    team_id?: StringFilter<"Chairman"> | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type ChairmanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    team_id?: SortOrder
    team?: TeamsOrderByWithRelationInput
  }

  export type ChairmanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    team_id?: string
    AND?: ChairmanWhereInput | ChairmanWhereInput[]
    OR?: ChairmanWhereInput[]
    NOT?: ChairmanWhereInput | ChairmanWhereInput[]
    name?: StringFilter<"Chairman"> | string
    age?: IntFilter<"Chairman"> | number
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id" | "team_id">

  export type ChairmanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    team_id?: SortOrder
    _count?: ChairmanCountOrderByAggregateInput
    _avg?: ChairmanAvgOrderByAggregateInput
    _max?: ChairmanMaxOrderByAggregateInput
    _min?: ChairmanMinOrderByAggregateInput
    _sum?: ChairmanSumOrderByAggregateInput
  }

  export type ChairmanScalarWhereWithAggregatesInput = {
    AND?: ChairmanScalarWhereWithAggregatesInput | ChairmanScalarWhereWithAggregatesInput[]
    OR?: ChairmanScalarWhereWithAggregatesInput[]
    NOT?: ChairmanScalarWhereWithAggregatesInput | ChairmanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chairman"> | number
    name?: StringWithAggregatesFilter<"Chairman"> | string
    age?: IntWithAggregatesFilter<"Chairman"> | number
    team_id?: StringWithAggregatesFilter<"Chairman"> | string
  }

  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    id?: StringFilter<"Players"> | string
    name?: StringFilter<"Players"> | string
    age?: IntFilter<"Players"> | number
    position?: StringFilter<"Players"> | string
    team_id?: StringFilter<"Players"> | string
    shirt_no?: IntFilter<"Players"> | number
    player_info?: XOR<PlayerInfoNullableScalarRelationFilter, PlayerInfoWhereInput> | null
    player_rating?: XOR<PlayerRatingsNullableScalarRelationFilter, PlayerRatingsWhereInput> | null
    player_stats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    player_team_achievement?: PlayerTeamAchievementsListRelationFilter
    player_personal_achievement?: PlayerPersonalAchievementsListRelationFilter
    thoughtsAuthored?: PlayerTeammateThoughtsListRelationFilter
    thoughtsReceived?: PlayerTeammateThoughtsListRelationFilter
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type PlayersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    shirt_no?: SortOrder
    player_info?: PlayerInfoOrderByWithRelationInput
    player_rating?: PlayerRatingsOrderByWithRelationInput
    player_stats?: PlayerStatsOrderByWithRelationInput
    player_team_achievement?: PlayerTeamAchievementsOrderByRelationAggregateInput
    player_personal_achievement?: PlayerPersonalAchievementsOrderByRelationAggregateInput
    thoughtsAuthored?: PlayerTeammateThoughtsOrderByRelationAggregateInput
    thoughtsReceived?: PlayerTeammateThoughtsOrderByRelationAggregateInput
    team?: TeamsOrderByWithRelationInput
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    name?: StringFilter<"Players"> | string
    age?: IntFilter<"Players"> | number
    position?: StringFilter<"Players"> | string
    team_id?: StringFilter<"Players"> | string
    shirt_no?: IntFilter<"Players"> | number
    player_info?: XOR<PlayerInfoNullableScalarRelationFilter, PlayerInfoWhereInput> | null
    player_rating?: XOR<PlayerRatingsNullableScalarRelationFilter, PlayerRatingsWhereInput> | null
    player_stats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    player_team_achievement?: PlayerTeamAchievementsListRelationFilter
    player_personal_achievement?: PlayerPersonalAchievementsListRelationFilter
    thoughtsAuthored?: PlayerTeammateThoughtsListRelationFilter
    thoughtsReceived?: PlayerTeammateThoughtsListRelationFilter
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type PlayersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    shirt_no?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _avg?: PlayersAvgOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
    _sum?: PlayersSumOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Players"> | string
    name?: StringWithAggregatesFilter<"Players"> | string
    age?: IntWithAggregatesFilter<"Players"> | number
    position?: StringWithAggregatesFilter<"Players"> | string
    team_id?: StringWithAggregatesFilter<"Players"> | string
    shirt_no?: IntWithAggregatesFilter<"Players"> | number
  }

  export type LeaguesWhereInput = {
    AND?: LeaguesWhereInput | LeaguesWhereInput[]
    OR?: LeaguesWhereInput[]
    NOT?: LeaguesWhereInput | LeaguesWhereInput[]
    id?: StringFilter<"Leagues"> | string
    name?: StringFilter<"Leagues"> | string
    league_achievement?: PlayerTeamAchievementsListRelationFilter
  }

  export type LeaguesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    league_achievement?: PlayerTeamAchievementsOrderByRelationAggregateInput
  }

  export type LeaguesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaguesWhereInput | LeaguesWhereInput[]
    OR?: LeaguesWhereInput[]
    NOT?: LeaguesWhereInput | LeaguesWhereInput[]
    name?: StringFilter<"Leagues"> | string
    league_achievement?: PlayerTeamAchievementsListRelationFilter
  }, "id">

  export type LeaguesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LeaguesCountOrderByAggregateInput
    _max?: LeaguesMaxOrderByAggregateInput
    _min?: LeaguesMinOrderByAggregateInput
  }

  export type LeaguesScalarWhereWithAggregatesInput = {
    AND?: LeaguesScalarWhereWithAggregatesInput | LeaguesScalarWhereWithAggregatesInput[]
    OR?: LeaguesScalarWhereWithAggregatesInput[]
    NOT?: LeaguesScalarWhereWithAggregatesInput | LeaguesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leagues"> | string
    name?: StringWithAggregatesFilter<"Leagues"> | string
  }

  export type PersonalAchievementsWhereInput = {
    AND?: PersonalAchievementsWhereInput | PersonalAchievementsWhereInput[]
    OR?: PersonalAchievementsWhereInput[]
    NOT?: PersonalAchievementsWhereInput | PersonalAchievementsWhereInput[]
    id?: StringFilter<"PersonalAchievements"> | string
    name?: StringFilter<"PersonalAchievements"> | string
    personal_achievement?: PlayerPersonalAchievementsListRelationFilter
  }

  export type PersonalAchievementsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    personal_achievement?: PlayerPersonalAchievementsOrderByRelationAggregateInput
  }

  export type PersonalAchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalAchievementsWhereInput | PersonalAchievementsWhereInput[]
    OR?: PersonalAchievementsWhereInput[]
    NOT?: PersonalAchievementsWhereInput | PersonalAchievementsWhereInput[]
    name?: StringFilter<"PersonalAchievements"> | string
    personal_achievement?: PlayerPersonalAchievementsListRelationFilter
  }, "id">

  export type PersonalAchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PersonalAchievementsCountOrderByAggregateInput
    _max?: PersonalAchievementsMaxOrderByAggregateInput
    _min?: PersonalAchievementsMinOrderByAggregateInput
  }

  export type PersonalAchievementsScalarWhereWithAggregatesInput = {
    AND?: PersonalAchievementsScalarWhereWithAggregatesInput | PersonalAchievementsScalarWhereWithAggregatesInput[]
    OR?: PersonalAchievementsScalarWhereWithAggregatesInput[]
    NOT?: PersonalAchievementsScalarWhereWithAggregatesInput | PersonalAchievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalAchievements"> | string
    name?: StringWithAggregatesFilter<"PersonalAchievements"> | string
  }

  export type PlayerInfoWhereInput = {
    AND?: PlayerInfoWhereInput | PlayerInfoWhereInput[]
    OR?: PlayerInfoWhereInput[]
    NOT?: PlayerInfoWhereInput | PlayerInfoWhereInput[]
    player_id?: StringFilter<"PlayerInfo"> | string
    dob?: DateTimeFilter<"PlayerInfo"> | Date | string
    birthplace?: StringFilter<"PlayerInfo"> | string
    gender?: StringFilter<"PlayerInfo"> | string
    biography?: StringFilter<"PlayerInfo"> | string
    height?: IntFilter<"PlayerInfo"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }

  export type PlayerInfoOrderByWithRelationInput = {
    player_id?: SortOrder
    dob?: SortOrder
    birthplace?: SortOrder
    gender?: SortOrder
    biography?: SortOrder
    height?: SortOrder
    player?: PlayersOrderByWithRelationInput
  }

  export type PlayerInfoWhereUniqueInput = Prisma.AtLeast<{
    player_id?: string
    AND?: PlayerInfoWhereInput | PlayerInfoWhereInput[]
    OR?: PlayerInfoWhereInput[]
    NOT?: PlayerInfoWhereInput | PlayerInfoWhereInput[]
    dob?: DateTimeFilter<"PlayerInfo"> | Date | string
    birthplace?: StringFilter<"PlayerInfo"> | string
    gender?: StringFilter<"PlayerInfo"> | string
    biography?: StringFilter<"PlayerInfo"> | string
    height?: IntFilter<"PlayerInfo"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }, "player_id">

  export type PlayerInfoOrderByWithAggregationInput = {
    player_id?: SortOrder
    dob?: SortOrder
    birthplace?: SortOrder
    gender?: SortOrder
    biography?: SortOrder
    height?: SortOrder
    _count?: PlayerInfoCountOrderByAggregateInput
    _avg?: PlayerInfoAvgOrderByAggregateInput
    _max?: PlayerInfoMaxOrderByAggregateInput
    _min?: PlayerInfoMinOrderByAggregateInput
    _sum?: PlayerInfoSumOrderByAggregateInput
  }

  export type PlayerInfoScalarWhereWithAggregatesInput = {
    AND?: PlayerInfoScalarWhereWithAggregatesInput | PlayerInfoScalarWhereWithAggregatesInput[]
    OR?: PlayerInfoScalarWhereWithAggregatesInput[]
    NOT?: PlayerInfoScalarWhereWithAggregatesInput | PlayerInfoScalarWhereWithAggregatesInput[]
    player_id?: StringWithAggregatesFilter<"PlayerInfo"> | string
    dob?: DateTimeWithAggregatesFilter<"PlayerInfo"> | Date | string
    birthplace?: StringWithAggregatesFilter<"PlayerInfo"> | string
    gender?: StringWithAggregatesFilter<"PlayerInfo"> | string
    biography?: StringWithAggregatesFilter<"PlayerInfo"> | string
    height?: IntWithAggregatesFilter<"PlayerInfo"> | number
  }

  export type PlayerRatingsWhereInput = {
    AND?: PlayerRatingsWhereInput | PlayerRatingsWhereInput[]
    OR?: PlayerRatingsWhereInput[]
    NOT?: PlayerRatingsWhereInput | PlayerRatingsWhereInput[]
    player_id?: StringFilter<"PlayerRatings"> | string
    pace?: IntFilter<"PlayerRatings"> | number
    shooting?: IntFilter<"PlayerRatings"> | number
    passing?: IntFilter<"PlayerRatings"> | number
    physical?: IntFilter<"PlayerRatings"> | number
    defending?: IntFilter<"PlayerRatings"> | number
    dribbling?: IntFilter<"PlayerRatings"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }

  export type PlayerRatingsOrderByWithRelationInput = {
    player_id?: SortOrder
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
    player?: PlayersOrderByWithRelationInput
  }

  export type PlayerRatingsWhereUniqueInput = Prisma.AtLeast<{
    player_id?: string
    AND?: PlayerRatingsWhereInput | PlayerRatingsWhereInput[]
    OR?: PlayerRatingsWhereInput[]
    NOT?: PlayerRatingsWhereInput | PlayerRatingsWhereInput[]
    pace?: IntFilter<"PlayerRatings"> | number
    shooting?: IntFilter<"PlayerRatings"> | number
    passing?: IntFilter<"PlayerRatings"> | number
    physical?: IntFilter<"PlayerRatings"> | number
    defending?: IntFilter<"PlayerRatings"> | number
    dribbling?: IntFilter<"PlayerRatings"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }, "player_id">

  export type PlayerRatingsOrderByWithAggregationInput = {
    player_id?: SortOrder
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
    _count?: PlayerRatingsCountOrderByAggregateInput
    _avg?: PlayerRatingsAvgOrderByAggregateInput
    _max?: PlayerRatingsMaxOrderByAggregateInput
    _min?: PlayerRatingsMinOrderByAggregateInput
    _sum?: PlayerRatingsSumOrderByAggregateInput
  }

  export type PlayerRatingsScalarWhereWithAggregatesInput = {
    AND?: PlayerRatingsScalarWhereWithAggregatesInput | PlayerRatingsScalarWhereWithAggregatesInput[]
    OR?: PlayerRatingsScalarWhereWithAggregatesInput[]
    NOT?: PlayerRatingsScalarWhereWithAggregatesInput | PlayerRatingsScalarWhereWithAggregatesInput[]
    player_id?: StringWithAggregatesFilter<"PlayerRatings"> | string
    pace?: IntWithAggregatesFilter<"PlayerRatings"> | number
    shooting?: IntWithAggregatesFilter<"PlayerRatings"> | number
    passing?: IntWithAggregatesFilter<"PlayerRatings"> | number
    physical?: IntWithAggregatesFilter<"PlayerRatings"> | number
    defending?: IntWithAggregatesFilter<"PlayerRatings"> | number
    dribbling?: IntWithAggregatesFilter<"PlayerRatings"> | number
  }

  export type PlayerStatsWhereInput = {
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    player_id?: StringFilter<"PlayerStats"> | string
    matches?: IntFilter<"PlayerStats"> | number
    goals?: IntFilter<"PlayerStats"> | number
    assists?: IntFilter<"PlayerStats"> | number
    yellow_cards?: IntFilter<"PlayerStats"> | number
    red_cards?: IntFilter<"PlayerStats"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }

  export type PlayerStatsOrderByWithRelationInput = {
    player_id?: SortOrder
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    player?: PlayersOrderByWithRelationInput
  }

  export type PlayerStatsWhereUniqueInput = Prisma.AtLeast<{
    player_id?: string
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    matches?: IntFilter<"PlayerStats"> | number
    goals?: IntFilter<"PlayerStats"> | number
    assists?: IntFilter<"PlayerStats"> | number
    yellow_cards?: IntFilter<"PlayerStats"> | number
    red_cards?: IntFilter<"PlayerStats"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }, "player_id">

  export type PlayerStatsOrderByWithAggregationInput = {
    player_id?: SortOrder
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
    _count?: PlayerStatsCountOrderByAggregateInput
    _avg?: PlayerStatsAvgOrderByAggregateInput
    _max?: PlayerStatsMaxOrderByAggregateInput
    _min?: PlayerStatsMinOrderByAggregateInput
    _sum?: PlayerStatsSumOrderByAggregateInput
  }

  export type PlayerStatsScalarWhereWithAggregatesInput = {
    AND?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    OR?: PlayerStatsScalarWhereWithAggregatesInput[]
    NOT?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    player_id?: StringWithAggregatesFilter<"PlayerStats"> | string
    matches?: IntWithAggregatesFilter<"PlayerStats"> | number
    goals?: IntWithAggregatesFilter<"PlayerStats"> | number
    assists?: IntWithAggregatesFilter<"PlayerStats"> | number
    yellow_cards?: IntWithAggregatesFilter<"PlayerStats"> | number
    red_cards?: IntWithAggregatesFilter<"PlayerStats"> | number
  }

  export type PlayerTeamAchievementsWhereInput = {
    AND?: PlayerTeamAchievementsWhereInput | PlayerTeamAchievementsWhereInput[]
    OR?: PlayerTeamAchievementsWhereInput[]
    NOT?: PlayerTeamAchievementsWhereInput | PlayerTeamAchievementsWhereInput[]
    id?: IntFilter<"PlayerTeamAchievements"> | number
    player_id?: StringFilter<"PlayerTeamAchievements"> | string
    place?: StringFilter<"PlayerTeamAchievements"> | string
    league_id?: StringFilter<"PlayerTeamAchievements"> | string
    team_id?: StringFilter<"PlayerTeamAchievements"> | string
    year?: IntFilter<"PlayerTeamAchievements"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    league?: XOR<LeaguesScalarRelationFilter, LeaguesWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type PlayerTeamAchievementsOrderByWithRelationInput = {
    id?: SortOrder
    player_id?: SortOrder
    place?: SortOrder
    league_id?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
    player?: PlayersOrderByWithRelationInput
    league?: LeaguesOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
  }

  export type PlayerTeamAchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerTeamAchievementsWhereInput | PlayerTeamAchievementsWhereInput[]
    OR?: PlayerTeamAchievementsWhereInput[]
    NOT?: PlayerTeamAchievementsWhereInput | PlayerTeamAchievementsWhereInput[]
    player_id?: StringFilter<"PlayerTeamAchievements"> | string
    place?: StringFilter<"PlayerTeamAchievements"> | string
    league_id?: StringFilter<"PlayerTeamAchievements"> | string
    team_id?: StringFilter<"PlayerTeamAchievements"> | string
    year?: IntFilter<"PlayerTeamAchievements"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    league?: XOR<LeaguesScalarRelationFilter, LeaguesWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type PlayerTeamAchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    player_id?: SortOrder
    place?: SortOrder
    league_id?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
    _count?: PlayerTeamAchievementsCountOrderByAggregateInput
    _avg?: PlayerTeamAchievementsAvgOrderByAggregateInput
    _max?: PlayerTeamAchievementsMaxOrderByAggregateInput
    _min?: PlayerTeamAchievementsMinOrderByAggregateInput
    _sum?: PlayerTeamAchievementsSumOrderByAggregateInput
  }

  export type PlayerTeamAchievementsScalarWhereWithAggregatesInput = {
    AND?: PlayerTeamAchievementsScalarWhereWithAggregatesInput | PlayerTeamAchievementsScalarWhereWithAggregatesInput[]
    OR?: PlayerTeamAchievementsScalarWhereWithAggregatesInput[]
    NOT?: PlayerTeamAchievementsScalarWhereWithAggregatesInput | PlayerTeamAchievementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerTeamAchievements"> | number
    player_id?: StringWithAggregatesFilter<"PlayerTeamAchievements"> | string
    place?: StringWithAggregatesFilter<"PlayerTeamAchievements"> | string
    league_id?: StringWithAggregatesFilter<"PlayerTeamAchievements"> | string
    team_id?: StringWithAggregatesFilter<"PlayerTeamAchievements"> | string
    year?: IntWithAggregatesFilter<"PlayerTeamAchievements"> | number
  }

  export type PlayerPersonalAchievementsWhereInput = {
    AND?: PlayerPersonalAchievementsWhereInput | PlayerPersonalAchievementsWhereInput[]
    OR?: PlayerPersonalAchievementsWhereInput[]
    NOT?: PlayerPersonalAchievementsWhereInput | PlayerPersonalAchievementsWhereInput[]
    player_id?: StringFilter<"PlayerPersonalAchievements"> | string
    achievement_id?: StringFilter<"PlayerPersonalAchievements"> | string
    league?: StringFilter<"PlayerPersonalAchievements"> | string
    team_id?: StringFilter<"PlayerPersonalAchievements"> | string
    year?: IntFilter<"PlayerPersonalAchievements"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    achievement?: XOR<PersonalAchievementsScalarRelationFilter, PersonalAchievementsWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type PlayerPersonalAchievementsOrderByWithRelationInput = {
    player_id?: SortOrder
    achievement_id?: SortOrder
    league?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
    player?: PlayersOrderByWithRelationInput
    achievement?: PersonalAchievementsOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
  }

  export type PlayerPersonalAchievementsWhereUniqueInput = Prisma.AtLeast<{
    player_id?: string
    AND?: PlayerPersonalAchievementsWhereInput | PlayerPersonalAchievementsWhereInput[]
    OR?: PlayerPersonalAchievementsWhereInput[]
    NOT?: PlayerPersonalAchievementsWhereInput | PlayerPersonalAchievementsWhereInput[]
    achievement_id?: StringFilter<"PlayerPersonalAchievements"> | string
    league?: StringFilter<"PlayerPersonalAchievements"> | string
    team_id?: StringFilter<"PlayerPersonalAchievements"> | string
    year?: IntFilter<"PlayerPersonalAchievements"> | number
    player?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    achievement?: XOR<PersonalAchievementsScalarRelationFilter, PersonalAchievementsWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "player_id">

  export type PlayerPersonalAchievementsOrderByWithAggregationInput = {
    player_id?: SortOrder
    achievement_id?: SortOrder
    league?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
    _count?: PlayerPersonalAchievementsCountOrderByAggregateInput
    _avg?: PlayerPersonalAchievementsAvgOrderByAggregateInput
    _max?: PlayerPersonalAchievementsMaxOrderByAggregateInput
    _min?: PlayerPersonalAchievementsMinOrderByAggregateInput
    _sum?: PlayerPersonalAchievementsSumOrderByAggregateInput
  }

  export type PlayerPersonalAchievementsScalarWhereWithAggregatesInput = {
    AND?: PlayerPersonalAchievementsScalarWhereWithAggregatesInput | PlayerPersonalAchievementsScalarWhereWithAggregatesInput[]
    OR?: PlayerPersonalAchievementsScalarWhereWithAggregatesInput[]
    NOT?: PlayerPersonalAchievementsScalarWhereWithAggregatesInput | PlayerPersonalAchievementsScalarWhereWithAggregatesInput[]
    player_id?: StringWithAggregatesFilter<"PlayerPersonalAchievements"> | string
    achievement_id?: StringWithAggregatesFilter<"PlayerPersonalAchievements"> | string
    league?: StringWithAggregatesFilter<"PlayerPersonalAchievements"> | string
    team_id?: StringWithAggregatesFilter<"PlayerPersonalAchievements"> | string
    year?: IntWithAggregatesFilter<"PlayerPersonalAchievements"> | number
  }

  export type PlayerTeammateThoughtsWhereInput = {
    AND?: PlayerTeammateThoughtsWhereInput | PlayerTeammateThoughtsWhereInput[]
    OR?: PlayerTeammateThoughtsWhereInput[]
    NOT?: PlayerTeammateThoughtsWhereInput | PlayerTeammateThoughtsWhereInput[]
    id?: IntFilter<"PlayerTeammateThoughts"> | number
    player_id?: StringFilter<"PlayerTeammateThoughts"> | string
    thoughts?: StringFilter<"PlayerTeammateThoughts"> | string
    sent_to?: StringFilter<"PlayerTeammateThoughts"> | string
    author?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    receiver?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }

  export type PlayerTeammateThoughtsOrderByWithRelationInput = {
    id?: SortOrder
    player_id?: SortOrder
    thoughts?: SortOrder
    sent_to?: SortOrder
    author?: PlayersOrderByWithRelationInput
    receiver?: PlayersOrderByWithRelationInput
  }

  export type PlayerTeammateThoughtsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlayerTeammateThoughtsWhereInput | PlayerTeammateThoughtsWhereInput[]
    OR?: PlayerTeammateThoughtsWhereInput[]
    NOT?: PlayerTeammateThoughtsWhereInput | PlayerTeammateThoughtsWhereInput[]
    player_id?: StringFilter<"PlayerTeammateThoughts"> | string
    thoughts?: StringFilter<"PlayerTeammateThoughts"> | string
    sent_to?: StringFilter<"PlayerTeammateThoughts"> | string
    author?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
    receiver?: XOR<PlayersScalarRelationFilter, PlayersWhereInput>
  }, "id">

  export type PlayerTeammateThoughtsOrderByWithAggregationInput = {
    id?: SortOrder
    player_id?: SortOrder
    thoughts?: SortOrder
    sent_to?: SortOrder
    _count?: PlayerTeammateThoughtsCountOrderByAggregateInput
    _avg?: PlayerTeammateThoughtsAvgOrderByAggregateInput
    _max?: PlayerTeammateThoughtsMaxOrderByAggregateInput
    _min?: PlayerTeammateThoughtsMinOrderByAggregateInput
    _sum?: PlayerTeammateThoughtsSumOrderByAggregateInput
  }

  export type PlayerTeammateThoughtsScalarWhereWithAggregatesInput = {
    AND?: PlayerTeammateThoughtsScalarWhereWithAggregatesInput | PlayerTeammateThoughtsScalarWhereWithAggregatesInput[]
    OR?: PlayerTeammateThoughtsScalarWhereWithAggregatesInput[]
    NOT?: PlayerTeammateThoughtsScalarWhereWithAggregatesInput | PlayerTeammateThoughtsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerTeammateThoughts"> | number
    player_id?: StringWithAggregatesFilter<"PlayerTeammateThoughts"> | string
    thoughts?: StringWithAggregatesFilter<"PlayerTeammateThoughts"> | string
    sent_to?: StringWithAggregatesFilter<"PlayerTeammateThoughts"> | string
  }

  export type TeamsCreateInput = {
    id: string
    name: string
    employee?: EmployeeCreateNestedManyWithoutTeamInput
    chairman?: ChairmanCreateNestedOneWithoutTeamInput
    player?: PlayersCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateInput = {
    id: string
    name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutTeamInput
    chairman?: ChairmanUncheckedCreateNestedOneWithoutTeamInput
    player?: PlayersUncheckedCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUpdateOneWithoutTeamNestedInput
    player?: PlayersUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUncheckedUpdateOneWithoutTeamNestedInput
    player?: PlayersUncheckedUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateManyInput = {
    id: string
    name: string
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    name: string
    age: number
    position: string
    team: TeamsCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    position: string
    team_id: string
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team?: TeamsUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    age: number
    position: string
    team_id: string
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
  }

  export type ChairmanCreateInput = {
    name: string
    age: number
    team: TeamsCreateNestedOneWithoutChairmanInput
  }

  export type ChairmanUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    team_id: string
  }

  export type ChairmanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    team?: TeamsUpdateOneRequiredWithoutChairmanNestedInput
  }

  export type ChairmanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
  }

  export type ChairmanCreateManyInput = {
    id?: number
    name: string
    age: number
    team_id: string
  }

  export type ChairmanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type ChairmanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    team_id?: StringFieldUpdateOperationsInput | string
  }

  export type PlayersCreateInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersCreateManyInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
  }

  export type PlayersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
  }

  export type LeaguesCreateInput = {
    id: string
    name: string
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutLeagueInput
  }

  export type LeaguesUncheckedCreateInput = {
    id: string
    name: string
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeaguesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutLeagueNestedInput
  }

  export type LeaguesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeaguesCreateManyInput = {
    id: string
    name: string
  }

  export type LeaguesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeaguesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalAchievementsCreateInput = {
    id: string
    name: string
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutAchievementInput
  }

  export type PersonalAchievementsUncheckedCreateInput = {
    id: string
    name: string
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type PersonalAchievementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutAchievementNestedInput
  }

  export type PersonalAchievementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type PersonalAchievementsCreateManyInput = {
    id: string
    name: string
  }

  export type PersonalAchievementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalAchievementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerInfoCreateInput = {
    dob: Date | string
    birthplace: string
    gender: string
    biography: string
    height: number
    player: PlayersCreateNestedOneWithoutPlayer_infoInput
  }

  export type PlayerInfoUncheckedCreateInput = {
    player_id: string
    dob: Date | string
    birthplace: string
    gender: string
    biography: string
    height: number
  }

  export type PlayerInfoUpdateInput = {
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_infoNestedInput
  }

  export type PlayerInfoUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerInfoCreateManyInput = {
    player_id: string
    dob: Date | string
    birthplace: string
    gender: string
    biography: string
    height: number
  }

  export type PlayerInfoUpdateManyMutationInput = {
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerInfoUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerRatingsCreateInput = {
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
    player: PlayersCreateNestedOneWithoutPlayer_ratingInput
  }

  export type PlayerRatingsUncheckedCreateInput = {
    player_id: string
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
  }

  export type PlayerRatingsUpdateInput = {
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_ratingNestedInput
  }

  export type PlayerRatingsUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerRatingsCreateManyInput = {
    player_id: string
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
  }

  export type PlayerRatingsUpdateManyMutationInput = {
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerRatingsUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerStatsCreateInput = {
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
    player: PlayersCreateNestedOneWithoutPlayer_statsInput
  }

  export type PlayerStatsUncheckedCreateInput = {
    player_id: string
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
  }

  export type PlayerStatsUpdateInput = {
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_statsNestedInput
  }

  export type PlayerStatsUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerStatsCreateManyInput = {
    player_id: string
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
  }

  export type PlayerStatsUpdateManyMutationInput = {
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerStatsUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsCreateInput = {
    id: number
    place: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_team_achievementInput
    league: LeaguesCreateNestedOneWithoutLeague_achievementInput
    team: TeamsCreateNestedOneWithoutLeague_achievementInput
  }

  export type PlayerTeamAchievementsUncheckedCreateInput = {
    id: number
    player_id: string
    place: string
    league_id: string
    team_id: string
    year: number
  }

  export type PlayerTeamAchievementsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_team_achievementNestedInput
    league?: LeaguesUpdateOneRequiredWithoutLeague_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutLeague_achievementNestedInput
  }

  export type PlayerTeamAchievementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsCreateManyInput = {
    id: number
    player_id: string
    place: string
    league_id: string
    team_id: string
    year: number
  }

  export type PlayerTeamAchievementsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsCreateInput = {
    league: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_personal_achievementInput
    achievement: PersonalAchievementsCreateNestedOneWithoutPersonal_achievementInput
    team: TeamsCreateNestedOneWithoutPersonal_achievementInput
  }

  export type PlayerPersonalAchievementsUncheckedCreateInput = {
    player_id: string
    achievement_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsUpdateInput = {
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_personal_achievementNestedInput
    achievement?: PersonalAchievementsUpdateOneRequiredWithoutPersonal_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutPersonal_achievementNestedInput
  }

  export type PlayerPersonalAchievementsUncheckedUpdateInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsCreateManyInput = {
    player_id: string
    achievement_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsUpdateManyMutationInput = {
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeammateThoughtsCreateInput = {
    thoughts: string
    author: PlayersCreateNestedOneWithoutThoughtsAuthoredInput
    receiver: PlayersCreateNestedOneWithoutThoughtsReceivedInput
  }

  export type PlayerTeammateThoughtsUncheckedCreateInput = {
    id?: number
    player_id: string
    thoughts: string
    sent_to: string
  }

  export type PlayerTeammateThoughtsUpdateInput = {
    thoughts?: StringFieldUpdateOperationsInput | string
    author?: PlayersUpdateOneRequiredWithoutThoughtsAuthoredNestedInput
    receiver?: PlayersUpdateOneRequiredWithoutThoughtsReceivedNestedInput
  }

  export type PlayerTeammateThoughtsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    thoughts?: StringFieldUpdateOperationsInput | string
    sent_to?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeammateThoughtsCreateManyInput = {
    id?: number
    player_id: string
    thoughts: string
    sent_to: string
  }

  export type PlayerTeammateThoughtsUpdateManyMutationInput = {
    thoughts?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeammateThoughtsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    thoughts?: StringFieldUpdateOperationsInput | string
    sent_to?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type ChairmanNullableScalarRelationFilter = {
    is?: ChairmanWhereInput | null
    isNot?: ChairmanWhereInput | null
  }

  export type PlayersListRelationFilter = {
    every?: PlayersWhereInput
    some?: PlayersWhereInput
    none?: PlayersWhereInput
  }

  export type PlayerTeamAchievementsListRelationFilter = {
    every?: PlayerTeamAchievementsWhereInput
    some?: PlayerTeamAchievementsWhereInput
    none?: PlayerTeamAchievementsWhereInput
  }

  export type PlayerPersonalAchievementsListRelationFilter = {
    every?: PlayerPersonalAchievementsWhereInput
    some?: PlayerPersonalAchievementsWhereInput
    none?: PlayerPersonalAchievementsWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerTeamAchievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerPersonalAchievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TeamsScalarRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChairmanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    team_id?: SortOrder
  }

  export type ChairmanAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type ChairmanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    team_id?: SortOrder
  }

  export type ChairmanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    team_id?: SortOrder
  }

  export type ChairmanSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type PlayerInfoNullableScalarRelationFilter = {
    is?: PlayerInfoWhereInput | null
    isNot?: PlayerInfoWhereInput | null
  }

  export type PlayerRatingsNullableScalarRelationFilter = {
    is?: PlayerRatingsWhereInput | null
    isNot?: PlayerRatingsWhereInput | null
  }

  export type PlayerStatsNullableScalarRelationFilter = {
    is?: PlayerStatsWhereInput | null
    isNot?: PlayerStatsWhereInput | null
  }

  export type PlayerTeammateThoughtsListRelationFilter = {
    every?: PlayerTeammateThoughtsWhereInput
    some?: PlayerTeammateThoughtsWhereInput
    none?: PlayerTeammateThoughtsWhereInput
  }

  export type PlayerTeammateThoughtsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    shirt_no?: SortOrder
  }

  export type PlayersAvgOrderByAggregateInput = {
    age?: SortOrder
    shirt_no?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    shirt_no?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    team_id?: SortOrder
    shirt_no?: SortOrder
  }

  export type PlayersSumOrderByAggregateInput = {
    age?: SortOrder
    shirt_no?: SortOrder
  }

  export type LeaguesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LeaguesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LeaguesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PersonalAchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PersonalAchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PersonalAchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlayersScalarRelationFilter = {
    is?: PlayersWhereInput
    isNot?: PlayersWhereInput
  }

  export type PlayerInfoCountOrderByAggregateInput = {
    player_id?: SortOrder
    dob?: SortOrder
    birthplace?: SortOrder
    gender?: SortOrder
    biography?: SortOrder
    height?: SortOrder
  }

  export type PlayerInfoAvgOrderByAggregateInput = {
    height?: SortOrder
  }

  export type PlayerInfoMaxOrderByAggregateInput = {
    player_id?: SortOrder
    dob?: SortOrder
    birthplace?: SortOrder
    gender?: SortOrder
    biography?: SortOrder
    height?: SortOrder
  }

  export type PlayerInfoMinOrderByAggregateInput = {
    player_id?: SortOrder
    dob?: SortOrder
    birthplace?: SortOrder
    gender?: SortOrder
    biography?: SortOrder
    height?: SortOrder
  }

  export type PlayerInfoSumOrderByAggregateInput = {
    height?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlayerRatingsCountOrderByAggregateInput = {
    player_id?: SortOrder
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
  }

  export type PlayerRatingsAvgOrderByAggregateInput = {
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
  }

  export type PlayerRatingsMaxOrderByAggregateInput = {
    player_id?: SortOrder
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
  }

  export type PlayerRatingsMinOrderByAggregateInput = {
    player_id?: SortOrder
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
  }

  export type PlayerRatingsSumOrderByAggregateInput = {
    pace?: SortOrder
    shooting?: SortOrder
    passing?: SortOrder
    physical?: SortOrder
    defending?: SortOrder
    dribbling?: SortOrder
  }

  export type PlayerStatsCountOrderByAggregateInput = {
    player_id?: SortOrder
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
  }

  export type PlayerStatsAvgOrderByAggregateInput = {
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
  }

  export type PlayerStatsMaxOrderByAggregateInput = {
    player_id?: SortOrder
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
  }

  export type PlayerStatsMinOrderByAggregateInput = {
    player_id?: SortOrder
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
  }

  export type PlayerStatsSumOrderByAggregateInput = {
    matches?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellow_cards?: SortOrder
    red_cards?: SortOrder
  }

  export type LeaguesScalarRelationFilter = {
    is?: LeaguesWhereInput
    isNot?: LeaguesWhereInput
  }

  export type PlayerTeamAchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    place?: SortOrder
    league_id?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerTeamAchievementsAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type PlayerTeamAchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    place?: SortOrder
    league_id?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerTeamAchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    place?: SortOrder
    league_id?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerTeamAchievementsSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type PersonalAchievementsScalarRelationFilter = {
    is?: PersonalAchievementsWhereInput
    isNot?: PersonalAchievementsWhereInput
  }

  export type PlayerPersonalAchievementsCountOrderByAggregateInput = {
    player_id?: SortOrder
    achievement_id?: SortOrder
    league?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerPersonalAchievementsAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type PlayerPersonalAchievementsMaxOrderByAggregateInput = {
    player_id?: SortOrder
    achievement_id?: SortOrder
    league?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerPersonalAchievementsMinOrderByAggregateInput = {
    player_id?: SortOrder
    achievement_id?: SortOrder
    league?: SortOrder
    team_id?: SortOrder
    year?: SortOrder
  }

  export type PlayerPersonalAchievementsSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type PlayerTeammateThoughtsCountOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    thoughts?: SortOrder
    sent_to?: SortOrder
  }

  export type PlayerTeammateThoughtsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerTeammateThoughtsMaxOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    thoughts?: SortOrder
    sent_to?: SortOrder
  }

  export type PlayerTeammateThoughtsMinOrderByAggregateInput = {
    id?: SortOrder
    player_id?: SortOrder
    thoughts?: SortOrder
    sent_to?: SortOrder
  }

  export type PlayerTeammateThoughtsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeCreateNestedManyWithoutTeamInput = {
    create?: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput> | EmployeeCreateWithoutTeamInput[] | EmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeamInput | EmployeeCreateOrConnectWithoutTeamInput[]
    createMany?: EmployeeCreateManyTeamInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type ChairmanCreateNestedOneWithoutTeamInput = {
    create?: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
    connectOrCreate?: ChairmanCreateOrConnectWithoutTeamInput
    connect?: ChairmanWhereUniqueInput
  }

  export type PlayersCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput> | PlayersCreateWithoutTeamInput[] | PlayersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamInput | PlayersCreateOrConnectWithoutTeamInput[]
    createMany?: PlayersCreateManyTeamInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayerTeamAchievementsCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput> | PlayerTeamAchievementsCreateWithoutTeamInput[] | PlayerTeamAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutTeamInput | PlayerTeamAchievementsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerTeamAchievementsCreateManyTeamInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput> | PlayerPersonalAchievementsCreateWithoutTeamInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput | PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerPersonalAchievementsCreateManyTeamInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput> | EmployeeCreateWithoutTeamInput[] | EmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeamInput | EmployeeCreateOrConnectWithoutTeamInput[]
    createMany?: EmployeeCreateManyTeamInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type ChairmanUncheckedCreateNestedOneWithoutTeamInput = {
    create?: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
    connectOrCreate?: ChairmanCreateOrConnectWithoutTeamInput
    connect?: ChairmanWhereUniqueInput
  }

  export type PlayersUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput> | PlayersCreateWithoutTeamInput[] | PlayersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamInput | PlayersCreateOrConnectWithoutTeamInput[]
    createMany?: PlayersCreateManyTeamInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput> | PlayerTeamAchievementsCreateWithoutTeamInput[] | PlayerTeamAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutTeamInput | PlayerTeamAchievementsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerTeamAchievementsCreateManyTeamInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput> | PlayerPersonalAchievementsCreateWithoutTeamInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput | PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerPersonalAchievementsCreateManyTeamInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EmployeeUpdateManyWithoutTeamNestedInput = {
    create?: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput> | EmployeeCreateWithoutTeamInput[] | EmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeamInput | EmployeeCreateOrConnectWithoutTeamInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutTeamInput | EmployeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: EmployeeCreateManyTeamInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutTeamInput | EmployeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutTeamInput | EmployeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type ChairmanUpdateOneWithoutTeamNestedInput = {
    create?: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
    connectOrCreate?: ChairmanCreateOrConnectWithoutTeamInput
    upsert?: ChairmanUpsertWithoutTeamInput
    disconnect?: ChairmanWhereInput | boolean
    delete?: ChairmanWhereInput | boolean
    connect?: ChairmanWhereUniqueInput
    update?: XOR<XOR<ChairmanUpdateToOneWithWhereWithoutTeamInput, ChairmanUpdateWithoutTeamInput>, ChairmanUncheckedUpdateWithoutTeamInput>
  }

  export type PlayersUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput> | PlayersCreateWithoutTeamInput[] | PlayersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamInput | PlayersCreateOrConnectWithoutTeamInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTeamInput | PlayersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayersCreateManyTeamInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTeamInput | PlayersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTeamInput | PlayersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput> | PlayerTeamAchievementsCreateWithoutTeamInput[] | PlayerTeamAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutTeamInput | PlayerTeamAchievementsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutTeamInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerTeamAchievementsCreateManyTeamInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutTeamInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutTeamInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput> | PlayerPersonalAchievementsCreateWithoutTeamInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput | PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutTeamInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerPersonalAchievementsCreateManyTeamInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutTeamInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutTeamInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput> | EmployeeCreateWithoutTeamInput[] | EmployeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeamInput | EmployeeCreateOrConnectWithoutTeamInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutTeamInput | EmployeeUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: EmployeeCreateManyTeamInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutTeamInput | EmployeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutTeamInput | EmployeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type ChairmanUncheckedUpdateOneWithoutTeamNestedInput = {
    create?: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
    connectOrCreate?: ChairmanCreateOrConnectWithoutTeamInput
    upsert?: ChairmanUpsertWithoutTeamInput
    disconnect?: ChairmanWhereInput | boolean
    delete?: ChairmanWhereInput | boolean
    connect?: ChairmanWhereUniqueInput
    update?: XOR<XOR<ChairmanUpdateToOneWithWhereWithoutTeamInput, ChairmanUpdateWithoutTeamInput>, ChairmanUncheckedUpdateWithoutTeamInput>
  }

  export type PlayersUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput> | PlayersCreateWithoutTeamInput[] | PlayersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTeamInput | PlayersCreateOrConnectWithoutTeamInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTeamInput | PlayersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayersCreateManyTeamInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTeamInput | PlayersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTeamInput | PlayersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput> | PlayerTeamAchievementsCreateWithoutTeamInput[] | PlayerTeamAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutTeamInput | PlayerTeamAchievementsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutTeamInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerTeamAchievementsCreateManyTeamInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutTeamInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutTeamInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput> | PlayerPersonalAchievementsCreateWithoutTeamInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput | PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutTeamInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerPersonalAchievementsCreateManyTeamInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutTeamInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutTeamInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type TeamsCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<TeamsCreateWithoutEmployeeInput, TeamsUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutEmployeeInput
    connect?: TeamsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamsUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<TeamsCreateWithoutEmployeeInput, TeamsUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutEmployeeInput
    upsert?: TeamsUpsertWithoutEmployeeInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutEmployeeInput, TeamsUpdateWithoutEmployeeInput>, TeamsUncheckedUpdateWithoutEmployeeInput>
  }

  export type TeamsCreateNestedOneWithoutChairmanInput = {
    create?: XOR<TeamsCreateWithoutChairmanInput, TeamsUncheckedCreateWithoutChairmanInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutChairmanInput
    connect?: TeamsWhereUniqueInput
  }

  export type TeamsUpdateOneRequiredWithoutChairmanNestedInput = {
    create?: XOR<TeamsCreateWithoutChairmanInput, TeamsUncheckedCreateWithoutChairmanInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutChairmanInput
    upsert?: TeamsUpsertWithoutChairmanInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutChairmanInput, TeamsUpdateWithoutChairmanInput>, TeamsUncheckedUpdateWithoutChairmanInput>
  }

  export type PlayerInfoCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerInfoCreateOrConnectWithoutPlayerInput
    connect?: PlayerInfoWhereUniqueInput
  }

  export type PlayerRatingsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerRatingsCreateOrConnectWithoutPlayerInput
    connect?: PlayerRatingsWhereUniqueInput
  }

  export type PlayerStatsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput> | PlayerTeamAchievementsCreateWithoutPlayerInput[] | PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput | PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTeamAchievementsCreateManyPlayerInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput> | PlayerPersonalAchievementsCreateWithoutPlayerInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput | PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerPersonalAchievementsCreateManyPlayerInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput> | PlayerTeammateThoughtsCreateWithoutAuthorInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput | PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput[]
    createMany?: PlayerTeammateThoughtsCreateManyAuthorInputEnvelope
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
  }

  export type PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput> | PlayerTeammateThoughtsCreateWithoutReceiverInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput | PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput[]
    createMany?: PlayerTeammateThoughtsCreateManyReceiverInputEnvelope
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
  }

  export type TeamsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<TeamsCreateWithoutPlayerInput, TeamsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPlayerInput
    connect?: TeamsWhereUniqueInput
  }

  export type PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerInfoCreateOrConnectWithoutPlayerInput
    connect?: PlayerInfoWhereUniqueInput
  }

  export type PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerRatingsCreateOrConnectWithoutPlayerInput
    connect?: PlayerRatingsWhereUniqueInput
  }

  export type PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput> | PlayerTeamAchievementsCreateWithoutPlayerInput[] | PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput | PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTeamAchievementsCreateManyPlayerInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput> | PlayerPersonalAchievementsCreateWithoutPlayerInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput | PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerPersonalAchievementsCreateManyPlayerInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput> | PlayerTeammateThoughtsCreateWithoutAuthorInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput | PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput[]
    createMany?: PlayerTeammateThoughtsCreateManyAuthorInputEnvelope
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
  }

  export type PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput> | PlayerTeammateThoughtsCreateWithoutReceiverInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput | PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput[]
    createMany?: PlayerTeammateThoughtsCreateManyReceiverInputEnvelope
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
  }

  export type PlayerInfoUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerInfoCreateOrConnectWithoutPlayerInput
    upsert?: PlayerInfoUpsertWithoutPlayerInput
    disconnect?: PlayerInfoWhereInput | boolean
    delete?: PlayerInfoWhereInput | boolean
    connect?: PlayerInfoWhereUniqueInput
    update?: XOR<XOR<PlayerInfoUpdateToOneWithWhereWithoutPlayerInput, PlayerInfoUpdateWithoutPlayerInput>, PlayerInfoUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerRatingsUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerRatingsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerRatingsUpsertWithoutPlayerInput
    disconnect?: PlayerRatingsWhereInput | boolean
    delete?: PlayerRatingsWhereInput | boolean
    connect?: PlayerRatingsWhereUniqueInput
    update?: XOR<XOR<PlayerRatingsUpdateToOneWithWhereWithoutPlayerInput, PlayerRatingsUpdateWithoutPlayerInput>, PlayerRatingsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput> | PlayerTeamAchievementsCreateWithoutPlayerInput[] | PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput | PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutPlayerInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTeamAchievementsCreateManyPlayerInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutPlayerInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutPlayerInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput> | PlayerPersonalAchievementsCreateWithoutPlayerInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput | PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutPlayerInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerPersonalAchievementsCreateManyPlayerInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutPlayerInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutPlayerInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput> | PlayerTeammateThoughtsCreateWithoutAuthorInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput | PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput[]
    upsert?: PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutAuthorInput | PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PlayerTeammateThoughtsCreateManyAuthorInputEnvelope
    set?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    disconnect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    delete?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    update?: PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutAuthorInput | PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PlayerTeammateThoughtsUpdateManyWithWhereWithoutAuthorInput | PlayerTeammateThoughtsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
  }

  export type PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput> | PlayerTeammateThoughtsCreateWithoutReceiverInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput | PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput[]
    upsert?: PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutReceiverInput | PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PlayerTeammateThoughtsCreateManyReceiverInputEnvelope
    set?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    disconnect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    delete?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    update?: PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutReceiverInput | PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PlayerTeammateThoughtsUpdateManyWithWhereWithoutReceiverInput | PlayerTeammateThoughtsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
  }

  export type TeamsUpdateOneRequiredWithoutPlayerNestedInput = {
    create?: XOR<TeamsCreateWithoutPlayerInput, TeamsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPlayerInput
    upsert?: TeamsUpsertWithoutPlayerInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutPlayerInput, TeamsUpdateWithoutPlayerInput>, TeamsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerInfoCreateOrConnectWithoutPlayerInput
    upsert?: PlayerInfoUpsertWithoutPlayerInput
    disconnect?: PlayerInfoWhereInput | boolean
    delete?: PlayerInfoWhereInput | boolean
    connect?: PlayerInfoWhereUniqueInput
    update?: XOR<XOR<PlayerInfoUpdateToOneWithWhereWithoutPlayerInput, PlayerInfoUpdateWithoutPlayerInput>, PlayerInfoUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerRatingsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerRatingsUpsertWithoutPlayerInput
    disconnect?: PlayerRatingsWhereInput | boolean
    delete?: PlayerRatingsWhereInput | boolean
    connect?: PlayerRatingsWhereUniqueInput
    update?: XOR<XOR<PlayerRatingsUpdateToOneWithWhereWithoutPlayerInput, PlayerRatingsUpdateWithoutPlayerInput>, PlayerRatingsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput> | PlayerTeamAchievementsCreateWithoutPlayerInput[] | PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput | PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutPlayerInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTeamAchievementsCreateManyPlayerInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutPlayerInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutPlayerInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput> | PlayerPersonalAchievementsCreateWithoutPlayerInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput | PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutPlayerInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerPersonalAchievementsCreateManyPlayerInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutPlayerInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutPlayerInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput> | PlayerTeammateThoughtsCreateWithoutAuthorInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput | PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput[]
    upsert?: PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutAuthorInput | PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PlayerTeammateThoughtsCreateManyAuthorInputEnvelope
    set?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    disconnect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    delete?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    update?: PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutAuthorInput | PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PlayerTeammateThoughtsUpdateManyWithWhereWithoutAuthorInput | PlayerTeammateThoughtsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
  }

  export type PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput> | PlayerTeammateThoughtsCreateWithoutReceiverInput[] | PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput | PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput[]
    upsert?: PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutReceiverInput | PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PlayerTeammateThoughtsCreateManyReceiverInputEnvelope
    set?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    disconnect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    delete?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    connect?: PlayerTeammateThoughtsWhereUniqueInput | PlayerTeammateThoughtsWhereUniqueInput[]
    update?: PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutReceiverInput | PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PlayerTeammateThoughtsUpdateManyWithWhereWithoutReceiverInput | PlayerTeammateThoughtsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
  }

  export type PlayerTeamAchievementsCreateNestedManyWithoutLeagueInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput> | PlayerTeamAchievementsCreateWithoutLeagueInput[] | PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput | PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput[]
    createMany?: PlayerTeamAchievementsCreateManyLeagueInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerTeamAchievementsUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput> | PlayerTeamAchievementsCreateWithoutLeagueInput[] | PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput | PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput[]
    createMany?: PlayerTeamAchievementsCreateManyLeagueInputEnvelope
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
  }

  export type PlayerTeamAchievementsUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput> | PlayerTeamAchievementsCreateWithoutLeagueInput[] | PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput | PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutLeagueInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: PlayerTeamAchievementsCreateManyLeagueInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutLeagueInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutLeagueInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput> | PlayerTeamAchievementsCreateWithoutLeagueInput[] | PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput | PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput[]
    upsert?: PlayerTeamAchievementsUpsertWithWhereUniqueWithoutLeagueInput | PlayerTeamAchievementsUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: PlayerTeamAchievementsCreateManyLeagueInputEnvelope
    set?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    disconnect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    delete?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    connect?: PlayerTeamAchievementsWhereUniqueInput | PlayerTeamAchievementsWhereUniqueInput[]
    update?: PlayerTeamAchievementsUpdateWithWhereUniqueWithoutLeagueInput | PlayerTeamAchievementsUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: PlayerTeamAchievementsUpdateManyWithWhereWithoutLeagueInput | PlayerTeamAchievementsUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsCreateNestedManyWithoutAchievementInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput> | PlayerPersonalAchievementsCreateWithoutAchievementInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput | PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput[]
    createMany?: PlayerPersonalAchievementsCreateManyAchievementInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput> | PlayerPersonalAchievementsCreateWithoutAchievementInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput | PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput[]
    createMany?: PlayerPersonalAchievementsCreateManyAchievementInputEnvelope
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
  }

  export type PlayerPersonalAchievementsUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput> | PlayerPersonalAchievementsCreateWithoutAchievementInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput | PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutAchievementInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: PlayerPersonalAchievementsCreateManyAchievementInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutAchievementInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutAchievementInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput> | PlayerPersonalAchievementsCreateWithoutAchievementInput[] | PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput | PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput[]
    upsert?: PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutAchievementInput | PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: PlayerPersonalAchievementsCreateManyAchievementInputEnvelope
    set?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    disconnect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    delete?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    connect?: PlayerPersonalAchievementsWhereUniqueInput | PlayerPersonalAchievementsWhereUniqueInput[]
    update?: PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutAchievementInput | PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: PlayerPersonalAchievementsUpdateManyWithWhereWithoutAchievementInput | PlayerPersonalAchievementsUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
  }

  export type PlayersCreateNestedOneWithoutPlayer_infoInput = {
    create?: XOR<PlayersCreateWithoutPlayer_infoInput, PlayersUncheckedCreateWithoutPlayer_infoInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_infoInput
    connect?: PlayersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayersUpdateOneRequiredWithoutPlayer_infoNestedInput = {
    create?: XOR<PlayersCreateWithoutPlayer_infoInput, PlayersUncheckedCreateWithoutPlayer_infoInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_infoInput
    upsert?: PlayersUpsertWithoutPlayer_infoInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutPlayer_infoInput, PlayersUpdateWithoutPlayer_infoInput>, PlayersUncheckedUpdateWithoutPlayer_infoInput>
  }

  export type PlayersCreateNestedOneWithoutPlayer_ratingInput = {
    create?: XOR<PlayersCreateWithoutPlayer_ratingInput, PlayersUncheckedCreateWithoutPlayer_ratingInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_ratingInput
    connect?: PlayersWhereUniqueInput
  }

  export type PlayersUpdateOneRequiredWithoutPlayer_ratingNestedInput = {
    create?: XOR<PlayersCreateWithoutPlayer_ratingInput, PlayersUncheckedCreateWithoutPlayer_ratingInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_ratingInput
    upsert?: PlayersUpsertWithoutPlayer_ratingInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutPlayer_ratingInput, PlayersUpdateWithoutPlayer_ratingInput>, PlayersUncheckedUpdateWithoutPlayer_ratingInput>
  }

  export type PlayersCreateNestedOneWithoutPlayer_statsInput = {
    create?: XOR<PlayersCreateWithoutPlayer_statsInput, PlayersUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_statsInput
    connect?: PlayersWhereUniqueInput
  }

  export type PlayersUpdateOneRequiredWithoutPlayer_statsNestedInput = {
    create?: XOR<PlayersCreateWithoutPlayer_statsInput, PlayersUncheckedCreateWithoutPlayer_statsInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_statsInput
    upsert?: PlayersUpsertWithoutPlayer_statsInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutPlayer_statsInput, PlayersUpdateWithoutPlayer_statsInput>, PlayersUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type PlayersCreateNestedOneWithoutPlayer_team_achievementInput = {
    create?: XOR<PlayersCreateWithoutPlayer_team_achievementInput, PlayersUncheckedCreateWithoutPlayer_team_achievementInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_team_achievementInput
    connect?: PlayersWhereUniqueInput
  }

  export type LeaguesCreateNestedOneWithoutLeague_achievementInput = {
    create?: XOR<LeaguesCreateWithoutLeague_achievementInput, LeaguesUncheckedCreateWithoutLeague_achievementInput>
    connectOrCreate?: LeaguesCreateOrConnectWithoutLeague_achievementInput
    connect?: LeaguesWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutLeague_achievementInput = {
    create?: XOR<TeamsCreateWithoutLeague_achievementInput, TeamsUncheckedCreateWithoutLeague_achievementInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutLeague_achievementInput
    connect?: TeamsWhereUniqueInput
  }

  export type PlayersUpdateOneRequiredWithoutPlayer_team_achievementNestedInput = {
    create?: XOR<PlayersCreateWithoutPlayer_team_achievementInput, PlayersUncheckedCreateWithoutPlayer_team_achievementInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_team_achievementInput
    upsert?: PlayersUpsertWithoutPlayer_team_achievementInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutPlayer_team_achievementInput, PlayersUpdateWithoutPlayer_team_achievementInput>, PlayersUncheckedUpdateWithoutPlayer_team_achievementInput>
  }

  export type LeaguesUpdateOneRequiredWithoutLeague_achievementNestedInput = {
    create?: XOR<LeaguesCreateWithoutLeague_achievementInput, LeaguesUncheckedCreateWithoutLeague_achievementInput>
    connectOrCreate?: LeaguesCreateOrConnectWithoutLeague_achievementInput
    upsert?: LeaguesUpsertWithoutLeague_achievementInput
    connect?: LeaguesWhereUniqueInput
    update?: XOR<XOR<LeaguesUpdateToOneWithWhereWithoutLeague_achievementInput, LeaguesUpdateWithoutLeague_achievementInput>, LeaguesUncheckedUpdateWithoutLeague_achievementInput>
  }

  export type TeamsUpdateOneRequiredWithoutLeague_achievementNestedInput = {
    create?: XOR<TeamsCreateWithoutLeague_achievementInput, TeamsUncheckedCreateWithoutLeague_achievementInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutLeague_achievementInput
    upsert?: TeamsUpsertWithoutLeague_achievementInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutLeague_achievementInput, TeamsUpdateWithoutLeague_achievementInput>, TeamsUncheckedUpdateWithoutLeague_achievementInput>
  }

  export type PlayersCreateNestedOneWithoutPlayer_personal_achievementInput = {
    create?: XOR<PlayersCreateWithoutPlayer_personal_achievementInput, PlayersUncheckedCreateWithoutPlayer_personal_achievementInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_personal_achievementInput
    connect?: PlayersWhereUniqueInput
  }

  export type PersonalAchievementsCreateNestedOneWithoutPersonal_achievementInput = {
    create?: XOR<PersonalAchievementsCreateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedCreateWithoutPersonal_achievementInput>
    connectOrCreate?: PersonalAchievementsCreateOrConnectWithoutPersonal_achievementInput
    connect?: PersonalAchievementsWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutPersonal_achievementInput = {
    create?: XOR<TeamsCreateWithoutPersonal_achievementInput, TeamsUncheckedCreateWithoutPersonal_achievementInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPersonal_achievementInput
    connect?: TeamsWhereUniqueInput
  }

  export type PlayersUpdateOneRequiredWithoutPlayer_personal_achievementNestedInput = {
    create?: XOR<PlayersCreateWithoutPlayer_personal_achievementInput, PlayersUncheckedCreateWithoutPlayer_personal_achievementInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutPlayer_personal_achievementInput
    upsert?: PlayersUpsertWithoutPlayer_personal_achievementInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutPlayer_personal_achievementInput, PlayersUpdateWithoutPlayer_personal_achievementInput>, PlayersUncheckedUpdateWithoutPlayer_personal_achievementInput>
  }

  export type PersonalAchievementsUpdateOneRequiredWithoutPersonal_achievementNestedInput = {
    create?: XOR<PersonalAchievementsCreateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedCreateWithoutPersonal_achievementInput>
    connectOrCreate?: PersonalAchievementsCreateOrConnectWithoutPersonal_achievementInput
    upsert?: PersonalAchievementsUpsertWithoutPersonal_achievementInput
    connect?: PersonalAchievementsWhereUniqueInput
    update?: XOR<XOR<PersonalAchievementsUpdateToOneWithWhereWithoutPersonal_achievementInput, PersonalAchievementsUpdateWithoutPersonal_achievementInput>, PersonalAchievementsUncheckedUpdateWithoutPersonal_achievementInput>
  }

  export type TeamsUpdateOneRequiredWithoutPersonal_achievementNestedInput = {
    create?: XOR<TeamsCreateWithoutPersonal_achievementInput, TeamsUncheckedCreateWithoutPersonal_achievementInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPersonal_achievementInput
    upsert?: TeamsUpsertWithoutPersonal_achievementInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutPersonal_achievementInput, TeamsUpdateWithoutPersonal_achievementInput>, TeamsUncheckedUpdateWithoutPersonal_achievementInput>
  }

  export type PlayersCreateNestedOneWithoutThoughtsAuthoredInput = {
    create?: XOR<PlayersCreateWithoutThoughtsAuthoredInput, PlayersUncheckedCreateWithoutThoughtsAuthoredInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutThoughtsAuthoredInput
    connect?: PlayersWhereUniqueInput
  }

  export type PlayersCreateNestedOneWithoutThoughtsReceivedInput = {
    create?: XOR<PlayersCreateWithoutThoughtsReceivedInput, PlayersUncheckedCreateWithoutThoughtsReceivedInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutThoughtsReceivedInput
    connect?: PlayersWhereUniqueInput
  }

  export type PlayersUpdateOneRequiredWithoutThoughtsAuthoredNestedInput = {
    create?: XOR<PlayersCreateWithoutThoughtsAuthoredInput, PlayersUncheckedCreateWithoutThoughtsAuthoredInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutThoughtsAuthoredInput
    upsert?: PlayersUpsertWithoutThoughtsAuthoredInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutThoughtsAuthoredInput, PlayersUpdateWithoutThoughtsAuthoredInput>, PlayersUncheckedUpdateWithoutThoughtsAuthoredInput>
  }

  export type PlayersUpdateOneRequiredWithoutThoughtsReceivedNestedInput = {
    create?: XOR<PlayersCreateWithoutThoughtsReceivedInput, PlayersUncheckedCreateWithoutThoughtsReceivedInput>
    connectOrCreate?: PlayersCreateOrConnectWithoutThoughtsReceivedInput
    upsert?: PlayersUpsertWithoutThoughtsReceivedInput
    connect?: PlayersWhereUniqueInput
    update?: XOR<XOR<PlayersUpdateToOneWithWhereWithoutThoughtsReceivedInput, PlayersUpdateWithoutThoughtsReceivedInput>, PlayersUncheckedUpdateWithoutThoughtsReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutTeamInput = {
    name: string
    age: number
    position: string
  }

  export type EmployeeUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    age: number
    position: string
  }

  export type EmployeeCreateOrConnectWithoutTeamInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput>
  }

  export type EmployeeCreateManyTeamInputEnvelope = {
    data: EmployeeCreateManyTeamInput | EmployeeCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ChairmanCreateWithoutTeamInput = {
    name: string
    age: number
  }

  export type ChairmanUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    age: number
  }

  export type ChairmanCreateOrConnectWithoutTeamInput = {
    where: ChairmanWhereUniqueInput
    create: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
  }

  export type PlayersCreateWithoutTeamInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
  }

  export type PlayersUncheckedCreateWithoutTeamInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutTeamInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput>
  }

  export type PlayersCreateManyTeamInputEnvelope = {
    data: PlayersCreateManyTeamInput | PlayersCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTeamAchievementsCreateWithoutTeamInput = {
    id: number
    place: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_team_achievementInput
    league: LeaguesCreateNestedOneWithoutLeague_achievementInput
  }

  export type PlayerTeamAchievementsUncheckedCreateWithoutTeamInput = {
    id: number
    player_id: string
    place: string
    league_id: string
    year: number
  }

  export type PlayerTeamAchievementsCreateOrConnectWithoutTeamInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    create: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerTeamAchievementsCreateManyTeamInputEnvelope = {
    data: PlayerTeamAchievementsCreateManyTeamInput | PlayerTeamAchievementsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPersonalAchievementsCreateWithoutTeamInput = {
    league: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_personal_achievementInput
    achievement: PersonalAchievementsCreateNestedOneWithoutPersonal_achievementInput
  }

  export type PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput = {
    player_id: string
    achievement_id: string
    league: string
    year: number
  }

  export type PlayerPersonalAchievementsCreateOrConnectWithoutTeamInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    create: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerPersonalAchievementsCreateManyTeamInputEnvelope = {
    data: PlayerPersonalAchievementsCreateManyTeamInput | PlayerPersonalAchievementsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutTeamInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutTeamInput, EmployeeUncheckedUpdateWithoutTeamInput>
    create: XOR<EmployeeCreateWithoutTeamInput, EmployeeUncheckedCreateWithoutTeamInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutTeamInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutTeamInput, EmployeeUncheckedUpdateWithoutTeamInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutTeamInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutTeamInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    age?: IntFilter<"Employee"> | number
    position?: StringFilter<"Employee"> | string
    team_id?: StringFilter<"Employee"> | string
  }

  export type ChairmanUpsertWithoutTeamInput = {
    update: XOR<ChairmanUpdateWithoutTeamInput, ChairmanUncheckedUpdateWithoutTeamInput>
    create: XOR<ChairmanCreateWithoutTeamInput, ChairmanUncheckedCreateWithoutTeamInput>
    where?: ChairmanWhereInput
  }

  export type ChairmanUpdateToOneWithWhereWithoutTeamInput = {
    where?: ChairmanWhereInput
    data: XOR<ChairmanUpdateWithoutTeamInput, ChairmanUncheckedUpdateWithoutTeamInput>
  }

  export type ChairmanUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type ChairmanUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayersWhereUniqueInput
    update: XOR<PlayersUpdateWithoutTeamInput, PlayersUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayersCreateWithoutTeamInput, PlayersUncheckedCreateWithoutTeamInput>
  }

  export type PlayersUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayersWhereUniqueInput
    data: XOR<PlayersUpdateWithoutTeamInput, PlayersUncheckedUpdateWithoutTeamInput>
  }

  export type PlayersUpdateManyWithWhereWithoutTeamInput = {
    where: PlayersScalarWhereInput
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayersScalarWhereInput = {
    AND?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    OR?: PlayersScalarWhereInput[]
    NOT?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    id?: StringFilter<"Players"> | string
    name?: StringFilter<"Players"> | string
    age?: IntFilter<"Players"> | number
    position?: StringFilter<"Players"> | string
    team_id?: StringFilter<"Players"> | string
    shirt_no?: IntFilter<"Players"> | number
  }

  export type PlayerTeamAchievementsUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    update: XOR<PlayerTeamAchievementsUpdateWithoutTeamInput, PlayerTeamAchievementsUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerTeamAchievementsCreateWithoutTeamInput, PlayerTeamAchievementsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerTeamAchievementsUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    data: XOR<PlayerTeamAchievementsUpdateWithoutTeamInput, PlayerTeamAchievementsUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerTeamAchievementsUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerTeamAchievementsScalarWhereInput
    data: XOR<PlayerTeamAchievementsUpdateManyMutationInput, PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerTeamAchievementsScalarWhereInput = {
    AND?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
    OR?: PlayerTeamAchievementsScalarWhereInput[]
    NOT?: PlayerTeamAchievementsScalarWhereInput | PlayerTeamAchievementsScalarWhereInput[]
    id?: IntFilter<"PlayerTeamAchievements"> | number
    player_id?: StringFilter<"PlayerTeamAchievements"> | string
    place?: StringFilter<"PlayerTeamAchievements"> | string
    league_id?: StringFilter<"PlayerTeamAchievements"> | string
    team_id?: StringFilter<"PlayerTeamAchievements"> | string
    year?: IntFilter<"PlayerTeamAchievements"> | number
  }

  export type PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    update: XOR<PlayerPersonalAchievementsUpdateWithoutTeamInput, PlayerPersonalAchievementsUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerPersonalAchievementsCreateWithoutTeamInput, PlayerPersonalAchievementsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    data: XOR<PlayerPersonalAchievementsUpdateWithoutTeamInput, PlayerPersonalAchievementsUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerPersonalAchievementsUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerPersonalAchievementsScalarWhereInput
    data: XOR<PlayerPersonalAchievementsUpdateManyMutationInput, PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerPersonalAchievementsScalarWhereInput = {
    AND?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
    OR?: PlayerPersonalAchievementsScalarWhereInput[]
    NOT?: PlayerPersonalAchievementsScalarWhereInput | PlayerPersonalAchievementsScalarWhereInput[]
    player_id?: StringFilter<"PlayerPersonalAchievements"> | string
    achievement_id?: StringFilter<"PlayerPersonalAchievements"> | string
    league?: StringFilter<"PlayerPersonalAchievements"> | string
    team_id?: StringFilter<"PlayerPersonalAchievements"> | string
    year?: IntFilter<"PlayerPersonalAchievements"> | number
  }

  export type TeamsCreateWithoutEmployeeInput = {
    id: string
    name: string
    chairman?: ChairmanCreateNestedOneWithoutTeamInput
    player?: PlayersCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutEmployeeInput = {
    id: string
    name: string
    chairman?: ChairmanUncheckedCreateNestedOneWithoutTeamInput
    player?: PlayersUncheckedCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutEmployeeInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutEmployeeInput, TeamsUncheckedCreateWithoutEmployeeInput>
  }

  export type TeamsUpsertWithoutEmployeeInput = {
    update: XOR<TeamsUpdateWithoutEmployeeInput, TeamsUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TeamsCreateWithoutEmployeeInput, TeamsUncheckedCreateWithoutEmployeeInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutEmployeeInput, TeamsUncheckedUpdateWithoutEmployeeInput>
  }

  export type TeamsUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chairman?: ChairmanUpdateOneWithoutTeamNestedInput
    player?: PlayersUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chairman?: ChairmanUncheckedUpdateOneWithoutTeamNestedInput
    player?: PlayersUncheckedUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateWithoutChairmanInput = {
    id: string
    name: string
    employee?: EmployeeCreateNestedManyWithoutTeamInput
    player?: PlayersCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutChairmanInput = {
    id: string
    name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutTeamInput
    player?: PlayersUncheckedCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutChairmanInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutChairmanInput, TeamsUncheckedCreateWithoutChairmanInput>
  }

  export type TeamsUpsertWithoutChairmanInput = {
    update: XOR<TeamsUpdateWithoutChairmanInput, TeamsUncheckedUpdateWithoutChairmanInput>
    create: XOR<TeamsCreateWithoutChairmanInput, TeamsUncheckedCreateWithoutChairmanInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutChairmanInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutChairmanInput, TeamsUncheckedUpdateWithoutChairmanInput>
  }

  export type TeamsUpdateWithoutChairmanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutTeamNestedInput
    player?: PlayersUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutChairmanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutTeamNestedInput
    player?: PlayersUncheckedUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayerInfoCreateWithoutPlayerInput = {
    dob: Date | string
    birthplace: string
    gender: string
    biography: string
    height: number
  }

  export type PlayerInfoUncheckedCreateWithoutPlayerInput = {
    dob: Date | string
    birthplace: string
    gender: string
    biography: string
    height: number
  }

  export type PlayerInfoCreateOrConnectWithoutPlayerInput = {
    where: PlayerInfoWhereUniqueInput
    create: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerRatingsCreateWithoutPlayerInput = {
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
  }

  export type PlayerRatingsUncheckedCreateWithoutPlayerInput = {
    pace: number
    shooting: number
    passing: number
    physical: number
    defending: number
    dribbling: number
  }

  export type PlayerRatingsCreateOrConnectWithoutPlayerInput = {
    where: PlayerRatingsWhereUniqueInput
    create: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerStatsCreateWithoutPlayerInput = {
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
  }

  export type PlayerStatsUncheckedCreateWithoutPlayerInput = {
    matches: number
    goals: number
    assists: number
    yellow_cards: number
    red_cards: number
  }

  export type PlayerStatsCreateOrConnectWithoutPlayerInput = {
    where: PlayerStatsWhereUniqueInput
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsCreateWithoutPlayerInput = {
    id: number
    place: string
    year: number
    league: LeaguesCreateNestedOneWithoutLeague_achievementInput
    team: TeamsCreateNestedOneWithoutLeague_achievementInput
  }

  export type PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput = {
    id: number
    place: string
    league_id: string
    team_id: string
    year: number
  }

  export type PlayerTeamAchievementsCreateOrConnectWithoutPlayerInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    create: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsCreateManyPlayerInputEnvelope = {
    data: PlayerTeamAchievementsCreateManyPlayerInput | PlayerTeamAchievementsCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPersonalAchievementsCreateWithoutPlayerInput = {
    league: string
    year: number
    achievement: PersonalAchievementsCreateNestedOneWithoutPersonal_achievementInput
    team: TeamsCreateNestedOneWithoutPersonal_achievementInput
  }

  export type PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput = {
    achievement_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsCreateOrConnectWithoutPlayerInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    create: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerPersonalAchievementsCreateManyPlayerInputEnvelope = {
    data: PlayerPersonalAchievementsCreateManyPlayerInput | PlayerPersonalAchievementsCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTeammateThoughtsCreateWithoutAuthorInput = {
    thoughts: string
    receiver: PlayersCreateNestedOneWithoutThoughtsReceivedInput
  }

  export type PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput = {
    id?: number
    thoughts: string
    sent_to: string
  }

  export type PlayerTeammateThoughtsCreateOrConnectWithoutAuthorInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    create: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput>
  }

  export type PlayerTeammateThoughtsCreateManyAuthorInputEnvelope = {
    data: PlayerTeammateThoughtsCreateManyAuthorInput | PlayerTeammateThoughtsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTeammateThoughtsCreateWithoutReceiverInput = {
    thoughts: string
    author: PlayersCreateNestedOneWithoutThoughtsAuthoredInput
  }

  export type PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput = {
    id?: number
    player_id: string
    thoughts: string
  }

  export type PlayerTeammateThoughtsCreateOrConnectWithoutReceiverInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    create: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput>
  }

  export type PlayerTeammateThoughtsCreateManyReceiverInputEnvelope = {
    data: PlayerTeammateThoughtsCreateManyReceiverInput | PlayerTeammateThoughtsCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutPlayerInput = {
    id: string
    name: string
    employee?: EmployeeCreateNestedManyWithoutTeamInput
    chairman?: ChairmanCreateNestedOneWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutPlayerInput = {
    id: string
    name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutTeamInput
    chairman?: ChairmanUncheckedCreateNestedOneWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutPlayerInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutPlayerInput, TeamsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerInfoUpsertWithoutPlayerInput = {
    update: XOR<PlayerInfoUpdateWithoutPlayerInput, PlayerInfoUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerInfoCreateWithoutPlayerInput, PlayerInfoUncheckedCreateWithoutPlayerInput>
    where?: PlayerInfoWhereInput
  }

  export type PlayerInfoUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerInfoWhereInput
    data: XOR<PlayerInfoUpdateWithoutPlayerInput, PlayerInfoUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerInfoUpdateWithoutPlayerInput = {
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerInfoUncheckedUpdateWithoutPlayerInput = {
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    birthplace?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    height?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerRatingsUpsertWithoutPlayerInput = {
    update: XOR<PlayerRatingsUpdateWithoutPlayerInput, PlayerRatingsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerRatingsCreateWithoutPlayerInput, PlayerRatingsUncheckedCreateWithoutPlayerInput>
    where?: PlayerRatingsWhereInput
  }

  export type PlayerRatingsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerRatingsWhereInput
    data: XOR<PlayerRatingsUpdateWithoutPlayerInput, PlayerRatingsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerRatingsUpdateWithoutPlayerInput = {
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerRatingsUncheckedUpdateWithoutPlayerInput = {
    pace?: IntFieldUpdateOperationsInput | number
    shooting?: IntFieldUpdateOperationsInput | number
    passing?: IntFieldUpdateOperationsInput | number
    physical?: IntFieldUpdateOperationsInput | number
    defending?: IntFieldUpdateOperationsInput | number
    dribbling?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerStatsUpsertWithoutPlayerInput = {
    update: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    where?: PlayerStatsWhereInput
  }

  export type PlayerStatsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerStatsWhereInput
    data: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUpdateWithoutPlayerInput = {
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerStatsUncheckedUpdateWithoutPlayerInput = {
    matches?: IntFieldUpdateOperationsInput | number
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellow_cards?: IntFieldUpdateOperationsInput | number
    red_cards?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    update: XOR<PlayerTeamAchievementsUpdateWithoutPlayerInput, PlayerTeamAchievementsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerTeamAchievementsCreateWithoutPlayerInput, PlayerTeamAchievementsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    data: XOR<PlayerTeamAchievementsUpdateWithoutPlayerInput, PlayerTeamAchievementsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamAchievementsUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerTeamAchievementsScalarWhereInput
    data: XOR<PlayerTeamAchievementsUpdateManyMutationInput, PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    update: XOR<PlayerPersonalAchievementsUpdateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerPersonalAchievementsCreateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    data: XOR<PlayerPersonalAchievementsUpdateWithoutPlayerInput, PlayerPersonalAchievementsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerPersonalAchievementsUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerPersonalAchievementsScalarWhereInput
    data: XOR<PlayerPersonalAchievementsUpdateManyMutationInput, PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    update: XOR<PlayerTeammateThoughtsUpdateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PlayerTeammateThoughtsCreateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedCreateWithoutAuthorInput>
  }

  export type PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    data: XOR<PlayerTeammateThoughtsUpdateWithoutAuthorInput, PlayerTeammateThoughtsUncheckedUpdateWithoutAuthorInput>
  }

  export type PlayerTeammateThoughtsUpdateManyWithWhereWithoutAuthorInput = {
    where: PlayerTeammateThoughtsScalarWhereInput
    data: XOR<PlayerTeammateThoughtsUpdateManyMutationInput, PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PlayerTeammateThoughtsScalarWhereInput = {
    AND?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
    OR?: PlayerTeammateThoughtsScalarWhereInput[]
    NOT?: PlayerTeammateThoughtsScalarWhereInput | PlayerTeammateThoughtsScalarWhereInput[]
    id?: IntFilter<"PlayerTeammateThoughts"> | number
    player_id?: StringFilter<"PlayerTeammateThoughts"> | string
    thoughts?: StringFilter<"PlayerTeammateThoughts"> | string
    sent_to?: StringFilter<"PlayerTeammateThoughts"> | string
  }

  export type PlayerTeammateThoughtsUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    update: XOR<PlayerTeammateThoughtsUpdateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedUpdateWithoutReceiverInput>
    create: XOR<PlayerTeammateThoughtsCreateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedCreateWithoutReceiverInput>
  }

  export type PlayerTeammateThoughtsUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PlayerTeammateThoughtsWhereUniqueInput
    data: XOR<PlayerTeammateThoughtsUpdateWithoutReceiverInput, PlayerTeammateThoughtsUncheckedUpdateWithoutReceiverInput>
  }

  export type PlayerTeammateThoughtsUpdateManyWithWhereWithoutReceiverInput = {
    where: PlayerTeammateThoughtsScalarWhereInput
    data: XOR<PlayerTeammateThoughtsUpdateManyMutationInput, PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverInput>
  }

  export type TeamsUpsertWithoutPlayerInput = {
    update: XOR<TeamsUpdateWithoutPlayerInput, TeamsUncheckedUpdateWithoutPlayerInput>
    create: XOR<TeamsCreateWithoutPlayerInput, TeamsUncheckedCreateWithoutPlayerInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutPlayerInput, TeamsUncheckedUpdateWithoutPlayerInput>
  }

  export type TeamsUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUpdateOneWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUncheckedUpdateOneWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayerTeamAchievementsCreateWithoutLeagueInput = {
    id: number
    place: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_team_achievementInput
    team: TeamsCreateNestedOneWithoutLeague_achievementInput
  }

  export type PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput = {
    id: number
    player_id: string
    place: string
    team_id: string
    year: number
  }

  export type PlayerTeamAchievementsCreateOrConnectWithoutLeagueInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    create: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput>
  }

  export type PlayerTeamAchievementsCreateManyLeagueInputEnvelope = {
    data: PlayerTeamAchievementsCreateManyLeagueInput | PlayerTeamAchievementsCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type PlayerTeamAchievementsUpsertWithWhereUniqueWithoutLeagueInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    update: XOR<PlayerTeamAchievementsUpdateWithoutLeagueInput, PlayerTeamAchievementsUncheckedUpdateWithoutLeagueInput>
    create: XOR<PlayerTeamAchievementsCreateWithoutLeagueInput, PlayerTeamAchievementsUncheckedCreateWithoutLeagueInput>
  }

  export type PlayerTeamAchievementsUpdateWithWhereUniqueWithoutLeagueInput = {
    where: PlayerTeamAchievementsWhereUniqueInput
    data: XOR<PlayerTeamAchievementsUpdateWithoutLeagueInput, PlayerTeamAchievementsUncheckedUpdateWithoutLeagueInput>
  }

  export type PlayerTeamAchievementsUpdateManyWithWhereWithoutLeagueInput = {
    where: PlayerTeamAchievementsScalarWhereInput
    data: XOR<PlayerTeamAchievementsUpdateManyMutationInput, PlayerTeamAchievementsUncheckedUpdateManyWithoutLeagueInput>
  }

  export type PlayerPersonalAchievementsCreateWithoutAchievementInput = {
    league: string
    year: number
    player: PlayersCreateNestedOneWithoutPlayer_personal_achievementInput
    team: TeamsCreateNestedOneWithoutPersonal_achievementInput
  }

  export type PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput = {
    player_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsCreateOrConnectWithoutAchievementInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    create: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput>
  }

  export type PlayerPersonalAchievementsCreateManyAchievementInputEnvelope = {
    data: PlayerPersonalAchievementsCreateManyAchievementInput | PlayerPersonalAchievementsCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type PlayerPersonalAchievementsUpsertWithWhereUniqueWithoutAchievementInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    update: XOR<PlayerPersonalAchievementsUpdateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedUpdateWithoutAchievementInput>
    create: XOR<PlayerPersonalAchievementsCreateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedCreateWithoutAchievementInput>
  }

  export type PlayerPersonalAchievementsUpdateWithWhereUniqueWithoutAchievementInput = {
    where: PlayerPersonalAchievementsWhereUniqueInput
    data: XOR<PlayerPersonalAchievementsUpdateWithoutAchievementInput, PlayerPersonalAchievementsUncheckedUpdateWithoutAchievementInput>
  }

  export type PlayerPersonalAchievementsUpdateManyWithWhereWithoutAchievementInput = {
    where: PlayerPersonalAchievementsScalarWhereInput
    data: XOR<PlayerPersonalAchievementsUpdateManyMutationInput, PlayerPersonalAchievementsUncheckedUpdateManyWithoutAchievementInput>
  }

  export type PlayersCreateWithoutPlayer_infoInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutPlayer_infoInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutPlayer_infoInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutPlayer_infoInput, PlayersUncheckedCreateWithoutPlayer_infoInput>
  }

  export type PlayersUpsertWithoutPlayer_infoInput = {
    update: XOR<PlayersUpdateWithoutPlayer_infoInput, PlayersUncheckedUpdateWithoutPlayer_infoInput>
    create: XOR<PlayersCreateWithoutPlayer_infoInput, PlayersUncheckedCreateWithoutPlayer_infoInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutPlayer_infoInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutPlayer_infoInput, PlayersUncheckedUpdateWithoutPlayer_infoInput>
  }

  export type PlayersUpdateWithoutPlayer_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutPlayer_infoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersCreateWithoutPlayer_ratingInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutPlayer_ratingInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutPlayer_ratingInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutPlayer_ratingInput, PlayersUncheckedCreateWithoutPlayer_ratingInput>
  }

  export type PlayersUpsertWithoutPlayer_ratingInput = {
    update: XOR<PlayersUpdateWithoutPlayer_ratingInput, PlayersUncheckedUpdateWithoutPlayer_ratingInput>
    create: XOR<PlayersCreateWithoutPlayer_ratingInput, PlayersUncheckedCreateWithoutPlayer_ratingInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutPlayer_ratingInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutPlayer_ratingInput, PlayersUncheckedUpdateWithoutPlayer_ratingInput>
  }

  export type PlayersUpdateWithoutPlayer_ratingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutPlayer_ratingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersCreateWithoutPlayer_statsInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutPlayer_statsInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutPlayer_statsInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutPlayer_statsInput, PlayersUncheckedCreateWithoutPlayer_statsInput>
  }

  export type PlayersUpsertWithoutPlayer_statsInput = {
    update: XOR<PlayersUpdateWithoutPlayer_statsInput, PlayersUncheckedUpdateWithoutPlayer_statsInput>
    create: XOR<PlayersCreateWithoutPlayer_statsInput, PlayersUncheckedCreateWithoutPlayer_statsInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutPlayer_statsInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutPlayer_statsInput, PlayersUncheckedUpdateWithoutPlayer_statsInput>
  }

  export type PlayersUpdateWithoutPlayer_statsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutPlayer_statsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersCreateWithoutPlayer_team_achievementInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutPlayer_team_achievementInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutPlayer_team_achievementInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutPlayer_team_achievementInput, PlayersUncheckedCreateWithoutPlayer_team_achievementInput>
  }

  export type LeaguesCreateWithoutLeague_achievementInput = {
    id: string
    name: string
  }

  export type LeaguesUncheckedCreateWithoutLeague_achievementInput = {
    id: string
    name: string
  }

  export type LeaguesCreateOrConnectWithoutLeague_achievementInput = {
    where: LeaguesWhereUniqueInput
    create: XOR<LeaguesCreateWithoutLeague_achievementInput, LeaguesUncheckedCreateWithoutLeague_achievementInput>
  }

  export type TeamsCreateWithoutLeague_achievementInput = {
    id: string
    name: string
    employee?: EmployeeCreateNestedManyWithoutTeamInput
    chairman?: ChairmanCreateNestedOneWithoutTeamInput
    player?: PlayersCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutLeague_achievementInput = {
    id: string
    name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutTeamInput
    chairman?: ChairmanUncheckedCreateNestedOneWithoutTeamInput
    player?: PlayersUncheckedCreateNestedManyWithoutTeamInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutLeague_achievementInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutLeague_achievementInput, TeamsUncheckedCreateWithoutLeague_achievementInput>
  }

  export type PlayersUpsertWithoutPlayer_team_achievementInput = {
    update: XOR<PlayersUpdateWithoutPlayer_team_achievementInput, PlayersUncheckedUpdateWithoutPlayer_team_achievementInput>
    create: XOR<PlayersCreateWithoutPlayer_team_achievementInput, PlayersUncheckedCreateWithoutPlayer_team_achievementInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutPlayer_team_achievementInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutPlayer_team_achievementInput, PlayersUncheckedUpdateWithoutPlayer_team_achievementInput>
  }

  export type PlayersUpdateWithoutPlayer_team_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutPlayer_team_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type LeaguesUpsertWithoutLeague_achievementInput = {
    update: XOR<LeaguesUpdateWithoutLeague_achievementInput, LeaguesUncheckedUpdateWithoutLeague_achievementInput>
    create: XOR<LeaguesCreateWithoutLeague_achievementInput, LeaguesUncheckedCreateWithoutLeague_achievementInput>
    where?: LeaguesWhereInput
  }

  export type LeaguesUpdateToOneWithWhereWithoutLeague_achievementInput = {
    where?: LeaguesWhereInput
    data: XOR<LeaguesUpdateWithoutLeague_achievementInput, LeaguesUncheckedUpdateWithoutLeague_achievementInput>
  }

  export type LeaguesUpdateWithoutLeague_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeaguesUncheckedUpdateWithoutLeague_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsUpsertWithoutLeague_achievementInput = {
    update: XOR<TeamsUpdateWithoutLeague_achievementInput, TeamsUncheckedUpdateWithoutLeague_achievementInput>
    create: XOR<TeamsCreateWithoutLeague_achievementInput, TeamsUncheckedCreateWithoutLeague_achievementInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutLeague_achievementInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutLeague_achievementInput, TeamsUncheckedUpdateWithoutLeague_achievementInput>
  }

  export type TeamsUpdateWithoutLeague_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUpdateOneWithoutTeamNestedInput
    player?: PlayersUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutLeague_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUncheckedUpdateOneWithoutTeamNestedInput
    player?: PlayersUncheckedUpdateManyWithoutTeamNestedInput
    personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayersCreateWithoutPlayer_personal_achievementInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutPlayer_personal_achievementInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutPlayer_personal_achievementInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutPlayer_personal_achievementInput, PlayersUncheckedCreateWithoutPlayer_personal_achievementInput>
  }

  export type PersonalAchievementsCreateWithoutPersonal_achievementInput = {
    id: string
    name: string
  }

  export type PersonalAchievementsUncheckedCreateWithoutPersonal_achievementInput = {
    id: string
    name: string
  }

  export type PersonalAchievementsCreateOrConnectWithoutPersonal_achievementInput = {
    where: PersonalAchievementsWhereUniqueInput
    create: XOR<PersonalAchievementsCreateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedCreateWithoutPersonal_achievementInput>
  }

  export type TeamsCreateWithoutPersonal_achievementInput = {
    id: string
    name: string
    employee?: EmployeeCreateNestedManyWithoutTeamInput
    chairman?: ChairmanCreateNestedOneWithoutTeamInput
    player?: PlayersCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutPersonal_achievementInput = {
    id: string
    name: string
    employee?: EmployeeUncheckedCreateNestedManyWithoutTeamInput
    chairman?: ChairmanUncheckedCreateNestedOneWithoutTeamInput
    player?: PlayersUncheckedCreateNestedManyWithoutTeamInput
    league_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutPersonal_achievementInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutPersonal_achievementInput, TeamsUncheckedCreateWithoutPersonal_achievementInput>
  }

  export type PlayersUpsertWithoutPlayer_personal_achievementInput = {
    update: XOR<PlayersUpdateWithoutPlayer_personal_achievementInput, PlayersUncheckedUpdateWithoutPlayer_personal_achievementInput>
    create: XOR<PlayersCreateWithoutPlayer_personal_achievementInput, PlayersUncheckedCreateWithoutPlayer_personal_achievementInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutPlayer_personal_achievementInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutPlayer_personal_achievementInput, PlayersUncheckedUpdateWithoutPlayer_personal_achievementInput>
  }

  export type PlayersUpdateWithoutPlayer_personal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutPlayer_personal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PersonalAchievementsUpsertWithoutPersonal_achievementInput = {
    update: XOR<PersonalAchievementsUpdateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedUpdateWithoutPersonal_achievementInput>
    create: XOR<PersonalAchievementsCreateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedCreateWithoutPersonal_achievementInput>
    where?: PersonalAchievementsWhereInput
  }

  export type PersonalAchievementsUpdateToOneWithWhereWithoutPersonal_achievementInput = {
    where?: PersonalAchievementsWhereInput
    data: XOR<PersonalAchievementsUpdateWithoutPersonal_achievementInput, PersonalAchievementsUncheckedUpdateWithoutPersonal_achievementInput>
  }

  export type PersonalAchievementsUpdateWithoutPersonal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalAchievementsUncheckedUpdateWithoutPersonal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamsUpsertWithoutPersonal_achievementInput = {
    update: XOR<TeamsUpdateWithoutPersonal_achievementInput, TeamsUncheckedUpdateWithoutPersonal_achievementInput>
    create: XOR<TeamsCreateWithoutPersonal_achievementInput, TeamsUncheckedCreateWithoutPersonal_achievementInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutPersonal_achievementInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutPersonal_achievementInput, TeamsUncheckedUpdateWithoutPersonal_achievementInput>
  }

  export type TeamsUpdateWithoutPersonal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUpdateOneWithoutTeamNestedInput
    player?: PlayersUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutPersonal_achievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateManyWithoutTeamNestedInput
    chairman?: ChairmanUncheckedUpdateOneWithoutTeamNestedInput
    player?: PlayersUncheckedUpdateManyWithoutTeamNestedInput
    league_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayersCreateWithoutThoughtsAuthoredInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsReceived?: PlayerTeammateThoughtsCreateNestedManyWithoutReceiverInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutThoughtsAuthoredInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type PlayersCreateOrConnectWithoutThoughtsAuthoredInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutThoughtsAuthoredInput, PlayersUncheckedCreateWithoutThoughtsAuthoredInput>
  }

  export type PlayersCreateWithoutThoughtsReceivedInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
    player_info?: PlayerInfoCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsCreateNestedManyWithoutAuthorInput
    team: TeamsCreateNestedOneWithoutPlayerInput
  }

  export type PlayersUncheckedCreateWithoutThoughtsReceivedInput = {
    id: string
    name: string
    age: number
    position: string
    team_id: string
    shirt_no: number
    player_info?: PlayerInfoUncheckedCreateNestedOneWithoutPlayerInput
    player_rating?: PlayerRatingsUncheckedCreateNestedOneWithoutPlayerInput
    player_stats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedCreateNestedManyWithoutPlayerInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PlayersCreateOrConnectWithoutThoughtsReceivedInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutThoughtsReceivedInput, PlayersUncheckedCreateWithoutThoughtsReceivedInput>
  }

  export type PlayersUpsertWithoutThoughtsAuthoredInput = {
    update: XOR<PlayersUpdateWithoutThoughtsAuthoredInput, PlayersUncheckedUpdateWithoutThoughtsAuthoredInput>
    create: XOR<PlayersCreateWithoutThoughtsAuthoredInput, PlayersUncheckedCreateWithoutThoughtsAuthoredInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutThoughtsAuthoredInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutThoughtsAuthoredInput, PlayersUncheckedUpdateWithoutThoughtsAuthoredInput>
  }

  export type PlayersUpdateWithoutThoughtsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutThoughtsAuthoredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersUpsertWithoutThoughtsReceivedInput = {
    update: XOR<PlayersUpdateWithoutThoughtsReceivedInput, PlayersUncheckedUpdateWithoutThoughtsReceivedInput>
    create: XOR<PlayersCreateWithoutThoughtsReceivedInput, PlayersUncheckedCreateWithoutThoughtsReceivedInput>
    where?: PlayersWhereInput
  }

  export type PlayersUpdateToOneWithWhereWithoutThoughtsReceivedInput = {
    where?: PlayersWhereInput
    data: XOR<PlayersUpdateWithoutThoughtsReceivedInput, PlayersUncheckedUpdateWithoutThoughtsReceivedInput>
  }

  export type PlayersUpdateWithoutThoughtsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    team?: TeamsUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayersUncheckedUpdateWithoutThoughtsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EmployeeCreateManyTeamInput = {
    id?: number
    name: string
    age: number
    position: string
  }

  export type PlayersCreateManyTeamInput = {
    id: string
    name: string
    age: number
    position: string
    shirt_no: number
  }

  export type PlayerTeamAchievementsCreateManyTeamInput = {
    id: number
    player_id: string
    place: string
    league_id: string
    year: number
  }

  export type PlayerPersonalAchievementsCreateManyTeamInput = {
    player_id: string
    achievement_id: string
    league: string
    year: number
  }

  export type EmployeeUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
  }

  export type PlayersUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
    player_info?: PlayerInfoUncheckedUpdateOneWithoutPlayerNestedInput
    player_rating?: PlayerRatingsUncheckedUpdateOneWithoutPlayerNestedInput
    player_stats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    player_team_achievement?: PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    player_personal_achievement?: PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerNestedInput
    thoughtsAuthored?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorNestedInput
    thoughtsReceived?: PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type PlayersUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    shirt_no?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_team_achievementNestedInput
    league?: LeaguesUpdateOneRequiredWithoutLeague_achievementNestedInput
  }

  export type PlayerTeamAchievementsUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUpdateWithoutTeamInput = {
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_personal_achievementNestedInput
    achievement?: PersonalAchievementsUpdateOneRequiredWithoutPersonal_achievementNestedInput
  }

  export type PlayerPersonalAchievementsUncheckedUpdateWithoutTeamInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutTeamInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsCreateManyPlayerInput = {
    id: number
    place: string
    league_id: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsCreateManyPlayerInput = {
    achievement_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerTeammateThoughtsCreateManyAuthorInput = {
    id?: number
    thoughts: string
    sent_to: string
  }

  export type PlayerTeammateThoughtsCreateManyReceiverInput = {
    id?: number
    player_id: string
    thoughts: string
  }

  export type PlayerTeamAchievementsUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    league?: LeaguesUpdateOneRequiredWithoutLeague_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutLeague_achievementNestedInput
  }

  export type PlayerTeamAchievementsUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    league_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUpdateWithoutPlayerInput = {
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    achievement?: PersonalAchievementsUpdateOneRequiredWithoutPersonal_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutPersonal_achievementNestedInput
  }

  export type PlayerPersonalAchievementsUncheckedUpdateWithoutPlayerInput = {
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutPlayerInput = {
    achievement_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeammateThoughtsUpdateWithoutAuthorInput = {
    thoughts?: StringFieldUpdateOperationsInput | string
    receiver?: PlayersUpdateOneRequiredWithoutThoughtsReceivedNestedInput
  }

  export type PlayerTeammateThoughtsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    thoughts?: StringFieldUpdateOperationsInput | string
    sent_to?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeammateThoughtsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    thoughts?: StringFieldUpdateOperationsInput | string
    sent_to?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeammateThoughtsUpdateWithoutReceiverInput = {
    thoughts?: StringFieldUpdateOperationsInput | string
    author?: PlayersUpdateOneRequiredWithoutThoughtsAuthoredNestedInput
  }

  export type PlayerTeammateThoughtsUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    thoughts?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeammateThoughtsUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    thoughts?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeamAchievementsCreateManyLeagueInput = {
    id: number
    player_id: string
    place: string
    team_id: string
    year: number
  }

  export type PlayerTeamAchievementsUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    place?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_team_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutLeague_achievementNestedInput
  }

  export type PlayerTeamAchievementsUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerTeamAchievementsUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_id?: StringFieldUpdateOperationsInput | string
    place?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsCreateManyAchievementInput = {
    player_id: string
    league: string
    team_id: string
    year: number
  }

  export type PlayerPersonalAchievementsUpdateWithoutAchievementInput = {
    league?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    player?: PlayersUpdateOneRequiredWithoutPlayer_personal_achievementNestedInput
    team?: TeamsUpdateOneRequiredWithoutPersonal_achievementNestedInput
  }

  export type PlayerPersonalAchievementsUncheckedUpdateWithoutAchievementInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerPersonalAchievementsUncheckedUpdateManyWithoutAchievementInput = {
    player_id?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}