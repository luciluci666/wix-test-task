import { registerAs } from '@nestjs/config';

export interface WixConfig {
  apiKey: string;
  siteId?: string;
}

export default registerAs(
  'wix',
  (): WixConfig => ({
    apiKey: process.env.WIX_API_KEY,
    siteId: process.env.WIX_SITE_ID,
  }),
);
