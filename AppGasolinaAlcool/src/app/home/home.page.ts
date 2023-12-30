import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public precoAlcool: string = "";
  public precoGasolina: string = "";
  public resultado: string = "Resultado";
  constructor() { }
  public calcular() {
    // Validar se os campos foram preenchidos
    if (this.precoAlcool && this.precoGasolina) {
      let pAlcool = parseFloat(this.precoAlcool);
      let pGasolina = parseFloat(this.precoGasolina);

      let resultado = pAlcool / pGasolina;

      if (resultado >= 0.7) {
        this.resultado = "Melhor utilizar Gasolina";
      } else {
        this.resultado = "Melhor utilizar Álcool";
      }

    } else {
      this.resultado = "Preencha corretamente os campos!";
    }
  }

}
