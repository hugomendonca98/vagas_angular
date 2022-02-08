import { Component, OnInit } from '@angular/core';
import Vaga from '../models/vaga';
import { VagaService } from '../services/vaga.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  vaga = {} as Vaga;
  vagas = [] as Vaga[];

  constructor(private vagaService: VagaService) { }

  ngOnInit(): void {
    this.getVagas();
  }

  getVagas() {
    this.vagaService.getVagas().subscribe((vagas: Vaga[]) => {
      this.vagas = vagas;
    });
  }
}
