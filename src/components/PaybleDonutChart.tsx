import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const PaybleDonutChart = () => {
  const options: any = {
    chart: {
      type: 'donut'
    },

    series: [70, 30], // Receivable: 70%, Payable: 30%
    labels: ['Receivable', 'Payable'],
    legend: {
      show: false // This line disables the legend
    },
    colors: ['#008FFB', '#FF4560'], // Custom colors for the donut segments
    plotOptions: {
      pie: {
        dataLabels: {
          show: false
        }
      }
    }
  };
  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="350"
      />
    </div>
  );
};

export default PaybleDonutChart;
