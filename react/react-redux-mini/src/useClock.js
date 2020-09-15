import React, { useState, useEffect, useMemo, useRef } from 'react';
let obj = {
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
  7: '星期天',
}
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  let dateStr = useMemo(() => {
    let day = date.getDay();
    return `${obj[day]}${date.toLocaleTimeString()}`
  }, [date])
  return dateStr;
}
function Clock() {
  //每隔一秒+1
  const [count, setCount] = useState(0);
  const date = useClock();
  const ref = useRef();
  ref.current = count
  useEffect(() => {
    let timer = setInterval(() => {
      // setCount(ref.current + 1)
      // setCount(count => count + 1)
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count])
  return (
    <div >
      {date}
      <hr />
      {count}
    </div>
  )
}

export default Clock;