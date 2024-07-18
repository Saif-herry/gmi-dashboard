import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface MonthlyPayment {
  month: string;
  amount: number;
}

const paymentData: MonthlyPayment[] = [
  { month: 'Jan', amount: 400 },
  { month: 'Feb', amount: 900 },
  { month: 'Mar', amount: 1300 },
  { month: 'Apr', amount: 600 },
  { month: 'May', amount: 1100 }
];

const PaymentChart = () => {
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
    colors: ['#FF6600'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: paymentData.map((item) => item.month),
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
      name: 'Monthly Payment Amount',
      data: paymentData.map((item) => item.amount)
    }
  ];
  return (
    <div>
      <Chart options={options} series={series} type="area" height={100} />
    </div>
  );
};

export default PaymentChart;
