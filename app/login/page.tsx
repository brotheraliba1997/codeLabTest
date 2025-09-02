"use client"; // agar Next.js 13+ app router use kar rahe ho

import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState(null);
  const [filterUserList, setFilterUserList] = useState<any>([]);
  const [value, setValue] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("before 1");
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setData(response.data); // store data in state
        // setFilterUserList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
    let searchFilter = data?.filter((item: any) =>
      item?.title?.toLowerCase().includes(value?.toLowerCase())
    );

    if (searchFilter && value) {
      setFilterUserList(searchFilter);
    } else {
      // let checking = [...data, { hamza: "yes" }];
      // console.log(checking, "checking");

      setFilterUserList(data);
    }
    }
  }, [value]);

  // const handlerChange = (e: any) => {
  //   let Uservalue = e.target.value;

  //   if (Uservalue) {
  //     let searchFilter = data?.filter((item: any) =>
  //       item?.title?.toLowerCase().includes(Uservalue?.toLowerCase())
  //     );
  //     setFilterUserList(searchFilter);
  //   }
  // };

  console.log(data ,"hamza");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">API Data</h1>

      <div className="">
        <input
          type="text"
          placeholder="search"
          className="px-12 py-4 border bg-white "
          onChange={(e: any) => setValue(e.target.value)}
          // onChange={handlerChange}
        />
      </div>

      <div>
        <p>Withdraw Amount: {withdrawAmount}</p>
        <button
          className="px-4 bg-black my-4 text-white"
          onClick={() => setWithdrawAmount(withdrawAmount + 1)}
        >
          re-render concept
        </button>
      </div>

      <div className="bg-amber-400">
        {filterUserList && filterUserList.length > 0 ? (
          <ul>
            {filterUserList.map((item: any) => (
              <li key={item.id} className="mt-2">
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
