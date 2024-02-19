import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.module';
import { LogMiddleware } from './expense/log.middleware';


@Module({
  imports: [ExpenseModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes({path: "*", method: RequestMethod.ALL})
  }
}
