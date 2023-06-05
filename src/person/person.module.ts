import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  controllers: [PersonController],
  providers: [
    {
      provide: 'person',
      // useClass: PersonService,
      useValue: {
        name: 'Barret',
      },
    },
  ],
})
export class PersonModule {}
