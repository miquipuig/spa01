import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-f',
  templateUrl: './heroes-f.component.html'
})
export class HeroesFComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService) {

      this.activatedRoute.params.subscribe( params =>{
        //console.log( params['filtro'] );
        this.heroes = this._heroesService.buscarHeroes(params['filtro']);
      } )

  }

  ngOnInit() {
  }

}
