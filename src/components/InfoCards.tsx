import ICONS from '@/assets/icons';
import PaymentChart from '@/components/Analytics/PaymentChart';
import SalesChart from '@/components/Analytics/SalesChart';
import ReceiptChart from '@/components/Analytics/TotalRecept';
import PurchaseChart from './PurchaseChart';

const InfoCards = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
      {Cardsdata.map((item) => (
        <div key={item?.id} className="bg-white  rounded-lg">
          <div className="px-6 pt-6">
            <div
              className={`h-12 w-12 rounded-full  flex justify-center items-center text-2xl ${
                item?.id === '1'
                  ? 'bg-sky-600/30 text-sky-600'
                  : item?.id === '2'
                  ? 'bg-green-600/30 text-green-600'
                  : item?.id === '3'
                  ? 'bg-red-600/30 text-red-600'
                  : 'bg-orange-600/30 text-orange-600'
              }`}
            >
              {item?.icon}
            </div>
            <div>
              <span>₹</span>&nbsp;
              <span className="text-xl text-gray-500 font-bold">
                {item?.amount}
              </span>
            </div>
            <p className="text-gray-500 text-sm tracking-wide mt-1">
              {item?.title}
            </p>
          </div>
          <div className=" rounded-lg">{item?.chart}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;

const Cardsdata = [
  {
    id: '1',
    title: 'Total Sales',
    amount: '13,03,06,537',
    icon: <ICONS.sale />,
    chart: <SalesChart />
  },
  {
    id: '2',
    title: 'Total Receipt',
    amount: '14,77,30,721',
    icon: <ICONS.Recept />,
    chart: <ReceiptChart />
  },
  {
    id: '3',
    title: 'Total Purchase',
    amount: '8,96,73,616',
    icon: <ICONS.Purchase />,
    chart: <PurchaseChart />
  },
  {
    id: '4',
    title: 'Total Payment',
    amount: '12,98,52,725',
    icon: <ICONS.Payment />,
    chart: <PaymentChart />
  }
];
