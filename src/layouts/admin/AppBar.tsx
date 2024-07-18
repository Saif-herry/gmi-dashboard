import Avatar from '@/components/core/Avatar';
import Collapse from '@/components/core/Collapse';
import { useMenuItems } from '@/hooks';
import { useRouter } from 'next/router';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineMenuFold,
  AiOutlineSearch
} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';

type FlatArrayType = {
  groupTitle?: string | undefined;
  title?: string;
  icon: JSX.Element;
  route?: string;
  submenu?: {
    title: string;
    route: string;
    icon: JSX.Element;
  }[];
};

const AppBar = ({
  setResponsiveExpand
}: {
  setResponsiveExpand: Dispatch<SetStateAction<boolean>>;
}) => {
  const menuItems = useMenuItems();
  const [searchTitle, setSearchTitle] = useState<FlatArrayType[] | null>();
  const { push } = useRouter();
  const pushPage = (path: string) => push(path);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [notificationShortCut, setNotificationShortCut] = useState(false);

  const toggleFullScreen = () => {
    const element = document.documentElement as any;
    const newDoc = document as any;
    if (!isFullScreen) {
      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();
    } else {
      if (newDoc.exitFullscreen) newDoc.exitFullscreen();
      else if (newDoc.mozCancelFullScreen) newDoc.mozCancelFullScreen();
      else if (newDoc.webkitExitFullscreen) newDoc.webkitExitFullscreen();
      else if (newDoc.msExitFullscreen) newDoc.msExitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const onSearchActive = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e?.target?.value;
    const regex = new RegExp(searchTerm, 'i');
    if (searchTerm === '') setSearchTitle(null);
    else {
      const flattenedItems = menuItems.flatMap((item) =>
        item.data.flatMap((subItem) => ({
          ...subItem
        }))
      );
      const filteredItems = flattenedItems.filter((item) =>
        regex.test(item.title)
      );
      setSearchTitle(filteredItems);
    }
  };

  return (
    <nav className="w-full bg-white h-fit py-2 md:py-0 md:h-16 sticky top-0 z-[999] shadow-[-7.829px_11.607px_20px_0px_rgba(144,143,160,0.09)]">
      <div className="w-full justify-between main-container flex items-center h-full">
        <div className="flex items-center gap-2 w-full md:w-fit">
          <div
            className="hidden md:block lg:hidden"
            onClick={() => setResponsiveExpand(true)}
          >
            <AiOutlineMenuFold className="text-2xl" />
          </div>
          <div className="flex items-center h-full w-full relative">
            <div className="flex items-center w-fit px-1.5 md:px-3 border-primary/20 py-1 md:py-2 bg-tertiary/10 border rounded-lg">
              <div
                className="w-fit cursor-pointer"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setSearchTitle([]);
                }}
              >
                {isSearchOpen ? (
                  <AiOutlineClose />
                ) : (
                  <AiOutlineSearch className="text-xl text-quinary" />
                )}
              </div>
              <input
                type="input"
                className={`form-control bg-transparent text-base font-normal common-transition focus:text-gray-700 ${
                  isSearchOpen
                    ? 'w-full md:w-[35rem] visible px-3'
                    : 'w-0 invisible'
                }`}
                placeholder="Quick Navigation..."
                autoComplete="off"
                onChange={onSearchActive}
              />
            </div>
            <div className="absolute top-full mt-2 w-full">
              <Collapse open={searchTitle?.length! > 0}>
                <div className="h-fit w-full bg-white md:py-5 !rounded flex flex-col gap-1 common-card max-h-[40vh] md:max-h-[60vh] !shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] overflow-y-scroll">
                  {searchTitle?.map((_, i: number) => (
                    <div className="w-full" key={i}>
                      {_?.submenu ? (
                        <div className="flex flex-col bg-white">
                          {_?.submenu?.map((item: any) => (
                            <div
                              onClick={() => pushPage(item?.route)}
                              key={item.title}
                              className="flex items-center gap-2 py-3 text-sm md:text-base cursor-pointer hover:bg-tertiary px-5 common-transition bg-white"
                            >
                              <BsSearch />
                              <div>
                                {item?.title} ({_?.title})
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          onClick={() => pushPage(_?.route!)}
                          key={i}
                          className="flex text-sm md:text-base items-center gap-2 py-3 cursor-pointer hover:bg-theme-blue/5 px-5 common-transition bg-white"
                        >
                          <BsSearch />
                          <div>{_?.title}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div
            onClick={toggleFullScreen}
            data-tip={
              isFullScreen ? 'Toggle NormalScreen' : 'Toggle FullScreen'
            }
            className="h-9 w-9 tooltip hover:tooltip-open tooltip-bottom cursor-pointer common-transition text-primary flex items-center justify-center rounded-full hover:bg-tertiary"
          >
            {!isFullScreen ? (
              <AiOutlineFullscreen className="text-2xl" />
            ) : (
              <AiOutlineFullscreenExit className="text-2xl" />
            )}
          </div>
          <div
            tabIndex={0}
            onClick={() => setNotificationShortCut(true)}
            className="h-9 w-9 md:hidden cursor-pointer common-transition relative text-primary flex items-center justify-center rounded-full hover:bg-tertiary"
          >
            <div className="badge bg-primary badge-sm absolute top-0 right-0 text-white text-[10px] w-5 h-5">
              2
            </div>
            <IoMdNotificationsOutline className="text-3xl" />
          </div>
          <div className="dropdown dropdown-end hidden md:block">
            <div
              tabIndex={0}
              onClick={() => setNotificationShortCut(true)}
              className="h-9 w-9 cursor-pointer common-transition relative text-primary flex items-center justify-center rounded-full hover:bg-tertiary"
            >
              <div className="badge bg-primary badge-sm absolute top-0 right-0 text-white text-[10px] w-5 h-5">
                2
              </div>
              <IoMdNotificationsOutline className="text-3xl" />
            </div>
          </div>

          <Avatar
            src="/admin/avatar.png"
            className="rounded-full md:hidden w-10 md:h-11 h-8 md:w-11"
          >
            <div></div>
          </Avatar>

          <div className="dropdown dropdown-end hidden md:block">
            <div tabIndex={0} className="w-fit h-fit cursor-pointer">
              <Avatar
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1694753877~exp=1694754477~hmac=1c5b1a647a871a5c46ff0b845291dbd7ab459d06ec060911170b45c0b730fab4"
                className="rounded-full w-10 md:h-11 h-10 md:w-11"
              >
                <div></div>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
