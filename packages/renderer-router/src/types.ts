import type {
  RouteRecord as RouterRecordSpec,
  RouteLocation,
  PlainObject,
  RawRouteLocation,
} from '@alilc/lowcode-renderer-core';
import type { PathParserOptions } from './utils/path-parser';

export interface RouteRecord extends RouterRecordSpec, PathParserOptions {
  meta?: PlainObject;
  redirect?:
    | string
    | RawRouteLocation
    | ((to: RouteLocationNormalized) => string | RawRouteLocation);
  children?: RouteRecord[];
}

export interface RouteLocationNormalized extends RouteLocation {
  matched: RouteRecord[];
}