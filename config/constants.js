const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SE: 503,
}

const MIN_AGE = 16;
const MAX_AGE = 69;

const Role = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
}

const LIMIT_JSON = 5000;

const CLOUD_FOLDER_AVATARS = 'Node_hw';

module.exports = {HttpCode, MIN_AGE, MAX_AGE, Role, LIMIT_JSON, CLOUD_FOLDER_AVATARS};