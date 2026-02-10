export interface VideoEventProps {
  videoTitle?: string
  videoPath: string
  duration?: number
  currentTime?: number
  percentComplete?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noop = (..._args: unknown[]) => {}

export function usePlausibleTracking() {
  return {
    trackEvent: noop,
    trackDownload: noop,
    trackSignup: noop,
    trackPurchase: noop,
    track404Error: noop,
    trackVideoPlay: noop,
    trackVideoPause: noop,
    trackVideoProgress: noop,
    trackVideoComplete: noop,
  }
}
