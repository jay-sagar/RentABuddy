"use client";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.png" alt="logo" width={150} height={50} />

        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ?
        <Popover>
          <PopoverTrigger>
            <Image
              src={user?.picture}
              alt="profile-image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">Profile</li>
              <Link href={'/my-booking'} className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">My Booking</Link>
              <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"><LogoutLink>Log Out</LogoutLink></li>
            </ul>
          </PopoverContent>
        </Popover>
       : 
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      }
    </div>
  );
}

export default Header;
