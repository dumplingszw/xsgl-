const basePath = import.meta.env.BASE_URL || '/'

export const assetPath = (path) => {
  const cleanBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${cleanBase}${cleanPath}`
}
