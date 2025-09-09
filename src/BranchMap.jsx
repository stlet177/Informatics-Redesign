import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import marker1x from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix default icon paths in bundlers
L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker1x,
  shadowUrl: markerShadow,
})

function FlyTo({ active, branches, markersRef }) {
  const map = useMap()
  const entry = active ? branches[active] : null
  const target = entry?.coords

  useEffect(() => {
    if (!map) return
    if (target && typeof target.lat === 'number' && typeof target.lng === 'number') {
      map.flyTo([target.lat, target.lng], 17, { duration: 1.2, animate: true, easeLinearity: 0.25 })
      const m = markersRef?.current?.get(active)
      if (m && typeof m.openPopup === 'function') {
        setTimeout(() => m.openPopup(), 500)
      }
    } else {
      // Philippines center if none
      map.flyTo([12.8797, 121.7740], 6, { duration: 1.2 })
    }
  }, [map, target?.lat, target?.lng])
  return null
}

export default function BranchMap({ branches, active }) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const set = () => setIsMobile(mq.matches)
    set()
    mq.addEventListener?.('change', set)
    return () => mq.removeEventListener?.('change', set)
  }, [])
  const markersRef = React.useRef(new Map())
  const markers = useMemo(() => {
    return Object.entries(branches)
      .filter(([, v]) => v?.coords && typeof v.coords.lat === 'number' && typeof v.coords.lng === 'number')
      .map(([key, v]) => ({ key, ...v }))
  }, [branches])

  return (
    <MapContainer
      center={[12.8797, 121.7740]} // Philippines
      zoom={6}
      scrollWheelZoom={false}
      dragging={!isMobile}
      touchZoom={!isMobile}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo active={active} branches={branches} markersRef={markersRef} />
      {markers.map((m) => (
        <Marker key={m.key} position={[m.coords.lat, m.coords.lng]} ref={(ref) => {
          if (ref) markersRef.current.set(m.key, ref)
          else markersRef.current.delete(m.key)
        }}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <div style={{ fontWeight: 600 }}>{m.label}</div>
              {m.address ? <div style={{ fontSize: 12 }}>{m.address}</div> : null}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
