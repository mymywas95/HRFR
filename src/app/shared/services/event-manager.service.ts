import {Injectable} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import { share } from 'rxjs/operators';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventManagerService {
    observable: Observable<any>;
    observer: Observer<any>;

    constructor() {
        const temp = Observable.create((observer: Observer<any>) => {
            this.observer = observer;
        });
        this.observable = temp.pipe(share());
    }

    /**
     * Function to broadcast the event to observer
     */
    broadcast(event) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    }

    /**
     * Function to subscribe to an event with callback
     */
    subscribe(eventName, callback) {
        return this.observable.pipe(
            filter(event => {
                return event.name === eventName;
            })
        ).subscribe(callback);
    }

    /**
     * Function to unsubscribe the subscription
     */
    destroy(subscriber: Subscription) {
        subscriber.unsubscribe();
    }
}
