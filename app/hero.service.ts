import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService{

    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then((resp) => {
                //console.log('resp: ' + JSON.stringify(resp));
                return resp.json().data as Hero[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', JSON.stringify(error));
        return Promise.reject(error.message || error); 
    }

    /*getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }*/

    getHero(id: number): Promise<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                //console.log(JSON.stringify(response.json().data));
                return response.json().data as Hero;
            })
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}