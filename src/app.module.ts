import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArrondissementModule } from './arrondissement/arrondissement.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ArrondissementModule,
    MongooseModule.forRoot(
      'mongodb+srv://masterp6:macaron2022@cluster0.ck76z.mongodb.net/mapData?retryWrites=true&w=majority',
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
