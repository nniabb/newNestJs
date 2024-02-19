import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs'; 

@Injectable()
export class ExpenseGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>()
        const isAdmin = request.headers['isAdmin']

        if(isAdmin === 'true'){
            return true
        } else {
            return false
        }
    }
}


@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const apiKey = request.headers['api_key'];

        if (apiKey === '123') {
            return true
        } else {
            return false
        }
    }
}
