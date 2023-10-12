import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'adoptapp',
      database: 'integration-db',
      entities: [__dirname + '**/**/**.entity{.ts,.js}'],
      synchronize: true
    }) , StaffModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
