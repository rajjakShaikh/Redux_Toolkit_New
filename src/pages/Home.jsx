import React, { useEffect, useState } from "react";
import Adduser from "./Adduser";
import { Bars } from "react-loader-spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Bars
          height="80"
          width="80"
          color="#FF0000"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div>
      <Adduser />
    </div>
  );
}
