import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { CommentComponent } from './comment/comment.component';

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'demo-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  customersData: any;

  shippersData: any;
  value: any;
  dataSource: any;
  TooltipTarget: any;
  ToolTipText: string = '';
  TooltipShow: boolean = false;
  url: string;
  items: any;


  masterDetailDataSource: any;
  customizeTooltip = (pointsInfo: any) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  constructor(public matDialog: MatDialog) {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

    this.dataSource = AspNetData.createStore({
      key: 'OrderID',
      loadUrl: `${this.url}/Orders`,
      insertUrl: `${this.url}/InsertOrder`,
      updateUrl: `${this.url}/UpdateOrder`,
      deleteUrl: `${this.url}/DeleteOrder`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.customersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: `${this.url}/CustomersLookup`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.shippersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: `${this.url}/ShippersLookup`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
  addMenuItems(e: any) {
    if (e.target === 'content') {
      if (!e.items) e.items = [];
      e.items.push({
        text: 'Comment',
        onItemClick: () => {
          this.matDialog.open(CommentComponent,{disableClose:false,hasBackdrop: true});
        },
      },
      {
        text: 'Edit',
        onItemClick: () => {
          this.matDialog.open(CommentComponent,{disableClose:false,hasBackdrop: true});
        },
      });
    }
  }
  // abc(event: any) {
  //   console.log(event.displayValue)
  //   console.log(event.rowType)
  //   if (event.rowType == "data" && event.column.dataField == "Freight") {
  //     this.TooltipTarget = event.cellElement;
  //     if (event.eventType === 'mouseover') {
  //       this.TooltipShow = true;
  //       console.log("ZZZZZZZZZZZZZZZ")
  //       this.ToolTipText = event.data.Tooltip;
  //       // const openDialog = this.matDialog.open(CommentComponent,{disableClose:false,hasBackdrop: true});
  //     }
  //   }
  //   if (event.rowType == "data" && event.column.dataField == "CustomerID") {
  //     this.TooltipTarget = event.cellElement;
  //     if (event.eventType === 'mouseover') {
  //       this.TooltipShow = true;
  //       console.log("ZZZZZZZZZZZZZZZ")
  //       this.ToolTipText = event.data.Tooltip;
  //       // const openDialog = this.matDialog.open(CommentComponent, { disableClose: false, hasBackdrop: true });
  //     }
  //   }
  // }
}
