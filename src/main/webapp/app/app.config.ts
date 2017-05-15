import { OpaqueToken } from '@angular/core';

export class AppConfig {
  public readonly apiUrl = '/api';
  public readonly API_URL = new OpaqueToken('restful-url');
  public readonly WS_SECURE = false;
  public readonly WS_HOST = 'localhost';
  public readonly WS_PORT = 5552;
};
