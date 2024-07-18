import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface MonthlyGraphProps {
  data: {
    month: string;
    sale: number;
    purchase: number;
  }[];
}
const data = [
  { month: 'Jan', sale: 100, purchase: 80 },
  { month: 'Feb', sale: 150, purchase: 90 },
  { month: 'Mar', sale: 200, purchase: 100 },
  { month: 'Apr', sale: 180, purchase: 110 },
  { month: 'May', sale: 250, purchase: 120 },
  { month: 'Jun', sale: 300, purchase: 130 },
  { month: 'Jul', sale: 280, purchase: 140 },
  { month: 'Aug', sale: 320, purchase: 150 }
];
const SalePurchseGraph = () => {
  const options: any = {
    chart: {
      type: 'bar'
    },
    labels: {
      show: false // Hide x-axis labels
    },
    xaxis: {
      categories: data.map((item) => item.month),
      labels: {
        show: false // Hide x-axis labels
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0074e4', '#ff4d4d'],
    plotOptions: {
      bar: {
        borderRadius: 5 // Set the corner radius for rounded columns
      }
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return value + ' Lakh';
        }
      }
    }
  };

  const series = [
    {
      name: 'Sale',
      data: data.map((item) => item.sale)
    },
    {
      name: 'Purchase',
      data: data.map((item) => item.purchase)
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={280} />
    </div>
  );
};

export default SalePurchseGraph;
