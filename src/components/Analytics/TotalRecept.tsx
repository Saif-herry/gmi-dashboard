import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface MonthlyReceipt {
  month: string;
  amount: number;
}

const receiptData: MonthlyReceipt[] = [
  { month: 'Jan', amount: 800 },
  { month: 'Feb', amount: 1200 },
  { month: 'Mar', amount: 1800 },
  { month: 'Apr', amount: 900 },
  { month: 'May', amount: 1300 }
];

const ReceiptChart = () => {
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
    colors: ['#28c76f'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: receiptData.map((item) => item.month),
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
      name: 'Monthly Receipt Amount',
      data: receiptData.map((item) => item.amount)
    }
  ];
  return (
    <div>
      <Chart options={options} series={series} type="area" height={100} />
    </div>
  );
};

export default ReceiptChart;
