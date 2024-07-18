import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface MonthlyPurchase {
  month: string;
  amount: number;
}

const purchaseData: MonthlyPurchase[] = [
  { month: 'Jan', amount: 600 },
  { month: 'Feb', amount: 1100 },
  { month: 'Mar', amount: 1500 },
  { month: 'Apr', amount: 700 },
  { month: 'May', amount: 1400 }
];

const PurchaseChart = () => {
  const options: any = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      },
      padding: {
        left: 0,
        right: 0
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#ea5455'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: purchaseData.map((item) => item.month),
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    }
  };
  const series = [
    {
      name: 'Monthly Purchase Amount',
      data: purchaseData.map((item) => item.amount)
    }
  ];
  return (
    <div>
      <Chart options={options} series={series} type="area" height={100} />
    </div>
  );
};

export default PurchaseChart;
