import React, { useState, useEffect, useRef } from 'react';
import './Icon.css';
import { useSpring, animated, config, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import img from "../../images/logo192.png";

type IconProps = {
  url: string;
}

function Icon(props: IconProps) {

    useEffect(() => {
      const preventDefault = (e: Event) => e.preventDefault()
      document.addEventListener('gesturestart', preventDefault)
      document.addEventListener('gesturechange', preventDefault)
  
      return () => {
        document.removeEventListener('gesturestart', preventDefault)
        document.removeEventListener('gesturechange', preventDefault)
      }
    }, [])
  
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
      () => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        config: { mass: 5, tension: 350, friction: 40 },
      })
    )
  
    const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
    const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20
  
    const wheel = (y: number) => {
    const imgHeight = window.innerWidth * 0.3 - 20
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
  }
  
    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))
    const domTarget = useRef(null)
  
    useGesture(
      {
        // onDrag: ({ active, offset: [x, y] }) =>
        //   api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
        // onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
        onMove: ({ xy: [px, py], dragging }) =>
          !dragging &&
          api({
            rotateX: calcX(py, y.get()),
            rotateY: calcY(px, x.get()),
            scale: 1.1,
          }),
        // onHover: ({ hovering }) =>
        //   !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
        // onWheel: ({ event, offset: [, y] }) => {
        //   event.preventDefault()
        //   wheelApi.set({ wheelY: y })
        // },
      },
      { domTarget, eventOptions: { passive: false } }
    )
  
    return (
      <div className="container">
        <animated.div
          ref={domTarget}
          className="card"
          style={{
            transform: 'perspective(400px)',
            x,
            y,
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}>
            <animated.div className="Icon" style={{backgroundImage: `url(${props.url})`}} />
          {/* <animated.div style={{ transform: wheelY.to(wheel) }}>
            {imgs.map((img, i) => (
              <div key={i} style={{ backgroundImage: `url(${img})` }} />
            ))}
          </animated.div> */}
        </animated.div>
      </div>
    )
  }

  export default Icon;