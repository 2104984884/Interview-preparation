import React, { useState, useEffect, useMemo } from 'react';
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
    let day = day.getDay();
    return `${obj[day]}${date.toLocaleTimeString()}`
  }, [date])
  return date;
}
function Clock() {
  //每隔一秒+1
  const [count] = useState(0);
  const date = useClock();
  useEffect(() => {
    setInterval(() => {
      count++
    }, 1000)
  }, [])
  return (
    <div>
      {date}
      <hr />
      {count}
    </div>
  )
}

export default Clock;