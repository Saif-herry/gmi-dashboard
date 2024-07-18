import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface MonthlySale {
  month: string;
  amount: number;
}

const data: MonthlySale[] = [
  { month: 'Jan', amount: 1000 },
  { month: 'Feb', amount: 1500 },
  { month: 'Mar', amount: 2000 },
  { month: 'Apr', amount: 1000 },
  { month: 'May', amount: 1500 }
];

const SalesChart = () => {
  const options: any = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      },
      padding: {
        left: 0, // Set the left padding to 0
        right: 0 // Set the right padding to 0
      },
      sparkline: {
        enabled: true // Set sparkline mode
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: data.map((item) => item.month), // Use the months as categories
      labels: {
        show: false // Show x-axis labels
      }
    },
    yaxis: {
      show: false, // Hide the x-axis line
      labels: {
        show: false // Hide the x-axis labels (1, 2, 3, 4, etc.)
      }
    },
    grid: {
      show: false
    }
  };
  const series = [
    {
      name: 'Monthly Sales',
      data: data.map((item) => item.amount)
    }
  ];
  return (
    <div>
      <Chart options={options} series={series} type="area" height={100} />
    </div>
  );
};

export default SalesChart;
