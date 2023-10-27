import React, { useState, useEffect } from "react";
import styles from "@/styles/converter.module.scss";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function CurrencyConverter() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const [currencyList, setCurrencyList] = useState([]);
  const [baseAmount, setBaseAmount] = useState({ name: "EUR", value: "" });
  const [secondBase, setSecondBase] = useState({
    name: "USD",
    value: "",
    rate: "",
  });

  useEffect(() => {
    const getCurrenciesRates = async (name) => {
      const resp = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=bDLb8GUJk128HeaNTCtKJTjpAo0ESlUBcQAM5x34&currencies=&base_currency=${name}`
      );
      const data = await resp.json();
      let allCurrNames = Object.keys(data.data);
      let list = allCurrNames.map((curr) => {
        return {
          name: curr,
          selectedAsBase: curr === name ? true : false,
          rate: data.data[curr],
        };
      });
      let currencyRate = list.filter((curr) => curr.name === secondBase.name)[0]
        .rate;
      setCurrencyList(list);
      setSecondBase({
        ...secondBase,
        value: (+baseAmount.value * +currencyRate).toFixed(3),
        rate: +list
          .filter((curr) => curr.name === secondBase.name)[0]
          .rate.toFixed(3),
      });
    };

    getCurrenciesRates(baseAmount.name);
  }, [baseAmount.name]);

  function baseCurrencySelectHandler(e) {
    setBaseAmount({ ...baseAmount, name: e.target.value });
  }

  function secondBaseCurrencySelectHandler(e) {
    let currencyName = e.target.value;
    let currencyRate = currencyList.filter(
      (curr) => curr.name === currencyName
    )[0].rate;
    if (baseAmount.name === "") alert("Select Base Currency");
    let secondCurrValue = +baseAmount.value * +currencyRate;

    if (baseAmount.value === "") {
      setSecondBase({
        name: currencyName,
        value: "",
        rate: +currencyRate.toFixed(3),
      });
    } else {
      setSecondBase({
        name: currencyName,
        value: secondCurrValue,
        rate: +currencyRate.toFixed(3),
      });
    }
  }

  function setBaseValueHandler(e) {
    var digits = e.target.value.replace(/\D/g, "");
    setBaseAmount({ ...baseAmount, value: digits });
    let currencyRate = "";
    if (secondBase.name !== "" && secondBase.name !== "Select Currencty") {
      currencyRate = currencyList.filter(
        (curr) => curr.name === secondBase.name
      )[0].rate;
      let secondCurrValue = +digits * +currencyRate;
      setSecondBase({ ...secondBase, value: secondCurrValue.toFixed(3) });
    }
    if (e.target.value === "") {
      setSecondBase({ ...secondBase, value: "" });
    }
  }

  return (
    <>
      <div className={styles.paymentsCurrencyConverter}>
        <div className={styles.paymentsCurrencyConverterTitle}>
          {t.payments.title}
        </div>
        <div className={styles.paymentsCurrencyConeverterBlock}>
          <div className={styles.paymentsCurrency}>
            <input
              placeholder="Konvertuoti"
              type="text"
              value={baseAmount.value}
              className={styles.inputConverter}
              onChange={(e) => setBaseValueHandler(e)}
            />

            <select
              className={styles.paymentsCurrencySelector}
              onInput={(e) => baseCurrencySelectHandler(e)}
              value={baseAmount.name}
            >
              {currencyList.map((currency, idx) => {
                return (
                  <option
                    disabled={currency.disabled}
                    value={currency.name}
                    key={idx}
                  >
                    {currency.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.paymentsCurrency}>
            <input
              placeholder="Į valiutą"
              className={styles.inputConverter}
              disabled
              value={secondBase.value}
            />

            <select
              className={styles.paymentsCurrencySelector}
              value={secondBase.name}
              onInput={(e) => secondBaseCurrencySelectHandler(e)}
            >
              {currencyList.map((currency, idx) => {
                return (
                  !currency.selectedAsBase && (
                    <option value={currency.name} key={idx}>
                      {currency.name}
                    </option>
                  )
                );
              })}
            </select>
          </div>
          <div className={styles.paymentsCurrencyOutputBlock}>
            <div className={styles.paymentCurrencyOutputValue}>
              {secondBase.name !== "" &&
                secondBase.name !== "Select Currencty" &&
                `1 ${baseAmount.name} = ${secondBase.rate} ${secondBase.name}`}
            </div>
            <div className={styles.paymentsCurrencyQuestion}>?</div>
          </div>
          <div className={styles.paymentsCurrencyDescription}>
            {t.payments.transferRate}
          </div>
          <div className="containedBtn">{t.payments.openAccount}</div>
        </div>
      </div>
    </>
  );
}
