import type { ConfigurationOptions } from 'aws-sdk/global';

export const s3StorageConfig: ConfigurationOptions = {
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
};
