import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager , JhiLanguageService  } from 'ng-jhipster';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    selector: 'jhi-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy {

    hero: Hero;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private jhiLanguageService: JhiLanguageService,
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['hero']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInHeroes();
    }

    load(id) {
        this.heroService.find(id).subscribe((hero) => {
            this.hero = hero;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInHeroes() {
        this.eventSubscriber = this.eventManager.subscribe('heroListModification', (response) => this.load(this.hero.id));
    }
}
