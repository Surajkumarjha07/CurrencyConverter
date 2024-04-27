"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import './globals.css'

export default function Home() {

  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState()
  const [data, setdata] = useState({})
  const [currencies, setCurrencies] = useState({})

  useEffect(() => {
    const currencies = fetch('https://openexchangerates.org/api/currencies.json')
      .then(resjson => resjson.json())
      .then(data => {
        console.log(data);
        setCurrencies(data)
      })
  }, [])

  const convertCurrency = async () => {

    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?from=${fromCurrency}&to=${toCurrency}`)
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        setdata(data)
      });
      if (amount === "" || isNaN(amount)) {
        toast("Enter Valid Amount", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'error',
          position: 'top-center',
          bodyClassName: "toastError",
      })

      if (data?.status == 404) {
        toast("Couldn't Convert these Currencies!!", {
          hideProgressBar: true,
          autoClose: 1500,
          type: 'error',
          position: 'top-center',
          bodyClassName: "toastError",
      })
      }
      }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-100">

      <div className="text-center bg-white text-black h-auto p-12 rounded-3xl shadow-slate-300 shadow-inner" style={{ width: "480px" }}>

        <h2 className="text-2xl font-bold">Currency Converter</h2>

        <div className="mt-7" >
          <h3 className="font-semibold mr-64">Enter Amount  </h3>
          <input type="text" className="h-12 border-2 rounded-md text-center border-gray-500 mr-52 mt-2 w-96" onChange={e => setAmount(e.target.value)} />
        </div>

        <div className="flex justify-between text-black mt-16">

          <div className="">
            <h3 className="mr-7">From</h3>
            <select className="mt-4 w-16 border-2 border-gray-500  rounded-md" onChange={e => setFromCurrency(e.target.value)} value={fromCurrency}>
              {Object.keys(currencies).map(currency=> (
                  <option key={currency}>
                    {currency}
                  </option>
              ))
              }
            </select>
          </div>
          
          <Image src={'https://th.bing.com/th/id/OIP.1jt26VnpHNlMQcgkBWPdagHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} width={50} height={5} alt="Sorry" />

          <div className="">
            <h3 className="mr-12">To</h3>
            <select className="mt-4 w-16 border-2 border-gray-500 rounded-md" onChange={e => setToCurrency(e.target.value)} value={toCurrency}>
              {Object.keys(currencies).map(currency => (
                <option key={currency} >
                  {currency}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div className="mt-7 align-middle flex">
          {!isNaN(amount)?amount:""} {fromCurrency} = {!isNaN(amount) ? data.rates && (amount * (data?.rates && data.rates[toCurrency])).toFixed(2):""}{toCurrency}
        </div>

        <input type="submit" value={'Convert Currency'} className="bg-pink-800 text-white p-2 px-8 cursor-pointer rounded-lg mt-10 " onClick={convertCurrency} />
      </div>
    </main>
  );
}
