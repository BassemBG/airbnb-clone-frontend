import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  INIT_STATE = "INIT";

  private send$ : BehaviorSubject<Message> = new BehaviorSubject<Message>({summary: this.INIT_STATE});
  sendSub : Observable<Message> = this.send$.asObservable();

  public send(message: Message) {
    this.send$.next(message);
  }

}
