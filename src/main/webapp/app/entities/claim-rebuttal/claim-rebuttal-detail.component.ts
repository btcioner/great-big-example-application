import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager , JhiLanguageService  } from 'ng-jhipster';

import { ClaimRebuttal } from './claim-rebuttal.model';
import { ClaimRebuttalService } from './claim-rebuttal.service';

@Component({
    selector: 'jhi-claim-rebuttal-detail',
    templateUrl: './claim-rebuttal-detail.component.html'
})
export class ClaimRebuttalDetailComponent implements OnInit, OnDestroy {

    claimRebuttal: ClaimRebuttal;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private jhiLanguageService: JhiLanguageService,
        private claimRebuttalService: ClaimRebuttalService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['claimRebuttal']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInClaimRebuttals();
    }

    load(id) {
        this.claimRebuttalService.find(id).subscribe((claimRebuttal) => {
            this.claimRebuttal = claimRebuttal;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInClaimRebuttals() {
        this.eventSubscriber = this.eventManager.subscribe('claimRebuttalListModification', (response) => this.load(this.claimRebuttal.id));
    }
}
