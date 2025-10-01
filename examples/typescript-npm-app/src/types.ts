/**
 * Type definitions for the TypeScript NPM app
 */

export interface WelcomeResponse {
  message: string;
  packageManager: string;
  typescript: boolean;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
  nodeVersion: string;
  platform: NodeJS.Platform;
  arch: string;
}

export interface TypeScriptInfo {
  version: string;
  strictMode: boolean;
}

export interface NodeInfo {
  version: string;
  platform: NodeJS.Platform;
  arch: string;
}

export interface PackageManagerInfo {
  name: string;
  description: string;
  features: string[];
}

export interface AppInfo {
  name: string;
  description: string;
  version: string;
  typescript: TypeScriptInfo;
  node: NodeInfo;
  packageManager: PackageManagerInfo;
}