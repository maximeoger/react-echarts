'use strict'

export function getEchartsOption ({
  title = null,
  legend = null,
  grid = null,
  xAxis = null,
  yAxis = null,
  polar = null,
  radiusAxis = null,
  angleAxis = null,
  radar = null,
  dataZoom = null,
  visualMap = null,
  tooltip = null,
  axisPointer = null,
  toolbox = null,
  brush = null,
  geo = null,
  parallel = null,
  parallelAxis = null,
  singleAxis = null,
  timeline = null,
  graphic = null,
  calendar = null,
  dataset = null,
  aria = null,
  series = null,
  color = null,
  backgroundColor = null,
  textStyle = null,
  animation = true,
  animationThreshold = 2000,
  animationDuration = 1000,
  animationEasing = 'cubicOut',
  animationDelay = 0,
  animationDurationUpdate = 300,
  animationEasingUpdate = 'cubicOut',
  animationDelayUpdate = 0,
  blendMode = 'source-over',
  hoverLayerThreshold = 3000,
  useUTC = false,
  media = null
}) {
  return {
    title,
    legend,
    grid,
    xAxis,
    yAxis,
    polar,
    radiusAxis,
    angleAxis,
    radar,
    dataZoom,
    visualMap,
    tooltip,
    axisPointer,
    toolbox,
    brush,
    geo,
    parallel,
    parallelAxis,
    singleAxis,
    timeline,
    graphic,
    calendar,
    dataset,
    aria,
    series,
    color,
    backgroundColor,
    textStyle,
    animation,
    animationThreshold,
    animationDuration,
    animationEasing,
    animationDelay,
    animationDurationUpdate,
    animationEasingUpdate,
    animationDelayUpdate,
    blendMode,
    hoverLayerThreshold,
    useUTC,
    media
  }
}
