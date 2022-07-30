const loadRequired = (label: string) => {
  const env = process.env[label]
  if (!env) {
    throw new Error(`Failed to load env variable ${label}`)
  }

  return env
}

export const JWT_KEY = loadRequired('JWT_KEY')
