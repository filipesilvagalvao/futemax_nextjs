"use client"
import { useEffect, useState } from "react"
import styles from "./HourLive.module.css"

type Props = {
  hour: string
}

const MATCH_DURATION_MS = 2 * 60 * 60 * 1000 // 2 horas

function parseHourToDate(hour: string) {
  const [hh, mm] = hour.split(":").map((v) => parseInt(v, 10))
  const d = new Date()
  d.setHours(isNaN(hh) ? 0 : hh, isNaN(mm) ? 0 : mm, 0, 0)
  return d
}

function HourLive({ hour }: Props) {
  const [status, setStatus] = useState<"scheduled" | "live" | "ended">("scheduled")

  useEffect(() => {
    function updateStatus() {
      const now = new Date()
      const start = parseHourToDate(hour)
      const end = new Date(start.getTime() + MATCH_DURATION_MS)

      if (now >= start && now <= end) setStatus("live")
      else if (now > end) setStatus("ended")
      else setStatus("scheduled")
    }

    updateStatus()
    const id = setInterval(updateStatus, 30 * 1000) // verifica a cada 30s
    return () => clearInterval(id)
  }, [hour])

  if (status === "live") {
    return <span className={`${styles.hour} live`}>AO VIVO</span>
  }

  if (status === "ended") {
    return <span className={`${styles.hour} ${styles.ended}`}>Encerrado</span>
  }

  return (
    <time dateTime={hour} className={styles.hour}>
      {hour}
    </time>
  )
}

export default HourLive