import Cookies from 'js-cookie'

const COOKIE_KEY = 'compendium_visitor'

export function getVisitorId(): string | undefined {
  return Cookies.get(COOKIE_KEY)
}

export function setVisitorId(id: string) {
  Cookies.set(COOKIE_KEY, id, { expires: 1 }) // 1 day
}

export function clearVisitorId() {
  Cookies.remove(COOKIE_KEY)
}