import { Module } from '@nestjs/common';
import { BoardModule } from './boards/boards.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupModule } from './groups/groups.module';
import { TasksModule } from './usertasks/usertasks.module';
import { RequestSafetyPipe } from './pipes/request-safety.pipe';

@Module({
  imports: [
    BoardModule,GroupModule,TasksModule,
    MongooseModule.forRoot('mongodb+srv://Motolani:1234@cluster0.br1bq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
          onConnectionCreate:(connection:Connection)=>{
              connection.on('connected',()=>console.log('Database connection successful'))
              connection.on('error',()=>console.log('Database connection error'))
              connection.on('disconnected',()=>console.log("Database disconnected"))
          }
        }
      )
  ],
  controllers: [AppController],
  providers: [AppService,RequestSafetyPipe],
})
export class AppModule {}
