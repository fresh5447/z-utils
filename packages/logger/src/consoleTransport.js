export const consoleTransport = logEntry => {
  const log = console[logEntry.level] || console.log
  ;console::log(logEntry)
}