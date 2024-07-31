import {version,angularVersion} from './version';

const GATEWAY_BASE_URL='/api/';
const CLIENT_BASE_URL='';
const SESSION_WARN_DISPLAY_TIME=120;
const SESSION_WARN_EXPIRY_TIME=30;

export const environment = {
  production: false,
  version:version,
  angularVersion: angularVersion,
  appName: 'Web App Local',
  gatewayUrl: GATEWAY_BASE_URL,
  clientUrl: CLIENT_BASE_URL,
  sessionWarnDisplay: SESSION_WARN_DISPLAY_TIME,
  sessionWarnExpire: SESSION_WARN_EXPIRY_TIME
};
