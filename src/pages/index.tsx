import ICONS from '@/assets/icons';
import BreadCrumb from '@/common/BreadCrumb';
import CashBankGraph from '@/components/CashBankGraph';
import InfoCards from '@/components/InfoCards';
import PaybleDonutChart from '@/components/PaybleDonutChart';
import SalePurchseGraph from '@/components/SalePurchseGraph';
import { AdminLayout } from '@/layouts';
import Link from 'next/link';

export default function Admin() {
  const pathArray = [
    {
      pageName: 'Dashboard',
      path: '/'
    }
  ];
  return (
    <AdminLayout title="Dashboard">
      <section className="main-container">
        <div className="pb-5">
          <BreadCrumb pathArray={pathArray} />
        </div>
        <article>
          <div>
            <InfoCards />
          </div>
          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-gray-500">
              Sales Register Statistics
            </h2>

            <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-3 md:grid-cols-2">
              {StatisticsData?.map((item) => (
                <div key={item?.id} className="flex items-center gap-5">
                  <div
                    className={`h-14 w-14 rounded-full flex justify-center items-center text-2xl ${
                      item?.id === '1'
                        ? 'bg-sky-600/30 text-sky-600'
                        : item?.id === '2'
                        ? 'bg-green-600/30 text-green-600'
                        : 'bg-orange-600/30 text-orange-600'
                    }`}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <p className="text-xl font-bold">₹ {item?.amount}</p>
                    <p className="text-sm text-gray-500">{item?.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="w-full p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-lg font-bold text-gray-500">
                Sale Vs Purchase
              </h2>
              <div>
                <SalePurchseGraph />
              </div>
              <div className="flex justify-around">
                <Link
                  href={'#'}
                  className="px-4 py-2 text-sm font-bold text-white rounded-md bg-blue-700/80 "
                >
                  Sale Report
                </Link>
                <Link
                  href={'#'}
                  className="px-4 py-2 text-sm font-bold text-white rounded-md bg-blue-700/80 "
                >
                  Purchase Report
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-6 lg:flex-row">
            <div className="bg-white shadow-lg rounded-lg p-6  lg:w-[65%]">
              <h2 className="text-lg font-bold text-gray-500">
                Cash & Bank Summary
              </h2>
              <div className="flex gap-10 mt-5">
                {BankCashdata?.map((item) => (
                  <div key={item?.id} className="">
                    <p className="text-sm text-gray-600">{item?.title}</p>
                    <h2 className="text-2xl font-bold"> ₹{item?.amount}</h2>
                  </div>
                ))}
              </div>
              <div>
                <CashBankGraph />
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 lg:w-[35%]">
              <h2 className="text-lg font-bold text-gray-500">
                Receivable vs Payable
              </h2>
              <div className="flex items-center justify-center mt-4 ">
                <PaybleDonutChart />
              </div>

              <div className="flex justify-around mt-3 text-center">
                {ReceivableDate.map((item) => (
                  <div key={item?.id} className="">
                    <p className="text-sm">{item?.title}</p>
                    <p className="text-xl font-semibold text-gray-500">
                      {' '}
                      ₹ {item?.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between p-2">
              <h3 className="font-bold text-gray-500">Parties List</h3>
              <div className="flex items-center gap-2">
                <ICONS.Search className="h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="text-sm outline-none"
                />
              </div>
            </div>
            <div className="h-[400px] overflow-y-auto">
              <div className="p-3">
                {parties_List?.map((item) => (
                  <div
                    key={item?.id}
                    className="flex items-center justify-between px-5 py-2 mt-3 text-sm shadow-md bg-slate-100 rounded-xl "
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7hBcsoBPr3NUCUn5AB9quO56VyyHZIiw8fWuVvw-48kmqnxPSv2cxQ0_xwH1NsmK0LE&usqp=CAU"
                        alt=""
                        className="h-12 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-600">
                          {item?.party_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item?.location}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={'#'}
                      className="px-3 py-2 text-xs text-white rounded-md bg-slate-500"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </AdminLayout>
  );
}

interface PartiesListTypes {
  id: string;
  party_name: string;
  location: string;
}
const parties_List: PartiesListTypes[] = [
  {
    id: '1',
    location: 'Delhi',
    party_name: 'Bestseller Retail India Private Limited'
  },
  { id: '2', location: 'Delhi', party_name: 'Best United Comforts Pvt Ltd' },
  { id: '3', location: 'Delhi', party_name: 'Only Retail Private Limited' },
  { id: '4', location: 'Delhi', party_name: 'VERO MODA RETAIL PVT LTD' },
  { id: '5', location: 'Delhi', party_name: 'Dot & Key Wellness Pvt Ltd' },
  { id: '6', location: 'Delhi', party_name: 'E SHOEBOX E-Commerce PVT LTD' },
  {
    id: '7',
    location: 'Delhi',
    party_name: 'ICONIC FANION RETAILING Private Limited'
  },
  {
    id: '8',
    location: 'Delhi',
    party_name: 'MANISH LIFESTYLE Private Limited'
  },
  {
    id: '9',
    location: 'Delhi',
    party_name: 'Mila Star Retail Private Limited'
  },
  {
    id: '10',
    location: 'Delhi',
    party_name: 'Samarth Lifestyle Retailing Private Limited'
  },
  { id: '11', location: 'Delhi', party_name: 'Seabird Logisolutions' },
  {
    id: '12',
    location: 'Delhi',
    party_name: 'Gangwal healthcare Private Limited'
  },
  { id: '13', location: 'Delhi', party_name: 'Group Indigo' }
];

const StatisticsData = [
  {
    id: '1',
    title: 'Sales - Credit Note (Net)',
    amount: '11,30,13,031',
    icon: <ICONS.sale />
  },
  {
    id: '2',
    title: 'Purchase - Debit Note (Net)',
    amount: '7,71,48,938',
    icon: <ICONS.sale />
  },
  { id: '3', title: 'Cost', amount: '9,24,58,371', icon: <ICONS.sale /> }
];

const BankCashdata = [
  { id: '1', title: 'Cash Balance', amount: '1,45,561 ' },
  { id: '2', title: 'Bank Balance', amount: '9,87,105 ' }
];

const ReceivableDate = [
  { id: '1', title: 'Receivable', amount: '16,37,32,753' },
  { id: '2', title: 'Payable', amount: '5,62,45,466 ' }
];
