import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { ChartOptions, ChartType, ChartDataSets, Tooltip, ChartTooltipOptions } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token: string;
  topArtist: Subscription;

  // artistData = [
  //   { total: 62, artist: "Kanye West" },
  //   { total: 42, artist: "BONES" },
  //   { total: 42, artist: "Kendrick Lamar" },
  //   { total: 29, artist: "A$AP Rocky" },
  //   { total: 21, artist: "Night Lovell" },
  //   { total: 18, artist: "Kid Cudi" },

  // ]




  //=============================================
  //                   BAR CHART
  //=============================================

  // artistNames = this.artistData.map(el => el.artist)
  // dataArtist = this.artistData.map(el => el.total)

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   tooltips: {
  //     callbacks: {
  //       label: (tooltipItem, data) => {


  //         return tooltipItem.xLabel = this.artistData[tooltipItem.index].artist


  //       }
  //     }
  //   }
  // };
  // public barChartLabels: Label[] = this.artistNames;
  // public barChartType: ChartType = 'doughnut';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: this.dataArtist, label: 'Series A' },
  //   // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];


  //=============================================
  //                   SCCATTER CHART
  //=============================================

  // scatter



  // public scatterChartOptions: ChartOptions = {
  //   responsive: true,
  // };

  // public scatterChartData: ChartDataSets[] = [
  //   {
  //     data: [
  //       { x: 62, y: 2015 },
  //       { x: 42, y: 2019 },
  //       { x: 21, y: 2020 },
  //       { x: 29, y: 2013 },

  //     ],
  //     label: 'Series A',
  //     pointRadius: 10,
  //   },
  // ];
  // public scatterChartType: ChartType = 'scatter';




  //=============================================
  //                   DOUGHNUT CHART
  //=============================================
  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public dougnutChartOptions = {
    tooltips: {
      enabled: true
    },
    title: {
      display: true,
      text: 'Most Songs By an Artist'
    },
    legend: {
      display: false
    }

  }

  ngOnInit() {

    this.userService.getSavedUser();


    // TOP ARTIST
    this.userService.topArtist.subscribe((data: { artist: string, total: number }[]) => {

      let artist = data.splice(0, 10);
      let artistNames = artist.map(el => el.artist)
      let dataArtist = artist.map(el => el.total)
      this.doughnutChartLabels = artistNames
      this.doughnutChartData = [dataArtist]
      console.log('emiited', this.doughnutChartData)


    });// end of dougnut char data

  }//end of oninit

  constructor(
    private userService: GetUserService,

  ) { }


}
