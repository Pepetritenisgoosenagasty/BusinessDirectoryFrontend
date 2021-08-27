import { useState } from 'react';
import Chart from 'react-apexcharts'

const VisitorsChart = () => {
    const [series, setSeries] = useState([{name: "Session Duration", data: [2, 4, 5, 7, 8]},{name: "Session Duration", data: [0, 6, 4, 8, 10]}])

    let options = {
        chart: {
            id: "apexchart-example",
            shadow: {
              enabled: true,
              color: "#000",
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1,
            },
            toolbar: {
              show: false,
            },
          },
          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan'
          ],
      
            labels: {
              style: {
                colors: "#9aa0ac",
              },
            },
          },
          yaxis: {
            title: {
              text: "Hours",
              style: {
                fontWeight: 400
              }
            },
            labels: {
              style: {
                color: "#9aa0ac",
              },
              formatter: function (e) {
                return e + " km";
              },
            },
            min: 0,
            max: 10,
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
          },
          colors: ["#786BED", "#999b9c"],
          // dataLabels: {
          //     enabled: true
          // },
          stroke: {
            curve: "smooth",
          },
          grid: {
            borderColor: "#F0F0F2",
            row: {
              colors: ["#f3f3f3", "transparent"],
              opacity: 0.0,
            },
          },
          markers: {
            size: 6,
          },
      };
    return (
        <div>
            <Chart options={options} series={series} type="line" width="100%" height={400} />
        </div>
    )
}

export default VisitorsChart
