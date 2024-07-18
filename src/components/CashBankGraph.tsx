import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CashBankGraph = () => {
  const options = {
    chart: {
      id: 'cash-bank-summary',
      toolbar: {
        show: false
      }
    },

    xaxis: {
      categories: cashBankSummaryData.map((item) => item.month)
    },
    yaxis: [
      {
        title: {
          text: ''
        },
        labels: {
          formatter: function (value: number) {
            return value + ' k';
          }
        }
      }
    ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 2],
      dashArray: [0, 5]
    }
  };

  const series = [
    {
      name: 'Bank Balance',
      type: 'line',
      data: cashBankSummaryData.map((item) => item.bankBalance)
    },
    {
      name: 'Cash Balance',
      type: 'line',
      data: cashBankSummaryData.map((item) => item.cashBalance)
    }
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={280} />
    </div>
  );
};

export default CashBankGraph;

interface CashBankSummary {
  month: string;
  bankBalance: number;
  cashBalance: number;
}
const cashBankSummaryData: CashBankSummary[] = [
  { month: 'Jan', bankBalance: 1000, cashBalance: 1000 },
  { month: 'Feb', bankBalance: 5500, cashBalance: 3200 },
  { month: 'Mar', bankBalance: 6000, cashBalance: 3400 },
  { month: 'Apr', bankBalance: 2200, cashBalance: 3600 },
  { month: 'May', bankBalance: 6400, cashBalance: 3800 },
  { month: 'Jun', bankBalance: 6800, cashBalance: 4000 },
  { month: 'Jul', bankBalance: 7200, cashBalance: 4200 },
  { month: 'Aug', bankBalance: 5500, cashBalance: 4400 }
];
