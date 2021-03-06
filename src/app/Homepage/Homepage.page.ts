import { Component, ElementRef } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-Homepage',
  templateUrl: 'Homepage.page.html',
  styleUrls: ['Homepage.page.scss']
})
export class HomepagePage {
  scheduled = [];
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private plt: Platform, private localNotifications: LocalNotifications,
    private alertCtrl: AlertController) {
      this.plt.ready().then(() => {
        this.localNotifications.on('trigger').subscribe(res => {
          console.log('trigger: ', res);
          const msg = res.data ? res.data.mydata : '';
          this.showAlert(res.title, res.text, msg);
      });
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        const msg = res.data ? res.data.mydata : '';
          this.showAlert(res.title, res.text, msg);
      });
    });
  }

  ionViewDidEnter() {
    this.loadmap();
  }


  loadmap() {
    this.map = leaflet.map('map').fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // tslint:disable-next-line:max-line-length
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      const markerGroup = leaflet.featureGroup();
      const marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('You are here!');
      });
      const meantime: any = leaflet.marker([35.911438, -79.051210]).on('click', () => {
        alert('Here is Meantime Coffee!');
      });
      markerGroup.addLayer(marker);
      markerGroup.addLayer(meantime);
      this.map.addLayer(markerGroup);

      // leaflet routing
      const L: any = require('leaflet');
      require('lrm-graphhopper');
      L.Routing.control({
        router: new L.Routing.GraphHopper('f62129dd-219a-41ab-a8c1-14d8fbfd844b', {
          urlParameters: {
            vehicle: 'foot'
          }
        }),
        distance: {
          styles: [{color: 'white', opacity: 1, weight: 5}]
       },
      waypoints: [
        L.latLng(e.latitude, e.longitude),
        L.latLng(35.911438, -79.051210)
      ],
      routeWhileDragging: true
    }).addTo(this.map);

    /* let styleEditor = L.control.styleEditor({
      position: 'topleft',
      colorRamp: ['#1abc9c', '#2ecc71', '#3498db'],
      markers: ['circle-stroked', 'circle', 'square-stroked', 'square']
  });
  this.map.addControl(styleEditor)  */

      }).on('locationerror', (err) => {
        alert(err.message);
    });
  }


  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Mattheus Notification',
      data: {mydata: 'Hidden Message here'},
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND }
    });
  }
  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }
}
