import {html, LitElement, customElement} from 'lit-element';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-ajax/iron-ajax'
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-text-field/vaadin-email-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';

@customElement('charts-view')
export class ChartsView extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  render() {
    return html`
      <style>
        section {
          width: 600px;
        }
      </style>

      <main class="grid gap-xl items-start justify-center max-w-screen-lg mx-auto pb-l px-l">    
        <h2>Vaadin Charts</h2>
        <section>
          <h3>Area chart</h3>
          <vaadin-chart type="area" title="Historic and Estimated Worldwide Population Growth by Region" subtitle="Source: Wikipedia.org" categories="[1750, 1800, 1850, 1900, 1950, 1999, 2050]" stacking="normal" no-legend tooltip>
            <vaadin-chart-series title="Asia" values="[502, 635, 809, 947, 1402, 3634, 5268]" unit="Millions">
            </vaadin-chart-series>
            <vaadin-chart-series title="Africa" values="[106, 107, 111, 133, 221, 767, 1766]" unit="Millions">
            </vaadin-chart-series>
            <vaadin-chart-series title="Europe" values="[163, 203, 276, 408, 547, 729, 628]" unit="Millions">
            </vaadin-chart-series>
            <vaadin-chart-series title="America" values="[18, 31, 54, 156, 339, 818, 1201]" unit="Millions">
            </vaadin-chart-series>
            <vaadin-chart-series title="Oceania" values="[2, 2, 2, 6, 13, 30, 46]" unit="Millions">
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Area Range</h3>
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart type="arearange" title="Temperature variation by day" additional-options='{
                "chart": {
                  "zoomType": "x"
                },
                "xAxis": {
                  "type": "datetime"
                },
                "tooltip": {
                  "crosshairs": true,
                  "shared": true,
                  "valueSuffix": "°C"
                }
              }'>
                <vaadin-chart-series title="Temperatures" values="[[data]]">
                </vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/temperature-date-min-max.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Area Spline</h3>
          <vaadin-chart type="areaspline" title="Average fruit consumption during one week" categories='["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]' additional-options='{
            "legend": {
              "layout": "vertical",
              "align": "left",
              "verticalAlign": "top",
              "x": 150,
              "y": 100,
              "floating": true
            },
            "xAxis": {
              "plotBands": [{
                "from": 4.5,
                "to": 6.5
              }]
            },
            "tooltip": {
              "shared": true,
              "valueSuffix": " units"
            }
          }'>
            <vaadin-chart-series title="John" values="[3, 4, 3, 5, 4, 10, 12]" unit="Fruit units">
            </vaadin-chart-series>
            <vaadin-chart-series title="Jane" values="[1, 3, 4, 3, 3, 5, 4]" unit="Fruit units">
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Area Split Range</h3>
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart type="areasplinerange" title="Temperature variation by day" timeline tooltip additional-options='{
                "tooltip": {
                  "valueSuffix": "°C"
                }
              }'>
                <vaadin-chart-series title="Temperatures" values="[[data]]"></vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/temperature-date-min-max.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Bar</h3>
          <vaadin-chart type="bar" title="Historic World Population by Region" subtitle='Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>' categories='["Africa", "America", "Asia", "Europe", "Oceania"]' additional-options='{
            "yAxis": {
              "min": 0,
              "title": {
                "text": "Population (millions)",
                "align": "high"
              }
            },
            "tooltip": {
              "valueSuffix": " millions"
            },
            "plotOptions": {
              "bar": {
                "dataLabels": {
                  "enabled": true
                }
              }
            }
          }'>
            <vaadin-chart-series title="Year 1800" values="[107, 31, 635, 203, 2]">
            </vaadin-chart-series>
            <vaadin-chart-series title="Year 1900" values="[133, 156, 947, 408, 6]">
            </vaadin-chart-series>
            <vaadin-chart-series title="Year 2000" values="[814, 841, 3714, 727, 31]">
            </vaadin-chart-series>
            <vaadin-chart-series title="Year 2016" values="[1216, 1001, 4436, 738, 40]">
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Box Plot</h3>
          <vaadin-chart type="boxplot" title="Box Plot Example" categories='["1", "2", "3", "4", "5"]' no-legend tooltip additional-options='{
            "xAxis": {
              "title": {
                "text": "Experiment No."
              }
            },
            "yAxis": {
              "title": {
                "text": "Observations"
              },
              "plotLines": [{
                "value": 932,
                "label": {
                  "text": "Theoretical mean: 932",
                  "align": "center"
                }
              }]
            }
          }'>
            <vaadin-chart-series title="Observations" values="[
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
            [714, 762, 817, 870, 918],
            [724, 802, 806, 871, 950],
            [834, 836, 864, 882, 910]
          ]" additional-options='{
            "tooltip": {
              "headerFormat": "<em>Experiment No {point.key}</em><br/>"
            }
          }'>
            </vaadin-chart-series>
            <vaadin-chart-series type="scatter" title="Outlier" values="[[0, 644], [4, 718], [4, 951], [4, 969]]" additional-options='{
            "tooltip": {
              "pointFormat": "Observation: {point.y}"
            }
          }'>
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Bubble</h3>
          <vaadin-chart type="bubble" title="Vaadin Charts Bubbles" tooltip>
            <vaadin-chart-series title="All bubbles shown" values="[[9, 81, 13], [98, 5, 39], [51, 50, 23], [41, 22, -36], [58, 24, -30], [78, 37, -16], [55, 56, 3], [18, 45, 20], [42, 44, -22], [3, 52, 9], [31, 18, 47], [79, 91, 13], [93, 23, -27], [44, 83, -28]]" additional-options='{"maxSize": 120, "minSize": 3}'>
            </vaadin-chart-series>
            <vaadin-chart-series title="Negative bubbles hidden" values="[[13, 30, 10], [23, 20, -10], [23, 40, 10]]" additional-options='{"displayNegative": false}'>
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Bullet</h3>
          <!--dom-module id="bullet-theme" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="steps"]) .highcharts-grid-line {
                  stroke-width: 0;
                }
                :host([theme~="steps"]) .highcharts-plot-band {
                  fill-opacity: 1;
                }
                :host([theme~="steps"]) .highcharts-plot-band.band-0 {
                  fill: var(--lumo-contrast-30pct, hsla(214, 50%, 22%, 0.26));
                }
                :host([theme~="steps"]) .highcharts-plot-band.band-1 {
                  fill: var(--lumo-contrast-20pct, hsla(214, 53%, 23%, 0.16));
                }
                :host([theme~="steps"]) .highcharts-plot-band.band-2 {
                  fill: var(--lumo-contrast-10pct, hsla(214, 57%, 24%, 0.1));
                }
                :host([theme~="steps"]) .highcharts-series-group .highcharts-point:not(.highcharts-bullet-target) {
                  fill: var(--vaadin-charts-color-1, #1676F3);
                  stroke: var(--vaadin-charts-color-1, #1676F3);
                }
              </style>
            </template>
          </dom-module-->
          <!--vaadin-chart type="bullet" theme="steps" title="2017 YTD" style="height: 115px;" categories='["<span class=\\"hc-cat-title\\">Revenue</span><br/>U.S. $ (1,000s)"]' additional-options='{"chart": {
                      "inverted": true,
                      "marginLeft": 135,
                      "marginTop": 40
                  },
                  "yAxis": {
                      "title": {
                          "text": ""
                      },
                      "plotBands":[{
                          "from":0,
                          "to":150,
                          "className": "band-0"
                      },{
                          "from":150,
                          "to":225,
                          "className": "band-1"
                      },{
                          "from":225,
                          "to":9000000000,
                          "className": "band-2"
                      }]
                  },
                  "tooltip": {
                      "pointFormat": "<b>{point.y}</b> (with target at {point.target})"
                  }
              }' no-legend>
            <vaadin-chart-series values='[{"y":275,"target":250}]' additional-options='{
                      "pointPadding": 0.25,
                      "targetOptions": {
                          "width": "200%"
                      }
              }'></vaadin-chart-series>
          </vaadin-chart>

          <vaadin-chart type="bullet" theme="steps" style="height: 85px;" categories='["<span class=\\"hc-cat-title\\">Profit</span><br/>%"]' additional-options='{"chart": {
                      "inverted": true,
                      "marginLeft": 135
                  },
                  "yAxis": {
                      "title": {
                          "text": ""
                      },
                      "plotBands": [{
                          "from":0,
                          "to":20,
                          "className": "band-0"
                      },{
                          "from":20,
                          "to":25,
                          "className": "band-1"
                      },{
                          "from":25,
                          "to":100,
                          "className": "band-2"
                      }],
                      "labels": {
                          "format": "{value}%"
                      }
                  },
                  "tooltip": {
                      "pointFormat": "<b>{point.y}</b> (with target at {point.target})"
                  }
              }' no-legend>
            <vaadin-chart-series values='[{"y":22,"target":27}]' additional-options='{
                      "pointPadding": 0.25,
                      "targetOptions": {
                          "width": "200%"
                      }
                  }'></vaadin-chart-series>
          </vaadin-chart>

          <vaadin-chart type="bullet" theme="steps" style="height: 85px;" categories='["<span class=\\"hc-cat-title\\">New Customers</span><br/>Count"]' additional-options='{"chart": {
                      "inverted": true,
                      "marginLeft": 135
                  },
                  "yAxis": {
                      "title": {
                          "text": ""
                      },
                      "plotBands": [{
                          "from":0,
                          "to":1400,
                          "className": "band-0"
                      },{
                          "from":1400,
                          "to":2000,
                          "className": "band-1"
                      },{
                          "from":2000,
                          "to":9e9,
                          "className": "band-2"
                      }]
                  },
                  "tooltip": {
                      "pointFormat": "<b>{point.y}</b> (with target at {point.target})"
                  }
              }' no-legend>
            <vaadin-chart-series values='[{"y":1650,"target":2100}]' additional-options='{
                      "pointPadding": 0.25,
                      "targetOptions": {
                          "width": "200%"
                      }
                  }'></vaadin-chart-series>
          </vaadin-chart-->
        </section>

        <section>
          <h3>Candlestick</h3>
            <!--dom-bind>
            <template preserve-content>
              <vaadin-chart title="AAPL Stock Price" tooltip timeline additional-options='{
                "rangeSelector": {
                  "selected": 4
                }
              }'>
                <vaadin-chart-series type="candlestick" title="AAPL Stock Price" additional-options='{
                "dataGrouping": {
                  "units": [
                    ["week", [1]],
                    ["month", [1, 2, 3, 4, 6]]
                  ]
                }
              }' values="[[data]]">
                </vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/aapl-date-ohlc.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Column</h3>
          <vaadin-chart type="column" title="Monthly Average Rainfall" subtitle="Source: WorldClimate.com" categories='["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]' additional-options='{
            "xAxis": {
              "crosshair": true
            },
            "yAxis": {
              "min": 0,
              "title": {
                "text": "Rainfall (mm)"
              }
            },
            "tooltip": {
              "shared": true
            }
          }'>
            <vaadin-chart-series title="Tokyo" values="[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]">
            </vaadin-chart-series>
            <vaadin-chart-series title="New York" values="[83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]">
            </vaadin-chart-series>
            <vaadin-chart-series title="London" values="[48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]">
            </vaadin-chart-series>
            <vaadin-chart-series title="Berlin" values="[42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]">
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Column Range</h3>
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart type="columnrange" title="Temperature variation by day" timeline additional-options='{
                "rangeSelector": {
                  "selected": 2
                },
                "tooltip": {
                  "valueSuffix": "°C"
                }
              }'>
                <vaadin-chart-series title="Temperatures" values="[[data]]">
                </vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/temperature-date-min-max.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <vaadin-chart title="Monthly Rainfall" theme="error-bar" categories='["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]' additional-options='{
          "yAxis": {
            "labels": {
              "format": "{value} °C"
            },
            "title": {
              "text": "Temperature"
            }
          },
          "tooltip": {
            "shared": true
          }
        }'>
          <vaadin-chart-series type="column" title="Rainfall" additional-options='{
          "tooltip": {
            "pointFormat": "<span class=\\"rainfallSeriesName\\">{series.name}</span>: <b>{point.y:.1f} mm</b> "
          }
        }' values="[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]">
          </vaadin-chart-series>
          <vaadin-chart-series type="errorbar" title="Rainfall error" additional-options='{
          "tooltip": {
            "pointFormat": "(error range: {point.low}-{point.high} mm)<br/>"
          }
        }' values="[[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]]">
          </vaadin-chart-series>
        </vaadin-chart>

        <vaadin-chart type="areaspline" title="Average fruit consumption during one week" categories='["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]' additional-options='{
          "tooltip": {
            "shared": true,
            "valueSuffix": " units"
          }
        }'>
          <vaadin-chart-series title="John" values="[3, 4, 3, 5, 4, 10, 12]" unit="Fruit units">
          </vaadin-chart-series>
          <vaadin-chart-series title="Jane" values="[1, 3, 4, 3, 3, 5, 4]" unit="Fruit units" additional-options='{"id": "jane"}'>
          </vaadin-chart-series>
          <vaadin-chart-series type="flags" title="Flags on series" additional-options='{
          "onSeries": "jane",
          "shape": "squarepin"
        }' values='[{
          "x": 2,
          "title": "On series"
        }, {
          "x": 5,
          "title": "On series"
        }]'>
          </vaadin-chart-series>
          <vaadin-chart-series type="flags" title="Flags on axis" values='[{
          "x": 3,
          "title": "On axis"
        }]'>
          </vaadin-chart-series>
        </vaadin-chart>

        <section>
          <h3>Funnel</h3>
          <vaadin-chart type="funnel"
                        title="Sales funnel"
                        no-legend
                        tooltip
                        additional-options='{
              "plotOptions": {
                "series": {
                  "dataLabels": {
                    "enabled": true,
                    "format": "&lt;b&gt;{point.name}&lt;/b&gt; ({point.y:,.0f})",
                    "softConnector": true
                  },
                  "center": ["40%", "50%"],
                  "neckWidth": "30%",
                  "neckHeight": "25%",
                  "width": "80%"
                }
              }
            }'>
            <vaadin-chart-series
                title="Unique users"
                values='[
              ["Website visits", 15654],
              ["Downloads", 4064],
              ["Requested price list", 1987],
              ["Invoice sent", 976],
              ["Finalized", 846]
            ]'>
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Gauges</h3>
          <!--dom-module id="speedometer-theme" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="speedometer"]) .highcharts-plot-band.band-0 {
                  stroke: var(--vaadin-charts-color-positive, #15C15D);
                  fill: var(--vaadin-charts-color-positive, #15C15D);
                }

                :host([theme~="speedometer"]) .highcharts-plot-band.band-1 {
                  fill: var(--vaadin-charts-color-8, #FDA253);
                  stroke: var(--vaadin-charts-color-8, #FDA253);
                }

                :host([theme~="speedometer"]) .highcharts-plot-band.band-2 {
                  stroke: var(--vaadin-charts-color-negative, #E24932);
                  fill: var(--vaadin-charts-color-negative, #E24932);
                }

                :host([theme~="speedometer"]) .highcharts-plot-band {
                  fill-opacity: 1;
                }

                :host([theme~="speedometer"]) .highcharts-tick {
                  stroke: var(--vaadin-charts-grid-line);
                  stroke-width: 2;
                }

                :host([theme~="speedometer"]) .highcharts-minor-tick {
                  stroke: var(--vaadin-charts-grid-line);
                  stroke-width: 1;
                }

                :host([theme~="speedometer"]) .highcharts-grid-line,
                :host([theme~="speedometer"]) .highcharts-minor-grid-line {
                  stroke: none;
                }
              </style>
            </template>
          </dom-module-->
          <vaadin-chart type="gauge" title="Speedometer" theme="speedometer" tooltip additional-options='{
            "pane": {
              "startAngle": -150,
              "endAngle": 150
            },
            "yAxis": {
              "min": 0,
              "max": 200,
              "minorTickInterval": "auto",
              "minorTickLength": 10,
              "minorTickPosition": "inside",
              "tickPixelInterval": 30,
              "tickPosition": "inside",
              "tickLength": 10,
              "labels": {
                "step": 2,
                "rotation": "auto"
              },
              "title": {
                "text": "km/h"
              },
              "plotBands": [{
                  "from": 0,
                  "to": 120,
                  "className": "band-0"
                }, {
                  "from": 120,
                  "to": 160,
                  "className": "band-1"
                }, {
                  "from": 160,
                  "to": 200,
                  "className": "band-2"
                }]
            }
          }'>
            <vaadin-chart-series title="Speed" values="[89]" additional-options='{
            "tooltip": {
                "valueSuffix": " km/h"
            }
          }'></vaadin-chart-series>
          </vaadin-chart>

          <!--dom-module id="speedometer-dual-theme" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="speedometer-dual"]) .highcharts-yaxis .highcharts-axis-line {
                  stroke-width: 2;
                }

                :host([theme~="speedometer-dual"]) .kmh .highcharts-axis-line,
                :host([theme~="speedometer-dual"]) .kmh .highcharts-tick,
                :host([theme~="speedometer-dual"]) .kmh .highcharts-minor-tick {
                  stroke: var(--vaadin-charts-color-0, #5AC2F7);
                }

                :host([theme~="speedometer-dual"]) .mph .highcharts-axis-line,
                :host([theme~="speedometer-dual"]) .mph .highcharts-tick,
                :host([theme~="speedometer-dual"]) .mph .highcharts-minor-tick {
                  stroke: var(--vaadin-charts-color-1, #1676F3);
                }

                :host([theme~="speedometer-dual"]) .highcharts-grid-line,
                :host([theme~="speedometer-dual"]) .highcharts-minor-grid-line {
                  stroke: none;
                }

                :host([theme~="speedometer-dual"]) .highcharts-pivot {
                  fill: var(--lumo-contrast, hsl(214, 35%, 15%));
                  stroke: var(--lumo-contrast, hsl(214, 35%, 15%));
                }
              </style>
            </template>
          </dom-module-->
          <vaadin-chart type="gauge" title="Speedometer with Dual Axes" theme="speedometer-dual" tooltip additional-options='{
            "pane": {
              "startAngle": -150,
              "endAngle": 150
            },
            "yAxis": [
              {
                "className": "kmh",
                "min": 0,
                "max": 200,
                "offset": -25,
                "labels": {
                  "distance": -20,
                  "rotation": "auto"
                },
                "tickLength": 5,
                "minorTickLength": 5,
                "endOfTick": false
              }, {
                "className": "mph",
                "min": 0,
                "max": 124,
                "offset": -20,
                "labels": {
                  "distance": 12,
                  "rotation": "auto"
                },
                "tickPosition": "outside",
                "minorTickPosition": "outside",
                "tickLength": 5,
                "minorTickLength": 5,
                "endOnTick": false
              }
            ]
          }'>
            <vaadin-chart-series title="Speed" values="[89]" additional-options='{
            "dataLabels": {
              "format": "{point.y} km/h"
            },
            "tooltip": {
              "valueSuffix": " km/h"
            }
          }'></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Heatmap</h3>
          <vaadin-chart type="heatmap" title="Sales per employee per weekday" tooltip additional-options='{
            "xAxis": {
              "categories": [
                "Alexander", "Marie", "Maximilian", "Sophia", "Lukas", "Maria",
                "Leon", "Anna", "Tim", "Laura"
              ]
            },

            "yAxis": {
              "categories": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "title": null
            },

            "colorAxis": {
              "min": 0,
              "minColor": "#FFFFFF",
              "maxColor": "#1676f3"
            },

            "legend": {
              "align": "right",
              "layout": "vertical",
              "margin": 0,
              "verticalAlign": "top",
              "y": 25,
              "symbolHeight": 280
            }
          }'>
            <vaadin-chart-series title="Sales per employee" values="[
            [0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67],
            [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],
            [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],
            [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],
            [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],
            [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],
            [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],
            [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30],
            [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84],
            [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]
          ]" additional-options='{
            "dataLabels": {
              "enabled": "true"
            },
            "tooltip": {
              "pointFormat": "Amount: {point.value}"
            }
          }'></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>?</h3>
            <vaadin-chart title="Solar Employment Growth by Sector, 2010-2016" subtitle="Source: thesolarfoundation.com" categories="[2010, 2011, 2012, 2013, 2014, 2015, 206, 2017]" additional-options='{
            "legend": {
              "layout": "vertical",
              "align": "right",
              "verticalAlign": "middle"
            }
          }'>
            <vaadin-chart-series title="Installation" unit="Number of Employees" values="[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]"></vaadin-chart-series>
            <vaadin-chart-series title="Manufacturing" unit="Number of Employees" values="[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]"></vaadin-chart-series>
            <vaadin-chart-series title="Sales &amp; Distribution" unit="Number of Employees" values="[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]"></vaadin-chart-series>
            <vaadin-chart-series title="Project Development" unit="Number of Employees" values="[null, null, 7988, 12169, 15112, 22452, 34400, 34227]"></vaadin-chart-series>
            <vaadin-chart-series title="Other" unit="Number of Employees" values="[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]"></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>OHCL</h3>
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart title="AAPL Stock Price" timeline>
                <vaadin-chart-series type="ohlc" title="AAPL Stock Price" values="[[data]]" additional-options='{
                "dataGrouping": {
                  "units": [
                    ["week", [1]],
                    ["month", [1, 2, 3, 4, 6]]
                  ]
                }
            }'></vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/aapl-date-ohlc.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Organization</h3>
          <!--vaadin-chart type="organization" style="height: 600px;" title="Acme organization chart" additional-options='{"chart": {
              "inverted": true,
              "styledMode": false
              },
              "exporting": {
                  "allowHTML": true,
                  "sourceWidth": 800,
                  "sourceHeight": 600
              },
              "tooltip": { "outside": true}
          }'>
            <vaadin-chart-series title="Highsoft" values='[
                  ["Acme", "Head Office"],
                  ["Acme", "Labs"],
                  ["Head Office", "Coyote Building"],
                  ["Head Office", "Road Runner Building"],
                  ["Coyote Building", "Sales"],
                  ["Coyote Building", "Marketing"],
                  ["Coyote Building", "Accounting"],
                  ["Road Runner Building", "Administration"],
                  ["Road Runner Building", "MDs Office"],
            ["Sales", "Joseph Miler"],
            ["Marketing", "Erik Perez"],
            ["Accounting", "Emily Fox"],
            ["Administration", "Ewan Herbert"],
            ["MDs Office", "Sally Brown"],
            ["Joseph Miler", "Kate Kirby"],
            ["Joseph Miler", "Vaughn Whiting"],
            ["Erik Perez", "Lisa Warner"],
            ["Ewan Herbert", "Molly Dodd"],
            ["Ewan Herbert", "Natasha Kelly"]
            ]' additional-options='{
            "keys": [
            "from",
            "to"
            ],
            "levels": [
            {
            "level": 0,
            "color": "var(--vaadin-charts-color-0, #5AC2F7)",
            "height": 25
            },
            {
            "level": 1,
            "color": "var(--vaadin-charts-color-1, #1676F3)",
            "height": 25
            },
            {
            "level": 2,
            "color": "var(--vaadin-charts-color-2, #FF7D94)"
            },
            {
            "level": 3,
            "color": "var(--vaadin-charts-color-3, #C5164E)"
            },
            {
            "level": 4,
            "color": "var(--vaadin-charts-color-4, #15C15D)"
            },
            {
            "level": 5,
            "color": "var(--vaadin-charts-color-5, #0E8151)"
            }
            ],
            "nodes": [
            { "id": "Acme" },
            { "id":"Head Office" },
            { "id":"Labs" },
            { "id":"Coyote Building" },
            { "id":"Road Runner Building" },
            { "id":"Sales" },
            { "id":"Marketing" },
            { "id":"Accounting" },
            { "id":"Administration" },
            { "id":"MDs Office" },
            { "id":"Joseph Miler", "title": "Head of Sales" },
            { "id":"Erik Perez", "title": "Head of Marketing" },
            { "id":"Emily Fox", "title": "Head of Accounting" },
            { "id":"Ewan Herbert", "title": "Head of Admin" },
            { "id":"Lisa Warner" },
            { "id":"Kate Kirby" },
            { "id":"Vaughn Whiting" },
            { "id":"Molly Dodd" },
            { "id":"Natasha Kelly" },
            {
            "id": "Sally Brown",
            "title": "Managing Director",
            "name": "Sally Brown",
            "color": "#F6DB3A"
            }
            ],
            "colorByPoint": false,
            "color": "#999999",
            "dataLabels": {
            "color": "black"
            },
            "borderColor": "var(--vaadin-charts-background, #fff)",
            "nodeWidth": 65
            }'></vaadin-chart-series>
          </vaadin-chart-->
        </section>

        <section>
          <h3>Pie</h3>
          <vaadin-chart type="pie" title="Browser market shares in January, 2018" tooltip additional-options='{
            "tooltip": {
              "pointFormat": "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            "plotOptions": {
              "pie": {
                "allowPointSelect":true,
                "cursor": "pointer",
                "dataLabels": {
                  "enabled":true,
                  "format": "<b>{point.name}</b>: {point.percentage:.1f} %"
                }
              }
            }
          }'>
            <vaadin-chart-series title="Brands" values='[
              {
                "name": "Chrome",
                "y": 61.41,
                "sliced": true,
                "selected": true
              },
              {
                "name": "Internet Explorer",
                "y": 11.84
              },
              {
                "name": "Firefox",
                "y": 10.85
              },
              {
                "name": "Edge",
                "y": 4.67
              },
              {
                "name": "Safari",
                "y": 4.18
              },
              {
                "name": "Sogou Explorer",
                "y": 1.64
              },
              {
                "name": "Opera",
                "y": 1.6
              },
              {
                "name": "QQ",
                "y": 1.2
              },
              {
                "name": "Other",
                "y": 2.61
              }
          ]'></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Polar</h3>
          <vaadin-chart title="Polar Chart" polar additional-options='{
            "xAxis": {
              "tickInterval": 45,
              "min": 0,
              "max": 360,
              "labels": {}
            },
            "yAxis": {
              "min":0
            },
            "plotOptions": {
              "series": {
                "pointStart": 0,
                "pointInterval":45
              },
              "column": {
                "pointPadding": 0,
                "groupPadding": 0
              }
            }
          }'>
            <vaadin-chart-series type="column" title="Column" values="[8, 7, 6, 5, 4, 3, 2, 1]" additional-options='{
              "pointPlacement": "between"
            }'></vaadin-chart-series>
            <vaadin-chart-series type="line" title="Line" values="[1, 2, 3, 4, 5, 6, 7, 8]">
            </vaadin-chart-series>
            <vaadin-chart-series type="area" title="Area" values="[1, 8, 2, 7, 3, 6, 4, 5]">
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Polygon</h3>
          <!--dom-module id="polygon" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="target-polygon"]) .highcharts-series.targetSeries {
                  fill-opacity: .5;
                  stroke-width: 0;
                }
              </style>
            </template>
          </dom-module-->
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart title="Height vs Weight" subtitle="Polygon series in Highcharts" tooltip theme="target-polygon" additional-options='{
                "xAxis": {
                  "gridLineWidth": 1,
                  "title": {
                    "enabled": true,
                    "text": "Height (cm)"
                  },
                  "startOnTick": true,
                  "endOnTick": true,
                  "showLastLabel": true
                },
                "legend": {
                  "layout": "vertical",
                  "align": "right",
                  "verticalAlign": "middle"
                }
              }'>
                <vaadin-chart-series title="Target" type="polygon" unit="Weight (kg)" values="[[153, 42], [149, 46], [149, 55], [152, 60], [159, 70], [170, 77], [180, 70], [180, 60], [173, 52], [166, 45]]" additional-options='{
                  "className": "targetSeries",
                  "enableMouseTracking": false
                }'>
                </vaadin-chart-series>
                <vaadin-chart-series title="Observations" type="scatter" unit="Weight (kg)" values="[[data]]" additional-options='{
                  "tooltip": {
                    "headerFormat": "<b>{series.name}</b><br>",
                    "pointFormat": "{point.x} cm, {point.y} kg"
                  }
              }'>
                </vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/height-weight.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Pyramid</h3>
          <vaadin-chart type="pyramid" title="Sales pyramid" no-legend additional-options='{
            "plotOptions": {
              "series": {
                "dataLabels": {
                  "enabled": true,
                  "format": "<b>{point.name}</b> ({point.y:,.0f})",
                  "softConnector": true
                },
                "center": ["40%","50%"],
                "width":"80%"
              }
            }
          }'>
            <vaadin-chart-series title="Unique users" values='[
            ["Website visits", 15654],
            ["Downloads", 4064],
            ["Requested price list", 1987],
            ["Invoice sent", 976],
            ["Finalized", 846]
          ]'>
            </vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Scatter</h3>
          <!--dom-module id="scatter" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="scatter"]) .femaleSeries,
                :host([theme~="scatter"]) .femaleSeries .highcharts-point {
                  fill: rgba(223, 83, 83, .5);
                  stroke: rgba(223, 83, 83, .5);
                }

                :host([theme~="scatter"]) .maleSeries,
                :host([theme~="scatter"]) .maleSeries .highcharts-point {
                  fill: rgba(119, 152, 191, .5);
                  stroke: rgba(119, 152, 191, .5);
                }

                :host([theme~="scatter"]) .highcharts-legend-box {
                  fill: #FFF;
                  stroke-width: 1px;
                  stroke: #000;
                }
              </style>
            </template>
          </dom-module-->
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart type="scatter" theme="scatter" title="Height Versus Weight of 507 Individuals by Gender" subtitle="Source: Heinz  2003" tooltip additional-options='{
                "xAxis": {
                  "title": {
                    "enabled": true,
                    "text": "Height (cm)"
                  },
                  "startOnTick":true,
                  "endOnTick":true,
                  "showLastLabel":true
                },
                "legend":{
                  "layout": "vertical",
                  "align": "left",
                  "verticalAlign": "top",
                  "x": 100,
                  "y": 70,
                  "floating": true
                },
                "plotOptions": {
                  "scatter": {
                    "tooltip": {
                      "headerFormat": "<b>{series.name}</b><br>",
                      "pointFormat":"{point.x} cm, {point.y} kg"
                    }
                  }
                }
              }'>
                <vaadin-chart-series title="Female" unit="Weight (kg)" values="[[female]]" additional-options='{
                "className": "femaleSeries"
              }'>
                </vaadin-chart-series>
                <vaadin-chart-series title="Male" unit="Weight (kg)" values="[[male]]" additional-options='{
                "className": "maleSeries"
              }'>
                </vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/female-height-weight.json" last-response="{{female}}" auto></iron-ajax>
              <iron-ajax url="./demo-data/male-height-weight.json" last-response="{{male}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Solid gauge</h3>
          <vaadin-chart title="Speed" type="solidgauge" tooltip additional-options='{
            "pane": {
              "center": ["50%","85%"],
              "startAngle": -90,
              "endAngle": 90,
              "background": {
                "innerRadius": "60%",
                "outerRadius": "100%",
                "shape":"arc"
              }
            },
            "yAxis": {
              "min": 0,
              "max": 200,
              "minorTickInterval": null,
              "tickAmount": 2,
              "title": {
                "y":-70
              },
              "labels": {
                "y":16
              }
            }
          }'>
            <vaadin-chart-series title="Speed" values='[{"y": 80, "colorIndex": 1}]' additional-options='{
            "dataLabels": {
              "format": "<div style=\\"text-align:center\\"><span style=\\"font-size:25px\\">{y}</span><br/><span style=\\"font-size:12px;color:silver\\">km/h</span></div>"
            }
          }'>
            </vaadin-chart-series>
          </vaadin-chart>

          <div style="display: flex; flex-direction: row;">
            <vaadin-chart title="Progress" type="solidgauge" additional-options='{
              "pane": {
                "center": ["50%","50%"],
                "startAngle": 0,
                "endAngle": 360,
                "background": {
                  "innerRadius": "60%",
                  "outerRadius": "100%",
                  "shape":"arc"
                }
              },
              "yAxis": {
                "min": 0,
                "max": 100,
                "minorTickInterval": null,
                "tickAmount": 0,
                "labels": {
                  "enabled": false
                }
              }
            }'>
              <vaadin-chart-series title="Progress" values='[{"y": 12, "colorIndex": 1}]' additional-options='{
              "dataLabels": {
                "format": "<span style=\\"font-size:25px;\\">{y}</span><span style=\\"font-size:12px;color:silver;\\"> %</span>"
              }
            }'>
              </vaadin-chart-series>
            </vaadin-chart>

            <vaadin-chart title="Progress" type="solidgauge" additional-options='{
            "pane": {
              "center": ["50%","50%"],
              "startAngle": 0,
              "endAngle": 360,
              "background": {
                "innerRadius": "60%",
                "outerRadius": "100%",
                "shape":"arc"
              }
            },
            "yAxis": {
              "min": 0,
              "max": 100,
              "minorTickInterval": null,
              "tickAmount": 0,
              "labels": {
                "enabled": false
              }
            }
          }'>
              <vaadin-chart-series title="Progress" values='[{"y": 47, "colorIndex": 4}]' additional-options='{
            "dataLabels": {
              "format": "<span style=\\"font-size:25px;\\">{y}</span><span style=\\"font-size:12px;color:silver;\\"> %</span>"
            }
          }'>
              </vaadin-chart-series>
            </vaadin-chart>

            <vaadin-chart title="Progress" type="solidgauge" additional-options='{
            "pane": {
              "center": ["50%","50%"],
              "startAngle": 0,
              "endAngle": 360,
              "background": {
                "innerRadius": "60%",
                "outerRadius": "100%",
                "shape":"arc"
              }
            },
            "yAxis": {
              "min": 0,
              "max": 100,
              "minorTickInterval": null,
              "tickAmount": 0,
              "labels": {
                "enabled": false
              }
            }
          }'>
              <vaadin-chart-series title="Progress" values='[{"y": 80, "colorIndex": 8}]' additional-options='{
            "dataLabels": {
              "format": "<span style=\\"font-size:25px;\\">{y}</span><span style=\\"font-size:12px;color:silver;\\"> %</span>"
            }
          }'>
              </vaadin-chart-series>
            </vaadin-chart>
          </div>
        </section>

        <section>
          <h3>Spiderweb</h3>
          <!--dom-module id="spiderweb-theme" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="spiderweb"]) .highcharts-xaxis .highcharts-axis-line {
                  stroke-width: 0;
                }

                :host([theme~="spiderweb"]) .highcharts-xaxis-grid .highcharts-grid-line {
                  stroke-width: 1px;
                }
              </style>
            </template>
          </dom-module-->
          <vaadin-chart title="Budget vs spending" theme="spiderweb" polar categories='["Sales","Marketing","Development","Customer Support", "Information Technology", "Administration"]' tooltip additional-options='{
            "legend": {
              "align": "right",
              "verticalAlign": "top",
              "y": 70,
              "layout": "vertical"
            },
            "xAxis": {
              "tickmarkPlacement":  "on"
            },
            "yAxis": {
              "gridLineInterpolation": "polygon"
            }
          }'>
            <vaadin-chart-series title="Allocated Budget" values="[43000, 19000, 60000, 35000, 17000, 10000]"></vaadin-chart-series>
            <vaadin-chart-series title="Actual Spending" values="[50000, 39000, 42000, 31000, 26000, 14000]"></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Spline</h3>
          <!--dom-bind>
            <template preserve-content>
              <vaadin-chart type="spline" title="AAPL Stock Price" timeline tooltip additional-options='{
                "rangeSelector": {
                  "selected": 1
                }
              }'>
                <vaadin-chart-series name="AAPL Stock Price" values="[[data]]"></vaadin-chart-series>
              </vaadin-chart>
              <iron-ajax url="./demo-data/aapl-date-price.json" last-response="{{data}}" auto></iron-ajax>
            </template>
          </dom-bind-->
        </section>

        <section>
          <h3>Timeline</h3>
          <!--vaadin-chart type="timeline" title="Timeline of Space Exploration" subtitle='Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">Wikipedia.org</a>' tooltip additional-options='{
              "xAxis": {
                "visible": false
              },
              "yAxis": {
                "visible": false
              }
            }'>
            <vaadin-chart-series values='[
              {
                "name":"First dogs",
                "label":"1951: First dogs in space",
                "description":"22 July 1951 First dogs in space (Dezik and Tsygan) "
              },{
                "name":"Sputnik 1",
                "label":"1957: First artificial satellite",
                "description":"4 October 1957 First artificial satellite. First signals from space."
              },{
                "name":"First human spaceflight",
                "label":"1961: First human spaceflight (Yuri Gagarin)",
                "description":"First human spaceflight (Yuri Gagarin), and the first human-crewed orbital flight"
              },{
                "name":"First human on the Moon",
                "label":"1969: First human on the Moon",
                "description":"First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon"
              },{
                "name":"First space station",
                "label":"1971: First space station",
                "description":"Salyut 1 was the first space station of any kind, launched into low Earth orbit by the Soviet Union on April 19, 1971."
              },{
                "name":"Apollo–Soyuz Test Project",
                "label":"1975: First multinational manned mission",
                "description":"The mission included both joint and separate scientific experiments, and provided useful engineering experience for future joint US–Russian space flights, such as the Shuttle–Mir Program and the International Space Station."
              }
            ]'></vaadin-chart-series>
          </vaadin-chart-->
        </section>

        <section>
          <h3>Treemap</h3>
          <vaadin-chart type="treemap" title="Fruit consumption" tooltip>
            <vaadin-chart-series values='[
            {
              "id": "A",
              "name": "Apples",
              "colorIndex": "0"
            }, {
              "id": "B",
              "name": "Bananas",
              "colorIndex": "2"
            }, {
              "id": "O",
              "name": "Oranges",
              "colorIndex": "3"
            }, {
              "name": "Anne",
              "parent": "A",
              "value": 5
            }, {
              "name": "Rick",
              "parent": "A",
              "value":3
            }, {
              "name": "Peter",
              "parent": "A",
              "value": 4
            }, {
              "name": "Anne",
              "parent": "B",
              "value":4
            }, {
              "name": "Rick",
              "parent": "B",
              "value": 10
            }, {
              "name": "Peter",
              "parent": "B",
              "value": 1
            }, {
              "name": "Anne",
              "parent": "O",
              "value": 1
            }, {
              "name": "Rick",
              "parent": "O",
              "value": 3
            }, {
              "name": "Peter",
              "parent": "O",
              "value": 3
            }, {
              "name": "Susanne",
              "parent": "Kiwi",
              "value": 2,
              "colorIndex": "4"
            }
          ]' additional-options='{
            "levels": [{
              "level": 1,
              "dataLabels": {
                "enabled": true,
                "align": "left",
                "verticalAlign": "top"
              }
            }]
          }'></vaadin-chart-series>
          </vaadin-chart>
        </section>

        <section>
          <h3>Waterfall</h3>
          <!--dom-module id="waterfall" theme-for="vaadin-chart">
            <template>
              <style include="vaadin-chart-default-theme">
                :host([theme~="waterfall"]) .highcharts-data-labels text {
                  fill: var(--lumo-contrast, hsl(214, 35%, 15%));
                }

                :host([theme~="waterfall"]) .highcharts-waterfall-series .highcharts-point {
                  fill: var(--vaadin-charts-color-positive);
                  stroke-width: 0px;
                }

                :host([theme~="waterfall"]) .highcharts-waterfall-series .highcharts-negative {
                  fill: var(--vaadin-charts-color-negative);
                }

                :host([theme~="waterfall"]) .highcharts-waterfall-series .highcharts-sum {
                  fill: var(--vaadin-charts-color-0);
                }

                :host([theme~="waterfall"]) .highcharts-waterfall-series .highcharts-intermediate-sum {
                  fill: var(--vaadin-charts-color-8);
                }
              </style>
            </template>
          </dom-module-->
          <vaadin-chart type="waterfall" title="Waterfall" theme="waterfall" categories='["Start", "Product Revenue", "Service Revenue", "Positive Balance", "Fixed Costs", "Variable Costs", "Balance"]' no-legend additional-options='{
            "yAxis": {
              "title": {
                "text": "USD"
              }
            },
            "tooltip": {
              "pointFormat": "<b></b> USD"
            }
          }'>
            <vaadin-chart-series values='[
          120000,
          569000,
          231000,
          {
            "isIntermediateSum": true
          },
          -342000,
          -233000,
          {
            "isSum": true
          }
        ]'></vaadin-chart-series>
          </vaadin-chart>
        </section>
      </main>
    `;
  }
}
