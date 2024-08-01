import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ConfigModule } from '@nestjs/config';
import { WixClient } from 'src/clients/wix/wix.client';
import wixConfig from 'src/clients/wix/wix.config';

@Module({
  imports: [ConfigModule.forFeature(wixConfig)],
  controllers: [ProductController],
  providers: [ProductService, WixClient],
})
export class ProductModule {}
