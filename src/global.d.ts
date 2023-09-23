
// Allow typescript to see module css files
declare module '*.css'

// Allow typescript to see svg files
declare module '*.svg'

declare global {
  // Allow typescript to see the app version
  declare const APP_VERSION: string

  // Allow typescript to see the git branch
  declare const GIT_BRANCH: string
}
