'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default function Heatmap() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current)
      const width = 300
      const height = 200
      const data = Array.from({ length: 20 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        value: Math.random(),
      }))

      const color = d3.scaleSequential(d3.interpolateYlOrRd)
        .domain([0, d3.max(data, d => d.value) as number])

      svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', 10)
        .attr('fill', d => color(d.value))
        .attr('opacity', 0.7)
    }
  }, [])

  return <svg ref={ref} width="100%" height="200" />
}

