import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ManualMovementInput } from 'src/app/interfaces/manualmovementinput.interface';
import { ProductCosifOutput } from 'src/app/interfaces/productcosifoutput.interface';
import { ProductOutput } from 'src/app/interfaces/productoutput.interface';
import { ProductCosifService } from 'src/app/services/product-cosif.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manual-movement-input-form',
  templateUrl: './manual-movement-input-form.component.html',
  styleUrls: ['./manual-movement-input-form.component.css']
})
export class ManualMovementInputFormComponent implements OnInit {

  fieldsEnablementState=true;

  valorCampoMes:string = "";
  valorCampoAno:string = "";
  valorCampoProduto:string = "";
  valorCampoCosif:string = "";
  valorCampoValor:string = "";
  valorCampoDescricao:string = "";

  productOutputList: ProductOutput[] = [];
  productCosifOutputList: ProductCosifOutput[] = [];

  @Output() manualMovementAdded = new EventEmitter(); 

  constructor(private productService:ProductService, private productCosifService:ProductCosifService) {
  }

  ngOnInit(): void {
    this.fieldsEnablementState=true;
    this.clearFormFields();
    this.listProducts();
  }

  getFieldsEnablementState()
  {
    this.fieldsEnablementState;
  }

  enableScreenFields()
  {
    this.fieldsEnablementState=false;
  }

  disableScreenFields()
  {
    this.fieldsEnablementState=true;
  }

  addManualMovement()
  {
    console.log("Valor do campo mes:" + this.valorCampoMes);
    console.log("Valor do campo ano:" + this.valorCampoAno);
    console.log("Valor do campo Produto:" + this.valorCampoProduto); 
    console.log("Valor do campo Cosif:" + this.valorCampoCosif); 
    console.log("Valor do campo Valor:" + this.valorCampoValor);           
    console.log("Valor do campo Descricao:" + this.valorCampoDescricao);    

    var manualMovementInput:ManualMovementInput = {
      monthOfYear: Number(this.valorCampoMes),
      year: Number(this.valorCampoAno),
      cosifCode: this.valorCampoCosif,
      productCode: this.valorCampoProduto,
      value: Number(this.valorCampoValor),
      description: this.valorCampoDescricao
    } 

    this.manualMovementAdded.emit(manualMovementInput);

    this.disableScreenFields();
  }

  clearFormFields()
  {
    this.valorCampoMes="";
    this.valorCampoAno="";
    this.valorCampoProduto="";
    this.valorCampoCosif = "";
    this.valorCampoValor="";
    this.valorCampoDescricao="";
    this.productCosifOutputList = [];
  }

  listProducts()
  {
    this.productService.getAll()
    .then(data => {
      this.productOutputList = data;
    })
  }

  listProductCosifByProduct(productCode:string)
  {
    this.productCosifService.getAllByProduct(productCode)
    .then(data => {
      this.productCosifOutputList = data;
      console.log(this.productCosifOutputList);      
    })
  }

  onListProductChange(productSelected:any)
  {
    this.listProductCosifByProduct(productSelected);
  }

  onListProductCosifChange(productCosifSelected:any)
  {
    console.log(productCosifSelected);
  }

}
