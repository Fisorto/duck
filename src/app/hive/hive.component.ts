import { Component } from "@angular/core"

@Component({
    selector: 'app-hive',
    templateUrl:'./hive.component.html',
    styleUrls:['./hive.component.scss']

})

export class HiveComponent {
    openHive:string="unlock"
    pushButton:string="dontPush"
    statusButton:string="Open"
    pushButtonSec:string="push"

    changePosition() {
        this.openHive = "lock"
        this.pushButton = "dontPushSec"
        this.statusButton="Close"
        this.pushButtonSec="pushSec"
    }

    changePositionSec() {
        this.openHive="unlock"
        this.pushButton="dontPush"
        this.statusButton="Open"
        this.pushButtonSec="push"

    }
 

}