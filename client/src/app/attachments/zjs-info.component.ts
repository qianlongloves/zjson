import { Component, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { APP_INFO } from '../app.service';

@Component({
  selector: 'zjs-info',
  template: `
    <span class="z-sm-hide" (click)="openModal(infoTpl)">
      <i class="fa fa-info-circle z-op-icon" title="{{'versionInfo' | translate}}"></i>
      <ng-template #infoTpl>
        <div class="modal-header">
          <h4 class="modal-title pull-left">转杰森 | ZJSON</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="z-info-modal modal-body">
          <table>
            <tr>
              <td>{{'version' | translate}}:</td>
              <td>{{version}}</td>
            </tr>
            <tr>
              <td>{{'author' | translate}}:</td>
              <td>@CN-Tower</td>
            </tr>
            <tr>
              <td>{{'email' | translate}}:</td>
              <td>cntower@yahoo.com</td>
            </tr>
            <tr>
              <td>{{'qqGroup' | translate}}:</td>
              <td>174136590</td>
            </tr>
            <tr>
              <td>{{'updateTime' | translate}}:</td>
              <td>{{updateTime}}</td>
            </tr>
          </table>
        </div>
      </ng-template>
    </span>`
})
export class ZjsInfoComponent {
  modalRef: BsModalRef;
  version: string = APP_INFO.version;
  updateTime: string = APP_INFO.updateTime;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
}