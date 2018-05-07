import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  template: `
  <div class="back">
  <app-nav></app-nav>
    <pdf-viewer [src]="pdfSrc"
      [render-text] = "true"
      [page] ="page"
      [show-all] ="true"
      style="display:block;">
      </pdf-viewer>
  </div>
  `,
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {

  page:number=1;
  pdfSrc:string ='';
  constructor() { }

  ngOnInit() {
    this.pdfSrc = this.getPDF();
  }

  getPDF():string{
    return '/assets/resume.pdf';
  }

}
