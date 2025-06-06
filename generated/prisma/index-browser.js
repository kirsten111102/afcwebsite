
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TeamsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Is_ParticipantScalarFieldEnum = {
  team_id: 'team_id',
  is_participant: 'is_participant'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  age: 'age',
  position: 'position',
  team_id: 'team_id'
};

exports.Prisma.ChairmanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  age: 'age',
  team_id: 'team_id'
};

exports.Prisma.PlayersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  age: 'age',
  position: 'position',
  team_id: 'team_id',
  shirt_no: 'shirt_no'
};

exports.Prisma.LeaguesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PersonalAchievementsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.PlayerInfoScalarFieldEnum = {
  player_id: 'player_id',
  dob: 'dob',
  birthplace: 'birthplace',
  gender: 'gender',
  biography: 'biography',
  height: 'height'
};

exports.Prisma.PlayerRatingsScalarFieldEnum = {
  player_id: 'player_id',
  pace: 'pace',
  shooting: 'shooting',
  passing: 'passing',
  physical: 'physical',
  defending: 'defending',
  dribbling: 'dribbling'
};

exports.Prisma.PlayerStatsScalarFieldEnum = {
  id: 'id',
  player_id: 'player_id',
  matches: 'matches',
  goals: 'goals',
  assists: 'assists',
  yellow_cards: 'yellow_cards',
  red_cards: 'red_cards',
  league_id: 'league_id',
  team_id: 'team_id',
  year: 'year'
};

exports.Prisma.PlayerTeamAchievementsScalarFieldEnum = {
  id: 'id',
  player_id: 'player_id',
  place: 'place',
  league_id: 'league_id',
  team_id: 'team_id',
  time: 'time'
};

exports.Prisma.PlayerPersonalAchievementsScalarFieldEnum = {
  id: 'id',
  player_id: 'player_id',
  achievement_id: 'achievement_id',
  league_id: 'league_id',
  team_id: 'team_id',
  time: 'time'
};

exports.Prisma.PlayerTeammateThoughtsScalarFieldEnum = {
  id: 'id',
  player_id: 'player_id',
  thoughts: 'thoughts',
  sent_to: 'sent_to'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Teams: 'Teams',
  Is_Participant: 'Is_Participant',
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
