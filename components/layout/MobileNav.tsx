"use client";

import { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Container from "../common/container";
import { FaAngleRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface Service {
  id: number;
  title: string;
}

interface Child {
  id: number;
  title: string;
  services?: Service[];
}

interface MenuItem {
  id: number;
  label: string;
  children?: Child[];
  image: StaticImageData;
}

interface Props {
  menu: MenuItem[];
}

export default function MobileNav({ menu }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [ChildList, setChildList] = useState<MenuItem | null>(null);
  const [ServicesList, setServicesList] = useState<Child | null>(null);
  const [isChildVisible, setIsChildVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangeMenu = (menuItem: MenuItem) => {
    const found = menu.find((item) => item.id === menuItem.id);
    if (found) {
      setIsChildVisible(!isChildVisible);
      setIsServicesVisible(false);
      setChildList(found);
    }
  };

  const handleChangeChild = (
    e: React.MouseEvent<HTMLParagraphElement>,
    child: Child
  ) => {
    e.stopPropagation();
    const foundService = ChildList?.children?.find(
      (service) => service.id === child.id
    );
    if (foundService) {
      setIsServicesVisible(!isServicesVisible);
      setServicesList(foundService);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative lg:hidden inline-block text-left z-[1000] bg-text-hover "
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex menulist-center gap-1 p-2 rounded"
      >
        <RiMenu3Line size={24} />
      </button>

      <div
        className={` ${
          open ? "min-h-[600px] overflow-scroll  h-auto" : "h-0"
        } transition-all duration-400 bg-white absolute overflow-hidden -right-5 md:-right-9 z-[-1] w-[100vw] mt-10 flex flex-col origin-top-right shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <Container className="p-2">
          <div className="flex flex-col gap-2 py-3 px-5">
            {menu.map((item) => (
              <div
                key={item.id}
                className="text-md text-black py-1 font-inter transition duration-400"
                onClick={() => handleChangeMenu(item)}
              >
                <div
                  className={`flex  items-center gap-4 px-4  py-2 ${
                    ChildList?.id === item.id && isChildVisible
                      ? "bg-green-600 text-white rounded-xl px-4 py-4 transition duration-400"
                      : ""
                  }`}
                >
                  {item.label}
                  {(item.children?.length ?? 0) > 0 && (
                    <FaAngleRight
                      className={`${
                        ChildList?.id === item.id && isChildVisible
                          ? "rotate-90 "
                          : "rotate-0"
                      }`}
                    />
                  )}
                </div>

                {ChildList?.children?.map((child) => {
                  if (ChildList?.id === item.id) {
                    return (
                      <div
                        key={child.id}
                        className={`bg-green-600 rounded-2xl flex items-center px-4 ${
                          isChildVisible ? "my-5" : ""
                        }`}
                      >
                        {isChildVisible && (
                          <div className="relative h-[60px] w-[60px] ">
                            <Image
                              src={item?.image}
                              layout="fill"
                              alt=""
                              objectFit="contain"
                            />
                          </div>
                        )}

                        <p
                          onClick={(e) => handleChangeChild(e, child)}
                          className={`${
                            isChildVisible
                              ? "block mt-5 ml-3 text-white flex-1"
                              : "hidden"
                          } transition duration-1000`}
                        >
                          <div className="flex gap-2 items-center py-4 px-4">
                            {child.title}
                            {(child.services?.length ?? 0) > 0 && (
                              <FaAngleRight
                                className={`${
                                  ServicesList?.id === child.id &&
                                  isServicesVisible
                                    ? "rotate-0"
                                    : "rotate-90"
                                }`}
                              />
                            )}
                          </div>
                        </p>

                        {child.services?.map((service) => {
                          if (ServicesList?.id === child.id) {
                            return (
                              <p
                                className={`${
                                  isServicesVisible
                                    ? "block mt-5 ml-[40px] text-black"
                                    : "hidden"
                                }`}
                                key={service.id}
                              >
                                {service.title}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
