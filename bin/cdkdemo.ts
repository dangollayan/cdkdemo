#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkdemoStack } from '../lib/cdkdemo-stack';

const app = new cdk.App();
new CdkdemoStack(app, 'CdkdemoStack', {
  env: { account: '971424090493', region: 'ap-southeast-2'}
});