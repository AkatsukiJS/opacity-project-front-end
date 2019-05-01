import fetch from 'node-fetch'
import qs from 'querystring'
import { useState, useEffect } from 'react'

const base = 'http://localhost:3001'

const get = (endpoint, options) => {
  const params = qs.stringify(options)
  return fetch(`${base}${endpoint}?${params}`)
}

/**
 * @async
 * @param {Promise<object>} request - Promise
 * @returns {Array<object>}
 * */
const izifetch = async request => {
  try {
    const response = await request
    return [null, await response.json()]
  } catch (e) {
    return [e.message, null]
  }
}

const getCategories = () => {
  const categories = get('/categories')
  return izifetch(categories)
}

const getCategory = ({ category, offset, limit, sortBy, orderBy }) => {
  const options = {
    category,
    offset,
    limit,
    sort_by: sortBy,
    order_by: orderBy
  }

  const request = get('/category', options)
  return izifetch(request)
}

const getInfo = () => {
  const info = get('/info')
  return izifetch(info)
}

export const useApi = request => {
  const [data, setData] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const [err, result] = await request()
      if (err) setError(err)
      else setData(result)
      setLoading(false)
    }

    fetchData()
  }, [])

  return {
    error,
    data,
    loading
  }
}

export const api = {
  getInfo,
  getCategory,
  getCategories
}
