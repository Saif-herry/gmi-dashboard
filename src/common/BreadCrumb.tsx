import { useRouter } from 'next/router';
import { PiCaretDoubleRightBold } from 'react-icons/pi';

export default function BreadCrumb({
  pathArray
}: {
  pathArray: {
    pageName: string;
    path: string;
  }[];
}) {
  const { push } = useRouter();
  const handleChangeRoute = (curPath: string) => {
    if (!curPath || curPath?.length === 0) return;
    push(curPath);
  };
  return (
    <div className="flex gap-2  text-md  font-semibold overflow-x-auto scroll-bar-none">
      {pathArray?.map((curElm, i) => (
        <div key={i} className="flex gap-2">
          <p
            className={`${
              curElm?.path?.length > 0
                ? 'cursor-pointer text-quinary transition-all duration-500 ease-in-out hover:translate-x-1'
                : 'text-gray-400'
            } whitespace-nowrap`}
            onClick={() => handleChangeRoute(curElm.path)}
          >
            {curElm?.pageName}
          </p>
          {pathArray?.length - 1 === i ? null : (
            <div className="pt-1 text-gray-400">
              <PiCaretDoubleRightBold />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
